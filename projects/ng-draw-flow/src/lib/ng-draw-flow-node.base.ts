import type {QueryList} from '@angular/core';
import {Directive, HostBinding, Input, ViewChildren} from '@angular/core';

import {DfInputComponent, DfOutputComponent} from './components/connectors';

@Directive()
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

    @HostBinding('class.df-selected')
    public selected = false;
}
