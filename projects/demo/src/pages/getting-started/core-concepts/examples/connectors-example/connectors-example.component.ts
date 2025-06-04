import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import type {DfDataModel} from '@ng-draw-flow/core';
import {NgDrawFlowComponent, provideNgDrawFlowConfigs} from '@ng-draw-flow/core';

import {ConnectorsComponent} from '../nodes/connectors/connectors.component';
import {MultiConnectorsComponent} from '../nodes/multi-connectors/multi-connectors.component';

@Component({
    standalone: true,
    selector: 'app-connectors-example',
    imports: [NgDrawFlowComponent, ReactiveFormsModule],
    templateUrl: './connectors-example.component.html',
    styleUrls: ['./connectors-example.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideNgDrawFlowConfigs({
            nodes: {
                connectors: ConnectorsComponent,
                multipleConnectors: MultiConnectorsComponent,
            },
        }),
    ],
})
export default class ConnectorsExampleComponent {
    protected data: DfDataModel = {
        nodes: new Map()
            .set('node-1', {
                id: 'node-1',
                data: {type: 'connectors'},
                position: {x: 0, y: -50},
                startNode: true,
            })
            .set('node-2', {
                id: 'node-2',
                data: {type: 'multipleConnectors'},
                position: {x: 0, y: 50},
                startNode: true,
            }),

        connections: [],
    };

    public form = new FormControl(this.data);
}
