import {MockBuilder, MockRender} from 'ng-mocks';

import {DfConnectorPosition} from '../ng-draw-flow.interfaces';
import {CoordinatesService} from './coordinates.service';

describe('CoordinatesService', () => {
    let service: CoordinatesService;

    beforeEach(async () => {
        await MockBuilder(CoordinatesService);
        service = MockRender(CoordinatesService).point.componentInstance;
    });

    it('adds and retrieves connection points', () => {
        const hash = 'node:1';
        const point = {x: 10, y: 20};

        service.addConnectionPoint(hash, point, DfConnectorPosition.Left);

        const connectionPoint = service.getConnectionPointSignal(hash);

        expect(connectionPoint()).toEqual({point, position: DfConnectorPosition.Left});
    });

    it('updates existing connection point', () => {
        const hash = 'node:1';
        const first = {x: 0, y: 0};
        const second = {x: 5, y: 5};

        service.addConnectionPoint(hash, first, DfConnectorPosition.Top);
        service.addConnectionPoint(hash, second, DfConnectorPosition.Bottom);

        const connectionPoint = service.getConnectionPointSignal(hash);

        expect(connectionPoint()).toEqual({
            point: second,
            position: DfConnectorPosition.Bottom,
        });
    });

    it('invalidates and releases removed points while allowing the id to be reused', () => {
        service.addConnectionPoint('connector', {x: 1, y: 2}, DfConnectorPosition.Left);
        const removed = service.getConnectionPointSignal('connector');

        service.removeConnectionPoint('connector');
        expect(removed()).toBeNull();
        const replacement = service.getConnectionPointSignal('connector');

        expect(replacement).not.toBe(removed);
        service.addConnectionPoint('connector', {x: 3, y: 4}, DfConnectorPosition.Right);
        expect(replacement()).toEqual({
            point: {x: 3, y: 4},
            position: DfConnectorPosition.Right,
        });
        expect(removed()).toBeNull();
    });
});
