import {Injectable, InjectionToken, signal} from '@angular/core';

import {type DfId, type DfNodeSize} from '../ng-draw-flow.interfaces';

@Injectable()
export class DfNodeSizeRegistryService {
    private readonly sizesSignal = signal<ReadonlyMap<DfId, DfNodeSize>>(new Map());

    public readonly sizes = this.sizesSignal.asReadonly();

    public set(nodeId: DfId, size: DfNodeSize): void {
        if (!this.isValid(size)) {
            return;
        }

        const current = this.sizesSignal();
        const previous = current.get(nodeId);

        if (previous?.width === size.width && previous.height === size.height) {
            return;
        }

        this.sizesSignal.set(new Map(current).set(nodeId, {...size}));
    }

    public remove(nodeId: DfId): void {
        const current = this.sizesSignal();

        if (!current.has(nodeId)) {
            return;
        }

        const next = new Map(current);

        next.delete(nodeId);
        this.sizesSignal.set(next);
    }

    private isValid(size: DfNodeSize): boolean {
        return (
            Number.isFinite(size.width) &&
            Number.isFinite(size.height) &&
            size.width > 0 &&
            size.height > 0
        );
    }
}

export const DF_NODE_SIZE_REGISTRY = new InjectionToken<DfNodeSizeRegistryService | null>(
    '[DF_NODE_SIZE_REGISTRY]: Optional measured node-size registry',
    {factory: () => null},
);
