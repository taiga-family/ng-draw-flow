import {Injectable, InjectionToken, signal, untracked} from '@angular/core';

import {type DfId} from '../ng-draw-flow.interfaces';

export type DfConnectorLayoutOrder = number | null;
export type DfNodeConnectorOrders = ReadonlyMap<
    DfId,
    ReadonlyMap<DfId, DfConnectorLayoutOrder>
>;

@Injectable()
export class DfConnectorOrderRegistryService {
    private readonly ordersSignal = signal<DfNodeConnectorOrders>(new Map());

    public readonly orders = this.ordersSignal.asReadonly();

    public set(nodeId: DfId, connectorId: DfId, order?: number): void {
        const current = untracked(this.ordersSignal);
        const nodeOrders = current.get(nodeId) ?? new Map();
        const nextOrder = order ?? null;

        if (nodeOrders.get(connectorId) === nextOrder) {
            return;
        }

        const nextNodeOrders = new Map(nodeOrders);

        nextNodeOrders.set(connectorId, nextOrder);
        this.ordersSignal.set(new Map(current).set(nodeId, nextNodeOrders));
    }

    public remove(nodeId: DfId, connectorId: DfId): void {
        const current = untracked(this.ordersSignal);
        const nodeOrders = current.get(nodeId);

        if (!nodeOrders?.has(connectorId)) {
            return;
        }

        const next = new Map(current);
        const nextNodeOrders = new Map(nodeOrders);

        nextNodeOrders.delete(connectorId);

        if (nextNodeOrders.size) {
            next.set(nodeId, nextNodeOrders);
        } else {
            next.delete(nodeId);
        }

        this.ordersSignal.set(next);
    }
}

export const DF_CONNECTOR_ORDER_REGISTRY =
    new InjectionToken<DfConnectorOrderRegistryService | null>(
        '[DF_CONNECTOR_ORDER_REGISTRY]: Optional connector layout-order registry',
        {factory: () => null},
    );
