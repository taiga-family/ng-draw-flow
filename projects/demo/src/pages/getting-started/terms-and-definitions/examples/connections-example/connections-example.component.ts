import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import type {DfDataModel} from '@ng-draw-flow/core';
import {
    DfConnectionPoint,
    NgDrawFlowComponent,
    provideNgDrawFlowConfigs,
} from '@ng-draw-flow/core';
import {ExampleNodeComponent} from 'projects/demo/src/app/modules/nodes/example-node/example-node.component';

@Component({
    standalone: true,
    selector: 'app-connections-example',
    imports: [NgDrawFlowComponent, ReactiveFormsModule],
    templateUrl: './connections-example.component.html',
    styleUrls: ['./connections-example.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideNgDrawFlowConfigs({
            nodes: {
                exampleNode: ExampleNodeComponent,
            },
        }),
    ],
})
export default class ConnectionsExampleComponent {
    protected data: DfDataModel = {
        nodes: new Map()
            .set('node-1', {
                id: 'node-1',
                data: {type: 'exampleNode', text: 'Connect me!'},
                position: {x: -130, y: -50},
                startNode: true,
            })
            .set('node-2', {
                id: 'node-2',
                data: {type: 'exampleNode', text: 'Delete my connection!'},
                position: {x: 130, y: 50},
                endNode: true,
            }),
        connections: [
            {
                source: {
                    nodeId: 'node-1',
                    connectorType: DfConnectionPoint.Output,
                    connectorId: 'node-1-output-1',
                },
                target: {
                    nodeId: 'node-2',
                    connectorType: DfConnectionPoint.Input,
                    connectorId: 'node-2-input-1',
                },
            },
        ],
    };

    public form = new FormControl(this.data);
}
