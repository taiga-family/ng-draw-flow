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
    DragDropDirective,
} from '../../directives/drag-drop';
import {DfResizeObserver} from '../../directives/resize-observer';
import {dfPx} from '../../helpers';
import {type DfPoint} from '../../ng-draw-flow.interfaces';
import {DRAW_FLOW_ROOT_ELEMENT} from '../../ng-draw-flow.token';
import {
    clampByPanSize,
    clampScale,
    getContainerOffsets,
    moveBy,
    zoomAtPoint,
} from './pan-zoom.camera.math';
import {DF_PAN_ZOOM_INITIAL_SCALE} from './pan-zoom.const';
import {DF_PAN_ZOOM_OPTIONS, type DfPanZoomOptions} from './pan-zoom.options';
import {PanZoomService} from './pan-zoom.service';
import {
    type DfPanZoomGesture,
    type DfPanZoomPanGesture,
    type DfPanZoomZoomGesture,
} from './pan-zoom-gestures.interfaces';
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
            directive: DragDropDirective,
            outputs: ['dfDragDrop'],
        },
        {
            directive: DfResizeObserver,
            outputs: ['dfResizeObserver'],
        },
    ],
    host: {
        '(dfDragDrop)': 'onPan($event)',
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
    private readonly panZoomOptions: DfPanZoomOptions =
        inject<DfPanZoomOptions>(DF_PAN_ZOOM_OPTIONS);

    private readonly dragging = signal<boolean>(false);
    private readonly transitioned = signal<boolean>(true);

    private emittedZoom = Number.NaN;
    private renderScheduled = false;

    @Output()
    protected readonly scale = new EventEmitter<number>();

    protected readonly zoomAnimationDuration = this.panZoomOptions.zoomAnimationDuration;
    protected readonly cursor = computed(() =>
        this.dragging() ? 'grabbing' : 'initial',
    );

    protected readonly wrapperTransform = computed(() => {
        const {x, y, zoom} = this.panZoomService.camera();

        return `translate(-50%, -50%) translate(${dfPx(x)}, ${dfPx(y)}) scale(${zoom}) rotate(0deg)`;
    });

    protected readonly panZoomContainerTransform = signal<string>('');
    protected readonly transitionDuration = computed(() =>
        this.transitioned() ? `${this.zoomAnimationDuration}ms` : '0s',
    );

    constructor() {
        this.watchGestures();
    }

    public ngAfterViewInit(): void {
        this.syncContainerOffsets();
        animationFrameScheduler.schedule(() => this.syncContainerOffsets());
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
        if (this.panZoomService.isDisabled()) {
            return;
        }

        if (stage === DfDragDropStage.Move) {
            this.dragging.set(true);
            this.transitioned.set(false);
            this.panZoomService.setCamera(
                clampByPanSize(
                    moveBy(
                        this.panZoomService.snapshot(),
                        distance.deltaX,
                        distance.deltaY,
                    ),
                    this.panZoomOptions.panSize,
                ),
            );
        } else {
            this.dragging.set(false);
            this.transitioned.set(true);
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
        const nextCamera = clampByPanSize({...camera, zoom}, this.panZoomOptions.panSize);

        this.panZoomService.setCamera(nextCamera);
        this.emitScale(nextCamera.zoom);

        timer(this.zoomAnimationDuration)
            .pipe(take(1), takeUntilDestroyed(this.destroyRef))
            .subscribe(() => this.transitioned.set(false));
    }

    private watchGestures(): void {
        this.ngZone.runOutsideAngular(() => {
            this.panZoomGestures
                .streamFor(this.el.nativeElement)
                .pipe(takeUntilDestroyed(this.destroyRef))
                .subscribe((gesture) => this.processGesture(gesture));
        });
    }

    private processGesture(gesture: DfPanZoomGesture): void {
        if (gesture.type === 'pan') {
            this.processPanGesture(gesture);
        } else {
            this.processZoomGesture(gesture);
        }
    }

    private processPanGesture(gesture: DfPanZoomPanGesture): void {
        if (this.panZoomService.isDisabled()) {
            return;
        }

        this.transitioned.set(false);
        this.panZoomService.setCamera(
            clampByPanSize(
                moveBy(this.panZoomService.snapshot(), gesture.deltaX, gesture.deltaY),
                this.panZoomOptions.panSize,
            ),
        );
        this.requestRender();
    }

    private processZoomGesture(gesture: DfPanZoomZoomGesture): void {
        if (!gesture.deltaScale) {
            return;
        }

        const viewportRect = this.el.nativeElement.getBoundingClientRect();
        const point: DfPoint = {
            // Camera coordinates are center-based; normalize pointer to viewport center.
            x: gesture.clientX - viewportRect.x - viewportRect.width / 2,
            y: gesture.clientY - viewportRect.y - viewportRect.height / 2,
        };
        const camera = this.panZoomService.snapshot();
        const nextCamera = clampByPanSize(
            zoomAtPoint(
                camera,
                point,
                camera.zoom + gesture.deltaScale,
                this.panZoomOptions,
            ),
            this.panZoomOptions.panSize,
        );

        this.transitioned.set(false);
        this.panZoomService.setCamera(nextCamera);
        this.emitScale(nextCamera.zoom);
        this.requestRender();
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

    private syncContainerOffsets(): void {
        const rootSize = {
            width: this.drawFlowElement.offsetWidth,
            height: this.drawFlowElement.offsetHeight,
        };

        if (!rootSize.width || !rootSize.height) {
            return;
        }

        const offsets = getContainerOffsets(rootSize, {
            leftPosition: this.panZoomOptions.leftPosition,
            topPosition: this.panZoomOptions.topPosition,
        });

        this.panZoomService.patchCamera({
            offsetX: offsets.offsetX,
            offsetY: offsets.offsetY,
        });

        this.panZoomContainerTransform.set(
            `translateX(${offsets.translateX}px)translateY(${offsets.translateY}px)`,
        );
        this.requestRender();
    }
}
