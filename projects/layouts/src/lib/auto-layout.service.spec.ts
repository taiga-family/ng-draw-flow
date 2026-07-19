import {signal} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {
    DF_CONNECTOR_ORDER_REGISTRY,
    DF_NODE_SIZE_REGISTRY,
    type DfNodeConnectorOrders,
    type DfNodeSize,
    NgDrawFlowStoreService,
} from '@ng-draw-flow/core';

import {
    DfConnectionPoint,
    type DfDataConnection,
    type DfDataModel,
    type DfDataNode,
} from '../../../ng-draw-flow/src/lib/ng-draw-flow.interfaces';
import {DfAutoLayoutService} from './auto-layout.service';
import {DfNodeSizingStrategy} from './layout.interfaces';
import {DF_TREE_LAYOUT_OPTIONS} from './tree-layout-options.token';

jest.mock('@ng-draw-flow/core', () => ({
    DF_CONNECTOR_ORDER_REGISTRY: Symbol('DF_CONNECTOR_ORDER_REGISTRY'),
    DF_NODE_SIZE_REGISTRY: Symbol('DF_NODE_SIZE_REGISTRY'),
    NgDrawFlowStoreService: class {},
}));

function connection(
    source: string,
    target: string,
    sourceConnectorId = `${source}-output`,
): DfDataConnection {
    return {
        source: {
            nodeId: source,
            connectorId: sourceConnectorId,
            connectorType: DfConnectionPoint.Output,
        },
        target: {
            nodeId: target,
            connectorId: `${target}-input`,
            connectorType: DfConnectionPoint.Input,
        },
    };
}

describe('DfAutoLayoutService', () => {
    const sourceModel: DfDataModel = {
        nodes: [
            {id: 'root', data: {type: 'node'}, position: {x: 100, y: 100}},
            {id: 'child', data: {type: 'node'}, position: {x: 300, y: 100}},
        ],
        connections: [connection('root', 'child')],
    };

    let service: DfAutoLayoutService;
    let setDataModel: jest.Mock;

    beforeEach(() => {
        setDataModel = jest.fn();

        TestBed.configureTestingModule({
            providers: [
                DfAutoLayoutService,
                {
                    provide: NgDrawFlowStoreService,
                    useValue: {
                        dataModel: jest.fn(() => sourceModel),
                        setDataModel,
                    },
                },
                {provide: DF_CONNECTOR_ORDER_REGISTRY, useValue: null},
                {provide: DF_NODE_SIZE_REGISTRY, useValue: null},
                {
                    provide: DF_TREE_LAYOUT_OPTIONS,
                    useValue: {
                        nodeSizing: {
                            strategy: DfNodeSizingStrategy.Fixed,
                            size: {width: 100, height: 40},
                        },
                        levelGap: 50,
                    },
                },
            ],
        });

        service = TestBed.inject(DfAutoLayoutService);
    });

    afterEach(() => {
        TestBed.resetTestingModule();
    });

    it('keeps the requested anchor node at its previous position', () => {
        service.apply({anchorNodeId: 'child'});

        expect(getPositions(service)).toEqual({
            child: {x: 300, y: 100},
            root: {x: 150, y: 100},
        });
        expect(setDataModel).toHaveBeenCalledWith(service.result()?.model);
    });

    it('publishes the strict-tree result without an anchor', () => {
        service.apply();

        expect(getPositions(service)).toEqual({
            child: {x: 250, y: 100},
            root: {x: 100, y: 100},
        });
        expect(service.error()).toBeNull();
    });

    it('keeps the result unchanged when the anchor is missing', () => {
        service.apply({anchorNodeId: 'missing'});

        expect(getPositions(service)).toEqual({
            child: {x: 250, y: 100},
            root: {x: 100, y: 100},
        });
    });

    it('layouts a supplied model without waiting for the store', () => {
        const nextModel: DfDataModel = {
            ...sourceModel,
            nodes: [
                ...sourceModel.nodes,
                {id: 'next', data: {type: 'node'}, position: {x: 0, y: 0}},
            ],
            connections: [...sourceModel.connections, connection('child', 'next')],
        };

        service.apply({model: nextModel});

        expect(service.result()?.model.nodes).toHaveLength(3);
        expect(setDataModel).toHaveBeenCalledWith(service.result()?.model);
    });

    it('clears the previous result when a later layout fails', () => {
        service.apply();

        expect(service.result()).not.toBeNull();

        setDataModel.mockClear();
        service.apply({
            model: {
                ...sourceModel,
                nodes: [
                    ...sourceModel.nodes,
                    {id: 'orphan', data: {type: 'node'}, position: {x: 0, y: 0}},
                ],
            },
        });

        expect(service.error()).toEqual(expect.objectContaining({code: 'invalid-root'}));
        expect(service.result()).toBeNull();
        expect(service.running()).toBe(false);
        expect(setDataModel).not.toHaveBeenCalled();
    });

    it('reapplies a measured layout after every node has a DOM size', () => {
        TestBed.resetTestingModule();

        const sizes = signal<ReadonlyMap<string, DfNodeSize>>(new Map());
        let currentModel = sourceModel;

        setDataModel = jest.fn((model: DfDataModel) => {
            currentModel = model;
        });

        TestBed.configureTestingModule({
            providers: [
                DfAutoLayoutService,
                {
                    provide: NgDrawFlowStoreService,
                    useValue: {
                        dataModel: jest.fn(() => currentModel),
                        setDataModel,
                    },
                },
                {
                    provide: DF_CONNECTOR_ORDER_REGISTRY,
                    useValue: null,
                },
                {
                    provide: DF_NODE_SIZE_REGISTRY,
                    useValue: {sizes: sizes.asReadonly()},
                },
                {
                    provide: DF_TREE_LAYOUT_OPTIONS,
                    useValue: {
                        nodeSizing: {
                            strategy: DfNodeSizingStrategy.Measured,
                            fallback: {width: 100, height: 40},
                        },
                        levelGap: 50,
                    },
                },
            ],
        });

        service = TestBed.inject(DfAutoLayoutService);
        service.apply();

        expect(getPositions(service).child).toEqual({x: 250, y: 100});

        sizes.set(
            new Map([
                ['child', {width: 300, height: 40}],
                ['root', {width: 200, height: 40}],
            ]),
        );
        TestBed.flushEffects();

        expect(getPositions(service).child).toEqual({x: 400, y: 100});
        expect(setDataModel).toHaveBeenCalledTimes(2);
    });

    it('reapplies the layout when connected output orders change', () => {
        TestBed.resetTestingModule();

        const orderedModel: DfDataModel = {
            nodes: [
                {id: 'root', data: {type: 'node'}, position: {x: 100, y: 100}},
                {id: 'first', data: {type: 'node'}, position: {x: 0, y: 0}},
                {id: 'second', data: {type: 'node'}, position: {x: 0, y: 0}},
            ],
            connections: [
                connection('root', 'first', 'root-output-1'),
                connection('root', 'second', 'root-output-2'),
            ],
        };
        const orders = signal<DfNodeConnectorOrders>(
            new Map([
                [
                    'root',
                    new Map([
                        ['root-output-1', 1],
                        ['root-output-2', 0],
                    ]),
                ],
            ]),
        );
        let currentModel = orderedModel;

        setDataModel = jest.fn((model: DfDataModel) => {
            currentModel = model;
        });

        TestBed.configureTestingModule({
            providers: [
                DfAutoLayoutService,
                {
                    provide: NgDrawFlowStoreService,
                    useValue: {
                        dataModel: jest.fn(() => currentModel),
                        setDataModel,
                    },
                },
                {
                    provide: DF_CONNECTOR_ORDER_REGISTRY,
                    useValue: {orders: orders.asReadonly()},
                },
                {provide: DF_NODE_SIZE_REGISTRY, useValue: null},
                {
                    provide: DF_TREE_LAYOUT_OPTIONS,
                    useValue: {
                        nodeSizing: {
                            strategy: DfNodeSizingStrategy.Fixed,
                            size: {width: 100, height: 40},
                        },
                        siblingGap: 20,
                    },
                },
            ],
        });

        service = TestBed.inject(DfAutoLayoutService);
        service.apply();

        expect(getPositions(service).second!.y).toBeLessThan(
            getPositions(service).first!.y,
        );

        orders.set(
            new Map([
                [
                    'root',
                    new Map([
                        ['root-output-1', 0],
                        ['root-output-2', 1],
                    ]),
                ],
            ]),
        );
        TestBed.flushEffects();

        expect(getPositions(service).first!.y).toBeLessThan(
            getPositions(service).second!.y,
        );
        expect(setDataModel).toHaveBeenCalledTimes(2);
    });
});

function getPositions(
    service: DfAutoLayoutService,
): Record<string, DfDataNode['position']> {
    return Object.fromEntries(
        (service.result()?.model.nodes ?? []).map((node) => [
            node.id,
            (node as DfDataNode).position,
        ]),
    );
}
