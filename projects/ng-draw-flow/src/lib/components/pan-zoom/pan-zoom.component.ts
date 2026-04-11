import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
    ElementRef,
    EventEmitter,
    inject,
    NgZone,
    type OnInit,
    Output,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {animationFrameScheduler} from 'rxjs';

import {DragDropService} from '../../directives/drag-drop';
import {DfResizeObserver} from '../../directives/resize-observer';
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
    imports: [DfResizeObserver, NgIf, PanZoomBackgroundCanvasComponent],
    templateUrl: './pan-zoom.component.html',
    styleUrls: ['./pan-zoom.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [PanZoomControllerService, PanZoomGesturesService],
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
export class PanZoomComponent implements OnInit {
    private readonly cdr = inject(ChangeDetectorRef);
    private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
    private readonly drawFlowElement = inject<HTMLElement>(DRAW_FLOW_ROOT_ELEMENT);
    private readonly destroyRef = inject(DestroyRef);
    private readonly ngZone = inject(NgZone);
    private readonly panZoomOptions = inject<DfPanZoomOptions>(DF_PAN_ZOOM_OPTIONS);
    private readonly panZoomController = inject(PanZoomControllerService);
    private readonly panZoomGestures = inject(PanZoomGesturesService);
    private readonly dragDropService = inject(DragDropService);
    private renderScheduled = false;

    @Output()
    public readonly scale = new EventEmitter<number>();

    protected readonly cursor = this.panZoomController.cursor;
    protected readonly layoutOffset = this.panZoomController.layoutOffset;
    protected readonly panTransform = this.panZoomController.panTransform;
    protected readonly transitionDuration = this.panZoomController.transitionDuration;

    constructor() {
        this.watchController();
        this.watchGestures();
    }

    public ngOnInit(): void {
        this.syncContainerOffsets();
    }

    public resetPanzoom(): void {
        this.panZoomController.resetPanzoom();
    }

    public setPosition(position?: DfPoint & {zoom?: number}): void {
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
        return this.panZoomOptions.backgroundCanvas?.visible ?? true;
    }

    protected onPan(event: Parameters<PanZoomControllerService['handlePan']>[0]): void {
        this.panZoomController.handlePan(event);
    }

    protected onBoardResize(entries: readonly ResizeObserverEntry[]): void {
        if (!entries.length) {
            return;
        }

        this.syncContainerOffsets();
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

        this.panZoomController.syncContainerOffsets(rootSize);
    }
}
