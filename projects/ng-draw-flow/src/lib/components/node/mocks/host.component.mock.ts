import {ChangeDetectionStrategy, Component, signal, viewChild} from '@angular/core';

import {type DfDataInitialNode, type DfDataNode} from '../../../ng-draw-flow.interfaces';
import {NodeComponent} from '../node.component';

@Component({
    standalone: true,
    imports: [NodeComponent],
    template: `
        <df-node
            [invalid]="invalid"
            [node]="node()"
        />
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HostComponent {
    public readonly nodeComponent = viewChild.required(NodeComponent);
    public invalid = false;
    public readonly node = signal<DfDataInitialNode | DfDataNode>({
        id: 'draft-node',
        data: {type: 'simpleNode'},
    });
}
