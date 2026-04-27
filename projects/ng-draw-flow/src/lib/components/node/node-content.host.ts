import {
    type EnvironmentInjector,
    signal,
    type Type,
    type ViewContainerRef,
} from '@angular/core';

import {type DrawFlowBaseNode} from '../../ng-draw-flow-node.base';
import {
    createNodeContentAdapter,
    type DfNodeContentAdapter,
    type DfNodeContentInputs,
} from './node-content.adapter';

export class NodeContentHost {
    private readonly adapterSignal = signal<DfNodeContentAdapter | null>(null);

    public readonly adapter = this.adapterSignal.asReadonly();

    constructor(private readonly environmentInjector: EnvironmentInjector) {}

    public mount(
        containerRef: ViewContainerRef,
        componentType: Type<DrawFlowBaseNode>,
    ): DfNodeContentAdapter {
        this.clear(containerRef);

        const adapter = createNodeContentAdapter(
            containerRef,
            componentType,
            this.environmentInjector,
        );

        this.adapterSignal.set(adapter);

        return adapter;
    }

    public clear(containerRef: ViewContainerRef): void {
        containerRef.clear();
        this.adapterSignal.set(null);
    }

    public syncInputs(inputs: DfNodeContentInputs): void {
        this.adapterSignal()?.syncInputs(inputs);
    }

    public nativeElement(): HTMLElement | null {
        return this.adapterSignal()?.nativeElement ?? null;
    }
}
