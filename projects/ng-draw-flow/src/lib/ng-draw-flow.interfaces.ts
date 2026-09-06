import {type Type} from '@angular/core';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {type DrawFlowBaseNode} from './ng-draw-flow-node.base';

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

/** Per-editor permissions. Omitted input fields inherit provider defaults. */
export interface DfInteractionOptions {
    readonly nodesDraggable: boolean;
    readonly nodesDeletable: boolean;
    readonly connectionsDeletable: boolean;
    readonly connectionsCreatable: boolean;
}

export interface DfWorkspaceOptions {
    nodeDragThreshold: number;
    /** @deprecated Bind interactionOptions.nodesDraggable on ng-draw-flow instead. */
    nodesDraggable: boolean;
    /** @deprecated Bind interactionOptions.nodesDeletable on ng-draw-flow instead. */
    nodesDeletable: boolean;
    /** @deprecated Bind interactionOptions.connectionsDeletable on ng-draw-flow instead. */
    connectionsDeletable: boolean;
    /** @deprecated Bind interactionOptions.connectionsCreatable on ng-draw-flow instead. */
    connectionsCreatable: boolean;
}

export type DfNodePositionAnimationEasing = 'ease-in-out' | 'linear';

export interface DfNodePositionAnimationOptions {
    duration: number;
    easing: DfNodePositionAnimationEasing;
}

export interface DfOptions {
    connection: DfConnectionOptions;
    nodes: DfComponents;
    options: DfWorkspaceOptions;
    positionAnimation?: DfNodePositionAnimationOptions;
}

export interface DfOptionsInput {
    connection?: Partial<DfConnectionOptionsInput>;
    nodes?: DfComponents;
    options?: Partial<DfWorkspaceOptions>;
    positionAnimation?: Partial<DfNodePositionAnimationOptions>;
}

export type DfComponents = Record<string, Type<DrawFlowBaseNode>>;

export interface DfPoint {
    x: number;
    y: number;
}

export interface DfNodeSize {
    width: number;
    height: number;
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
    /**
     * Additional CSS class or classes applied to the node wrapper.
     * Use it to target a particular node from application styles without
     * coupling styles to the node content implementation.
     */
    className?: string[] | string;
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
    readonly data?: Record<string, unknown>;
}

export interface DfConnectorContentContext {
    readonly $implicit: DfDataConnectorConfig;
}

export interface DfConnectorData {
    point: DfPoint;
    position: DfConnectorPosition | null;
}

export enum DfConnectionPoint {
    Input = 'input',
    Output = 'output',
}

export enum DfOutputMode {
    Action = 'action',
    Connection = 'connection',
}

export interface DfEvent<T> {
    readonly target: T;
    readonly model: DfDataModel;
}
