import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import type {DfDataModel} from '@ng-draw-flow/core';
import {NgDrawFlowComponent, provideNgDrawFlowConfigs} from '@ng-draw-flow/core';

import {ConnectorsComponent} from '../nodes/connectors/connectors.component';

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
            },
        }),
    ],
})
export default class ConnectorsExampleComponent {
    protected data: DfDataModel = {
        nodes: [
            {
                id: 'node-1',
                data: {type: 'connectors'},
                position: {x: 0, y: 0},
                startNode: true,
            },
        ],
        connections: [],
    };

    public form = new FormControl(this.data);
}
