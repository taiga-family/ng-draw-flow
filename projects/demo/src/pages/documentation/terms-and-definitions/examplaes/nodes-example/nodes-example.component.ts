import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {
    type DfDataModel,
    NgDrawFlowComponent,
    provideNgDrawFlowConfigs,
} from '@ng-draw-flow/core';

import {NodeComponent} from '../nodes/node/node.component';

@Component({
    standalone: true,
    selector: 'app-nodes-example',
    imports: [NgDrawFlowComponent, ReactiveFormsModule],
    templateUrl: './nodes-example.component.html',
    styleUrls: ['./nodes-example.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideNgDrawFlowConfigs({
            nodes: {
                node: NodeComponent,
            },
        }),
    ],
})
export default class NodesExampleComponent {
    protected data: DfDataModel = {
        nodes: [
            {
                id: 'node-1',
                data: {type: 'node', text: 'This is a node'},
                position: {x: 0, y: 0},
            },
        ],
        connections: [],
    };

    public form = new FormControl(this.data);
}
