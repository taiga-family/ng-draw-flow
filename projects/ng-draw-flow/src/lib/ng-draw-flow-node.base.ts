import type {QueryList} from '@angular/core';
import {Directive, EventEmitter, Input, Output, ViewChildren} from '@angular/core';

import {DfInputComponent, DfOutputComponent} from './components/connectors';

@Directive({
    standalone: true,
    host: {
        '[class.df-selected]': 'this.selected',
    },
})
export abstract class DrawFlowBaseNode {
    @ViewChildren(DfInputComponent)
    public inputs!: QueryList<DfInputComponent>; // Needed for access from the outside

    @ViewChildren(DfOutputComponent)
    public outputs!: QueryList<DfOutputComponent>; // Needed for access from the outside

    @Input()
    public nodeId = '';

    @Input()
    public model!: Record<string, any> & {type: string};

    @Input()
    public startNode? = false;

    @Input()
    public endNode? = false;

    @Output()
    public readonly connectorsUpdated = new EventEmitter<void>();

    public selected = false;
}
