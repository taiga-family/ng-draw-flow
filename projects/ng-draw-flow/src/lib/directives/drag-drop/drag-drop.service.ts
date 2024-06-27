import {ElementRef, inject, Injectable} from '@angular/core';
import {
    animationFrameScheduler,
    fromEvent,
    map,
    Observable,
    observeOn,
    pairwise,
    repeat,
    switchMap,
    takeUntil,
    tap,
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
        const nativeElement = inject(ElementRef<Element>).nativeElement;

        super(subscriber => {
            const pointerDown$ = fromEvent<PointerEvent>(
                nativeElement,
                'pointerdown',
            ).pipe(dfStopPropagation());
            const pointerMove$ = fromEvent<PointerEvent>(
                nativeElement,
                'pointermove',
            ).pipe(dfPreventDefault());
            const pointerUp$ = fromEvent<PointerEvent>(nativeElement, 'pointerup');

            pointerDown$
                .pipe(
                    tap((event: PointerEvent) =>
                        (
                            (event.target as HTMLElement) || nativeElement
                        ).setPointerCapture(event.pointerId),
                    ),
                    switchMap(() => pointerMove$),
                    observeOn(animationFrameScheduler),
                    pairwise(),
                    map(([first, second]) => {
                        const {deltaX, deltaY} = dfDistanceBetweenPoints(first, second);

                        return {
                            sourceElement: nativeElement,
                            distance: {
                                deltaX,
                                deltaY,
                            },
                            stage: DfDragDropStage.Move,
                        };
                    }),
                    // eslint-disable-next-line rxjs/no-unsafe-takeuntil
                    takeUntil(
                        pointerUp$.pipe(
                            tap((event: PointerEvent) => {
                                (
                                    (event.target as HTMLElement) || nativeElement
                                ).releasePointerCapture(event.pointerId);
                                subscriber.next({
                                    sourceElement: nativeElement,
                                    distance: {
                                        deltaX: 0,
                                        deltaY: 0,
                                    },
                                    stage: DfDragDropStage.End,
                                });
                            }),
                        ),
                    ),
                    repeat(),
                )
                .subscribe(subscriber);
        });
    }
}
