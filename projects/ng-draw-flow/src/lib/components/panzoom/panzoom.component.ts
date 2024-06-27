import {AsyncPipe, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    inject,
    Output,
} from '@angular/core';
import {
    RESIZE_OPTION_BOX,
    ResizeObserverModule,
    ResizeObserverService,
} from '@ng-web-apis/resize-observer';
import type {Observable} from 'rxjs';
import {
    BehaviorSubject,
    combineLatest,
    fromEvent,
    map,
    merge,
    startWith,
    Subject,
    tap,
} from 'rxjs';

import type {DfDragDrop} from '../../directives/drag-drop';
import {DfDragDropStage, DragDropDirective} from '../../directives/drag-drop';
import {DF_FALSE_HANDLER, dfClamp, dfPx, INITIAL_COORDINATES} from '../../helpers';
import type {DfPoint} from '../../ng-draw-flow.interfaces';
import {DRAW_FLOW_ROOT_ELEMENT} from '../../ng-draw-flow.token';
import {DF_PANZOOM_INITIAL_SCALE} from './panzoom.const';
import type {DfPanzoomOptions} from './panzoom.options';
import {DF_PANZOOM_OPTIONS} from './panzoom.options';
import {PanzoomService} from './panzoom.service';
import {ZoomDirective} from './zoom';
import type {DfZoom} from './zoom/zoom.interfaces';

@Component({
    standalone: true,
    selector: 'df-panzoom',
    imports: [DragDropDirective, ZoomDirective, AsyncPipe, ResizeObserverModule, NgIf],
    templateUrl: './panzoom.component.html',
    styleUrls: ['./panzoom.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        ResizeObserverService,
        {
            provide: RESIZE_OPTION_BOX,
            useValue: 'border-box',
        },
    ],
})
export class PanzoomComponent {
    private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
    private readonly panzoomService = inject(PanzoomService);
    private readonly drawFlowRootElement = inject<HTMLElement>(DRAW_FLOW_ROOT_ELEMENT);
    private readonly panzoomOptions: DfPanzoomOptions =
        inject<DfPanzoomOptions>(DF_PANZOOM_OPTIONS);

    private readonly resizeObserver$ = inject(ResizeObserverService);
    private readonly zoom$ = new BehaviorSubject<number>(DF_PANZOOM_INITIAL_SCALE);
    private readonly coordinates$ = new BehaviorSubject<DfPoint>(INITIAL_COORDINATES);
    private readonly manualZoomAnimation$ = new Subject<boolean>();
    private readonly dragStage$ = new Subject<DfDragDropStage>();

    @Output()
    protected readonly scale = new EventEmitter<number>();

    protected readonly zoomAnimationDuration = this.panzoomOptions.zoomAnimationDuration;
    protected readonly cursor$ = this.dragStage$.pipe(
        map(stage => (stage === DfDragDropStage.Move ? 'grabbing' : 'initial')),
        startWith('initial'),
    );

    protected readonly transitioned$ = merge(
        this.manualZoomAnimation$,
        this.dragStage$.pipe(
            map((stage: DfDragDropStage) => stage !== DfDragDropStage.Move),
        ),
        fromEvent(this.el.nativeElement, 'touchmove', {
            passive: true,
        }).pipe(map(DF_FALSE_HANDLER)),
        fromEvent(this.el.nativeElement, 'wheel', {passive: true}).pipe(
            map(DF_FALSE_HANDLER),
        ),
    );

    protected readonly wrapperTransform$ = combineLatest([
        this.coordinates$.pipe(
            tap(({x, y}: DfPoint) => {
                this.panzoomService.panzoomModel.x = x;
                this.panzoomService.panzoomModel.y = y;
            }),
            map(({x, y}: DfPoint) => `${dfPx(x)}, ${dfPx(y)}`),
        ),
        this.zoom$.pipe(
            tap((zoom: number) => {
                this.scale.emit(Math.round(zoom * 100));
                this.panzoomService.panzoomModel.zoom = zoom;
            }),
        ),
    ]).pipe(
        map(([translate, zoom]) => `translate(${translate}) scale(${zoom}) rotate(0deg)`),
    );

    protected readonly panzoomContainerTransform$: Observable<string> =
        this.resizeObserver$.pipe(
            map((entries: readonly ResizeObserverEntry[]) => entries[0].contentRect),
            map((rootSize: DOMRectReadOnly) => {
                let translate = '';
                const {
                    leftPosition: panzoomLeftPosition,
                    topPosition: panzoomTopPosition,
                } = this.panzoomOptions;

                if (panzoomLeftPosition) {
                    const offset = (rootSize.width / 2) * -1 + panzoomLeftPosition;

                    this.panzoomService.panzoomModel.offsetX = offset * -1;

                    translate = `translateX(${offset}px)`;
                } else {
                    this.panzoomService.panzoomModel.offsetX = 0;
                }

                if (panzoomTopPosition) {
                    const offset = (rootSize.height / 2) * -1 + panzoomTopPosition;

                    this.panzoomService.panzoomModel.offsetY = offset * -1;

                    translate = `${translate}translateY(${offset}px)`;
                } else {
                    this.panzoomService.panzoomModel.offsetY = 0;
                }

                return translate;
            }),
        );

    protected onPan({distance, stage}: DfDragDrop): void {
        if (this.panzoomService.panzoomDisabled) {
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
        this.zoom$.next(DF_PANZOOM_INITIAL_SCALE);
        this.coordinates$.next(INITIAL_COORDINATES);
    }

    public zoomIn(): void {
        const {zoomStep, maxZoom} = this.panzoomOptions;
        const zoom = this.panzoomService.panzoomModel.zoom + zoomStep;

        this.setZoom(zoom <= maxZoom ? zoom : maxZoom);
    }

    public zoomOut(): void {
        const {zoomStep, minZoom} = this.panzoomOptions;
        const zoom = this.panzoomService.panzoomModel.zoom - zoomStep;

        this.setZoom(zoom >= minZoom ? zoom : minZoom);
    }

    private setZoom(zoom: number): void {
        this.manualZoomAnimation$.next(true);
        this.zoom$.next(zoom);
        const {x, y} = this.coordinates$.value;

        this.coordinates$.next(this.getGuardedCoordinates(x, y));
        setTimeout(
            () => this.manualZoomAnimation$.next(false),
            this.zoomAnimationDuration,
        );
    }

    private processZoom(clientX: number, clientY: number, delta: number): void {
        const oldScale = this.zoom$.value;
        const {minZoom, maxZoom} = this.panzoomOptions;
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
        const {panSize} = this.panzoomOptions;
        const offsetX = this.zoom$.value * panSize;
        const offsetY = this.zoom$.value * panSize;

        return {offsetX, offsetY};
    }
}
