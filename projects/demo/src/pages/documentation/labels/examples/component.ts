import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {
    DfArrowhead,
    DfConnectionPoint,
    DfConnectionType,
    type DfDataModel,
    dfPanZoomOptionsProvider,
    NgDrawFlowComponent,
    provideNgDrawFlowConfigs,
} from '@ng-draw-flow/core';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {LabelNodeComponent, SimpleNodeComponent} from '../../../../app/modules/nodes';
import {CopyComponent} from './labels/copy/copy.component';

@Component({
    standalone: true,
    selector: 'example-component',
    imports: [NgDrawFlowComponent, ReactiveFormsModule, TuiAddonDoc],
    templateUrl: './template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        dfPanZoomOptionsProvider({
            topPosition: null,
            leftPosition: 20,
        }),
        provideNgDrawFlowConfigs({
            connection: {
                type: DfConnectionType.SmoothStep,
                arrowhead: {type: DfArrowhead.ArrowClosed},
                curvature: 10,
            },
            nodes: {
                labelNode: LabelNodeComponent,
                simpleNode: SimpleNodeComponent,
            },
        }),
    ],
})
export default class ExampleComponent {
    public data: DfDataModel = {
        nodes: [
            {
                id: 'node-1',
                data: {type: 'simpleNode', text: 'This base node'},
                position: {x: 0, y: 0},
                startNode: true,
            },
            {
                id: 'node-2',
                data: {type: 'simpleNode', text: 'This child node 1'},
                position: {x: 250, y: 50},
            },
            {
                id: 'node-3',
                data: {type: 'simpleNode', text: 'This child node 2'},
                position: {x: 250, y: -50},
            },
            {
                id: 'node-4',
                data: {type: 'simpleNode', text: 'This child node 3'},
                position: {x: 500, y: 0},
                endNode: true,
            },
            {
                id: 'node-5',
                data: {
                    type: 'simpleNode',
                    text: 'This node creates connections with a label',
                    connectionLabel: {
                        content: new PolymorpheusComponent(CopyComponent),
                        context: 'some text',
                    },
                },
                position: {x: 0, y: -100},
            },
            {
                id: 'node-6',
                data: {
                    type: 'labelNode',
                    text: 'This node defines label content dynamically',
                },
                position: {x: 0, y: 100},
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
                label: {
                    content: 'Label 1',
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
                label: {
                    content: new PolymorpheusComponent(CopyComponent),
                    context: 'https://taiga-ui.dev',
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
                label: {
                    content: 'Label 3',
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
                label: {
                    content: 'Label 4',
                },
            },
        ],
    };

    public form = new FormControl<DfDataModel>(this.data);
}
