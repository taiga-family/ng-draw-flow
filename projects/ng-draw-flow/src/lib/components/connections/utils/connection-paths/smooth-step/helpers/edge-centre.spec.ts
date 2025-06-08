import {point} from '../../../point';
import {getEdgeCentre} from './edge-centre';

describe('getEdgeCentre', () => {
    it('returns identical point with zero offsets for a zero-length edge', () => {
        const result = getEdgeCentre({source: point(10, 10), target: point(10, 10)});

        expect(result).toEqual([10, 10, 0, 0]);
    });

    it('handles a purely horizontal segment (left ➜ right)', () => {
        const result = getEdgeCentre({source: point(0, 0), target: point(100, 0)});

        expect(result).toEqual([50, 0, 50, 0]);
    });

    it('handles a purely vertical segment (bottom ➜ top)', () => {
        const result = getEdgeCentre({source: point(0, 100), target: point(0, 0)});

        expect(result).toEqual([0, 50, 0, 50]);
    });

    it('handles a diagonal segment where target is top-left of source', () => {
        const result = getEdgeCentre({source: point(100, 100), target: point(0, 0)});

        expect(result).toEqual([50, 50, 50, 50]);
    });

    it('handles arbitrary negative coordinates', () => {
        const result = getEdgeCentre({source: point(-10, -20), target: point(30, 40)});

        expect(result).toEqual([10, 10, 20, 30]);
    });
});
