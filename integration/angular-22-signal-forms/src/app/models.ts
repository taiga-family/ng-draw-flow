import {
    DfConnectionPoint,
    type DfDataConnection,
    type DfDataModel,
    type DfDataNode,
} from '@ng-draw-flow/core';

export interface EditorFormModel {
    graph: DfDataModel;
}

const SOURCE_ID = 'source';
const TARGET_ID = 'target';

function createNode(id: string, x: number): DfDataNode {
    return {
        id,
        data: {
            label: id,
            type: 'consumer',
        },
        position: {x, y: 120},
    };
}

function createConnection(sourceId: string, targetId: string): DfDataConnection {
    return {
        source: {
            connectorId: `${sourceId}-output`,
            connectorType: DfConnectionPoint.Output,
            nodeId: sourceId,
        },
        target: {
            connectorId: `${targetId}-input`,
            connectorType: DfConnectionPoint.Input,
            nodeId: targetId,
        },
    };
}

export function createConnectedModel(): DfDataModel {
    return {
        connections: [createConnection(SOURCE_ID, TARGET_ID)],
        nodes: [createNode(SOURCE_ID, 120), createNode(TARGET_ID, 460)],
    };
}

export function createCycleModel(): DfDataModel {
    const model = createConnectedModel();

    return {
        ...model,
        connections: [...model.connections, createConnection(TARGET_ID, SOURCE_ID)],
    };
}

export function createIsolatedModel(): DfDataModel {
    const model = createConnectedModel();

    return {
        ...model,
        nodes: [...model.nodes, createNode('isolated', 800)],
    };
}

export function createReplacementModel(): DfDataModel {
    return {
        connections: [],
        nodes: [createNode('replacement', 260)],
    };
}
