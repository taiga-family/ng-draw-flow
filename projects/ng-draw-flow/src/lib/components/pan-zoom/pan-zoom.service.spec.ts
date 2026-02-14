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

    const setup = (): PanZoomService => {
        TestBed.configureTestingModule({
            providers: [
                PanZoomService,
                {
                    provide: DF_PAN_ZOOM_OPTIONS,
                    useValue: {...options},
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

        expect(service.panSize()).toBe(2000);
    });

    it('expands panSize when a node approaches workspace edge', () => {
        const service = setup();

        service.setNodeBounds('node-1', {
            minX: 900,
            maxX: 1100,
            minY: -50,
            maxY: 50,
        });

        expect(service.panSize()).toBe(3000);
    });

    it('shrinks panSize back to base value after bounds removal', () => {
        const service = setup();

        service.setNodeBounds('node-1', {
            minX: -1700,
            maxX: -1400,
            minY: -100,
            maxY: 100,
        });
        expect(service.panSize()).toBe(4200);

        service.removeNodeBounds('node-1');
        expect(service.panSize()).toBe(2000);
    });
});
