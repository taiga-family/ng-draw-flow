import {
    type DfConnectionPoint,
    type DfDataConnection,
    type DfDataModel,
    type DfDataNode,
} from '@ng-draw-flow/core';

import {DfNodeSizingStrategy, DfTreeLayoutDirection} from '../layout.interfaces';
import {D3TreeLayoutEngine} from './d3-tree-layout.engine';
import {type DfTreeLayoutError} from './tree-layout.error';

const INPUT_CONNECTOR = 'input' as DfConnectionPoint;
const OUTPUT_CONNECTOR = 'output' as DfConnectionPoint;

function connection(source: string, target: string): DfDataConnection {
    return {
        source: {
            nodeId: source,
            connectorId: `${source}-output`,
            connectorType: OUTPUT_CONNECTOR,
        },
        target: {
            nodeId: target,
            connectorId: `${target}-input`,
            connectorType: INPUT_CONNECTOR,
        },
    };
}

function model(): DfDataModel {
    return {
        nodes: [
            {
                id: 'root',
                data: {type: 'node'},
                position: {x: 100, y: 200},
                startNode: true,
            },
            {id: 'first', data: {type: 'node'}},
            {id: 'second', data: {type: 'node'}},
        ],
        connections: [connection('root', 'first'), connection('root', 'second')],
    };
}

function setSourceConnectorIds(source: DfDataModel, connectorIds: string[]): void {
    source.connections = source.connections.map((connection, index) => ({
        ...connection,
        source: {
            ...connection.source,
            connectorId: connectorIds[index]!,
        },
    }));
}

describe('D3TreeLayoutEngine', () => {
    it('lays out a left-to-right tree and preserves the root position', () => {
        const result = new D3TreeLayoutEngine({
            nodeSizing: {
                strategy: DfNodeSizingStrategy.Fixed,
                size: {width: 100, height: 40},
            },
            levelGap: 50,
            siblingGap: 20,
        }).layout(model());
        const nodes = new Map(
            result.model.nodes.map((node) => [node.id, node as DfDataNode]),
        );

        expect(nodes.get('root')?.position).toEqual({x: 100, y: 200});
        expect(nodes.get('first')?.position.x).toBe(250);
        expect(nodes.get('second')?.position.x).toBe(250);
        expect(nodes.get('first')!.position.y).toBeLessThan(
            nodes.get('second')!.position.y,
        );
    });

    it('supports top-to-bottom orientation and a custom origin', () => {
        const source = model();

        source.nodes[0] = {
            id: 'root',
            data: {type: 'node'},
        };

        const result = new D3TreeLayoutEngine({
            direction: DfTreeLayoutDirection.TopToBottom,
            origin: {x: 10, y: 20},
            preserveRootPosition: false,
            nodeSizing: {
                strategy: DfNodeSizingStrategy.Fixed,
                size: {width: 100, height: 40},
            },
            levelGap: 60,
        }).layout(source);
        const nodes = new Map(
            result.model.nodes.map((node) => [node.id, node as DfDataNode]),
        );

        expect(nodes.get('root')?.position).toEqual({x: 10, y: 20});
        expect(nodes.get('first')?.position.y).toBe(120);
    });

    it('uses measured node sizes and falls back for missing measurements', () => {
        const result = new D3TreeLayoutEngine({
            nodeSizing: {
                strategy: DfNodeSizingStrategy.Measured,
                fallback: {width: 120, height: 40},
            },
            levelGap: 50,
            siblingGap: 20,
        }).layout(
            model(),
            new Map([
                ['first', {width: 200, height: 80}],
                ['root', {width: 100, height: 40}],
            ]),
        );
        const nodes = new Map(
            result.model.nodes.map((node) => [node.id, node as DfDataNode]),
        );

        expect(nodes.get('first')?.position.x).toBe(300);
        expect(nodes.get('second')?.position.x).toBe(300);
        expect(nodes.get('second')!.position.y - nodes.get('first')!.position.y).toBe(80);
    });

    it('orders children by their source output layout order', () => {
        const source = model();

        setSourceConnectorIds(source, ['root-lower-output', 'root-upper-output']);

        const result = new D3TreeLayoutEngine().layout(
            source,
            new Map(),
            new Map([
                [
                    'root',
                    new Map([
                        ['root-lower-output', 1],
                        ['root-upper-output', 0],
                    ]),
                ],
            ]),
        );
        const nodes = new Map(
            result.model.nodes.map((node) => [node.id, node as DfDataNode]),
        );

        expect(nodes.get('second')!.position.y).toBeLessThan(
            nodes.get('first')!.position.y,
        );
        expect(result.model.connections.map(({source}) => source.connectorId)).toEqual([
            'root-lower-output',
            'root-upper-output',
        ]);
    });

    it('requires layout order for every connected output when there are multiple', () => {
        const source = model();

        setSourceConnectorIds(source, ['root-output-1', 'root-output-2']);

        expect(() =>
            new D3TreeLayoutEngine().layout(
                source,
                new Map(),
                new Map([['root', new Map([['root-output-1', 0]])]]),
            ),
        ).toThrow(
            expect.objectContaining<Partial<DfTreeLayoutError>>({
                code: 'missing-output-order',
            }),
        );
    });

    it('rejects duplicate output layout orders', () => {
        const source = model();

        setSourceConnectorIds(source, ['root-output-1', 'root-output-2']);

        expect(() =>
            new D3TreeLayoutEngine().layout(
                source,
                new Map(),
                new Map([
                    [
                        'root',
                        new Map([
                            ['root-output-1', 0],
                            ['root-output-2', 0],
                        ]),
                    ],
                ]),
            ),
        ).toThrow(
            expect.objectContaining<Partial<DfTreeLayoutError>>({
                code: 'duplicate-output-order',
            }),
        );
    });

    it('rejects invalid output layout orders', () => {
        const source = model();

        setSourceConnectorIds(source, ['root-output-1', 'root-output-2']);

        expect(() =>
            new D3TreeLayoutEngine().layout(
                source,
                new Map(),
                new Map([
                    [
                        'root',
                        new Map([
                            ['root-output-1', 0],
                            ['root-output-2', 1.5],
                        ]),
                    ],
                ]),
            ),
        ).toThrow(
            expect.objectContaining<Partial<DfTreeLayoutError>>({
                code: 'invalid-output-order',
            }),
        );
    });

    it('rejects nodes with multiple parents', () => {
        const source = model();

        source.connections.push(connection('first', 'second'));

        expect(() => new D3TreeLayoutEngine().layout(source)).toThrow(
            expect.objectContaining<Partial<DfTreeLayoutError>>({
                code: 'multiple-parents',
            }),
        );
    });

    it('rejects disconnected graphs', () => {
        const source = model();

        source.nodes.push({id: 'orphan', data: {type: 'node'}});

        expect(() => new D3TreeLayoutEngine().layout(source)).toThrow(
            expect.objectContaining<Partial<DfTreeLayoutError>>({
                code: 'invalid-root',
            }),
        );
    });
});
