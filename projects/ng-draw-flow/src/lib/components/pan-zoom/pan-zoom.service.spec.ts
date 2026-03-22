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

    it('uses configured panSize as initial value', () => {
        const service = setup();

        expect(service.panSize()).toEqual({width: 2000, height: 2000});
        expect(service.usableRect()).toEqual({
            minX: -1000,
            maxX: 1000,
            minY: -1000,
            maxY: 1000,
        });
    });

    it('supports object panSize shape', () => {
        const service = setup({panSize: {width: 3200, height: 1800}});

        expect(service.panSize()).toEqual({width: 3200, height: 1800});
        expect(service.usableRect()).toEqual({
            minX: -1600,
            maxX: 1600,
            minY: -900,
            maxY: 900,
        });
    });

    it('uses 2000 default panSize when panSize is not configured', () => {
        const service = setup({panSize: undefined});

        expect(service.panSize()).toEqual({width: 2000, height: 2000});
        expect(service.usableRect()).toEqual({
            minX: -1000,
            maxX: 1000,
            minY: -1000,
            maxY: 1000,
        });
    });

    it('falls back to default panSize for invalid number value', () => {
        const service = setup({panSize: 0});

        expect(service.panSize()).toEqual({width: 2000, height: 2000});
    });

    it('falls back to default panSize for invalid object value', () => {
        const service = setup({panSize: {width: Number.NaN, height: 1000}});

        expect(service.panSize()).toEqual({width: 2000, height: 2000});
    });
});
