import type {Type} from '@angular/core';

import type {DrawFlowBaseNode} from './ng-draw-flow-node.base';

export enum DfConnectionType {
    Bezier = 'bezier',
    SmoothStep = 'smoothStep',
    Step = 'step',
}

export enum DfConnectorPosition {
    Top = 'top',
    Right = 'right',
    Bottom = 'bottom',
    Left = 'left',
}

export interface DfConnectionOptions {
    type: DfConnectionType;
    arrowhead: 'none' | 'triangle';
    curvature: number;
}

export interface DfOptions {
    connection: DfConnectionOptions;
    nodes: DfComponents;
}

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
    readonly position?: string;
}

export interface DfDataConnectorConfig {
    readonly nodeId: DfId;
    readonly connectorId: DfId;
    readonly single: boolean;
}

export interface DfConnectorData {
    point: DfPoint;
    position: DfConnectorPosition | null;
}

export enum DfConnectionPoint {
    Input = 'input',
    Output = 'output',
}

export interface DfEvent<T> {
    readonly target: T;
    readonly model: DfDataModel;
}

export interface DfPathCoords {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    radius: number;
}
