import {signal} from '@angular/core';
import {TestBed} from '@angular/core/testing';

import {
    DRAW_FLOW_DEFAULT_OPTIONS,
    DRAW_FLOW_OPTIONS,
} from '../../../ng-draw-flow.configs';
import {
    DfConnectionPoint,
    DfConnectorPosition,
    type DfDataConnector,
} from '../../../ng-draw-flow.interfaces';
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

    it('exposes signal state for active connector and created connection', () => {
        const createdSpy = jest.fn();
        const sourceConnector: DfDataConnector = {
            nodeId: 'source',
            connectorId: 'source-output',
            connectorType: DfConnectionPoint.Output,
        };
        const targetElement = document.createElement('div');

        targetElement.dataset.nodeId = 'target';
        targetElement.dataset.connectorId = 'target-input';
        targetElement.dataset.connectorType = DfConnectionPoint.Input;
        service.connectionCreated$.subscribe(createdSpy);

        (service as any).onDragStart(sourceConnector);

        expect(service.activeConnector()).toEqual(sourceConnector);

        (service as any).onDragEnd({target: targetElement} as unknown as PointerEvent);

        expect(service.activeConnector()).toBeNull();
        expect(service.lastConnectionCreated()).toEqual({
            source: sourceConnector,
            target: {
                nodeId: 'target',
                connectorId: 'target-input',
                connectorType: DfConnectionPoint.Input,
                position: undefined,
            },
            label: undefined,
        });
        expect(createdSpy).toHaveBeenCalledWith(service.lastConnectionCreated());
    });
});
