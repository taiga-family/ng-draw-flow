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

        const subject = service.getConnectionPoint(hash);

        expect(subject.value).toEqual({point, position: DfConnectorPosition.Left});
    });

    it('updates existing connection point', () => {
        const hash = 'node:1';
        const first = {x: 0, y: 0};
        const second = {x: 5, y: 5};

        service.addConnectionPoint(hash, first, DfConnectorPosition.Top);
        service.addConnectionPoint(hash, second, DfConnectorPosition.Bottom);

        const subject = service.getConnectionPoint(hash);

        expect(subject.value).toEqual({
            point: second,
            position: DfConnectorPosition.Bottom,
        });
    });

    // TODO
    it('returns BehaviorSubject<null> for unknown hash', () => {
        const subject = service.getConnectionPoint('missing');

        expect(subject.value).toBeNull();
    });
});
