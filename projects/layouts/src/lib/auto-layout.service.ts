import {effect, inject, Injectable, signal, untracked} from '@angular/core';
import {
    DF_CONNECTOR_ORDER_REGISTRY,
    DF_NODE_SIZE_REGISTRY,
    type DfDataModel,
    type DfId,
    type DfNodeConnectorOrders,
    type DfNodeSize,
    NgDrawFlowStoreService,
} from '@ng-draw-flow/core';

import {
    type DfAutoLayoutOptions,
    type DfLayoutResult,
    DfNodeSizingStrategy,
} from './layout.interfaces';
import {D3TreeLayoutEngine} from './tree/d3-tree-layout.engine';
import {DF_TREE_LAYOUT_OPTIONS} from './tree-layout-options.token';

const EMPTY_NODE_SIZES: ReadonlyMap<DfId, DfNodeSize> = new Map();
const EMPTY_CONNECTOR_ORDERS: DfNodeConnectorOrders = new Map();

@Injectable({providedIn: 'root'})
export class DfAutoLayoutService {
    private readonly store = inject(NgDrawFlowStoreService);
    private readonly treeOptions = inject(DF_TREE_LAYOUT_OPTIONS);
    private readonly nodeSizeRegistry = inject(DF_NODE_SIZE_REGISTRY);
    private readonly connectorOrderRegistry = inject(DF_CONNECTOR_ORDER_REGISTRY);
    private readonly engine = new D3TreeLayoutEngine(this.treeOptions);
    private readonly runningSignal = signal(false);
    private readonly resultSignal = signal<DfLayoutResult | null>(null);
    private readonly errorSignal = signal<Error | null>(null);
    private lastAppliedSizes: ReadonlyMap<DfId, DfNodeSize> | null = null;
    private lastAppliedConnectorOrders: DfNodeConnectorOrders | null = null;
    private pendingMeasurementAnchorNodeId?: DfId;
    private hasApplied = false;

    public readonly running = this.runningSignal.asReadonly();
    public readonly result = this.resultSignal.asReadonly();
    public readonly error = this.errorSignal.asReadonly();

    constructor() {
        const nodeSizeRegistry = this.nodeSizeRegistry;

        if (
            this.treeOptions.nodeSizing?.strategy === DfNodeSizingStrategy.Measured &&
            nodeSizeRegistry
        ) {
            effect(() => {
                const sizes = nodeSizeRegistry.sizes();

                untracked(() => this.applyMeasuredSizes(sizes));
            });
        }

        const connectorOrderRegistry = this.connectorOrderRegistry;

        if (connectorOrderRegistry) {
            effect(() => {
                const orders = connectorOrderRegistry.orders();

                untracked(() => this.applyConnectorOrders(orders));
            });
        }
    }

    public apply(options: DfAutoLayoutOptions = {}): void {
        const sourceModel = this.store.dataModel();
        const model = options.model ?? sourceModel;

        if (!model) {
            return;
        }

        const measuredSizes = this.nodeSizeRegistry?.sizes() ?? EMPTY_NODE_SIZES;
        const connectorOrders =
            this.connectorOrderRegistry?.orders() ?? EMPTY_CONNECTOR_ORDERS;

        this.hasApplied = true;
        this.lastAppliedConnectorOrders = connectorOrders;

        if (this.treeOptions.nodeSizing?.strategy === DfNodeSizingStrategy.Measured) {
            this.lastAppliedSizes = measuredSizes;
            this.pendingMeasurementAnchorNodeId = this.hasMissingSizes(
                model,
                measuredSizes,
            )
                ? options.anchorNodeId
                : undefined;
        }

        this.applyLayout(
            model,
            sourceModel ?? model,
            measuredSizes,
            connectorOrders,
            options.anchorNodeId,
        );
    }

    private applyMeasuredSizes(sizes: ReadonlyMap<DfId, DfNodeSize>): void {
        const model = this.store.dataModel();

        if (
            !model ||
            sizes === this.lastAppliedSizes ||
            this.hasMissingSizes(model, sizes)
        ) {
            return;
        }

        const anchorNodeId = this.pendingMeasurementAnchorNodeId;

        this.lastAppliedSizes = sizes;
        this.pendingMeasurementAnchorNodeId = undefined;
        this.applyLayout(
            model,
            model,
            sizes,
            this.connectorOrderRegistry?.orders() ?? EMPTY_CONNECTOR_ORDERS,
            anchorNodeId,
        );
    }

    private applyConnectorOrders(orders: DfNodeConnectorOrders): void {
        const model = this.store.dataModel();
        const measuredSizes = this.nodeSizeRegistry?.sizes() ?? EMPTY_NODE_SIZES;

        if (
            !this.hasApplied ||
            !model ||
            orders === this.lastAppliedConnectorOrders ||
            (this.treeOptions.nodeSizing?.strategy === DfNodeSizingStrategy.Measured &&
                this.hasMissingSizes(model, measuredSizes))
        ) {
            return;
        }

        this.lastAppliedConnectorOrders = orders;
        this.applyLayout(model, model, measuredSizes, orders);
    }

    private applyLayout(
        model: DfDataModel,
        sourceModel: DfDataModel,
        measuredSizes: ReadonlyMap<DfId, DfNodeSize>,
        connectorOrders: DfNodeConnectorOrders,
        anchorNodeId?: DfId,
    ): void {
        this.runningSignal.set(true);
        this.errorSignal.set(null);

        try {
            const result = this.engine.layout(model, measuredSizes, connectorOrders);
            const anchoredResult = this.anchorResult(sourceModel, result, anchorNodeId);

            this.store.setDataModel(anchoredResult.model);
            this.resultSignal.set(anchoredResult);
        } catch (error) {
            this.resultSignal.set(null);
            this.errorSignal.set(
                error instanceof Error ? error : new Error(String(error)),
            );
        } finally {
            this.runningSignal.set(false);
        }
    }

    private hasMissingSizes(
        model: DfDataModel,
        sizes: ReadonlyMap<DfId, DfNodeSize>,
    ): boolean {
        return model.nodes.some(({id}) => !sizes.has(id));
    }

    private anchorResult(
        sourceModel: DfLayoutResult['model'],
        result: DfLayoutResult,
        anchorNodeId?: string,
    ): DfLayoutResult {
        if (!anchorNodeId) {
            return result;
        }

        const sourceAnchor = sourceModel.nodes.find(({id}) => id === anchorNodeId);
        const resultAnchor = result.model.nodes.find(({id}) => id === anchorNodeId);

        if (
            !sourceAnchor ||
            !resultAnchor ||
            !('position' in sourceAnchor) ||
            !('position' in resultAnchor) ||
            !Number.isFinite(sourceAnchor.position.x) ||
            !Number.isFinite(sourceAnchor.position.y) ||
            !Number.isFinite(resultAnchor.position.x) ||
            !Number.isFinite(resultAnchor.position.y)
        ) {
            return result;
        }

        const deltaX = sourceAnchor.position.x - resultAnchor.position.x;
        const deltaY = sourceAnchor.position.y - resultAnchor.position.y;

        if (!deltaX && !deltaY) {
            return result;
        }

        return {
            ...result,
            model: {
                ...result.model,
                nodes: result.model.nodes.map((node) =>
                    'position' in node
                        ? {
                              ...node,
                              position: {
                                  x: node.position.x + deltaX,
                                  y: node.position.y + deltaY,
                              },
                          }
                        : node,
                ),
            },
        };
    }
}
