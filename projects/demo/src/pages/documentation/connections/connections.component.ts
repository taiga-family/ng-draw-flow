import {AsyncPipe, CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import type {DfDataModel} from '@ng-draw-flow/core';
import {
    DfConnectionPoint,
    DfConnectionType,
    dfPanZoomOptionsProvider,
    NgDrawFlowComponent,
    provideNgDrawFlowConfigs,
} from '@ng-draw-flow/core';
import {TuiDocPageModule} from '@taiga-ui/addon-doc';

import {InputNodeComponent, OutputNodeComponent} from '../../../app/modules/nodes';

@Component({
    standalone: true,
    selector: 'connections',
    imports: [
        AsyncPipe,
        CommonModule,
        NgDrawFlowComponent,
        ReactiveFormsModule,
        TuiDocPageModule,
    ],
    templateUrl: './connections.component.html',
    styleUrls: ['./connections.component.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        dfPanZoomOptionsProvider({
            topPosition: null,
            leftPosition: null,
        }),
        provideNgDrawFlowConfigs({
            connection: {
                type: DfConnectionType.SmoothStep,
                arrowhead: 'triangle',
                curvature: 10,
            },
            nodes: {
                inputNode: InputNodeComponent,
                outputNode: OutputNodeComponent,
            },
        }),
    ],
})
export default class ConnectionsComponent {
    public data: DfDataModel = {
        nodes: new Map()
            .set('node-1', {
                id: 'node-1',
                data: {type: 'outputNode', text: 'This base node'},
                position: {x: 0, y: 0},
            })
            .set('node-2', {
                id: 'node-2',
                data: {type: 'inputNode', text: 'This child node 1'},
                position: {x: 90, y: -150},
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

    public form = new FormControl<DfDataModel>(this.data);
}
