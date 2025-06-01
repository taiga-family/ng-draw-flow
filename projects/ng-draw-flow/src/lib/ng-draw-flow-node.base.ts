import type {QueryList} from '@angular/core';
import {
    ChangeDetectorRef,
    Directive,
    EventEmitter,
    inject,
    Input,
    Output,
    ViewChildren,
} from '@angular/core';

import {DfInputComponent, DfOutputComponent} from './components/connectors';

/**
 * Base abstract class for DrawFlow nodes.
 * Provides common functionality and structure for all node types in the flow diagram.
 */
@Directive({
    standalone: true,
    host: {
        '[class.df-invalid]': 'this.invalid',
        '[class.df-selected]': 'this.selected',
    },
})
export abstract class DrawFlowBaseNode {
    private invalidState = false;
    private readonly cdr = inject(ChangeDetectorRef);
    /**
     * Collection of input connectors for this node.
     * Accessible from outside to monitor changes in the number of inputs.
     */
    @ViewChildren(DfInputComponent)
    public inputs!: QueryList<DfInputComponent>;

    /**
     * Collection of output connectors for this node.
     * Accessible from outside to monitor changes in the number of outputs.
     */
    @ViewChildren(DfOutputComponent)
    public outputs!: QueryList<DfOutputComponent>;

    /**
     * Unique identifier for the node.
     * Can be used to create connector names in format `${nodeId}-${uniqConnectorId}`.
     * @default ''
     */
    @Input()
    public nodeId = '';

    /**
     * Metadata for the node.
     * Contains type information and other node-specific data.
     */
    @Input()
    public model!: Record<string, any> & {type: string};

    /**
     * Indicates if this node is a starting node in the flow.
     * Can be used to apply special styling or behavior for start nodes.
     * @default false
     */
    @Input()
    public startNode? = false;

    /**
     * Indicates if this node is an ending node in the flow.
     * Can be used to hide output connectors or apply special styling.
     * @default false
     */
    @Input()
    public endNode? = false;

    /**
     * Selection state of the node.
     * Changes when the node is clicked or deselected.
     * Applied as 'df-selected' CSS class when true.
     * @default false
     */
    @Input()
    public selected = false;

    /**
     * Validation state of the node.
     * Can be manually set to highlight the node with red color,
     * for example when a form inside the node is invalid.
     * Applied as 'df-invalid' CSS class when true.
     * @default false
     */
    @Input()
    public set invalid(value: boolean) {
        this.invalidState = value;
    }

    public get invalid(): boolean {
        return this.invalidState;
    }

    @Output()
    public readonly connectorsUpdated = new EventEmitter<void>();

    public markForCheck(): void {
        this.cdr.markForCheck();
    }
}
