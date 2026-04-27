import {
    type ComponentRef,
    type EnvironmentInjector,
    type Signal,
    type Type,
    type ViewContainerRef,
} from '@angular/core';
import {outputToObservable} from '@angular/core/rxjs-interop';
import {type Observable} from 'rxjs';

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

export interface DfNodeContentRenderer {
    readonly nativeElement: HTMLElement;
    readonly inputConnectors: Signal<readonly DfInputComponent[]>;
    readonly outputConnectors: Signal<readonly DfOutputComponent[]>;
    readonly connectorUpdates$: Observable<void>;

    syncInputs(inputs: DfNodeContentInputs): void;
    applyConnectionLabel(label: DfConnectionLabel | undefined): void;
}

class ComponentNodeContentRenderer implements DfNodeContentRenderer {
    public readonly inputConnectors = this.componentRef.instance.inputs;
    public readonly outputConnectors = this.componentRef.instance.outputs;
    public readonly connectorUpdates$ = outputToObservable(
        this.componentRef.instance.connectorsUpdated,
    );

    constructor(private readonly componentRef: ComponentRef<DrawFlowBaseNode>) {}

    public get nativeElement(): HTMLElement {
        return this.componentRef.location.nativeElement;
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
        this.outputConnectors().forEach((output: DfOutputComponent) => {
            output.setConnectionLabel(label);
        });
    }
}

export function createComponentNodeContentRenderer(
    containerRef: ViewContainerRef,
    componentType: Type<DrawFlowBaseNode>,
    environmentInjector: EnvironmentInjector,
): DfNodeContentRenderer {
    const componentRef = containerRef.createComponent(componentType, {
        environmentInjector,
    });

    return new ComponentNodeContentRenderer(componentRef);
}
