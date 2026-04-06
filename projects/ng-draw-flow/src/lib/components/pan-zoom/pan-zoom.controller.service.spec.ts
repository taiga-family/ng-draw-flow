import {TestBed} from '@angular/core/testing';

import {type DfDragDrop, DfDragDropStage} from '../../directives/drag-drop';
import {
    clampByUsableRect,
    getViewportZeroPoint,
    moveBy,
    zoomAtPoint,
} from './pan-zoom.camera.math';
import {PanZoomControllerService} from './pan-zoom.controller.service';
import {
    DF_PAN_ZOOM_DEFAULT_OPTIONS,
    DF_PAN_ZOOM_OPTIONS,
    type DfPanZoomOptions,
} from './pan-zoom.options';
import {PanZoomService} from './pan-zoom.service';

describe('PanZoomControllerService', () => {
    let service: PanZoomControllerService;
    let panZoomService: PanZoomService;
    let panZoomOptions: DfPanZoomOptions;

    const viewportSize = {width: 1000, height: 800};

    beforeEach(() => {
        panZoomOptions = {
            ...DF_PAN_ZOOM_DEFAULT_OPTIONS,
            panSize: 2000,
            leftPosition: null,
            topPosition: null,
            zoomAnimationDuration: 1,
        };

        TestBed.configureTestingModule({
            providers: [
                PanZoomControllerService,
                PanZoomService,
                {
                    provide: DF_PAN_ZOOM_OPTIONS,
                    useValue: panZoomOptions,
                },
            ],
        });

        service = TestBed.inject(PanZoomControllerService);
        panZoomService = TestBed.inject(PanZoomService);
        service.syncContainerOffsets(viewportSize);
    });

    afterEach(() => {
        TestBed.resetTestingModule();
    });

    it('batches mixed gestures into a single camera commit per flush', () => {
        const setCameraSpy = jest.spyOn(panZoomService, 'setCamera');
        const initialCamera = panZoomService.snapshot();

        service.queueGesture({type: 'pan', deltaX: 100, deltaY: 50});
        service.queueGesture({
            type: 'zoom',
            point: {x: 0, y: 0},
            deltaScale: 0.25,
        });
        service.flushGestures();

        const expected = clampByUsableRect(
            zoomAtPoint(
                moveBy(initialCamera, 100, 50),
                {x: 0, y: 0},
                initialCamera.zoom + 0.25,
                panZoomOptions,
            ),
            panZoomService.usableRect(),
            viewportSize,
            getViewportZeroPoint(viewportSize, panZoomOptions),
        );

        expect(setCameraSpy).toHaveBeenCalledTimes(1);
        expect(panZoomService.snapshot()).toEqual(expected);
    });

    it('emits a single scale update for multiple zoom gestures flushed together', () => {
        const scaleSpy = jest.fn();

        service.scaleChanges$.subscribe(scaleSpy);
        service.queueGesture({
            type: 'zoom',
            point: {x: 120, y: -60},
            deltaScale: 0.1,
        });
        service.queueGesture({
            type: 'zoom',
            point: {x: 120, y: -60},
            deltaScale: 0.1,
        });
        service.flushGestures();

        expect(scaleSpy).toHaveBeenCalledTimes(1);
        expect(scaleSpy).toHaveBeenLastCalledWith(120);
    });

    it('ignores drag pan updates while panzoom is disabled', () => {
        const drag: DfDragDrop = {
            stage: DfDragDropStage.Move,
            sourceElement: document.createElement('div'),
            distance: {deltaX: 100, deltaY: 50},
        };
        const renderSpy = jest.fn();

        service.renderRequests$.subscribe(renderSpy);
        panZoomService.setDisabled(true);
        service.handlePan(drag);

        expect(panZoomService.snapshot().x).toBe(0);
        expect(panZoomService.snapshot().y).toBe(0);
        expect(renderSpy).not.toHaveBeenCalled();
    });

    it('syncs layout offsets and legacy camera offsets on resize', () => {
        panZoomOptions.leftPosition = 100;
        panZoomOptions.topPosition = 120;

        service.syncContainerOffsets(viewportSize);

        expect(service.layoutOffset()).toEqual({x: -400, y: -280});
        expect(panZoomService.snapshot().offsetX).toBe(400);
        expect(panZoomService.snapshot().offsetY).toBe(280);
    });
});
