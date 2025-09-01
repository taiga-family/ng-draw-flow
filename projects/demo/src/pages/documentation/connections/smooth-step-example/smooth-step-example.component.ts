import {AsyncPipe, CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import type {DfDataModel} from '@ng-draw-flow/core';
import {
    DfArrowhead,
    DfConnectionPoint,
    DfConnectionType,
    dfPanZoomOptionsProvider,
    NgDrawFlowComponent,
    provideNgDrawFlowConfigs,
} from '@ng-draw-flow/core';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';

import {InputNodeComponent, OutputNodeComponent} from '../../../../app/modules/nodes';

@Component({
    standalone: true,
    selector: 'smooth-step-example',
    imports: [
        AsyncPipe,
        CommonModule,
        NgDrawFlowComponent,
        ReactiveFormsModule,
        TuiAddonDoc,
    ],
    templateUrl: './smooth-step-example.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        dfPanZoomOptionsProvider({
            topPosition: 50,
            leftPosition: null,
        }),
        provideNgDrawFlowConfigs({
            connection: {
                type: DfConnectionType.SmoothStep,
                arrowhead: {type: DfArrowhead.ArrowClosed},
                curvature: 10,
            },
            nodes: {
                inputNode: InputNodeComponent,
                outputNode: OutputNodeComponent,
            },
        }),
    ],
})
export default class SmoothStepExampleComponent {
    public data: DfDataModel = {
        nodes: [
            {
                id: 'node-1',
                data: {type: 'outputNode', text: 'This base node'},
                position: {x: 0, y: 0},
            },
            {
                id: 'node-2',
                data: {type: 'inputNode', text: 'This child node 1'},
                position: {x: 20, y: 150},
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
                    connectorId: 'node-2-input-3',
                },
            },
            {
                source: {
                    nodeId: 'node-1',
                    connectorType: DfConnectionPoint.Output,
                    connectorId: 'node-1-output-2',
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
                    connectorId: 'node-1-output-3',
                },
                target: {
                    nodeId: 'node-2',
                    connectorType: DfConnectionPoint.Input,
                    connectorId: 'node-2-input-4',
                },
            },
            {
                source: {
                    nodeId: 'node-1',
                    connectorType: DfConnectionPoint.Output,
                    connectorId: 'node-1-output-4',
                },
                target: {
                    nodeId: 'node-2',
                    connectorType: DfConnectionPoint.Input,
                    connectorId: 'node-2-input-2',
                },
            },
        ],
    };

    public form = new FormControl<DfDataModel>(this.data);
}
