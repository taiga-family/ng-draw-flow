import {PLATFORM_ID, signal} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {animationFrameScheduler, type SchedulerAction, Subject, Subscription} from 'rxjs';

import {DRAW_FLOW_ROOT_ELEMENT} from '../../ng-draw-flow.token';
import {
    type DfPanZoomRenderMode,
    PanZoomControllerService,
} from './pan-zoom.controller.service';
import {PanZoomService} from './pan-zoom.service';
import {PanZoomBackgroundCanvasComponent} from './pan-zoom-background-canvas.component';

function createContext(): Partial<CanvasRenderingContext2D> {
    return {
        setTransform: jest.fn(),
        clearRect: jest.fn(),
        fillRect: jest.fn(),
        strokeRect: jest.fn(),
        save: jest.fn(),
        beginPath: jest.fn(),
        rect: jest.fn(),
        clip: jest.fn(),
        translate: jest.fn(),
        scale: jest.fn(),
        restore: jest.fn(),
        createPattern: jest.fn(() => ({setTransform: jest.fn()})),
    };
}

describe('PanZoomBackgroundCanvasComponent', () => {
    let fixture: ComponentFixture<PanZoomBackgroundCanvasComponent>;
    let root: HTMLElement;
    let context: ReturnType<typeof createContext>;
    let renderRequests: Subject<DfPanZoomRenderMode>;
    let frames: Array<() => void>;
    let panZoom: PanZoomService;

    const flushFrames = (): void => {
        frames.splice(0).forEach((run) => run());
    };

    const setup = (platform = 'browser'): HTMLCanvasElement => {
        TestBed.configureTestingModule({
            imports: [PanZoomBackgroundCanvasComponent],
            providers: [
                PanZoomService,
                {provide: PLATFORM_ID, useValue: platform},
                {provide: DRAW_FLOW_ROOT_ELEMENT, useValue: root},
                {
                    provide: PanZoomControllerService,
                    useValue: {
                        viewportZeroPoint: signal({x: 100, y: 80}),
                        renderRequests$: renderRequests.asObservable(),
                    },
                },
            ],
        });

        fixture = TestBed.createComponent(PanZoomBackgroundCanvasComponent);
        panZoom = TestBed.inject(PanZoomService);
        fixture.detectChanges();
        flushFrames();

        return fixture.nativeElement.querySelector('canvas');
    };

    beforeEach(() => {
        root = document.createElement('div');
        Object.defineProperties(root, {
            offsetWidth: {configurable: true, value: 400},
            offsetHeight: {configurable: true, value: 300},
        });
        context = createContext();
        renderRequests = new Subject();
        frames = [];
        jest.replaceProperty(window, 'devicePixelRatio', 2);
        jest.spyOn(HTMLCanvasElement.prototype, 'getContext').mockImplementation(
            (): CanvasRenderingContext2D => context as CanvasRenderingContext2D,
        );
        jest.spyOn(animationFrameScheduler, 'schedule').mockImplementation(
            (
                work: (this: SchedulerAction<unknown>, state?: unknown) => void,
                _delay?: number,
                state?: unknown,
            ): Subscription => {
                const subscription = new Subscription();
                const action: SchedulerAction<unknown> = Object.assign(subscription, {
                    schedule: jest.fn(() => subscription),
                });

                frames.push(() => {
                    if (!subscription.closed) {
                        work.call(action, state);
                    }
                });

                return subscription;
            },
        );
    });

    afterEach(() => {
        fixture?.destroy();
        renderRequests.complete();
        TestBed.resetTestingModule();
        jest.restoreAllMocks();
    });

    it('sizes the canvas for DPR and draws the workspace in viewport coordinates', () => {
        const canvas = setup();

        expect(canvas.width).toBe(800);
        expect(canvas.height).toBe(600);
        expect(canvas.getAttribute('aria-hidden')).toBe('true');
        expect(context.setTransform).toHaveBeenCalledWith(2, 0, 0, 2, 0, 0);
        expect(context.strokeRect).toHaveBeenCalledWith(-300, -320, 800, 800);
        expect(context.translate).toHaveBeenCalledWith(100, 80);
        expect(context.scale).toHaveBeenCalledWith(1, 1);
    });

    it('resizes backing pixels when the viewport changes', () => {
        const canvas = setup();

        Object.defineProperty(root, 'offsetWidth', {value: 500});
        renderRequests.next('sync');

        expect(canvas.width).toBe(1000);
        expect(canvas.height).toBe(600);
        expect(context.clearRect).toHaveBeenLastCalledWith(0, 0, 1000, 600);
    });

    it('coalesces async requests and uses the latest camera', () => {
        setup();
        jest.clearAllMocks();
        renderRequests.next('async');
        panZoom.patchCamera({x: 25, y: 50, zoom: 0.5});
        fixture.detectChanges();
        renderRequests.next('async');

        expect(context.clearRect).not.toHaveBeenCalled();
        flushFrames();

        expect(context.clearRect).toHaveBeenCalledTimes(1);
        expect(context.translate).toHaveBeenCalledWith(125, 130);
        expect(context.scale).toHaveBeenCalledWith(0.5, 0.5);
    });

    it('reuses patterns until the theme grid color changes', () => {
        setup();
        expect(context.createPattern).toHaveBeenCalledTimes(2);
        renderRequests.next('sync');
        expect(context.createPattern).toHaveBeenCalledTimes(2);

        root.style.setProperty('--df-pan-zoom-grid-color', '#123456');
        renderRequests.next('sync');

        expect(context.createPattern).toHaveBeenCalledTimes(4);
    });

    it('a synchronous render supersedes a queued draw', () => {
        setup();
        jest.clearAllMocks();
        renderRequests.next('async');
        renderRequests.next('sync');
        flushFrames();

        expect(context.clearRect).toHaveBeenCalledTimes(1);
    });

    it('skips the grid at distant zoom while retaining viewport and workspace fill', () => {
        setup();
        jest.clearAllMocks();
        panZoom.patchCamera({zoom: 0.1});
        renderRequests.next('sync');

        expect(context.fillRect).toHaveBeenCalledTimes(2);
        expect(context.strokeRect).toHaveBeenCalled();
        expect(context.save).not.toHaveBeenCalled();
    });

    it('does not draw when the viewport is hidden', () => {
        Object.defineProperties(root, {
            offsetWidth: {value: 0},
            offsetHeight: {value: 0},
        });
        setup();

        expect(context.clearRect).not.toHaveBeenCalled();
        expect(context.createPattern).not.toHaveBeenCalled();
    });

    it('tolerates unavailable canvas contexts', () => {
        jest.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null);
        setup();
        renderRequests.next('sync');
        renderRequests.next('async');
        flushFrames();

        expect(context.clearRect).not.toHaveBeenCalled();
    });

    it('does not access canvas APIs on the server', () => {
        setup('server');
        renderRequests.next('sync');
        renderRequests.next('async');
        flushFrames();

        expect(HTMLCanvasElement.prototype.getContext).not.toHaveBeenCalled();
        expect(animationFrameScheduler.schedule).not.toHaveBeenCalled();
    });

    it('cancels pending draws and stops listening when destroyed', () => {
        setup();
        jest.clearAllMocks();
        renderRequests.next('async');
        fixture.destroy();
        renderRequests.next('sync');
        flushFrames();

        expect(context.clearRect).not.toHaveBeenCalled();
    });
});
