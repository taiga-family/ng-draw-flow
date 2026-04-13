import {TestBed} from '@angular/core/testing';

import {DF_PAN_ZOOM_OPTIONS, type DfPanZoomOptions} from './pan-zoom.options';
import {PanZoomService} from './pan-zoom.service';

describe('PanZoomService', () => {
    const options: DfPanZoomOptions = {
        panSize: 2000,
        leftPosition: null,
        topPosition: null,
        minZoom: 0.25,
        maxZoom: 3,
        zoomStep: 0.25,
        zoomAnimationDuration: 300,
        zoomWheelSensitivity: 0.01,
        touchSensitivity: 0.01,
        wheelBehavior: 'zoom',
        wheelSpeed: 1,
        wheelStep: 0.008,
        pinchZoomSpeed: 1,
    };

    const setup = (overrides?: Partial<DfPanZoomOptions>): PanZoomService => {
        TestBed.configureTestingModule({
            providers: [
                PanZoomService,
                {
                    provide: DF_PAN_ZOOM_OPTIONS,
                    useValue: {...options, ...overrides},
                },
            ],
        });

        return TestBed.inject(PanZoomService);
    };

    afterEach(() => {
        TestBed.resetTestingModule();
    });

    it('derives workspace size from tracked node bounds', () => {
        const service = setup();

        expect(service.usableRect()).toEqual({
            minX: 0,
            maxX: 0,
            minY: 0,
            maxY: 0,
        });
        expect(service.panSize()).toEqual({width: 800, height: 800});

        service.upsertNodeBounds('node-1', {
            minX: -1000,
            maxX: 100,
            minY: -200,
            maxY: 150,
        });

        expect(service.usableRect()).toEqual({
            minX: -1000,
            maxX: 100,
            minY: -200,
            maxY: 150,
        });
        expect(service.panSize()).toEqual({width: 1900, height: 1150});
        expect(service.workspaceOrigin()).toEqual({x: 1400, y: 600});
        expect(service.workspaceCenter()).toEqual({x: -450, y: -25});
    });

    it('ignores panSize option values and always uses dynamic workspace sizing', () => {
        const service = setup({panSize: {width: 3200, height: 1800}});

        expect(service.panSize()).toEqual({width: 800, height: 800});

        service.upsertNodeBounds('node-1', {
            minX: -50,
            maxX: 50,
            minY: -25,
            maxY: 25,
        });

        expect(service.panSize()).toEqual({width: 900, height: 850});
    });

    it('returns subset bounds only when all requested nodes are registered', () => {
        const service = setup();

        service.upsertNodeBounds('node-1', {
            minX: -50,
            maxX: 50,
            minY: -25,
            maxY: 25,
        });

        expect(service.getBoundsForNodeIds(['node-1', 'node-2'])).toBeNull();

        service.upsertNodeBounds('node-2', {
            minX: 100,
            maxX: 180,
            minY: -10,
            maxY: 90,
        });

        expect(service.getBoundsForNodeIds(['node-1', 'node-2'])).toEqual({
            minX: -50,
            maxX: 180,
            minY: -25,
            maxY: 90,
        });
    });
});
