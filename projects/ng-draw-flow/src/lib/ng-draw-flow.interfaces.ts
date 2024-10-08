import type {Type} from '@angular/core';

import type {DrawFlowBaseNode} from './ng-draw-flow-node.base';

export type DfComponents = Record<string, Type<DrawFlowBaseNode>>;

export interface DfPoint {
    x: number;
    y: number;
}

export interface DfDelta {
    deltaX: number;
    deltaY: number;
}

export interface DfDataModel {
    nodes: Map<string, DfDataInitialNode | DfDataNode>;
    connections: DfDataConnection[];
}

export interface DfDataInitialNode {
    id: string;
    data: {
        type: string;
        [key: string]: any;
    };
    startNode?: boolean;
    endNode?: boolean;
}

export interface DfDataNode extends DfDataInitialNode {
    position: DfPoint;
}

export interface DfDataConnection {
    source: DfDataConnector;
    target: DfDataConnector;
}

export type DfId = string;

export interface DfDataConnector {
    readonly nodeId: DfId;
    readonly connectorType: DfConnectionPoint;
    readonly connectorId: DfId;
}

export interface DfDataConnectorConfig {
    readonly nodeId: DfId;
    readonly connectorId: DfId;
    readonly single: boolean;
}

export enum DfConnectionPoint {
    Input = 'input',
    Output = 'output',
}

export interface DfEvent<T> {
    readonly target: T;
    readonly model: DfDataModel;
}
