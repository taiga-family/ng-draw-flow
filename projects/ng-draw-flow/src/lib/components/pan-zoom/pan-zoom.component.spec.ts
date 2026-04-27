import {type ComponentFixture, TestBed} from '@angular/core/testing';

import {type DfDragDrop, DfDragDropStage} from '../../directives/drag-drop';
import {DRAW_FLOW_ROOT_ELEMENT} from '../../ng-draw-flow.token';
import {PanZoomComponent} from './pan-zoom.component';
import {
    DF_PAN_ZOOM_DEFAULT_OPTIONS,
    DF_PAN_ZOOM_OPTIONS,
    type DfPanZoomOptions,
} from './pan-zoom.options';
import {PanZoomService} from './pan-zoom.service';

jest.mock('./pan-zoom.component.html', () => '', {virtual: true});
jest.mock('./pan-zoom.component.less', () => '', {virtual: true});

describe('PanZoomComponent', () => {
    let fixture: ComponentFixture<PanZoomComponent>;
    let component: PanZoomComponent;
    let panZoomService: PanZoomService;
    let panZoomOptions: DfPanZoomOptions;

    beforeEach(async () => {
        TestBed.overrideComponent(PanZoomComponent, {
            set: {
                template: `
                    <div
                        class="pan-zoom__viewport"
                        data-element="scene"
                        style="position: relative; width: 100%; height: 100%;"
                    >
                        <div
                            class="pan-zoom"
                            [style.cursor]="cursor()"
                            [style.transform]="panTransform()"
                            [style.transition-duration]="transitionDuration()"
                        >
                            <div
                                class="pan-zoom__container"
                                style="position: relative; width: 0; height: 0;"
                            >
                                <ng-content />
                            </div>
                        </div>
                    </div>
                `,
            },
        });

        const drawFlowRootElement = document.createElement('div');

        Object.defineProperties(drawFlowRootElement, {
            offsetWidth: {value: 1000},
            offsetHeight: {value: 800},
        });

        panZoomOptions = {
            ...DF_PAN_ZOOM_DEFAULT_OPTIONS,
            panSize: 2000,
            leftPosition: null,
            topPosition: null,
            zoomAnimationDuration: 1,
        };

        await TestBed.configureTestingModule({
            imports: [PanZoomComponent],
            providers: [
                PanZoomService,
                {
                    provide: DRAW_FLOW_ROOT_ELEMENT,
                    useValue: drawFlowRootElement,
                },
                {
                    provide: DF_PAN_ZOOM_OPTIONS,
                    useValue: panZoomOptions,
                },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(PanZoomComponent);
        component = fixture.componentInstance;
        panZoomService = TestBed.inject(PanZoomService);

        fixture.detectChanges();
    });

    afterEach(() => {
        fixture.destroy();
    });

    it('supports zoomIn/zoomOut/setScale and clamps zoom bounds', () => {
        component.zoomIn();
        expect(panZoomService.snapshot().zoom).toBeCloseTo(1.25, 8);

        component.zoomOut();
        expect(panZoomService.snapshot().zoom).toBeCloseTo(1, 8);

        component.setScale(100);
        expect(panZoomService.snapshot().zoom).toBe(DF_PAN_ZOOM_DEFAULT_OPTIONS.maxZoom);

        component.setScale(0.1);
        expect(panZoomService.snapshot().zoom).toBe(DF_PAN_ZOOM_DEFAULT_OPTIONS.minZoom);
    });

    it('renders a zero-sized world layer inside a viewport-sized hit area', () => {
        const viewportElement = fixture.nativeElement.querySelector(
            '.pan-zoom__viewport',
        ) as HTMLElement;
        const panElement = fixture.nativeElement.querySelector(
            '.pan-zoom',
        ) as HTMLElement;
        const containerElement = fixture.nativeElement.querySelector(
            '.pan-zoom__container',
        ) as HTMLElement;

        expect(viewportElement.style.width).toBe('100%');
        expect(viewportElement.style.height).toBe('100%');
        expect(viewportElement.style.position).toBe('relative');
        expect(panElement.style.width).toBe('');
        expect(panElement.style.height).toBe('');
        expect(containerElement.style.width).toBe('0px');
        expect(containerElement.style.height).toBe('0px');
        expect(containerElement.style.position).toBe('relative');
    });

    it('marks the viewport hit area as the scene target', () => {
        const viewportElement = fixture.nativeElement.querySelector(
            '.pan-zoom__viewport',
        ) as HTMLElement;

        expect(viewportElement.dataset.element).toBe('scene');
    });

    it('resets camera position and zoom', () => {
        panZoomService.setCamera({x: 200, y: -100, zoom: 2, offsetX: 0, offsetY: 0});
        panZoomOptions.leftPosition = 100;
        panZoomOptions.topPosition = 120;

        component.resetPanzoom();

        expect(panZoomService.snapshot()).toEqual({
            x: 0,
            y: 0,
            zoom: 1,
            offsetX: 0,
            offsetY: 0,
        });
    });

    it('emits scale in percents on zoom updates', async () => {
        const scaleSpy = jest.fn();

        component.scale.subscribe(scaleSpy);
        component.setScale(1.5);
        await fixture.whenStable();

        expect(scaleSpy).toHaveBeenLastCalledWith(150);
    });

    it('blocks drag pan while panzoom is disabled', () => {
        const drag: DfDragDrop = {
            stage: DfDragDropStage.Move,
            sourceElement: document.createElement('div'),
            distance: {deltaX: 100, deltaY: 50},
        };

        panZoomService.setDisabled(true);
        (component as any).onPan(drag);

        expect(panZoomService.snapshot().x).toBe(0);
        expect(panZoomService.snapshot().y).toBe(0);

        panZoomService.setDisabled(false);
        (component as any).onPan(drag);

        expect(panZoomService.snapshot().x).toBe(100);
        expect(panZoomService.snapshot().y).toBe(50);
    });

    it('updates container offsets on resize', () => {
        const controller = (component as any).panZoomController;

        (component as any).onBoardResize([
            {contentRect: {width: 1000, height: 800}},
        ] as unknown as ResizeObserverEntry[]);

        expect(controller.layoutOffset()).toEqual({x: 0, y: 0});
        expect(panZoomService.snapshot().offsetX).toBeCloseTo(0, 8);
        expect(panZoomService.snapshot().offsetY).toBeCloseTo(0, 8);

        panZoomOptions.leftPosition = 0;
        panZoomOptions.topPosition = 0;
        (component as any).onBoardResize([
            {contentRect: {width: 1000, height: 800}},
        ] as unknown as ResizeObserverEntry[]);

        expect(controller.layoutOffset()).toEqual({x: -500, y: -400});
        expect(panZoomService.snapshot().offsetX).toBe(500);
        expect(panZoomService.snapshot().offsetY).toBe(400);

        panZoomOptions.leftPosition = 100;
        panZoomOptions.topPosition = 120;
        (component as any).onBoardResize([
            {contentRect: {width: 1000, height: 800}},
        ] as unknown as ResizeObserverEntry[]);

        expect(controller.layoutOffset()).toEqual({x: -400, y: -280});
        expect(panZoomService.snapshot().offsetX).toBe(400);
        expect(panZoomService.snapshot().offsetY).toBe(280);

        panZoomOptions.leftPosition = null;
        panZoomOptions.topPosition = null;
        (component as any).onBoardResize([
            {contentRect: {width: 1000, height: 800}},
        ] as unknown as ResizeObserverEntry[]);

        expect(controller.layoutOffset()).toEqual({x: 0, y: 0});
        expect(panZoomService.snapshot().offsetX).toBeCloseTo(0, 8);
        expect(panZoomService.snapshot().offsetY).toBeCloseTo(0, 8);
    });

    it('combines camera and layout offsets in one transform', () => {
        panZoomOptions.leftPosition = 0;
        panZoomOptions.topPosition = 0;
        (component as any).onBoardResize([
            {contentRect: {width: 1000, height: 800}},
        ] as unknown as ResizeObserverEntry[]);

        panZoomService.setCamera({
            ...panZoomService.snapshot(),
            x: 100,
            y: 50,
            zoom: 2,
        });

        expect((component as any).panTransform()).toBe(
            'translate3d(100px, 50px, 0) scale(2)',
        );
    });

    it('does not shift transform when dynamic workspace bounds change', () => {
        panZoomOptions.leftPosition = 0;
        panZoomOptions.topPosition = 0;
        (component as any).onBoardResize([
            {contentRect: {width: 1000, height: 800}},
        ] as unknown as ResizeObserverEntry[]);

        panZoomService.setCamera({
            ...panZoomService.snapshot(),
            x: 100,
            y: 50,
            zoom: 2,
        });

        const transformBeforeBoundsUpdate = (component as any).panTransform();

        panZoomService.upsertNodeBounds('node-1', {
            minX: 100,
            maxX: 300,
            minY: 50,
            maxY: 150,
        });

        expect((component as any).panTransform()).toBe(transformBeforeBoundsUpdate);
        expect((component as any).panTransform()).toBe(
            'translate3d(100px, 50px, 0) scale(2)',
        );
    });

    it('processes wheel events on host and updates zoom', async () => {
        fixture.nativeElement.dispatchEvent(
            new WheelEvent('wheel', {
                deltaY: 120,
                clientX: 100,
                clientY: 100,
                bubbles: true,
                cancelable: true,
            }),
        );
        await new Promise((resolve) => {
            setTimeout(resolve, 20);
        });

        expect(panZoomService.snapshot().zoom).not.toBe(1);
    });
});
