import {ChangeDetectionStrategy, Component, viewChild} from '@angular/core';

import {type DfDataInitialNode} from '../../../ng-draw-flow.interfaces';
import {NodeComponent} from '../node.component';

@Component({
    standalone: true,
    imports: [NodeComponent],
    template: '<df-node [node]="node" />',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HostComponent {
    public readonly nodeComponent = viewChild.required(NodeComponent);

    public node: DfDataInitialNode = {
        id: 'draft-node',
        data: {type: 'simpleNode'},
    };
}
