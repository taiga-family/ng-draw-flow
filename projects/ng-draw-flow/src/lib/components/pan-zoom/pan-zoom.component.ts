import {isPlatformBrowser} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
    ElementRef,
    inject,
    NgZone,
    type OnDestroy,
    type OnInit,
    output,
    PLATFORM_ID,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {WaResizeObserver} from '@ng-web-apis/resize-observer';
import {animationFrameScheduler, type Subscription} from 'rxjs';

import {DragDropService} from '../../directives/drag-drop';
import {type DfPoint} from '../../ng-draw-flow.interfaces';
import {DRAW_FLOW_ROOT_ELEMENT} from '../../ng-draw-flow.token';
import {PanZoomControllerService} from './pan-zoom.controller.service';
import {DF_PAN_ZOOM_OPTIONS, type DfPanZoomOptions} from './pan-zoom.options';
import {PanZoomBackgroundCanvasComponent} from './pan-zoom-background-canvas.component';
import {type DfPanZoomGesture} from './pan-zoom-gestures.interfaces';
import {PanZoomGesturesService} from './pan-zoom-gestures.service';

@Component({
    standalone: true,
    selector: 'df-pan-zoom',
    imports: [PanZoomBackgroundCanvasComponent],
    templateUrl: './pan-zoom.component.html',
    styleUrl: './pan-zoom.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [PanZoomControllerService, PanZoomGesturesService],
    hostDirectives: [
        {
            directive: WaResizeObserver,
            outputs: ['waResizeObserver'],
        },
    ],
    host: {'(waResizeObserver)': 'onBoardResize($event)'},
})
export class PanZoomComponent implements OnInit, OnDestroy {
    private readonly cdr = inject(ChangeDetectorRef);
    private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
    private readonly drawFlowElement = inject<HTMLElement>(DRAW_FLOW_ROOT_ELEMENT);
    private readonly destroyRef = inject(DestroyRef);
    private readonly ngZone = inject(NgZone);
    private readonly platformId = inject(PLATFORM_ID);
    private readonly panZoomOptions = inject<DfPanZoomOptions>(DF_PAN_ZOOM_OPTIONS);
    private readonly panZoomController = inject(PanZoomControllerService);
    private readonly panZoomGestures = inject(PanZoomGesturesService);
    private readonly dragDropService = inject(DragDropService);
    private renderFrameSubscription: Subscription | null = null;
    private containerOffsetSyncSubscription: Subscription | null = null;

    public readonly scale = output<number>();

    protected readonly cursor = this.panZoomController.cursor;
    protected readonly panTransform = this.panZoomController.panTransform;
    protected readonly transitionDuration = this.panZoomController.transitionDuration;

    constructor() {
        this.watchController();
        this.watchGestures();
    }

    public ngOnInit(): void {
        this.syncContainerOffsets();
    }

    public ngOnDestroy(): void {
        this.cancelScheduledRender();
        this.cancelScheduledContainerOffsetSync();
    }

    public resetPanzoom(): void {
        this.panZoomController.resetPanzoom();
    }

    public setPosition(position?: Partial<DfPoint> & {zoom?: number}): void {
        this.panZoomController.setPosition(position);
    }

    public setScale(scale: number): void {
        this.panZoomController.setScale(scale);
    }

    public zoomIn(): void {
        this.panZoomController.zoomIn();
    }

    public zoomOut(): void {
        this.panZoomController.zoomOut();
    }

    protected get backgroundCanvasVisible(): boolean {
        return this.panZoomOptions.backgroundCanvas.visible;
    }

    protected onPan(event: Parameters<PanZoomControllerService['handlePan']>[0]): void {
        this.panZoomController.handlePan(event);
    }

    protected onBoardResize(entries: readonly ResizeObserverEntry[]): void {
        if (!entries.length) {
            return;
        }

        this.requestContainerOffsetSync();
    }

    private watchController(): void {
        this.panZoomController.scaleChanges$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((scale) => this.scale.emit(scale));

        this.panZoomController.renderRequests$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((mode) => {
                if (mode === 'sync') {
                    this.renderNow();
                } else {
                    this.requestRender();
                }
            });
    }

    private watchGestures(): void {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }

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
        if (gesture.type === 'pan') {
            this.panZoomController.queueGesture(gesture);

            return;
        }

        const viewportRect = this.el.nativeElement.getBoundingClientRect();
        const zeroPoint = this.panZoomController.viewportZeroPoint();
        const point: DfPoint = {
            x: gesture.clientX - viewportRect.x - zeroPoint.x,
            y: gesture.clientY - viewportRect.y - zeroPoint.y,
        };

        this.panZoomController.queueGesture({
            type: 'zoom',
            point,
            deltaScale: gesture.deltaScale,
        });
    }

    private requestRender(): void {
        if (this.renderFrameSubscription) {
            return;
        }

        this.renderFrameSubscription = animationFrameScheduler.schedule(() => {
            this.renderFrameSubscription = null;
            this.cdr.detectChanges();
        });
    }

    private renderNow(): void {
        this.cancelScheduledRender();
        this.cdr.detectChanges();
    }

    private cancelScheduledRender(): void {
        this.renderFrameSubscription?.unsubscribe();
        this.renderFrameSubscription = null;
    }

    private requestContainerOffsetSync(): void {
        if (this.containerOffsetSyncSubscription) {
            return;
        }

        this.containerOffsetSyncSubscription = animationFrameScheduler.schedule(() => {
            this.containerOffsetSyncSubscription = null;
            this.syncContainerOffsets();
        });
    }

    private cancelScheduledContainerOffsetSync(): void {
        this.containerOffsetSyncSubscription?.unsubscribe();
        this.containerOffsetSyncSubscription = null;
    }

    private syncContainerOffsets(): void {
        const rootSize = {
            width: this.drawFlowElement.offsetWidth,
            height: this.drawFlowElement.offsetHeight,
        };

        if (!rootSize.width || !rootSize.height) {
            return;
        }

        this.panZoomController.syncContainerOffsets(rootSize);
    }
}
