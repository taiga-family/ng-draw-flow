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
} from 'rxjs';

import {dfDistanceBetweenTouches, dfPreventDefault} from '../../../helpers';
import {DF_PAN_ZOOM_OPTIONS} from '../pan-zoom.options';
import type {DfZoom} from './zoom.interfaces';

@Injectable()
export class ZoomService extends Observable<DfZoom> {
    constructor() {
        const nativeElement: HTMLElement = inject(ElementRef).nativeElement;
        const wheelSensitivity = inject(DF_PAN_ZOOM_OPTIONS)?.zoomWheelSensitivity;
        const touchSensitivity = inject(DF_PAN_ZOOM_OPTIONS)?.touchSensitivity;

        super(subscriber => {
            merge(
                fromEvent<TouchEvent>(nativeElement, 'touchstart', {passive: true}).pipe(
                    filter(({touches}) => touches.length > 1),
                    switchMap(startEvent =>
                        fromEvent<TouchEvent>(nativeElement, 'touchmove', {
                            passive: true,
                        }).pipe(
                            dfPreventDefault(),
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
                                const clientX =
                                    (event.touches[0].clientX +
                                        event.touches[1].clientX) /
                                    2;
                                const clientY =
                                    (event.touches[0].clientY +
                                        event.touches[1].clientY) /
                                    2;

                                return {clientX, clientY, delta, event};
                            }),
                            takeUntil(fromEvent(nativeElement, 'touchend')),
                        ),
                    ),
                ),
                fromEvent<WheelEvent>(nativeElement, 'wheel', {passive: false}).pipe(
                    dfPreventDefault(),
                    map(wheel => ({
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
