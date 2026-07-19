import {computed, DestroyRef, inject, Injectable, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {animationFrameScheduler, Subject, take, timer} from 'rxjs';

import {INITIAL_COORDINATES} from '../../consts';
import {type DfDragDrop, DfDragDropStage} from '../../directives/drag-drop';
import {type DfPoint} from '../../ng-draw-flow.interfaces';
import {
    clampByUsableRect,
    clampScale,
    getContainerOffsets,
    getViewportZeroPoint,
    moveBy,
    zoomAtPoint,
} from './pan-zoom.camera.math';
import {DF_PAN_ZOOM_INITIAL_SCALE} from './pan-zoom.const';
import {type DfPanzoomModel} from './pan-zoom.interfaces';
import {DF_PAN_ZOOM_OPTIONS, type DfPanZoomOptions} from './pan-zoom.options';
import {PanZoomService} from './pan-zoom.service';

export type DfPanZoomRenderMode = 'async' | 'sync';

export interface DfPanZoomViewportPanGesture {
    readonly type: 'pan';
    readonly deltaX: number;
    readonly deltaY: number;
}

export interface DfPanZoomViewportZoomGesture {
    readonly type: 'zoom';
    readonly point: DfPoint;
    readonly deltaScale: number;
}

export type DfPanZoomViewportGesture =
    | DfPanZoomViewportPanGesture
    | DfPanZoomViewportZoomGesture;

@Injectable()
export class PanZoomControllerService {
    private readonly destroyRef = inject(DestroyRef);
    private readonly panZoomService = inject(PanZoomService);
    private readonly panZoomOptions = inject<DfPanZoomOptions>(DF_PAN_ZOOM_OPTIONS);
    private readonly draggingSignal = signal<boolean>(false);
    private readonly transitionedSignal = signal<boolean>(true);

    private readonly viewportSizeSignal = signal<{width: number; height: number}>({
        width: 0,
        height: 0,
    });

    private readonly viewportZeroPointSignal = signal<DfPoint>(INITIAL_COORDINATES);
    private readonly layoutOffsetSignal = signal<DfPoint>(INITIAL_COORDINATES);
    private readonly renderRequestsSubject = new Subject<DfPanZoomRenderMode>();
    private readonly scaleChangesSubject = new Subject<number>();
    private readonly pendingGestures: DfPanZoomViewportGesture[] = [];
    private emittedZoom = Number.NaN;
    private flushScheduled = false;
    public readonly dragging = this.draggingSignal.asReadonly();
    public readonly transitioned = this.transitionedSignal.asReadonly();
    public readonly viewportSize = this.viewportSizeSignal.asReadonly();
    public readonly viewportZeroPoint = this.viewportZeroPointSignal.asReadonly();
    public readonly layoutOffset = this.layoutOffsetSignal.asReadonly();
    public readonly renderRequests$ = this.renderRequestsSubject.asObservable();
    public readonly scaleChanges$ = this.scaleChangesSubject.asObservable();

    public readonly cursor = computed(() =>
        this.draggingSignal() ? 'grabbing' : 'initial',
    );

    public readonly panTransform = computed(() => {
        const {x, y, zoom} = this.panZoomService.camera();
        const {x: zeroPointX, y: zeroPointY} = this.viewportZeroPointSignal();
        const translateX = x + zeroPointX;
        const translateY = y + zeroPointY;

        return `translate3d(${translateX}px, ${translateY}px, 0) scale(${zoom})`;
    });

    public readonly transitionDuration = computed(() =>
        this.transitionedSignal()
            ? `${this.panZoomOptions.zoomAnimationDuration}ms`
            : '0s',
    );

    public resetPanzoom(): void {
        this.setPosition({
            ...INITIAL_COORDINATES,
            zoom: DF_PAN_ZOOM_INITIAL_SCALE,
        });
    }

    public setPosition(position?: Partial<DfPoint> & {zoom?: number}): void {
        const camera = this.panZoomService.snapshot();
        const nextCamera = {
            ...camera,
            ...position,
            zoom: position?.zoom || camera.zoom,
        };

        this.panZoomService.setCamera(nextCamera);

        if (position?.zoom) {
            this.emitScale(nextCamera.zoom);
        }

        this.requestRender();
    }

    public setScale(scale: number): void {
        const clampedScale = clampScale(
            scale,
            this.panZoomOptions.minZoom,
            this.panZoomOptions.maxZoom,
        );

        this.setZoom(clampedScale);
    }

    public zoomIn(): void {
        const {zoomStep, maxZoom} = this.panZoomOptions;
        const zoom = this.panZoomService.snapshot().zoom + zoomStep;

        this.setZoom(zoom <= maxZoom ? zoom : maxZoom);
    }

    public zoomOut(): void {
        const {zoomStep, minZoom} = this.panZoomOptions;
        const zoom = this.panZoomService.snapshot().zoom - zoomStep;

        this.setZoom(zoom >= minZoom ? zoom : minZoom);
    }

    public handlePan({distance, stage}: DfDragDrop): void {
        if (stage === DfDragDropStage.Move) {
            if (this.panZoomService.isDisabled()) {
                return;
            }

            this.draggingSignal.set(true);
            this.transitionedSignal.set(false);
            this.panZoomService.setCamera(
                this.clampCamera(
                    moveBy(
                        this.panZoomService.snapshot(),
                        distance.deltaX,
                        distance.deltaY,
                    ),
                ),
            );

            this.renderNow();

            return;
        }

        this.draggingSignal.set(false);
        this.transitionedSignal.set(true);
        this.requestRender();
    }

    public syncContainerOffsets(rootSize: {width: number; height: number}): void {
        if (!rootSize.width || !rootSize.height) {
            return;
        }

        this.viewportSizeSignal.set(rootSize);
        this.viewportZeroPointSignal.set(
            getViewportZeroPoint(rootSize, {
                leftPosition: this.panZoomOptions.leftPosition,
                topPosition: this.panZoomOptions.topPosition,
            }),
        );

        const offsets = getContainerOffsets(rootSize, {
            leftPosition: this.panZoomOptions.leftPosition,
            topPosition: this.panZoomOptions.topPosition,
        });

        this.panZoomService.patchCamera({
            offsetX: offsets.offsetX,
            offsetY: offsets.offsetY,
        });
        this.layoutOffsetSignal.set({
            x: offsets.translateX,
            y: offsets.translateY,
        });
        this.requestRender();
    }

    public queueGesture(gesture: DfPanZoomViewportGesture): void {
        if (gesture.type === 'pan' && this.panZoomService.isDisabled()) {
            return;
        }

        this.transitionedSignal.set(false);
        this.pendingGestures.push(gesture);
        this.scheduleGestureFlush();
    }

    public flushGestures(): void {
        this.flushScheduled = false;

        if (!this.pendingGestures.length) {
            return;
        }

        const queue = this.pendingGestures.splice(0);
        const camera = this.panZoomService.snapshot();
        let nextCamera = camera;
        let zoomChanged = false;

        for (const gesture of queue) {
            if (gesture.type === 'pan') {
                nextCamera = this.clampCamera(
                    moveBy(nextCamera, gesture.deltaX, gesture.deltaY),
                );
                continue;
            }

            if (!gesture.deltaScale) {
                continue;
            }

            const previousZoom = nextCamera.zoom;

            nextCamera = this.clampCamera(
                zoomAtPoint(
                    nextCamera,
                    gesture.point,
                    nextCamera.zoom + gesture.deltaScale,
                    this.panZoomOptions,
                ),
            );

            if (nextCamera.zoom !== previousZoom) {
                zoomChanged = true;
            }
        }

        if (
            nextCamera.x !== camera.x ||
            nextCamera.y !== camera.y ||
            nextCamera.zoom !== camera.zoom
        ) {
            this.panZoomService.setCamera(nextCamera);
        }

        if (zoomChanged) {
            this.emitScale(nextCamera.zoom);
        }

        this.renderNow();
    }

    private scheduleGestureFlush(): void {
        if (this.flushScheduled) {
            return;
        }

        this.flushScheduled = true;
        animationFrameScheduler.schedule(() => this.flushGestures());
    }

    private setZoom(zoom: number): void {
        const camera = this.panZoomService.snapshot();

        this.transitionedSignal.set(true);
        const nextCamera = this.clampCamera({...camera, zoom});

        this.panZoomService.setCamera(nextCamera);
        this.emitScale(nextCamera.zoom);
        this.requestRender();

        timer(this.panZoomOptions.zoomAnimationDuration)
            .pipe(take(1), takeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
                this.transitionedSignal.set(false);
                this.requestRender();
            });
    }

    private emitScale(zoom: number): void {
        if (zoom === this.emittedZoom) {
            return;
        }

        this.scaleChangesSubject.next(Math.round(zoom * 100));
        this.emittedZoom = zoom;
    }

    private requestRender(): void {
        this.renderRequestsSubject.next('async');
    }

    private renderNow(): void {
        this.renderRequestsSubject.next('sync');
    }

    private clampCamera(camera: DfPanzoomModel): DfPanzoomModel {
        const viewportSize = this.viewportSizeSignal();

        if (!viewportSize.width || !viewportSize.height) {
            return camera;
        }

        const zeroPoint = getViewportZeroPoint(viewportSize, {
            leftPosition: this.panZoomOptions.leftPosition,
            topPosition: this.panZoomOptions.topPosition,
        });

        return clampByUsableRect(
            camera,
            this.panZoomService.usableRect(),
            viewportSize,
            zeroPoint,
        );
    }
}
