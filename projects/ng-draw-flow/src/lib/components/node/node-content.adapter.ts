import {
    type ComponentRef,
    type EnvironmentInjector,
    type Type,
    type ViewContainerRef,
} from '@angular/core';

import {type DfConnectionLabel} from '../../ng-draw-flow.interfaces';
import {type DrawFlowBaseNode} from '../../ng-draw-flow-node.base';
import {type DfInputComponent, type DfOutputComponent} from '../connectors';

export interface DfNodeContentInputs {
    readonly nodeId: string;
    readonly startNode: boolean;
    readonly endNode: boolean;
    readonly model: Record<string, any> & {type: string};
    readonly selected: boolean;
    readonly invalid: boolean;
}

export interface DfNodeContentAdapter {
    readonly instance: DrawFlowBaseNode;
    readonly nativeElement: HTMLElement;
    readonly connectorsUpdated: DrawFlowBaseNode['connectorsUpdated'];

    inputs(): readonly DfInputComponent[];
    outputs(): readonly DfOutputComponent[];
    syncInputs(inputs: DfNodeContentInputs): void;
    applyConnectionLabel(label: DfConnectionLabel | undefined): void;
}

class AngularNodeContentAdapter implements DfNodeContentAdapter {
    constructor(private readonly componentRef: ComponentRef<DrawFlowBaseNode>) {}

    public get instance(): DrawFlowBaseNode {
        return this.componentRef.instance;
    }

    public get nativeElement(): HTMLElement {
        return this.componentRef.location.nativeElement;
    }

    public get connectorsUpdated(): DrawFlowBaseNode['connectorsUpdated'] {
        return this.componentRef.instance.connectorsUpdated;
    }

    public inputs(): readonly DfInputComponent[] {
        return this.componentRef.instance.inputs();
    }

    public outputs(): readonly DfOutputComponent[] {
        return this.componentRef.instance.outputs();
    }

    public syncInputs(inputs: DfNodeContentInputs): void {
        this.componentRef.setInput('nodeId', inputs.nodeId);
        this.componentRef.setInput('startNode', inputs.startNode);
        this.componentRef.setInput('endNode', inputs.endNode);
        this.componentRef.setInput('model', inputs.model);
        this.componentRef.setInput('selected', inputs.selected);
        this.componentRef.setInput('invalid', inputs.invalid);
    }

    public applyConnectionLabel(label: DfConnectionLabel | undefined): void {
        this.outputs().forEach((output: DfOutputComponent) => {
            output.setConnectionLabel(label);
        });
    }
}

export function createNodeContentAdapter(
    containerRef: ViewContainerRef,
    componentType: Type<DrawFlowBaseNode>,
    environmentInjector: EnvironmentInjector,
): DfNodeContentAdapter {
    const componentRef = containerRef.createComponent(componentType, {
        environmentInjector,
    });

    return new AngularNodeContentAdapter(componentRef);
}
