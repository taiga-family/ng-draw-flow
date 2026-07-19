import {TestBed} from '@angular/core/testing';
import {filter, firstValueFrom, take} from 'rxjs';

import {
    DF_PAN_ZOOM_DEFAULT_OPTIONS,
    DF_PAN_ZOOM_OPTIONS,
    type DfPanZoomOptions,
} from './pan-zoom.options';
import {PanZoomService} from './pan-zoom.service';
import {type DfPanZoomGesture} from './pan-zoom-gestures.interfaces';
import {PanZoomGesturesService} from './pan-zoom-gestures.service';

describe('PanZoomGesturesService', () => {
    let service: PanZoomGesturesService;
    let panZoomService: PanZoomService;
    let host: HTMLElement;

    const setup = (overrides: Partial<DfPanZoomOptions> = {}): void => {
        TestBed.configureTestingModule({
            providers: [
                PanZoomGesturesService,
                PanZoomService,
                {
                    provide: DF_PAN_ZOOM_OPTIONS,
                    useValue: {...DF_PAN_ZOOM_DEFAULT_OPTIONS, ...overrides},
                },
            ],
        });

        service = TestBed.inject(PanZoomGesturesService);
        panZoomService = TestBed.inject(PanZoomService);
        host = document.createElement('div');
        document.body.appendChild(host);
    };

    const nextGesture = async (
        predicate: (gesture: DfPanZoomGesture) => boolean,
        action: () => void,
    ): Promise<DfPanZoomGesture> => {
        const promise = firstValueFrom(
            service.streamFor(host).pipe(filter(predicate), take(1)),
        );

        action();

        return promise;
    };

    afterEach(() => {
        host.remove();
        TestBed.resetTestingModule();
    });

    it('emits wheel zoom gestures in zoom mode', async () => {
        setup({wheelBehavior: 'zoom'});

        const gesture = await nextGesture(
            (item) => item.type === 'zoom',
            () => {
                host.dispatchEvent(
                    new WheelEvent('wheel', {
                        deltaY: 100,
                        clientX: 40,
                        clientY: 60,
                        bubbles: true,
                        cancelable: true,
                    }),
                );
            },
        );

        expect(gesture.type).toBe('zoom');

        if (gesture.type !== 'zoom') {
            throw new Error('Expected zoom gesture');
        }

        expect(gesture.clientX).toBe(40);
        expect(gesture.clientY).toBe(60);
        expect(gesture.deltaScale).toBeLessThan(0);
    });

    it('emits pan gestures for wheel when wheelBehavior is scroll', async () => {
        setup({wheelBehavior: 'scroll'});

        const gesture = await nextGesture(
            (item) => item.type === 'pan',
            () => {
                host.dispatchEvent(
                    new WheelEvent('wheel', {
                        deltaX: 12,
                        deltaY: -7,
                        bubbles: true,
                        cancelable: true,
                    }),
                );
            },
        );

        expect(gesture.type).toBe('pan');

        if (gesture.type !== 'pan') {
            throw new Error('Expected pan gesture');
        }

        expect(gesture.deltaX).toBe(-12);
        expect(gesture.deltaY).toBe(7);
    });

    it('treats fractional wheel events as trackpad swipe and pans', async () => {
        setup({wheelBehavior: 'zoom'});

        const gesture = await nextGesture(
            (item) => item.type === 'pan',
            () => {
                host.dispatchEvent(
                    new WheelEvent('wheel', {
                        deltaX: 1.5,
                        deltaY: 2.5,
                        bubbles: true,
                        cancelable: true,
                    }),
                );
            },
        );

        expect(gesture.type).toBe('pan');

        if (gesture.type !== 'pan') {
            throw new Error('Expected pan gesture');
        }

        expect(gesture.deltaX).toBeCloseTo(-1.5, 5);
        expect(gesture.deltaY).toBeCloseTo(-2.5, 5);
    });

    it('applies pinch zoom acceleration for trackpad pinch', async () => {
        setup({pinchZoomSpeed: 3, wheelStep: 0.008, wheelSpeed: 1});

        panZoomService.patchCamera({zoom: 2});

        const gesture = await nextGesture(
            (item) => item.type === 'zoom',
            () => {
                host.dispatchEvent(
                    new WheelEvent('wheel', {
                        deltaY: 2,
                        ctrlKey: true,
                        bubbles: true,
                        cancelable: true,
                    }),
                );
            },
        );

        expect(gesture.type).toBe('zoom');

        if (gesture.type !== 'zoom') {
            throw new Error('Expected zoom gesture');
        }

        expect(gesture.deltaScale).toBeCloseTo(-0.096, 6);
    });

    it('falls back to the last pointer position when wheel reports zero client coordinates', async () => {
        setup({wheelBehavior: 'zoom'});

        jest.spyOn(host, 'getBoundingClientRect').mockReturnValue({
            x: 10,
            y: 20,
            left: 10,
            top: 20,
            right: 210,
            bottom: 220,
            width: 200,
            height: 200,
            toJSON: () => ({}),
        });

        const gesturePromise = nextGesture(
            (item) => item.type === 'zoom',
            () => {
                host.dispatchEvent(
                    new MouseEvent('mousemove', {
                        clientX: 80,
                        clientY: 90,
                        bubbles: true,
                    }),
                );

                host.dispatchEvent(
                    new WheelEvent('wheel', {
                        deltaY: 10,
                        clientX: 0,
                        clientY: 0,
                        bubbles: true,
                        cancelable: true,
                    }),
                );
            },
        );

        const gesture = await gesturePromise;

        expect(gesture.type).toBe('zoom');

        if (gesture.type !== 'zoom') {
            throw new Error('Expected zoom gesture');
        }

        expect(gesture.clientX).toBe(80);
        expect(gesture.clientY).toBe(90);
    });

    it('creates a single wheel listener for repeated subscriptions', () => {
        setup();

        const addEventListenerSpy = jest.spyOn(host, 'addEventListener');

        const first = service.streamFor(host).subscribe();
        const second = service.streamFor(host).subscribe();

        const wheelListeners = addEventListenerSpy.mock.calls.filter(
            ([eventType]) => eventType === 'wheel',
        );

        expect(wheelListeners).toHaveLength(1);

        first.unsubscribe();
        second.unsubscribe();
    });
});
