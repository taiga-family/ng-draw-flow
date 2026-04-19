import {signal} from '@angular/core';
import {TestBed} from '@angular/core/testing';

import {
    DRAW_FLOW_DEFAULT_OPTIONS,
    DRAW_FLOW_OPTIONS,
} from '../../../ng-draw-flow.configs';
import {DfConnectorPosition} from '../../../ng-draw-flow.interfaces';
import {CoordinatesService} from '../../../services/coordinates.service';
import {PanZoomService} from '../../pan-zoom/pan-zoom.service';
import {DraftConnectionService} from './draft-connection.service';

describe('DraftConnectionService', () => {
    let service: DraftConnectionService;
    let panZoomService: PanZoomService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                DraftConnectionService,
                PanZoomService,
                {provide: DRAW_FLOW_OPTIONS, useValue: DRAW_FLOW_DEFAULT_OPTIONS},
                {
                    provide: CoordinatesService,
                    useValue: {
                        getConnectionPointSignal: jest.fn(() => signal(null)),
                    },
                },
            ],
        });

        service = TestBed.inject(DraftConnectionService);
        panZoomService = TestBed.inject(PanZoomService);
    });

    afterEach(() => {
        service.ngOnDestroy();
    });

    it('updates draft target with pointer delta normalized by zoom', () => {
        panZoomService.setCamera({x: 0, y: 0, zoom: 2, offsetX: 0, offsetY: 0});

        service.target.set({
            point: {x: 100, y: 50},
            position: DfConnectorPosition.Left,
        });

        (service as any).onDragMove(
            {clientX: 10, clientY: 20} as PointerEvent,
            {clientX: 30, clientY: 10} as PointerEvent,
        );

        expect(service.target().point.x).toBeCloseTo(110, 6);
        expect(service.target().point.y).toBeCloseTo(45, 6);
    });
});
