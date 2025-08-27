import {DfConnectorPosition} from '../../../../../../ng-draw-flow.interfaces';
import {point} from '../../../point';
import {getPrimaryDirection} from './get-primary-direction';

describe('getPrimaryDirection', () => {
    describe('Horizontal connectors (Left / Right)', () => {
        it('returns {1,0} when target is to the right', () => {
            const dir = getPrimaryDirection(
                point(0, 0),
                DfConnectorPosition.Left,
                point(10, 0),
            );

            expect(dir).toEqual({x: 1, y: 0});
        });

        it('returns {-1,0} when target is to the left', () => {
            const dir = getPrimaryDirection(
                point(10, 0),
                DfConnectorPosition.Right,
                point(0, 0),
            );

            expect(dir).toEqual({x: -1, y: 0});
        });

        it('returns {-1,0} when target.x equals source.x (ties go “back”)', () => {
            const dir = getPrimaryDirection(
                point(5, 0),
                DfConnectorPosition.Left,
                point(5, 10),
            );

            expect(dir).toEqual({x: -1, y: 0});
        });
    });

    describe('Vertical connectors (Top / Bottom)', () => {
        it('returns {0,1} when target is below', () => {
            const dir = getPrimaryDirection(
                point(0, 0),
                DfConnectorPosition.Top,
                point(0, 10),
            );

            expect(dir).toEqual({x: 0, y: 1});
        });

        it('returns {0,-1} when target is above', () => {
            const dir = getPrimaryDirection(
                point(0, 10),
                DfConnectorPosition.Bottom,
                point(0, 0),
            );

            expect(dir).toEqual({x: 0, y: -1});
        });

        it('returns {0,-1} when target.y equals source.y (ties go “back”)', () => {
            const dir = getPrimaryDirection(
                point(0, 5),
                DfConnectorPosition.Top,
                point(10, 5),
            );

            expect(dir).toEqual({x: 0, y: -1});
        });
    });
});
