import {
    ChangeDetectorRef,
    Directive,
    inject,
    input,
    output,
    viewChildren,
} from '@angular/core';

import {DfInputComponent, DfOutputComponent} from './components/connectors';

/**
 * Base abstract class for DrawFlow nodes.
 * Provides common functionality and structure for all node types in the flow diagram.
 */
@Directive({
    standalone: true,
    host: {
        '[class.df-invalid]': 'this.invalidState',
        '[class.df-selected]': 'this.selected',
    },
})
export abstract class DrawFlowBaseNode {
    private readonly cdr = inject(ChangeDetectorRef);
    /**
     * Collection of input connectors for this node.
     * Accessible from outside to monitor changes in the number of inputs.
     */
    public readonly inputs = viewChildren(DfInputComponent);

    /**
     * Collection of output connectors for this node.
     * Accessible from outside to monitor changes in the number of outputs.
     */
    public readonly outputs = viewChildren(DfOutputComponent);

    public readonly connectorsUpdated = output();

    /**
     * Unique identifier for the node.
     * Can be used to create connector names in format `${nodeId}-${uniqConnectorId}`.
     * @default ''
     */
    public readonly nodeIdSignal = input('', {alias: 'nodeId'});

    /**
     * Metadata for the node.
     * Contains type information and other node-specific data.
     */
    public readonly modelSignal = input.required<Record<string, any> & {type: string}>({
        alias: 'model',
    });

    /**
     * Indicates if this node is a starting node in the flow.
     * Can be used to apply special styling or behavior for start nodes.
     * @default false
     */
    public readonly startNodeSignal = input(false, {alias: 'startNode'});

    /**
     * Indicates if this node is an ending node in the flow.
     * Can be used to hide output connectors or apply special styling.
     * @default false
     */
    public readonly endNodeSignal = input(false, {alias: 'endNode'});

    /**
     * Selection state of the node.
     * Changes when the node is clicked or deselected.
     * Applied as 'df-selected' CSS class when true.
     * @default false
     */
    public readonly selectedSignal = input(false, {alias: 'selected'});

    /**
     * Validation state of the node.
     * Can be manually set to highlight the node with red color,
     * for example when a form inside the node is invalid.
     * Applied as 'df-invalid' CSS class when true.
     * @default false
     */
    public readonly invalidSignal = input(false, {alias: 'invalid'});

    public get nodeId(): string {
        return this.nodeIdSignal();
    }

    public get model(): Record<string, any> & {type: string} {
        return this.modelSignal();
    }

    public get startNode(): boolean {
        return this.startNodeSignal();
    }

    public get endNode(): boolean {
        return this.endNodeSignal();
    }

    public get selected(): boolean {
        return this.selectedSignal();
    }

    public get invalid(): boolean {
        return this.invalidState;
    }

    public markForCheck(): void {
        this.cdr.markForCheck();
    }

    protected get invalidState(): boolean {
        return this.invalidSignal();
    }
}
