import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import type {DfDataModel} from '@ng-draw-flow/core';
import {
    DfConnectionPoint,
    dfCycleDetectionValidator,
    dfIsolatedNodesValidator,
    dfPanZoomOptionsProvider,
    NgDrawFlowComponent,
} from '@ng-draw-flow/core';
import type {TuiRawLoaderContent} from '@taiga-ui/addon-doc';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {MarkdownModule} from 'ngx-markdown';

@Component({
    standalone: true,
    selector: 'changelog',
    imports: [MarkdownModule, NgDrawFlowComponent, ReactiveFormsModule, TuiAddonDoc],
    templateUrl: './overview.template.html',
    styleUrls: ['./overview.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        dfPanZoomOptionsProvider({
            topPosition: 50,
            leftPosition: 50,
        }),
    ],
})
export default class OverviewComponent {
    public readonly customNodeExample: Record<string, TuiRawLoaderContent> = {
        'app.module.ts': import('./examples/app.module.md?raw'),
        'app.component.ts': import('./examples/app.component.md?raw'),
        'simple-node.component.ts': import(
            '../../../app/modules/nodes/simple-node/simple-node.component.ts?raw'
        ),
        'simple-node.component.html': import(
            '../../../app/modules/nodes/simple-node/simple-node.component.html?raw'
        ),
        'simple-node.component.less': import(
            '../../../app/modules/nodes/simple-node/simple-node.component.less?raw'
        ),
        'info-node.component.ts': import(
            '../../../app/modules/nodes/info-node/info-node.component.ts?raw'
        ),
        'info-node.component.html': import(
            '../../../app/modules/nodes/info-node/info-node.component.html?raw'
        ),
        'info-node.component.less': import(
            '../../../app/modules/nodes/info-node/info-node.component.less?raw'
        ),
        'form-node.component.ts': import(
            '../../../app/modules/nodes/form-node/form-node.component.ts?raw'
        ),
        'form-node.component.html': import(
            '../../../app/modules/nodes/form-node/form-node.component.html?raw'
        ),
        'form-node.component.less': import(
            '../../../app/modules/nodes/form-node/form-node.component.less?raw'
        ),
    };

    public data: DfDataModel = {
        nodes: [
            {
                id: 'info-node',
                data: {type: 'infoNode', text: 'This base node'},
                position: {x: 0, y: 0},
            },
            {
                id: 'node-1',
                data: {
                    type: 'simpleNode',
                    text: 'The immutable starting point of the graph with no predecessors, marked by the startNode',
                },
                position: {x: 0, y: 280},
                startNode: true,
            },
            {
                id: 'node-2',
                data: {
                    type: 'simpleNode',
                    text: 'A flexible node that illustrates the flow from the start to various pathways within the graph',
                },
                position: {x: 250, y: 200},
            },
            {
                id: 'node-3',
                data: {
                    type: 'simpleNode',
                    text: 'Another versatile node demonstrating multiple connections, highlighting the complex interactivity of the graph.',
                },
                position: {x: 250, y: 350},
            },
            {
                id: 'node-4',
                data: {
                    type: 'simpleNode',
                    text: "The final destination in the graph's journey, characterized by the endNode parameter and lacking further paths.",
                },
                position: {x: 500, y: 280},
                endNode: true,
            },
            {
                id: 'node-5',
                data: {
                    type: 'formNode',
                    value: {},
                    text: 'Nodes can contain any kind of content, for example, a form for user interaction.',
                },
                position: {x: 200, y: 500},
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
            {
                source: {
                    nodeId: 'node-1',
                    connectorType: DfConnectionPoint.Output,
                    connectorId: 'node-1-output-1',
                },
                target: {
                    nodeId: 'node-5',
                    connectorType: DfConnectionPoint.Input,
                    connectorId: 'node-5-input-1',
                },
            },
        ],
    };

    public form = new FormControl(this.data, [
        dfCycleDetectionValidator(),
        dfIsolatedNodesValidator(),
    ]);
}
