import {
    type DfDataInitialNode,
    type DfDataModel,
    type DfDataNode,
    type DfId,
    type DfNodeConnectorOrders,
    type DfNodeSize,
    type DfPoint,
} from '@ng-draw-flow/core';
import {hierarchy, tree} from 'd3-hierarchy';

import {
    type DfLayoutResult,
    DfNodeSizingStrategy,
    DfTreeLayoutDirection,
    type DfTreeLayoutOptions,
} from '../layout.interfaces';
import {DfTreeLayoutError} from './tree-layout.error';

type DfAnyNode = DfDataInitialNode | DfDataNode;

const DEFAULT_NODE_SIZE: DfNodeSize = {width: 180, height: 64};
const DEFAULT_LEVEL_GAP = 80;
const DEFAULT_SIBLING_GAP = 32;
const DEFAULT_ORIGIN: DfPoint = {x: 0, y: 0};
const EMPTY_CONNECTOR_ORDERS: DfNodeConnectorOrders = new Map();

export class D3TreeLayoutEngine {
    public readonly id = 'd3-tree';

    constructor(private readonly options: DfTreeLayoutOptions = {}) {}

    public layout(
        model: DfDataModel,
        measuredSizes: ReadonlyMap<DfId, DfNodeSize> = new Map(),
        connectorOrders: DfNodeConnectorOrders = EMPTY_CONNECTOR_ORDERS,
    ): DfLayoutResult {
        const direction = this.options.direction ?? DfTreeLayoutDirection.LeftToRight;

        if (!model.nodes.length) {
            return {
                model: {
                    ...model,
                    nodes: [],
                    connections: model.connections.slice(),
                },
                diagnostics: [],
            };
        }

        const graph = this.buildGraph(model, connectorOrders);
        const root = hierarchy(graph.root, (node) => graph.children.get(node.id) ?? []);
        const horizontal =
            direction === DfTreeLayoutDirection.LeftToRight ||
            direction === DfTreeLayoutDirection.RightToLeft;
        const sizes = new Map(
            model.nodes.map(({id}) => [id, this.resolveNodeSize(id, measuredSizes)]),
        );
        const breadthSize = (nodeId: DfId): number => {
            const size = sizes.get(nodeId)!;

            return horizontal ? size.height : size.width;
        };
        const depthSize = (nodeId: DfId): number => {
            const size = sizes.get(nodeId)!;

            return horizontal ? size.width : size.height;
        };
        const siblingGap = this.options.siblingGap ?? DEFAULT_SIBLING_GAP;
        const maxDepthSizes: number[] = [];

        root.each((node) => {
            maxDepthSizes[node.depth] = Math.max(
                maxDepthSizes[node.depth] ?? 0,
                depthSize(node.data.id),
            );
        });

        const depthOffsets = maxDepthSizes.map((_, depth) => {
            let offset = 0;

            for (let index = 1; index <= depth; index++) {
                offset +=
                    maxDepthSizes[index - 1]! / 2 +
                    (this.options.levelGap ?? DEFAULT_LEVEL_GAP) +
                    maxDepthSizes[index]! / 2;
            }

            return offset;
        });

        tree<DfAnyNode>()
            .nodeSize([1, 1])
            .separation((left, right) => {
                const distance =
                    (breadthSize(left.data.id) + breadthSize(right.data.id)) / 2 +
                    siblingGap;

                return left.parent === right.parent ? distance : distance * 1.25;
            })(root);

        const anchor = this.resolveAnchor(graph.root);
        const positions = new Map<string, DfPoint>();

        root.each((node) => {
            positions.set(
                node.data.id,
                this.orientPosition(
                    direction,
                    anchor,
                    node.x ?? 0,
                    depthOffsets[node.depth] ?? 0,
                ),
            );
        });

        return {
            model: {
                ...model,
                nodes: model.nodes.map((node) => ({
                    ...node,
                    data: {...node.data},
                    position: positions.get(node.id)!,
                })),
                connections: model.connections.map((connection) => ({
                    ...connection,
                    source: {...connection.source},
                    target: {...connection.target},
                    label: connection.label ? {...connection.label} : undefined,
                })),
            },
            diagnostics: [],
        };
    }

    private resolveNodeSize(
        nodeId: DfId,
        measuredSizes: ReadonlyMap<DfId, DfNodeSize>,
    ): DfNodeSize {
        const sizing = this.options.nodeSizing;

        if (sizing?.strategy === DfNodeSizingStrategy.Measured) {
            return measuredSizes.get(nodeId) ?? sizing.fallback;
        }

        return sizing?.strategy === DfNodeSizingStrategy.Fixed
            ? sizing.size
            : DEFAULT_NODE_SIZE;
    }

    private buildGraph(
        model: DfDataModel,
        connectorOrders: DfNodeConnectorOrders,
    ): {
        readonly root: DfAnyNode;
        readonly children: ReadonlyMap<string, readonly DfAnyNode[]>;
    } {
        const nodes = new Map<string, DfAnyNode>();

        model.nodes.forEach((node) => {
            if (nodes.has(node.id)) {
                throw new DfTreeLayoutError(
                    'duplicate-node',
                    `Tree layout requires unique node ids; "${node.id}" is duplicated.`,
                    [node.id],
                );
            }

            nodes.set(node.id, node);
        });

        const parentByChild = new Map<string, string>();
        const childrenByParent = new Map<string, DfAnyNode[]>();
        const sourceConnectorByChild = new Map<string, string>();
        const links = new Set<string>();

        model.connections.forEach((connection) => {
            const parentId = connection.source.nodeId;
            const childId = connection.target.nodeId;
            const parent = nodes.get(parentId);
            const child = nodes.get(childId);

            if (!parent || !child) {
                const missingIds = [
                    parent ? null : parentId,
                    child ? null : childId,
                ].filter((id): id is string => id !== null);

                throw new DfTreeLayoutError(
                    'missing-node',
                    `Tree layout connection references missing node(s): ${missingIds.join(', ')}.`,
                    missingIds,
                );
            }

            const linkKey = `${parentId}\u0000${childId}`;

            if (links.has(linkKey)) {
                return;
            }

            links.add(linkKey);

            const existingParent = parentByChild.get(childId);

            if (existingParent && existingParent !== parentId) {
                throw new DfTreeLayoutError(
                    'multiple-parents',
                    `Tree node "${childId}" has more than one parent.`,
                    [existingParent, parentId, childId],
                );
            }

            parentByChild.set(childId, parentId);
            sourceConnectorByChild.set(childId, connection.source.connectorId);
            childrenByParent.set(parentId, [
                ...(childrenByParent.get(parentId) ?? []),
                child,
            ]);
        });

        this.sortChildrenByOutputOrder(
            childrenByParent,
            sourceConnectorByChild,
            connectorOrders,
        );

        const rootCandidates = model.nodes.filter((node) => !parentByChild.has(node.id));
        const root = this.options.rootId
            ? nodes.get(this.options.rootId)
            : rootCandidates[0];

        if (
            !root ||
            parentByChild.has(root.id) ||
            rootCandidates.length !== 1 ||
            (this.options.rootId && rootCandidates[0]?.id !== this.options.rootId)
        ) {
            throw new DfTreeLayoutError(
                'invalid-root',
                'Tree layout requires exactly one root node with no incoming connections.',
                rootCandidates.map(({id}) => id),
            );
        }

        const visited = new Set<string>();
        const pending = [root];

        while (pending.length) {
            const current = pending.pop()!;

            if (visited.has(current.id)) {
                continue;
            }

            visited.add(current.id);
            pending.push(...(childrenByParent.get(current.id) ?? []));
        }

        if (visited.size !== model.nodes.length) {
            const disconnected = model.nodes
                .filter((node) => !visited.has(node.id))
                .map(({id}) => id);

            throw new DfTreeLayoutError(
                'disconnected-graph',
                `Tree layout cannot reach node(s) from root "${root.id}": ${disconnected.join(', ')}.`,
                disconnected,
            );
        }

        return {root, children: childrenByParent};
    }

    private sortChildrenByOutputOrder(
        childrenByParent: Map<string, DfAnyNode[]>,
        sourceConnectorByChild: ReadonlyMap<string, string>,
        connectorOrders: DfNodeConnectorOrders,
    ): void {
        childrenByParent.forEach((children, parentId) => {
            const connectorIds = [
                ...new Set(
                    children.map((child) => sourceConnectorByChild.get(child.id)!),
                ),
            ];

            if (connectorIds.length < 2) {
                return;
            }

            const nodeOrders = connectorOrders.get(parentId);
            const orderByConnector = new Map<string, number>();
            const connectorByOrder = new Map<number, string>();

            connectorIds.forEach((connectorId) => {
                const order = nodeOrders?.get(connectorId);

                if (order === undefined || order === null) {
                    throw new DfTreeLayoutError(
                        'missing-output-order',
                        `Tree node "${parentId}" has multiple connected outputs, but connector "${connectorId}" has no layoutOrder.`,
                        [parentId],
                    );
                }

                if (!Number.isInteger(order) || order < 0) {
                    throw new DfTreeLayoutError(
                        'invalid-output-order',
                        `Tree output "${connectorId}" on node "${parentId}" requires a non-negative integer layoutOrder.`,
                        [parentId],
                    );
                }

                const duplicateConnectorId = connectorByOrder.get(order);

                if (duplicateConnectorId) {
                    throw new DfTreeLayoutError(
                        'duplicate-output-order',
                        `Tree outputs "${duplicateConnectorId}" and "${connectorId}" on node "${parentId}" use the same layoutOrder ${order}.`,
                        [parentId],
                    );
                }

                orderByConnector.set(connectorId, order);
                connectorByOrder.set(order, connectorId);
            });

            children.sort(
                (left, right) =>
                    orderByConnector.get(sourceConnectorByChild.get(left.id)!)! -
                    orderByConnector.get(sourceConnectorByChild.get(right.id)!)!,
            );
        });
    }

    private resolveAnchor(root: DfAnyNode): DfPoint {
        if (
            this.options.preserveRootPosition !== false &&
            'position' in root &&
            Number.isFinite(root.position.x) &&
            Number.isFinite(root.position.y)
        ) {
            return {...root.position};
        }

        return {...(this.options.origin ?? DEFAULT_ORIGIN)};
    }

    private orientPosition(
        direction: DfTreeLayoutDirection,
        anchor: DfPoint,
        breadth: number,
        depth: number,
    ): DfPoint {
        switch (direction) {
            case DfTreeLayoutDirection.BottomToTop:
                return {x: anchor.x + breadth, y: anchor.y - depth};
            case DfTreeLayoutDirection.RightToLeft:
                return {x: anchor.x - depth, y: anchor.y + breadth};
            case DfTreeLayoutDirection.TopToBottom:
                return {x: anchor.x + breadth, y: anchor.y + depth};
            case DfTreeLayoutDirection.LeftToRight:
            default:
                return {x: anchor.x + depth, y: anchor.y + breadth};
        }
    }
}
