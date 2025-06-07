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
    selector: 'simple-example-doc-page',
    imports: [NgDrawFlowComponent, ReactiveFormsModule],
    templateUrl: '../simple-example.component.html',
    styleUrls: ['../simple-example.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        dfPanZoomOptionsProvider({
            leftPosition: 0,
        }),
    ],
})
export default class GettingStartedDocComponent {
    public data: DfDataModel = {
        nodes: [
            {
                id: 'node-1',
                data: {type: 'simpleNode', text: 'This base node'},
                position: {x: 50, y: 0},
                startNode: true,
            },
            {
                id: 'node-2',
                data: {type: 'simpleNode', text: 'This child node 1'},
                position: {x: 350, y: -50},
            },
            {
                id: 'node-3',
                data: {type: 'simpleNode', text: 'This child node 2'},
                position: {x: 350, y: 50},
            },
        ],
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
        ],
    };

    public form = new FormControl(this.data);
}
