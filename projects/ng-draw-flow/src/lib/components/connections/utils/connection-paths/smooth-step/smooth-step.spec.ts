// --- mock lower-level helpers ---------------------------------------------
import {
    type DfConnectorData,
    DfConnectorPosition,
    type DfPoint,
} from '../../../../../ng-draw-flow.interfaces';
import {point} from '../../point';
import {bend} from './path-parts/bend';
import {computeWaypoints} from './path-parts/waypoints';
import {createSmoothStepPath} from './smooth-step';

jest.mock<typeof import('./path-parts/waypoints')>('./path-parts/waypoints', () => ({
    computeWaypoints: jest.fn(),
}));

jest.mock<typeof import('./path-parts/bend')>('./path-parts/bend', () => ({
    bend: jest.fn(),
}));

const asConnector = (p: DfPoint, pos: DfConnectorPosition | null): DfConnectorData => ({
    point: p,
    position: pos,
});

describe('createSmoothStepPath', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    /** Simple 2-point path: only M + L, no bends */
    it('returns an “M … L …” path for a straight 2-point polyline', () => {
        jest.mocked(computeWaypoints).mockReturnValueOnce([
            [point(0, 0), point(100, 0)],
            0,
            0,
        ]);

        const source = asConnector(point(0, 0), DfConnectorPosition.Right);
        const target = asConnector(point(100, 0), DfConnectorPosition.Left);

        const [path] = createSmoothStepPath(source, target);

        expect(path).toBe('M0 0L100 0');
        expect(bend).not.toHaveBeenCalled();
    });

    /** Polyline with an intermediate waypoint → bend called once */
    it('inserts a bend for each intermediate waypoint', () => {
        jest.mocked(computeWaypoints).mockReturnValueOnce([
            [point(0, 0), point(50, 0), point(50, 100)],
            0,
            0,
        ]);

        /** stub bend to a recognisable token */
        jest.mocked(bend).mockReturnValue('Qstub');

        const source = asConnector(point(0, 0), DfConnectorPosition.Right);
        const target = asConnector(point(50, 100), DfConnectorPosition.Left);

        const [path] = createSmoothStepPath(source, target);

        expect(path).toBe('M0 0QstubL50 100');
        expect(bend).toHaveBeenCalledTimes(1);
    });

    /** Radius parameter is forwarded to bend (custom radius) */
    it('forwards the supplied radius to bend()', () => {
        jest.mocked(computeWaypoints).mockReturnValueOnce([
            [point(0, 0), point(50, 0), point(50, 50)],
            0,
            0,
        ]);

        jest.mocked(bend).mockReturnValue('Q');

        const radius = 12;
        const source = asConnector(point(0, 0), DfConnectorPosition.Right);
        const target = asConnector(point(50, 50), DfConnectorPosition.Left);

        createSmoothStepPath(source, target, radius);

        // radius (last arg) must equal 12
        // eslint-disable-next-line
        const [_prev, _corner, _next, r] = jest.mocked(bend).mock.calls[0]!;

        expect(r).toBe(radius);
    });

    /** Omitting radius defaults to 5 px */
    it('defaults radius to 5 when not provided', () => {
        jest.mocked(computeWaypoints).mockReturnValueOnce([
            [point(0, 0), point(10, 0), point(10, 10)],
            0,
            0,
        ]);

        jest.mocked(bend).mockReturnValue('Q');

        const source = asConnector(point(0, 0), DfConnectorPosition.Top);
        const target = asConnector(point(10, 10), DfConnectorPosition.Bottom);

        createSmoothStepPath(source, target);

        const lastArg = jest.mocked(bend).mock.calls[0]![3];

        expect(lastArg).toBe(5);
    });
});
