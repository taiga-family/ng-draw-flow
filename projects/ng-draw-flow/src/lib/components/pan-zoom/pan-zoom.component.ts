import {AsyncPipe, NgIf} from '@angular/common';
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

import type {DfDragDrop} from '../../directives/drag-drop';
import {DfDragDropStage, DragDropDirective} from '../../directives/drag-drop';
import {DfResizeObserver} from '../../directives/resize-observer';
import {DF_FALSE_HANDLER, dfClamp, dfPx, INITIAL_COORDINATES} from '../../helpers';
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
    imports: [AsyncPipe, DfResizeObserver, DragDropDirective, NgIf, ZoomDirective],
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
        fromEvent(this.el.nativeElement, 'touchmove', {passive: true}).pipe(
            throttleTime(16, animationFrameScheduler, {leading: true, trailing: true}),
            map(DF_FALSE_HANDLER),
        ),
        fromEvent(this.el.nativeElement, 'wheel', {passive: true}).pipe(
            throttleTime(16, animationFrameScheduler, {leading: true, trailing: true}),
            map(DF_FALSE_HANDLER),
        ),
    );

    protected readonly wrapperTransform$ = combineLatest([
        this.coordinates$.pipe(
            tap(({x, y}: DfPoint) => {
                this.panZoomService.panzoomModel.x = x;
                this.panZoomService.panzoomModel.y = y;
            }),
            map(({x, y}: DfPoint) => `${dfPx(x)}, ${dfPx(y)}`),
        ),
        this.zoom$.pipe(
            tap((zoom: number) => {
                this.scale.emit(Math.round(zoom * 100));
                this.panZoomService.panzoomModel.zoom = zoom;
            }),
        ),
    ]).pipe(
        map(([translate, zoom]) => `translate(${translate}) scale(${zoom}) rotate(0deg)`),
    );

    protected readonly panZoomContainerTransform$: Observable<string> =
        this.resizeObserver$.pipe(
            map((entries: readonly ResizeObserverEntry[]) => entries[0].contentRect),
            map((rootSize: DOMRectReadOnly) => {
                let translate = '';
                const {
                    leftPosition: panZoomLeftPosition,
                    topPosition: panZoomTopPosition,
                } = this.panZoomOptions;

                if (panZoomLeftPosition || panZoomLeftPosition === 0) {
                    const offset = (rootSize.width / 2) * -1 + panZoomLeftPosition;

                    this.panZoomService.panzoomModel.offsetX = offset * -1;

                    translate = `translateX(${offset}px)`;
                } else {
                    this.panZoomService.panzoomModel.offsetX = 0;
                }

                if (panZoomTopPosition || panZoomTopPosition === 0) {
                    const offset = (rootSize.height / 2) * -1 + panZoomTopPosition;

                    this.panZoomService.panzoomModel.offsetY = offset * -1;

                    translate = `${translate}translateY(${offset}px)`;
                } else {
                    this.panZoomService.panzoomModel.offsetY = 0;
                }

                return translate;
            }),
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

    protected onZoom({clientX, clientY, delta}: DfZoom): void {
        const {x: offsetX, y: offsetY} = this.drawFlowRootElement.getBoundingClientRect();

        this.processZoom(clientX - offsetX, clientY - offsetY, delta);
    }

    public resetPanzoom(): void {
        this.zoom$.next(DF_PAN_ZOOM_INITIAL_SCALE);
        this.coordinates$.next(INITIAL_COORDINATES);
    }

    public setPanZoom(zoom: number, coordinates?: DfPoint): void {
        const {minZoom, maxZoom} = this.panZoomOptions;
        const validZoom = dfClamp(zoom, minZoom, maxZoom);

        // Handle coordinates if provided
        if (coordinates) {
            // We need to set coordinates first in this case
            this.manualZoomAnimation$.next(true);
            this.coordinates$.next(
                this.getGuardedCoordinates(coordinates.x, coordinates.y),
            );
            this.zoom$.next(validZoom);

            timer(this.zoomAnimationDuration)
                .pipe(take(1))
                .subscribe(() => this.manualZoomAnimation$.next(false));
        } else {
            // Use setZoom for the standard case
            this.setZoom(validZoom);
        }
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
        const {x, y} = this.coordinates$.value;

        this.coordinates$.next(this.getGuardedCoordinates(x, y));
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

    private getGuardedCoordinates(x: number, y: number): DfPoint {
        const {offsetX, offsetY} = this.offsets();

        return {
            x: dfClamp(x, -offsetX, offsetX),
            y: dfClamp(y, -offsetY, offsetY),
        };
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

    private offsets(): {offsetX: number; offsetY: number} {
        const {panSize} = this.panZoomOptions;
        const offsetX = this.zoom$.value * panSize;
        const offsetY = this.zoom$.value * panSize;

        return {offsetX, offsetY};
    }

    /**
     * Sets zoom level based on screen width comparison to a standard width
     * @param standardWidth The reference width to compare against (e.g. 1366 for standard laptop)
     * @param minScale Optional minimum scale factor (defaults to panZoomOptions.minZoom)
     * @param maxScale Optional maximum scale factor (defaults to panZoomOptions.maxZoom)
     * @returns The calculated and applied zoom factor after clamping to min/max values
     */
    public setZoomBasedOnScreenWidth(
        standardWidth: number,
        minScale?: number,
        maxScale?: number,
    ): number {
        const currentWidth = window.innerWidth;
        const {minZoom, maxZoom} = this.panZoomOptions;

        // Calculate zoom factor based on width ratio
        const zoomFactor = currentWidth / standardWidth;

        // Clamp to provided or default min/max values
        const clampedZoom = dfClamp(zoomFactor, minScale ?? minZoom, maxScale ?? maxZoom);

        // Set the zoom level
        this.setPanZoom(clampedZoom);

        return clampedZoom;
    }

    /**
     * Sets zoom level based on screen height comparison to a standard height
     * @param standardHeight The reference height to compare against (e.g. 768 for standard laptop)
     * @param minScale Optional minimum scale factor (defaults to panZoomOptions.minZoom)
     * @param maxScale Optional maximum scale factor (defaults to panZoomOptions.maxZoom)
     * @returns The calculated and applied zoom factor after clamping to min/max values
     */
    public setZoomBasedOnScreenHeight(
        standardHeight: number,
        minScale?: number,
        maxScale?: number,
    ): number {
        const currentHeight = window.innerHeight;
        const {minZoom, maxZoom} = this.panZoomOptions;

        // Calculate zoom factor based on height ratio
        const zoomFactor = currentHeight / standardHeight;

        // Clamp to provided or default min/max values
        const clampedZoom = dfClamp(zoomFactor, minScale ?? minZoom, maxScale ?? maxZoom);

        // Set the zoom level
        this.setPanZoom(clampedZoom);

        return clampedZoom;
    }

    /**
     * Sets up a window resize listener that automatically adjusts zoom level
     * based on window dimensions compared to provided standard dimensions.
     * @param standardWidth Reference width (defaults to 1366px)
     * @param standardHeight Reference height (defaults to 768px)
     * @param useHeight Whether to prioritize height-based scaling (defaults to false)
     * @returns Observable that emits the current zoom factor after each adjustment
     */
    public zoomBasedOnWindowResize(
        standardWidth = 1366,
        standardHeight = 768,
        useHeight = false,
    ): Observable<number> {
        // Calculate initial zoom and get its value
        const initialZoom = useHeight
            ? this.setZoomBasedOnScreenHeight(standardHeight)
            : this.setZoomBasedOnScreenWidth(standardWidth);

        // Create and return an observable that emits zoom levels
        return fromEvent(window, 'resize').pipe(
            throttleTime(200, undefined, {leading: true, trailing: true}),
            map(() =>
                // Calculate and apply the new zoom factor
                useHeight
                    ? this.setZoomBasedOnScreenHeight(standardHeight)
                    : this.setZoomBasedOnScreenWidth(standardWidth),
            ),
            startWith(initialZoom), // Start with the initial zoom value
        );
    }
}
