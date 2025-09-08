import type {Type} from '@angular/core';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

import type {DrawFlowBaseNode} from './ng-draw-flow-node.base';

export enum DfConnectionType {
    Bezier = 'bezier',
    SmoothStep = 'smoothStep',
}

export enum DfConnectorPosition {
    Top = 'top',
    Right = 'right',
    Bottom = 'bottom',
    Left = 'left',
}

export enum DfArrowhead {
    Arrow = 'arrow',
    ArrowClosed = 'arrowClosed',
    None = 'none',
}

export interface DfArrowheadOptions {
    type: DfArrowhead;
    width: number;
    height: number;
}

export interface DfArrowheadOptionsInput {
    type?: DfArrowhead;
    width?: number;
    height?: number;
}

export interface DfConnectionOptions {
    type: DfConnectionType;
    arrowhead: DfArrowheadOptions;
    curvature: number;
}

export interface DfConnectionOptionsInput {
    type: DfConnectionType;
    arrowhead: DfArrowheadOptionsInput;
    curvature: number;
}

export interface DfWorkspaceOptions {
    nodeDragThreshold: number;
    nodesDraggable: boolean;
    nodesDeletable: boolean;
    connectionsDeletable: boolean;
    connectionsCreatable: boolean;
}

export interface DfOptions {
    connection: DfConnectionOptions;
    nodes: DfComponents;
    options: DfWorkspaceOptions;
}

export interface DfOptionsInput {
    connection?: Partial<DfConnectionOptionsInput>;
    nodes?: DfComponents;
    options?: Partial<DfWorkspaceOptions>;
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
    nodes: Array<DfDataInitialNode | DfDataNode>;
    connections: DfDataConnection[];
}

export interface DfDataInitialNode {
    id: string;
    data: {
        type: string;
        connectionLabel?: DfConnectionLabel;
        [key: string]: any;
    };
    startNode?: boolean;
    endNode?: boolean;
}

export interface DfDataNode extends DfDataInitialNode {
    position: DfPoint;
}

export interface DfConnectionLabel<Content = unknown, Context = unknown> {
    content: PolymorpheusContent<Content>;
    context?: Context;
}

export interface DfDataConnection {
    source: DfDataConnector;
    target: DfDataConnector;
    label?: DfConnectionLabel;
}

export type DfId = string;

export interface DfDataConnector {
    readonly nodeId: DfId;
    readonly connectorType: DfConnectionPoint;
    readonly connectorId: DfId;
    readonly position?: string;
    readonly connectionLabel?: DfConnectionLabel;
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
