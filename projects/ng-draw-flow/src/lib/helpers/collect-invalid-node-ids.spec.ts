import {collectInvalidNodeIds} from './collect-invalid-node-ids';

describe('collectInvalidNodeIds', () => {
    it('returns ids from simple object', () => {
        const errors = {required: ['a', 'b']};

        expect(collectInvalidNodeIds(errors)).toEqual(new Set(['a', 'b']));
    });

    it('handles nested structure', () => {
        const errors = {custom: {nodeIds: ['c']}} as any;

        expect(collectInvalidNodeIds(errors)).toEqual(new Set(['c']));
    });

    it('returns empty set for null', () => {
        expect(collectInvalidNodeIds(null)).toEqual(new Set());
    });
});
