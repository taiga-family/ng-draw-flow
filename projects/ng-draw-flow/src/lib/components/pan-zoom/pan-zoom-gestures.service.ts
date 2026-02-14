import {inject, Injectable} from '@angular/core';
import {
    animationFrameScheduler,
    filter,
    fromEvent,
    map,
    merge,
    type Observable,
    scan,
    share,
    startWith,
    switchMap,
    takeUntil,
    tap,
    throttleTime,
    withLatestFrom,
} from 'rxjs';

import {dfClamp, dfDistanceBetweenTouches} from '../../helpers';
import {DF_PAN_ZOOM_OPTIONS, type DfPanZoomOptions} from './pan-zoom.options';
import {PanZoomService} from './pan-zoom.service';
import {
    type DfPanZoomGesture,
    type DfPanZoomPanGesture,
    type DfPanZoomZoomGesture,
} from './pan-zoom-gestures.interfaces';

const TRACKPAD_DETECTION_STATE_TIMEOUT = 60_000;

@Injectable()
export class PanZoomGesturesService {
    private readonly panZoomOptions: DfPanZoomOptions = inject(DF_PAN_ZOOM_OPTIONS);
    private readonly panZoomService = inject(PanZoomService);

    private readonly streams = new WeakMap<HTMLElement, Observable<DfPanZoomGesture>>();

    private trackpadDetected = false;
    private lastTrackpadDetectionTime: number | null = null;
    private lastTrackpadDpr = 0;

    public streamFor(nativeElement: HTMLElement): Observable<DfPanZoomGesture> {
        const cached = this.streams.get(nativeElement);

        if (cached) {
            return cached;
        }

        const gestures$ = merge(
            this.createWheelStream(nativeElement),
            this.createTouchStream(nativeElement),
        ).pipe(share());

        this.streams.set(nativeElement, gestures$);

        return gestures$;
    }

    private createWheelStream(nativeElement: HTMLElement): Observable<DfPanZoomGesture> {
        const pointerPosition$ = merge(
            fromEvent<PointerEvent>(nativeElement, 'pointermove', {
                passive: true,
            }),
            fromEvent<MouseEvent>(nativeElement, 'mousemove', {
                passive: true,
            }),
        ).pipe(
            map(({clientX, clientY}) => ({clientX, clientY})),
            startWith(this.getElementCenter(nativeElement)),
        );

        return fromEvent<WheelEvent>(nativeElement.ownerDocument, 'wheel', {
            passive: false,
            capture: true,
        }).pipe(
            filter((event) => this.isInsideElement(event, nativeElement)),
            tap((event) => {
                event.preventDefault();
                event.stopPropagation();
            }),
            throttleTime(16, animationFrameScheduler, {
                leading: true,
                trailing: true,
            }),
            withLatestFrom(pointerPosition$),
            map(([event, pointer]) =>
                this.mapWheelToGesture(event, nativeElement, pointer),
            ),
        );
    }

    private createTouchStream(
        nativeElement: HTMLElement,
    ): Observable<DfPanZoomZoomGesture> {
        return fromEvent<TouchEvent>(nativeElement, 'touchstart', {
            passive: true,
        }).pipe(
            filter(({touches}) => touches.length > 1),
            switchMap((startEvent) =>
                fromEvent<TouchEvent>(nativeElement, 'touchmove', {
                    passive: false,
                }).pipe(
                    tap((event) => {
                        event.preventDefault();
                        event.stopPropagation();
                    }),
                    throttleTime(16, animationFrameScheduler, {
                        leading: true,
                        trailing: true,
                    }),
                    scan(
                        (prev, event) => {
                            const distance = dfDistanceBetweenTouches(event);

                            return {
                                event,
                                distance,
                                deltaScale:
                                    (distance - prev.distance) *
                                    this.panZoomOptions.touchSensitivity,
                            };
                        },
                        {
                            event: startEvent,
                            distance: dfDistanceBetweenTouches(startEvent),
                            deltaScale: 0,
                        },
                    ),
                    map(({event, deltaScale}) => {
                        const [touch1, touch2] = [
                            event.touches[0] ?? {clientX: 0, clientY: 0},
                            event.touches[1] ?? {clientX: 0, clientY: 0},
                        ];

                        return {
                            type: 'zoom',
                            clientX: (touch1.clientX + touch2.clientX) / 2,
                            clientY: (touch1.clientY + touch2.clientY) / 2,
                            deltaScale,
                            event,
                        } as const;
                    }),
                    takeUntil(
                        merge(
                            fromEvent<TouchEvent>(nativeElement, 'touchend'),
                            fromEvent<TouchEvent>(nativeElement, 'touchcancel'),
                        ),
                    ),
                ),
            ),
        );
    }

    private mapWheelToGesture(
        event: WheelEvent,
        nativeElement: HTMLElement,
        pointer: {clientX: number; clientY: number},
    ): DfPanZoomGesture {
        const isTrackpad = this.isTrackpadWheelEvent(event);
        const isPinchLike = this.isPinchGesture(event);
        const isTrackpadMove = isTrackpad && !isPinchLike;
        const clientPosition = this.resolveWheelClientPosition(
            event,
            nativeElement,
            pointer,
        );

        if (
            isTrackpadMove ||
            (!isTrackpad &&
                !this.isMetaKeyEvent(event) &&
                this.panZoomOptions.wheelBehavior === 'scroll')
        ) {
            return this.createPanGestureFromWheel(event);
        }

        const isPinchToZoom = isTrackpad && isPinchLike;
        const acceleration = isPinchToZoom ? this.panZoomOptions.pinchZoomSpeed : 1;

        return this.createZoomGestureFromWheel(event, acceleration, clientPosition);
    }

    private createPanGestureFromWheel(event: WheelEvent): DfPanZoomPanGesture {
        const hasWrongHorizontalScroll = event.shiftKey && Math.abs(event.deltaY) > 0.001;

        return {
            type: 'pan',
            deltaX: hasWrongHorizontalScroll ? -event.deltaY : -event.deltaX,
            deltaY: hasWrongHorizontalScroll ? -event.deltaX : -event.deltaY,
            event,
        };
    }

    private createZoomGestureFromWheel(
        event: WheelEvent,
        acceleration: number,
        clientPosition: {clientX: number; clientY: number},
    ): DfPanZoomZoomGesture {
        if (!event.deltaY) {
            return {
                type: 'zoom',
                clientX: clientPosition.clientX,
                clientY: clientPosition.clientY,
                deltaScale: 0,
                event,
            };
        }

        const pinchSpeed =
            Math.sign(event.deltaY) * dfClamp(Math.abs(event.deltaY), 1, 20);

        // `wheelStep` has priority over deprecated `zoomWheelSensitivity`.
        const wheelStep =
            this.panZoomOptions.wheelStep ?? this.panZoomOptions.zoomWheelSensitivity;
        const dScale =
            wheelStep * this.panZoomOptions.wheelSpeed * pinchSpeed * acceleration;
        const cameraScale = this.panZoomService.snapshot().zoom;

        return {
            type: 'zoom',
            clientX: clientPosition.clientX,
            clientY: clientPosition.clientY,
            deltaScale: -dScale * cameraScale,
            event,
        };
    }

    private isMetaKeyEvent(event: WheelEvent): boolean {
        return event.ctrlKey || event.metaKey;
    }

    private isPinchGesture(event: WheelEvent): boolean {
        return this.isMetaKeyEvent(event) || event.deltaZ !== 0;
    }

    private isInsideElement(event: Event, nativeElement: HTMLElement): boolean {
        const path = event.composedPath();

        if (path.includes(nativeElement)) {
            return true;
        }

        const target = event.target;

        return target instanceof Node ? nativeElement.contains(target) : false;
    }

    private isTrackpadWheelEvent(
        event: WheelEvent,
        dpr: number = globalThis.devicePixelRatio || 1,
    ): boolean {
        const now =
            globalThis.performance !== undefined
                ? globalThis.performance.now()
                : Date.now();

        if (this.trackpadDetected && this.lastTrackpadDetectionTime !== null) {
            if (
                now - this.lastTrackpadDetectionTime >=
                    TRACKPAD_DETECTION_STATE_TIMEOUT ||
                this.lastTrackpadDpr !== dpr
            ) {
                this.trackpadDetected = false;
                this.lastTrackpadDetectionTime = null;
            }
        }

        const normalizedDeltaY = event.deltaY * dpr;
        const normalizedDeltaX = event.deltaX * dpr;
        const hasFractionalDelta =
            !Number.isInteger(event.deltaY) ||
            !Number.isInteger(event.deltaX) ||
            !Number.isInteger(normalizedDeltaY) ||
            !Number.isInteger(normalizedDeltaX);
        const isSmallDelta = Math.abs(event.deltaY) < 50 && Math.abs(event.deltaX) < 50;

        if ((event.ctrlKey || event.metaKey) && (hasFractionalDelta || isSmallDelta)) {
            this.markAsTrackpad(dpr, now);

            return true;
        }

        if (normalizedDeltaX !== 0 && !event.shiftKey) {
            this.markAsTrackpad(dpr, now);

            return true;
        }

        if (hasFractionalDelta) {
            this.markAsTrackpad(dpr, now);

            return true;
        }

        if (this.trackpadDetected && this.lastTrackpadDetectionTime !== null) {
            if (isSmallDelta) {
                this.lastTrackpadDetectionTime = now;
            }

            return true;
        }

        this.trackpadDetected = false;
        this.lastTrackpadDetectionTime = null;

        return false;
    }

    private markAsTrackpad(dpr: number, now: number): void {
        this.trackpadDetected = true;
        this.lastTrackpadDetectionTime = now;
        this.lastTrackpadDpr = dpr;
    }

    private resolveWheelClientPosition(
        event: WheelEvent,
        nativeElement: HTMLElement,
        fallback: {clientX: number; clientY: number},
    ): {clientX: number; clientY: number} {
        if (event.clientX !== 0 || event.clientY !== 0) {
            return {clientX: event.clientX, clientY: event.clientY};
        }

        const rect = nativeElement.getBoundingClientRect();

        if (this.isPointInsideRect(fallback, rect)) {
            return fallback;
        }

        return this.getElementCenter(nativeElement);
    }

    private isPointInsideRect(
        point: {clientX: number; clientY: number},
        rect: DOMRect,
    ): boolean {
        return (
            point.clientX >= rect.left &&
            point.clientX <= rect.right &&
            point.clientY >= rect.top &&
            point.clientY <= rect.bottom
        );
    }

    private getElementCenter(nativeElement: HTMLElement): {
        clientX: number;
        clientY: number;
    } {
        const rect = nativeElement.getBoundingClientRect();

        return {
            clientX: rect.left + rect.width / 2,
            clientY: rect.top + rect.height / 2,
        };
    }
}
