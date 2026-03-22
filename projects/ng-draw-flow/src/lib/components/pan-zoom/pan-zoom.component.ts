import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    computed,
    DestroyRef,
    ElementRef,
    EventEmitter,
    inject,
    NgZone,
    Output,
    signal,
} from '@angular/core';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {
    animationFrameScheduler,
    BehaviorSubject,
    combineLatest,
    fromEvent,
    map,
    merge,
    type Observable,
    startWith,
    Subject,
    take,
    tap,
    throttleTime,
    timer,
} from 'rxjs';

import {INITIAL_COORDINATES} from '../../consts';
import {
    type DfDragDrop,
    DfDragDropStage,
    DragDropService,
} from '../../directives/drag-drop';
import {DfResizeObserver} from '../../directives/resize-observer';
import {type DfPoint} from '../../ng-draw-flow.interfaces';
import {DRAW_FLOW_ROOT_ELEMENT} from '../../ng-draw-flow.token';
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
import {type DfPanZoomGesture} from './pan-zoom-gestures.interfaces';
import {PanZoomGesturesService} from './pan-zoom-gestures.service';

@Component({
    standalone: true,
    selector: 'df-pan-zoom',
    imports: [DfResizeObserver],
    templateUrl: './pan-zoom.component.html',
    styleUrls: ['./pan-zoom.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [PanZoomGesturesService],
    hostDirectives: [
        {
            directive: DfResizeObserver,
            outputs: ['dfResizeObserver'],
        },
    ],
    host: {
        '(dfResizeObserver)': 'onBoardResize($event)',
    },
})
export class PanZoomComponent implements AfterViewInit {
    private readonly cdr = inject(ChangeDetectorRef);
    private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
    private readonly drawFlowElement = inject<HTMLElement>(DRAW_FLOW_ROOT_ELEMENT);
    private readonly destroyRef = inject(DestroyRef);
    private readonly ngZone = inject(NgZone);
    private readonly panZoomService = inject(PanZoomService);
    private readonly panZoomGestures = inject(PanZoomGesturesService);
    private readonly dragDropService = inject(DragDropService);
    private readonly panZoomOptions: DfPanZoomOptions =
        inject<DfPanZoomOptions>(DF_PAN_ZOOM_OPTIONS);

    private readonly dragging = signal<boolean>(false);
    private readonly transitioned = signal<boolean>(true);
    private readonly viewportSize = signal<{width: number; height: number}>({
        width: 0,
        height: 0,
    });

    private readonly layoutOffset = signal<{x: number; y: number}>({x: 0, y: 0});

    private emittedZoom = Number.NaN;
    private renderScheduled = false;
    private flushScheduled = false;
    private readonly pendingGestures: DfPanZoomGesture[] = [];

    @Output()
    protected readonly scale = new EventEmitter<number>();

    protected readonly zoomAnimationDuration = this.panZoomOptions.zoomAnimationDuration;
    protected readonly cursor = computed(() =>
        this.dragging() ? 'grabbing' : 'initial',
    );

    protected readonly panTransform = computed(() => {
        const {x, y, zoom} = this.panZoomService.camera();
        const {x: layoutX, y: layoutY} = this.layoutOffset();
        const translateX = x + layoutX * zoom;
        const translateY = y + layoutY * zoom;

        return `translate(-50%, -50%) matrix(${zoom}, 0, 0, ${zoom}, ${translateX}, ${translateY})`;
    });

    protected readonly transitionDuration = computed(() =>
        this.transitioned() ? `${this.zoomAnimationDuration}ms` : '0s',
    );

    constructor() {
        this.watchGestures();
    }

    public ngAfterViewInit(): void {
        this.syncContainerOffsets();
    }

    public resetPanzoom(): void {
        const camera = this.panZoomService.snapshot();
        const nextCamera = {
            ...camera,
            ...INITIAL_COORDINATES,
            zoom: DF_PAN_ZOOM_INITIAL_SCALE,
        };

        this.panZoomService.setCamera(nextCamera);
        this.emitScale(nextCamera.zoom);
        this.requestRender();
    }

    public setPosition(position?: DfPoint & {zoom?: number}): void {
        if (position?.zoom) {
            this.zoom$.next(position.zoom || this.zoom());
        }

        this.coordinates$.next({
            ...this.coordinates(),
            ...position,
        });
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

    protected onPan({distance, stage}: DfDragDrop): void {
        if (stage === DfDragDropStage.Move) {
            if (this.panZoomService.isDisabled()) {
                return;
            }

            this.dragging.set(true);
            this.transitioned.set(false);
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
        } else {
            this.dragging.set(false);
            this.transitioned.set(true);
            this.requestRender();
        }
    }

    protected onBoardResize(entries: readonly ResizeObserverEntry[]): void {
        if (!entries.length) {
            return;
        }

        this.syncContainerOffsets();
    }

    private setZoom(zoom: number): void {
        const camera = this.panZoomService.snapshot();

        this.transitioned.set(true);
        const nextCamera = this.clampCamera({...camera, zoom});

        this.panZoomService.setCamera(nextCamera);
        this.emitScale(nextCamera.zoom);
        this.requestRender();

        timer(this.zoomAnimationDuration)
            .pipe(take(1), takeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
                this.transitioned.set(false);
                this.requestRender();
            });
    }

    private watchGestures(): void {
        this.ngZone.runOutsideAngular(() => {
            this.panZoomGestures
                .streamFor(this.el.nativeElement)
                .pipe(takeUntilDestroyed(this.destroyRef))
                .subscribe((gesture) => this.processGesture(gesture));

            this.dragDropService
                .streamFor(this.el.nativeElement)
                .pipe(takeUntilDestroyed(this.destroyRef))
                .subscribe((event) => this.onPan(event));
        });
    }

    private processGesture(gesture: DfPanZoomGesture): void {
        if (gesture.type === 'pan' && this.panZoomService.isDisabled()) {
            return;
        }

        this.transitioned.set(false);
        this.pendingGestures.push(gesture);
        this.scheduleGestureFlush();
    }

    private scheduleGestureFlush(): void {
        if (this.flushScheduled) {
            return;
        }

        this.flushScheduled = true;
        animationFrameScheduler.schedule(() => this.flushGestures());
    }

    private flushGestures(): void {
        this.flushScheduled = false;

        if (!this.pendingGestures.length) {
            return;
        }

        const queue = this.pendingGestures.splice(0);
        const camera = this.panZoomService.snapshot();
        let nextCamera = camera;
        let viewportRect: DOMRect | null = null;
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

            if (!viewportRect) {
                viewportRect = this.el.nativeElement.getBoundingClientRect();
            }

            const point: DfPoint = {
                // Camera coordinates are center-based; normalize pointer to viewport center.
                x: gesture.clientX - viewportRect.x - viewportRect.width / 2,
                y: gesture.clientY - viewportRect.y - viewportRect.height / 2,
            };
            const previousZoom = nextCamera.zoom;

            nextCamera = this.clampCamera(
                zoomAtPoint(
                    nextCamera,
                    point,
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

    private emitScale(zoom: number): void {
        if (zoom === this.emittedZoom) {
            return;
        }

        this.scale.emit(Math.round(zoom * 100));
        this.emittedZoom = zoom;
    }

    private requestRender(): void {
        if (this.renderScheduled) {
            return;
        }

        this.renderScheduled = true;
        animationFrameScheduler.schedule(() => {
            this.renderScheduled = false;
            this.cdr.detectChanges();
        });
    }

    private renderNow(): void {
        this.cdr.detectChanges();
    }

    private syncContainerOffsets(): void {
        const rootSize = {
            width: this.drawFlowElement.offsetWidth,
            height: this.drawFlowElement.offsetHeight,
        };

        if (!rootSize.width || !rootSize.height) {
            return;
        }

        this.viewportSize.set(rootSize);

        const offsets = getContainerOffsets(rootSize, {
            leftPosition: this.panZoomOptions.leftPosition,
            topPosition: this.panZoomOptions.topPosition,
        });

        this.panZoomService.patchCamera({
            offsetX: offsets.offsetX,
            offsetY: offsets.offsetY,
        });
        this.layoutOffset.set({x: offsets.translateX, y: offsets.translateY});
        this.requestRender();
    }

    private clampCamera(camera: DfPanzoomModel): DfPanzoomModel {
        const viewportSize = this.viewportSize();

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
