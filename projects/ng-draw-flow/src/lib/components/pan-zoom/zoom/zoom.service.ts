import {ElementRef, inject, Injectable} from '@angular/core';
import {
    filter,
    fromEvent,
    map,
    merge,
    Observable,
    scan,
    switchMap,
    takeUntil,
    throttleTime,
} from 'rxjs';

import {dfDistanceBetweenTouches, dfPreventDefault} from '../../../helpers';
import {DF_PAN_ZOOM_OPTIONS} from '../pan-zoom.options';
import type {DfZoom} from './zoom.interfaces';

@Injectable()
export class ZoomService extends Observable<DfZoom> {
    constructor() {
        const nativeElement: HTMLElement = inject(ElementRef).nativeElement;
        const options = inject(DF_PAN_ZOOM_OPTIONS);
        const wheelSensitivity = options?.zoomWheelSensitivity;
        const touchSensitivity = options?.touchSensitivity;

        super((subscriber) => {
            merge(
                fromEvent<TouchEvent>(nativeElement, 'touchstart', {passive: true}).pipe(
                    filter(({touches}) => touches.length > 1),
                    switchMap((startEvent) =>
                        fromEvent<TouchEvent>(nativeElement, 'touchmove', {
                            passive: true,
                        }).pipe(
                            dfPreventDefault(),
                            throttleTime(16),
                            scan(
                                (prev, event) => {
                                    const distance = dfDistanceBetweenTouches(event);

                                    return {
                                        event,
                                        distance,
                                        delta:
                                            (distance - prev.distance) * touchSensitivity,
                                    };
                                },
                                {
                                    event: startEvent,
                                    distance: dfDistanceBetweenTouches(startEvent),
                                    delta: 0,
                                },
                            ),
                            map(({event, delta}) => {
                                const [touch1, touch2] = [
                                    event.touches[0],
                                    event.touches[1],
                                ];
                                const clientX = (touch1.clientX + touch2.clientX) / 2;
                                const clientY = (touch1.clientY + touch2.clientY) / 2;

                                return {clientX, clientY, delta, event};
                            }),
                            takeUntil(fromEvent(nativeElement, 'touchend')),
                        ),
                    ),
                ),
                fromEvent<WheelEvent>(nativeElement, 'wheel', {passive: false}).pipe(
                    dfPreventDefault(),
                    map((wheel) => ({
                        clientX: wheel.clientX,
                        clientY: wheel.clientY,
                        delta: -wheel.deltaY * wheelSensitivity,
                        event: wheel,
                    })),
                ),
            ).subscribe(subscriber);
        });
    }
}
