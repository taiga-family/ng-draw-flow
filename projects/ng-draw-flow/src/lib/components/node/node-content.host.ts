import {
    type EnvironmentInjector,
    signal,
    type Type,
    type ViewContainerRef,
} from '@angular/core';

import {type DrawFlowBaseNode} from '../../ng-draw-flow-node.base';
import {
    createComponentNodeContentRenderer,
    type DfNodeContentInputs,
    type DfNodeContentRenderer,
} from './node-content.renderer';

export class NodeContentHost {
    private readonly rendererSignal = signal<DfNodeContentRenderer | null>(null);

    public readonly renderer = this.rendererSignal.asReadonly();

    constructor(private readonly environmentInjector: EnvironmentInjector) {}

    public renderComponent(
        containerRef: ViewContainerRef,
        componentType: Type<DrawFlowBaseNode>,
    ): DfNodeContentRenderer {
        this.clear(containerRef);

        const renderer = createComponentNodeContentRenderer(
            containerRef,
            componentType,
            this.environmentInjector,
        );

        this.rendererSignal.set(renderer);

        return renderer;
    }

    public clear(containerRef: ViewContainerRef): void {
        containerRef.clear();
        this.rendererSignal.set(null);
    }

    public syncInputs(inputs: DfNodeContentInputs): void {
        this.rendererSignal()?.syncInputs(inputs);
    }

    public nativeElement(): HTMLElement | null {
        return this.rendererSignal()?.nativeElement ?? null;
    }
}
