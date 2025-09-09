import {Injectable} from '@angular/core';
import {
    animationFrameScheduler,
    filter,
    fromEvent,
    map,
    merge,
    type Observable,
    repeat,
    share,
    shareReplay,
    switchMap,
    take,
    takeUntil,
    throttleTime,
} from 'rxjs';

import {DfDragDropStage} from './drag-drop.enum';
import {type DfDragDrop} from './drag-drop.interface';

/**
 * Centralised RxJS-based drag-and-drop stream factory.
 * Creates **one** `pointermove / pointerup` listener on `document`
 * and produces per-element drag streams filtered by `pointerId`.
 */
@Injectable({providedIn: 'root'})
export class DragDropService {
    /** Cache for element-scoped `pointerdown` observables (lazy–created). */
    private readonly pointerDownMap = new WeakMap<
        HTMLElement,
        Observable<PointerEvent>
    >();

    /** Cache for ready-made drag-stream observables (so we never duplicate work). */
    private readonly dragDropStreams = new WeakMap<HTMLElement, Observable<DfDragDrop>>();

    /** Shared `pointermove` stream on the whole document (ref-counted). */
    private readonly pointerMove$ = fromEvent<PointerEvent>(document, 'pointermove').pipe(
        share(),
    );

    /** Shared `pointerup` stream on the whole document (ref-counted). */
    private readonly pointerUp$ = fromEvent<PointerEvent>(document, 'pointerup').pipe(
        share(),
    );

    /**
     * Returns (and caches) a drag-and-drop observable for the provided element.
     * The observable emits:
     *   • `DfDragDropStage.Move` every animation frame while the pointer is down;
     *   • a final `DfDragDropStage.End` when the pointer is released.
     */
    public streamFor(el: HTMLElement): Observable<DfDragDrop> {
        const cached = this.dragDropStreams.get(el);

        if (cached) {
            return cached;
        }

        const pointerDown$ =
            this.pointerDownMap.get(el) ??
            fromEvent<PointerEvent>(el, 'pointerdown', {passive: true}).pipe(share());

        this.pointerDownMap.set(el, pointerDown$);

        const drag$: Observable<DfDragDrop> = pointerDown$.pipe(
            switchMap((startEvent: PointerEvent): Observable<DfDragDrop> => {
                const id = startEvent.pointerId;
                let lastPointerEvent = startEvent;

                const pointerUpStream$ = this.pointerUp$.pipe(
                    filter((e) => e.pointerId === id),
                    take(1),
                    map(
                        (): DfDragDrop => ({
                            stage: DfDragDropStage.End,
                            sourceElement: el,
                            distance: {deltaX: 0, deltaY: 0},
                        }),
                    ),
                    shareReplay({bufferSize: 1, refCount: false}),
                );

                const pointerMoveStream$ = this.pointerMove$.pipe(
                    filter((e) => e.pointerId === id),
                    throttleTime(16, animationFrameScheduler, {
                        leading: true,
                        trailing: true,
                    }),
                    map((e) => {
                        const dx = e.clientX - lastPointerEvent.clientX;
                        const dy = e.clientY - lastPointerEvent.clientY;

                        lastPointerEvent = e;

                        return {
                            stage: DfDragDropStage.Move,
                            sourceElement: el,
                            distance: {deltaX: dx, deltaY: dy},
                        };
                    }),
                    takeUntil(pointerUpStream$),
                );

                return merge(pointerMoveStream$, pointerUpStream$);
            }),
            repeat(),
            share(),
        );

        this.dragDropStreams.set(el, drag$);

        return drag$;
    }
}
