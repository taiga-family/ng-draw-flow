import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import type {DfDataModel} from '@ng-draw-flow/core';
import {
    DfConnectionPoint,
    dfPanZoomOptionsProvider,
    NgDrawFlowComponent,
} from '@ng-draw-flow/core';

@Component({
    standalone: true,
    selector: 'first-example',
    imports: [ReactiveFormsModule, NgDrawFlowComponent],
    templateUrl: './template.html',
    styleUrls: ['./styles.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        dfPanZoomOptionsProvider({
            leftPosition: 150,
        }),
    ],
})
export default class FirstExampleComponent {
    public data: DfDataModel = {
        nodes: new Map()
            .set('node-1', {
                id: 'node-1',
                data: {type: 'simpleNode', text: 'This base node'},
                position: {x: 0, y: 0},
                startNode: true,
            })
            .set('node-2', {
                id: 'node-2',
                data: {type: 'simpleNode', text: 'This child node 1'},
                position: {x: 250, y: 50},
            })
            .set('node-3', {
                id: 'node-3',
                data: {type: 'simpleNode', text: 'This child node 2'},
                position: {x: 250, y: -50},
            })
            .set('node-4', {
                id: 'node-4',
                data: {type: 'simpleNode', text: 'This child node 3'},
                position: {x: 500, y: 0},
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
            {
                source: {
                    nodeId: 'node-1',
                    connectorType: DfConnectionPoint.Output,
                    connectorId: 'node-1-output-1',
                },
                target: {
                    nodeId: 'node-3',
                    connectorType: DfConnectionPoint.Input,
                    connectorId: 'node-3-input-1',
                },
            },
            {
                source: {
                    nodeId: 'node-2',
                    connectorType: DfConnectionPoint.Output,
                    connectorId: 'node-2-output-1',
                },
                target: {
                    nodeId: 'node-4',
                    connectorType: DfConnectionPoint.Input,
                    connectorId: 'node-4-input-1',
                },
            },
            {
                source: {
                    nodeId: 'node-3',
                    connectorType: DfConnectionPoint.Output,
                    connectorId: 'node-3-output-1',
                },
                target: {
                    nodeId: 'node-4',
                    connectorType: DfConnectionPoint.Input,
                    connectorId: 'node-4-input-1',
                },
            },
        ],
    };

    public form = new FormControl(this.data);
}
