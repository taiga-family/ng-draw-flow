import type {DfConnectorData, DfPoint} from '../../../../../../ng-draw-flow.interfaces';
import {DfConnectorPosition} from '../../../../../../ng-draw-flow.interfaces';
import {point} from '../../../point';
import {MIN_SEGMENT_LENGTH} from '../smooth-step.consts';
import {computeWaypoints} from './waypoints';

const asConnector = (p: DfPoint, pos: DfConnectorPosition): DfConnectorData => ({
    point: p,
    position: pos,
});

describe('computeWaypoints', () => {
    /** Case A ─ Opposite sides (Right ➜ Left) */
    it('builds two vertical-split elbows and correct center (Right→Left)', () => {
        const source = asConnector(point(0, 0), DfConnectorPosition.Right);
        const target = asConnector(point(100, 50), DfConnectorPosition.Left);

        const [poly, cx, cy] = computeWaypoints({
            source: source.point,
            sourcePos: source.position!,
            target: target.point,
            targetPos: target.position!,
        });

        // 1) Start / end points
        expect(poly[0]).toEqual(source.point);
        expect(poly.at(-1)).toEqual(target.point);

        // 2) Gaps = MIN_SEGMENT_LENGTH along the connector direction
        expect(poly[1]).toEqual({x: 0 + MIN_SEGMENT_LENGTH, y: 0});
        expect(poly.at(-2)).toEqual({x: 100 - MIN_SEGMENT_LENGTH, y: 50});

        // 3) Two elbows share the same X (vertical split through center)
        const elbow1 = poly[2]!;
        const elbow2 = poly[3]!;

        expect(elbow1.x).toBe(cx);
        expect(elbow2.x).toBe(cx);
        expect(elbow1.y).toBe(0);
        expect(elbow2.y).toBe(50);

        // 4) Center = midpoint on X between nodes, Y = halfway vertically
        expect(cx).toBe(50);
        expect(cy).toBe(25);
    });

    /** Case B ─ Same / mixed (Right ➜ Right) */
    it('builds one elbow and center on the longest vertical leg (Right→Right)', () => {
        const source = asConnector(point(0, 0), DfConnectorPosition.Right);
        const target = asConnector(point(0, 100), DfConnectorPosition.Right);

        const [poly, cx, cy] = computeWaypoints({
            source: source.point,
            sourcePos: source.position!,
            target: target.point,
            targetPos: target.position!,
        });

        // poly = [src, srcGap, elbow, tgtGap, tgt] → 5 points
        expect(poly).toHaveLength(5);

        // Check the single elbow
        const elbow = poly[2]!;

        expect(elbow).toEqual({x: 0 + MIN_SEGMENT_LENGTH, y: 100});

        // Center must lie on the longest vertical segment
        expect(cx).toBe(elbow.x);
        expect(cy).toBeCloseTo((0 + 100) / 2);
    });

    /** Validate the custom offset parameter */
    it('honours custom offset parameter', () => {
        const custom = 40;
        const source = asConnector(point(0, 0), DfConnectorPosition.Bottom);
        const target = asConnector(point(0, 80), DfConnectorPosition.Top);

        const [poly] = computeWaypoints({
            source: source.point,
            sourcePos: source.position!,
            target: target.point,
            targetPos: target.position!,
            offset: custom,
        });

        // Gap values should equal `custom`
        expect(poly[1]).toEqual({x: 0, y: 0 + custom});
        expect(poly.at(-2)).toEqual({x: 0, y: 80 - custom});
    });

    /** centerOverride should remain untouched (Case A scenario) */
    it('keeps provided centerOverride when given', () => {
        const source = asConnector(point(0, 0), DfConnectorPosition.Right);
        const target = asConnector(point(100, 0), DfConnectorPosition.Left);

        const override = {x: 60, y: 10};

        const [, cx, cy] = computeWaypoints({
            source: source.point,
            sourcePos: source.position!,
            target: target.point,
            targetPos: target.position!,
            centerOverride: override,
        });

        expect(cx).toBe(override.x);
        expect(cy).toBe(override.y);
    });
});
