import {point} from '../../../point';
import {getBezierEdgeCenter} from './bezier-edge-center';

describe('getBezierEdgeCenter', () => {
    it('returns identical point with zero offsets for a zero-length edge', () => {
        const result = getBezierEdgeCenter({
            source: point(10, 10),
            target: point(10, 10),
            sourceControlPoint: point(10, 10),
            targetControlPoint: point(10, 10),
        });

        expect(result).toEqual([10, 10, 0, 0]);
    });

    it('handles a purely horizontal segment (left ➜ right)', () => {
        const result = getBezierEdgeCenter({
            source: point(0, 0),
            target: point(100, 0),
            sourceControlPoint: point(0, 0),
            targetControlPoint: point(100, 0),
        });

        expect(result).toEqual([50, 0, 50, 0]);
    });

    it('handles a purely vertical segment (bottom ➜ top)', () => {
        const result = getBezierEdgeCenter({
            source: point(0, 100),
            target: point(0, 0),
            sourceControlPoint: point(0, 100),
            targetControlPoint: point(0, 0),
        });

        expect(result).toEqual([0, 50, 0, 50]);
    });

    it('handles a diagonal segment where target is top-left of source', () => {
        const result = getBezierEdgeCenter({
            source: point(100, 100),
            target: point(0, 0),
            sourceControlPoint: point(100, 100),
            targetControlPoint: point(0, 0),
        });

        expect(result).toEqual([50, 50, 50, 50]);
    });

    it('handles arbitrary negative coordinates', () => {
        const result = getBezierEdgeCenter({
            source: point(-10, -20),
            target: point(30, 40),
            sourceControlPoint: point(-10, -20),
            targetControlPoint: point(30, 40),
        });

        expect(result).toEqual([10, 10, 20, 30]);
    });
});
