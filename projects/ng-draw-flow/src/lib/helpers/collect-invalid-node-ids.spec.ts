import {collectInvalidNodeIds} from './collect-invalid-node-ids';

describe('collectInvalidNodeIds', () => {
    it('returns ids from simple object', () => {
        const errors = {required: ['a', 'b']};

        expect(collectInvalidNodeIds(errors)).toEqual(new Set(['a', 'b']));
    });

    it('handles nested structure', () => {
        const errors = {custom: {nodeIds: ['c']}};

        expect(collectInvalidNodeIds(errors)).toEqual(new Set(['c']));
    });

    it('supports legacy cycle and isolated-node errors', () => {
        expect(
            collectInvalidNodeIds({
                hasCycle: true,
                cycleNodes: ['cycle-1', 'shared'],
                hasIsolatedNodes: true,
                isolatedNodes: ['isolated-1', 'shared'],
            }),
        ).toEqual(new Set(['cycle-1', 'isolated-1', 'shared']));
    });

    it('supports Signal Forms errors and compatibility contexts', () => {
        expect(
            collectInvalidNodeIds([
                {kind: 'cycle', nodeIds: ['a', 'b']},
                {kind: 'legacy', context: {isolatedNodes: ['c', 'a']}},
                {kind: 'legacy-array', context: ['d']},
            ]),
        ).toEqual(new Set(['a', 'b', 'c', 'd']));
    });

    it('combines built-in and custom Reactive Forms errors', () => {
        expect(
            collectInvalidNodeIds({
                hasCycle: true,
                cycleNodes: ['cycle'],
                custom: ['custom'],
                nested: {nodeIds: ['nested', 'cycle']},
            }),
        ).toEqual(new Set(['custom', 'cycle', 'nested']));
    });

    it('ignores invalid ids and arbitrary nested objects', () => {
        const fieldTree = Object.create(null) as Record<string, unknown>;

        Object.defineProperty(fieldTree, 'children', {
            get: () => {
                throw new Error('fieldTree must not be traversed');
            },
        });

        expect(
            collectInvalidNodeIds([
                {kind: 'invalid', nodeIds: ['valid', 42, null]},
                {kind: 'unknown', fieldTree, metadata: {nodeIds: ['hidden']}},
            ]),
        ).toEqual(new Set());
    });

    it('returns an empty set for empty and unrecognized errors', () => {
        expect(collectInvalidNodeIds([])).toEqual(new Set());
        expect(collectInvalidNodeIds({custom: {metadata: ['a']}})).toEqual(new Set());
    });

    it('returns empty set for null', () => {
        expect(collectInvalidNodeIds(null)).toEqual(new Set());
    });
});
