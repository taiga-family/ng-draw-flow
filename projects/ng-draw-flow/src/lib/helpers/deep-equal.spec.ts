import {deepEqual} from './deep-equal';

describe('deepEqual', () => {
    // Primitive values tests
    describe('primitives', () => {
        it('should compare numbers correctly', () => {
            expect(deepEqual(1, 1)).toBe(true);
            expect(deepEqual(1, 2)).toBe(false);
            expect(deepEqual(0, 0)).toBe(true);
            expect(deepEqual(-1, -1)).toBe(true);
            expect(deepEqual(Infinity, Infinity)).toBe(true);
            expect(deepEqual(Infinity, -Infinity)).toBe(false);
        });

        it('should handle NaN correctly', () => {
            expect(deepEqual(NaN, NaN)).toBe(true);
            expect(deepEqual(NaN, 1)).toBe(false);
        });

        it('should compare strings correctly', () => {
            expect(deepEqual('hello', 'hello')).toBe(true);
            expect(deepEqual('hello', 'world')).toBe(false);
            expect(deepEqual('', '')).toBe(true);
        });

        it('should compare booleans correctly', () => {
            expect(deepEqual(true, true)).toBe(true);
            expect(deepEqual(false, false)).toBe(true);
            expect(deepEqual(true, false)).toBe(false);
        });

        it('should handle null and undefined correctly', () => {
            expect(deepEqual(null, null)).toBe(true);
            expect(deepEqual(undefined, undefined)).toBe(true);
            expect(deepEqual(null, undefined)).toBe(false);
            expect(deepEqual(undefined, null)).toBe(false);
            expect(deepEqual(null, 0)).toBe(false);
            expect(deepEqual(undefined, '')).toBe(false);
        });
    });

    // Array tests
    describe('arrays', () => {
        it('should compare empty arrays correctly', () => {
            expect(deepEqual([], [])).toBe(true);
        });

        it('should compare simple arrays correctly', () => {
            expect(deepEqual([1, 2, 3], [1, 2, 3])).toBe(true);
            expect(deepEqual([1, 2, 3], [1, 2, 4])).toBe(false);
            expect(deepEqual([1, 2, 3], [1, 2])).toBe(false);
        });

        it('should compare nested arrays correctly', () => {
            expect(deepEqual([1, [2, 3]], [1, [2, 3]])).toBe(true);
            expect(deepEqual([1, [2, 3]], [1, [2, 4]])).toBe(false);
            expect(deepEqual([1, [2, [3, 4]]], [1, [2, [3, 4]]])).toBe(true);
        });

        it('should compare arrays with objects correctly', () => {
            expect(deepEqual([{a: 1}], [{a: 1}])).toBe(true);
            expect(deepEqual([{a: 1}], [{a: 2}])).toBe(false);
            expect(deepEqual([{a: 1, b: [1, 2]}], [{a: 1, b: [1, 2]}])).toBe(true);
        });

        it('should compare arrays with mixed types correctly', () => {
            expect(deepEqual([1, 'a', true], [1, 'a', true])).toBe(true);
            expect(deepEqual([1, 'a', true], [1, 'a', false])).toBe(false);
        });
    });

    // Object tests
    describe('objects', () => {
        it('should compare empty objects correctly', () => {
            expect(deepEqual({}, {})).toBe(true);
        });

        it('should compare simple objects correctly', () => {
            expect(deepEqual({a: 1, b: 2}, {a: 1, b: 2})).toBe(true);
            expect(deepEqual({a: 1, b: 2}, {a: 1, b: 3})).toBe(false);
            expect(deepEqual({a: 1, b: 2}, {a: 1})).toBe(false);
        });

        it('should compare nested objects correctly', () => {
            expect(deepEqual({a: {b: 1}}, {a: {b: 1}})).toBe(true);
            expect(deepEqual({a: {b: 1}}, {a: {b: 2}})).toBe(false);
            expect(deepEqual({a: {b: {c: 3}}}, {a: {b: {c: 3}}})).toBe(true);
        });

        it('should compare objects with arrays correctly', () => {
            expect(deepEqual({a: [1, 2]}, {a: [1, 2]})).toBe(true);
            expect(deepEqual({a: [1, 2]}, {a: [1, 3]})).toBe(false);
        });

        it('should handle objects with different key order', () => {
            expect(deepEqual({a: 1, b: 2}, {b: 2, a: 1})).toBe(true);
        });
    });

    // Date tests
    describe('dates', () => {
        it('should compare dates correctly', () => {
            expect(deepEqual(new Date('2023-01-01'), new Date('2023-01-01'))).toBe(true);
            expect(deepEqual(new Date('2023-01-01'), new Date('2023-01-02'))).toBe(false);
        });

        it('should handle dates in objects', () => {
            expect(
                deepEqual({date: new Date('2023-01-01')}, {date: new Date('2023-01-01')}),
            ).toBe(true);
        });
    });

    // RegExp tests
    describe('regular expressions', () => {
        it('should compare regular expressions correctly', () => {
            expect(deepEqual(/abc/, /abc/)).toBe(true);
            expect(deepEqual(/abc/g, /abc/g)).toBe(true);
            expect(deepEqual(/abc/, /def/)).toBe(false);
            expect(deepEqual(/abc/g, /abc/i)).toBe(false);
        });
    });

    // Map tests
    describe('maps', () => {
        it('should compare empty maps correctly', () => {
            expect(deepEqual(new Map(), new Map())).toBe(true);
        });

        it('should compare maps with primitive values', () => {
            const map1 = new Map([
                ['a', 1],
                ['b', 2],
            ]);
            const map2 = new Map([
                ['a', 1],
                ['b', 2],
            ]);
            const map3 = new Map([
                ['a', 1],
                ['b', 3],
            ]);

            expect(deepEqual(map1, map2)).toBe(true);
            expect(deepEqual(map1, map3)).toBe(false);
        });

        it('should compare maps with complex values', () => {
            const map1 = new Map([
                ['a', {x: 1}],
                ['b', [1, 2]],
            ]);
            const map2 = new Map([
                ['a', {x: 1}],
                ['b', [1, 2]],
            ]);
            const map3 = new Map([
                ['a', {x: 2}],
                ['b', [1, 2]],
            ]);

            expect(deepEqual(map1, map2)).toBe(true);
            expect(deepEqual(map1, map3)).toBe(false);
        });
    });

    // Set tests
    describe('sets', () => {
        it('should compare empty sets correctly', () => {
            expect(deepEqual(new Set(), new Set())).toBe(true);
        });

        it('should compare sets with primitive values', () => {
            const set1 = new Set([1, 2, 3]);
            const set2 = new Set([1, 2, 3]);
            const set3 = new Set([1, 2, 4]);
            const set4 = new Set([1, 2, 3]); // Different order but same values

            expect(deepEqual(set1, set2)).toBe(true);
            expect(deepEqual(set1, set3)).toBe(false);
            expect(deepEqual(set1, set4)).toBe(true); // Should be true as sets are unordered
        });

        it('should compare sets with complex values', () => {
            const set1 = new Set([{id: 1}, {id: 2}]);
            const set2 = new Set([{id: 1}, {id: 2}]);

            expect(deepEqual(set1, set2)).toBe(true);
        });
    });

    // Mixed type tests
    describe('mixed types', () => {
        it('should handle different types correctly', () => {
            expect(deepEqual([], {})).toBe(false);
            expect(deepEqual(null, {})).toBe(false);
            expect(deepEqual(undefined, [])).toBe(false);
        });

        it('should handle complex nested structures', () => {
            const obj1 = {
                a: 1,
                b: [1, 2, {c: 3}],
                d: {e: 4, f: [5, 6]},
                g: new Date('2023-01-01'),
                h: /abc/g,
                i: new Map([['j', 7]]),
                k: new Set([8, 9]),
            };

            const obj2 = {
                a: 1,
                b: [1, 2, {c: 3}],
                d: {e: 4, f: [5, 6]},
                g: new Date('2023-01-01'),
                h: /abc/g,
                i: new Map([['j', 7]]),
                k: new Set([8, 9]),
            };

            expect(deepEqual(obj1, obj2)).toBe(true);
        });
    });

    // Edge cases
    describe('edge cases', () => {
        it('should handle circular references', () => {
            const obj1: any = {a: 1};
            const obj2: any = {a: 1};

            obj1.self = obj1;
            obj2.self = obj2;

            expect(() => deepEqual(obj1, obj2)).not.toThrow();
        });

        it('should handle very deep objects', () => {
            // Create a deeply nested object
            const obj1: any = {};
            const obj2: any = {};
            let current1 = obj1;
            let current2 = obj2;

            for (let i = 0; i < 100; i++) {
                current1.next = {value: i};
                current2.next = {value: i};
                current1 = current1.next;
                current2 = current2.next;
            }

            expect(deepEqual(obj1, obj2)).toBe(true);

            // Change a value deep in the structure
            obj2.next.next.next.next.value = 999;

            expect(deepEqual(obj1, obj2)).toBe(false);
        });
    });
});
