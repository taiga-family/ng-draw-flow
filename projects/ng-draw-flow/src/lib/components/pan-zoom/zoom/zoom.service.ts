import {ElementRef, inject, Injectable} from '@angular/core';
import {filter, fromEvent, map, merge, Observable, throttleTime} from 'rxjs';

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
            const activePointers = new Map<number, PointerEvent>();
            let previousDistance = 0;

            const wheelSub = fromEvent<WheelEvent>(nativeElement, 'wheel', {
                passive: false,
            })
                .pipe(
                    filter((event) => event.ctrlKey),
                    dfPreventDefault(),
                    map((wheel) => ({
                        clientX: wheel.clientX,
                        clientY: wheel.clientY,
                        delta: -wheel.deltaY * wheelSensitivity,
                        event: wheel,
                    })),
                )
                .subscribe(subscriber);

            const pointerMove$ = fromEvent<PointerEvent>(nativeElement, 'pointermove', {
                passive: true,
            }).pipe(filter((e) => e.pointerType === 'touch'));

            const pointerDown$ = fromEvent<PointerEvent>(nativeElement, 'pointerdown', {
                passive: true,
            }).pipe(filter((e) => e.pointerType === 'touch'));

            const pointerEnd$ = merge(
                fromEvent<PointerEvent>(nativeElement, 'pointerup'),
                fromEvent<PointerEvent>(nativeElement, 'pointercancel'),
            ).pipe(filter((e) => e.pointerType === 'touch'));

            const moveSub = merge(pointerDown$, pointerMove$, pointerEnd$)
                .pipe(throttleTime(16))
                .subscribe((event) => {
                    if (event.type === 'pointerup' || event.type === 'pointercancel') {
                        activePointers.delete(event.pointerId);
                    } else {
                        activePointers.set(event.pointerId, event);
                    }

                    if (activePointers.size < 2 || event.type !== 'pointermove') {
                        previousDistance = 0;

                        return;
                    }

                    const [a, b] = Array.from(activePointers.values());
                    const distance = dfDistanceBetweenTouches(a!, b!);

                    if (!previousDistance) {
                        previousDistance = distance;

                        return;
                    }

                    const delta = (distance - previousDistance) * touchSensitivity;

                    previousDistance = distance;
                    const clientX = (a!.clientX + b!.clientX) / 2;
                    const clientY = (a!.clientY + b!.clientY) / 2;

                    subscriber.next({clientX, clientY, delta, event});
                });

            return () => {
                wheelSub.unsubscribe();
                moveSub.unsubscribe();
            };
        });
    }
}
