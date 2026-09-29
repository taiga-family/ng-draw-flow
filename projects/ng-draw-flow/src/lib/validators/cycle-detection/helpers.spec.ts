import {findCycleNodes} from './helpers';

describe('findCycleNodes', () => {
    it('detects a cycle in a disconnected component and reports actual cycle edges', () => {
        const adjacency = new Map([
            ['a', new Set(['b'])],
            ['b', new Set<string>()],
            ['c', new Set(['d'])],
            ['d', new Set(['e'])],
            ['e', new Set(['c'])],
        ]);
        const result = findCycleNodes(adjacency, [...adjacency.keys()]);

        expect(result).toEqual(['c', 'd', 'e', 'c']);
    });

    it('examines each adjacency list once despite many converging pending paths', () => {
        const ids = Array.from({length: 40}, (_, index) => String(index));
        const adjacency = new Map(
            ids.map((id, index) => [id, new Set(ids.slice(index + 1).reverse())]),
        );
        const read = jest.spyOn(adjacency, 'get');

        expect(findCycleNodes(adjacency, ids)).toEqual([]);
        expect(read).toHaveBeenCalledTimes(ids.length);

        read.mockRestore();
    });

    it('matches independent topological elimination for every directed three-node graph', () => {
        const ids = ['0', '1', '2'];

        for (let mask = 0; mask < 1 << 9; mask++) {
            const adjacency = new Map(ids.map((id) => [id, new Set<string>()]));

            for (let edge = 0; edge < 9; edge++) {
                if (mask & (1 << edge)) {
                    adjacency.get(String(Math.floor(edge / 3)))!.add(String(edge % 3));
                }
            }

            const result = findCycleNodes(adjacency, ids);

            expect(Boolean(result.length)).toBe(hasCycle(adjacency, ids));
            expect(result[0]).toBe(result[result.length - 1]);

            result.slice(1).forEach((id, index) => {
                expect(adjacency.get(result[index]!)!.has(id)).toBe(true);
            });
        }
    });
});

function hasCycle(adjacency: Map<string, Set<string>>, ids: string[]): boolean {
    const incoming = new Map(ids.map((id) => [id, 0]));

    adjacency.forEach((targets) => {
        targets.forEach((id) => {
            incoming.set(id, incoming.get(id)! + 1);
        });
    });

    const pending = ids.filter((id) => incoming.get(id) === 0);
    let visited = 0;

    while (pending.length) {
        visited++;

        adjacency.get(pending.pop()!)!.forEach((target) => {
            const degree = incoming.get(target)! - 1;

            incoming.set(target, degree);

            if (!degree) {
                pending.push(target);
            }
        });
    }

    return visited !== ids.length;
}
