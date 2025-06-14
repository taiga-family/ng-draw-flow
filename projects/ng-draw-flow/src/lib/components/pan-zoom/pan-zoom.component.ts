import {AsyncPipe} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    inject,
    Output,
} from '@angular/core';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import type {Observable} from 'rxjs';
import {
    animationFrameScheduler,
    BehaviorSubject,
    combineLatest,
    fromEvent,
    map,
    merge,
    startWith,
    Subject,
    take,
    tap,
    throttleTime,
    timer,
} from 'rxjs';

import {DF_FALSE_HANDLER, INITIAL_COORDINATES} from '../../consts';
import type {DfDragDrop} from '../../directives/drag-drop';
import {DfDragDropStage, DragDropDirective} from '../../directives/drag-drop';
import {dfClamp, dfPx} from '../../helpers';
import type {DfPoint} from '../../ng-draw-flow.interfaces';
import {DRAW_FLOW_ROOT_ELEMENT} from '../../ng-draw-flow.token';
import {DF_PAN_ZOOM_INITIAL_SCALE} from './pan-zoom.const';
import type {DfPanZoomOptions} from './pan-zoom.options';
import {DF_PAN_ZOOM_OPTIONS} from './pan-zoom.options';
import {PanZoomService} from './pan-zoom.service';
import {ZoomDirective} from './zoom';
import type {DfZoom} from './zoom/zoom.interfaces';

@Component({
    standalone: true,
    selector: 'df-pan-zoom',
    imports: [AsyncPipe, DragDropDirective, ZoomDirective],
    templateUrl: './pan-zoom.component.html',
    styleUrls: ['./pan-zoom.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanZoomComponent {
    private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
    private readonly panZoomService = inject(PanZoomService);
    private readonly drawFlowRootElement = inject<HTMLElement>(DRAW_FLOW_ROOT_ELEMENT);
    private readonly panZoomOptions: DfPanZoomOptions =
        inject<DfPanZoomOptions>(DF_PAN_ZOOM_OPTIONS);

    private readonly resizeObserver$ = inject(ResizeObserverService);

    private readonly zoom$ = new BehaviorSubject<number>(DF_PAN_ZOOM_INITIAL_SCALE);
    private readonly coordinates$ = new BehaviorSubject<DfPoint>(INITIAL_COORDINATES);
    private readonly manualZoomAnimation$ = new Subject<boolean>();
    private readonly dragStage$ = new Subject<DfDragDropStage>();

    @Output()
    protected readonly scale = new EventEmitter<number>();

    protected readonly zoomAnimationDuration = this.panZoomOptions.zoomAnimationDuration;
    protected readonly cursor$ = this.dragStage$.pipe(
        map((stage) => (stage === DfDragDropStage.Move ? 'grabbing' : 'initial')),
        startWith('initial'),
    );

    protected readonly transitioned$ = merge(
        this.manualZoomAnimation$,
        this.dragStage$.pipe(
            map((stage: DfDragDropStage) => stage !== DfDragDropStage.Move),
        ),
        fromEvent(this.el.nativeElement, 'pointermove', {passive: true}).pipe(
            throttleTime(16, animationFrameScheduler, {leading: true, trailing: true}),
            map(DF_FALSE_HANDLER),
        ),
        fromEvent(this.el.nativeElement, 'wheel', {passive: true}).pipe(
            throttleTime(16, animationFrameScheduler, {leading: true, trailing: true}),
            map(DF_FALSE_HANDLER),
        ),
    );

    private readonly alignmentOffset$: Observable<DfPoint> = this.resizeObserver$.pipe(
        map((entries: readonly ResizeObserverEntry[]) => entries[0]!.contentRect),
        tap(() => this.resetPosition()),
        map((rootSize: DOMRectReadOnly) => {
            const {leftPosition: panZoomLeftPosition, topPosition: panZoomTopPosition} =
                this.panZoomOptions;

            let x = 0;
            let y = 0;

            if (panZoomLeftPosition || panZoomLeftPosition === 0) {
                const offset = (rootSize.width / 2) * -1 + panZoomLeftPosition;

                this.panZoomService.panzoomModel.offsetX = offset * -1;

                x = offset;
            } else {
                this.panZoomService.panzoomModel.offsetX = 0;
            }

            if (panZoomTopPosition || panZoomTopPosition === 0) {
                const offset = (rootSize.height / 2) * -1 + panZoomTopPosition;

                this.panZoomService.panzoomModel.offsetY = offset * -1;

                y = offset;
            } else {
                this.panZoomService.panzoomModel.offsetY = 0;
            }

            return {x, y};
        }),
        startWith(INITIAL_COORDINATES),
    );

    protected readonly wrapperTransform$ = combineLatest([
        this.coordinates$.pipe(
            tap(({x, y}: DfPoint) => {
                this.panZoomService.panzoomModel.x = x;
                this.panZoomService.panzoomModel.y = y;
            }),
        ),
        this.zoom$.pipe(
            tap((zoom: number) => {
                this.scale.emit(Math.round(zoom * 100));
                this.panZoomService.panzoomModel.zoom = zoom;
            }),
        ),
        this.alignmentOffset$,
    ]).pipe(
        map(
            ([{x, y}, zoom, {x: offsetX, y: offsetY}]) =>
                `translate(${dfPx(x + offsetX)}, ${dfPx(y + offsetY)}) scale(${zoom}) rotate(0deg)`,
        ),
    );

    protected onPan({distance, stage}: DfDragDrop): void {
        if (this.panZoomService.panzoomDisabled) {
            return;
        }

        this.dragStage$.next(stage);
        this.coordinates$.next(
            this.getGuardedCoordinates(
                this.coordinates$.value.x + distance.deltaX,
                this.coordinates$.value.y + distance.deltaY,
            ),
        );
    }

    protected onWheel(event: WheelEvent): void {
        event.preventDefault();

        if (event.ctrlKey) {
            return;
        }

        this.coordinates$.next(
            this.getGuardedCoordinates(
                this.coordinates$.value.x - event.deltaX,
                this.coordinates$.value.y - event.deltaY,
            ),
        );
    }

    protected onZoom({clientX, clientY, delta}: DfZoom): void {
        const {x: offsetX, y: offsetY} = this.drawFlowRootElement.getBoundingClientRect();

        this.processZoom(clientX - offsetX, clientY - offsetY, delta);
    }

    public resetPanzoom(): void {
        this.zoom$.next(DF_PAN_ZOOM_INITIAL_SCALE);
        this.coordinates$.next(INITIAL_COORDINATES);
    }

    public resetPosition(): void {
        this.coordinates$.next(INITIAL_COORDINATES);
    }

    public zoomIn(): void {
        const {zoomStep, maxZoom} = this.panZoomOptions;
        const zoom = this.panZoomService.panzoomModel.zoom + zoomStep;

        this.setZoom(zoom <= maxZoom ? zoom : maxZoom);
    }

    public zoomOut(): void {
        const {zoomStep, minZoom} = this.panZoomOptions;
        const zoom = this.panZoomService.panzoomModel.zoom - zoomStep;

        this.setZoom(zoom >= minZoom ? zoom : minZoom);
    }

    private setZoom(zoom: number): void {
        this.manualZoomAnimation$.next(true);
        this.zoom$.next(zoom);
        timer(this.zoomAnimationDuration)
            .pipe(take(1))
            .subscribe(() => this.manualZoomAnimation$.next(false));
    }

    private processZoom(clientX: number, clientY: number, delta: number): void {
        const oldScale = this.zoom$.value;
        const {minZoom, maxZoom} = this.panZoomOptions;
        const newScale = dfClamp(oldScale + delta, minZoom, maxZoom);

        const center = this.getScaleCenter(
            {clientX, clientY},
            this.coordinates$.value,
            this.zoom$.value,
        );

        const moveX = center.x * oldScale - center.x * newScale;
        const moveY = center.y * oldScale - center.y * newScale;

        this.zoom$.next(newScale);
        this.coordinates$.next(
            this.getGuardedCoordinates(
                this.coordinates$.value.x + moveX,
                this.coordinates$.value.y + moveY,
            ),
        );
    }

    private getScaleCenter(
        {clientX, clientY}: {clientX: number; clientY: number},
        {x, y}: DfPoint,
        scale: number,
    ): DfPoint {
        const {offsetWidth, offsetHeight} = this.el.nativeElement;

        return {
            x: (clientX - x - offsetWidth / 2) / scale,
            y: (clientY - y - offsetHeight / 2) / scale,
        };
    }

    private getGuardedCoordinates(x: number, y: number): DfPoint {
        const {offsetX, offsetY} = this.offsets();

        return {
            x: dfClamp(x, -offsetX, offsetX),
            y: dfClamp(y, -offsetY, offsetY),
        };
    }

    private offsets(): {offsetX: number; offsetY: number} {
        const {panSize} = this.panZoomOptions;
        const offsetX = this.zoom$.value * panSize;
        const offsetY = this.zoom$.value * panSize;

        return {offsetX, offsetY};
    }
}
