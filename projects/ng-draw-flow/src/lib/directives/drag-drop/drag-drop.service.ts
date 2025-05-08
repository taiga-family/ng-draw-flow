import {DestroyRef, ElementRef, inject, Injectable} from '@angular/core';
import {
    animationFrameScheduler,
    fromEvent,
    map,
    Observable,
    pairwise,
    repeat,
    Subject,
    switchMap,
    takeUntil,
    tap,
    throttleTime,
} from 'rxjs';

import {
    dfDistanceBetweenPoints,
    dfPreventDefault,
    dfStopPropagation,
} from '../../helpers';
import {DfDragDropStage} from './drag-drop.enum';
import type {DfDragDrop} from './drag-drop.interface';

@Injectable()
export class DragDropService extends Observable<DfDragDrop> {
    constructor() {
        const nativeElement = inject(ElementRef).nativeElement;
        const destroyRef = inject(DestroyRef);
        const destroy$ = new Subject<void>();

        destroyRef.onDestroy(() => destroy$.next());

        super((subscriber) => {
            const pointerDown$ = fromEvent<PointerEvent>(
                nativeElement,
                'pointerdown',
            ).pipe(dfStopPropagation());
            const pointerMove$ = fromEvent<PointerEvent>(
                nativeElement,
                'pointermove',
            ).pipe(dfPreventDefault());
            const pointerUp$ = fromEvent<PointerEvent>(nativeElement, 'pointerup');

            const sub = pointerDown$
                .pipe(
                    tap((e) => nativeElement.setPointerCapture(e.pointerId)),
                    switchMap(() => pointerMove$),
                    throttleTime(16, animationFrameScheduler, {
                        leading: true,
                        trailing: true,
                    }),
                    pairwise(),
                    map(([start, end]) => ({
                        sourceElement: nativeElement,
                        distance: dfDistanceBetweenPoints(start, end),
                        stage: DfDragDropStage.Move,
                    })),
                    takeUntil(
                        pointerUp$.pipe(
                            tap((e) => {
                                nativeElement.releasePointerCapture(e.pointerId);
                                subscriber.next({
                                    sourceElement: nativeElement,
                                    distance: {deltaX: 0, deltaY: 0},
                                    stage: DfDragDropStage.End,
                                });
                            }),
                        ),
                    ),
                    repeat(),
                    takeUntil(destroy$),
                )
                .subscribe(subscriber);

            return () => sub.unsubscribe();
        });
    }
}
