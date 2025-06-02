import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import type {DfDataModel} from '@ng-draw-flow/core';
import {DfConnectionPoint, NgDrawFlowComponent} from '@ng-draw-flow/core';
import type {TuiRawLoaderContent} from '@taiga-ui/addon-doc';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiLink, TuiNotification, TuiTitle} from '@taiga-ui/core';
import {FooterLoveComponent} from 'projects/demo/src/app/modules/docs-ui/footer-love/footer-love.component';

@Component({
    standalone: true,
    selector: 'quickstart-doc-page',
    imports: [
        FooterLoveComponent,
        NgDrawFlowComponent,
        ReactiveFormsModule,
        RouterLink,
        TuiAddonDoc,
        TuiLink,
        TuiNotification,
        TuiTitle,
    ],
    templateUrl: './quickstart.component.html',
    styleUrls: ['./quickstart.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class QuickstartComponent {
    /*
     * Example for the first node and flow
     */

    public firstFlowSteps = {
        flowImports: import('./examples/first-flow/imports.md?raw'),
        flowProviding: import('./examples/first-flow/flow-providing.md?raw'),
        flowModel: import('./examples/first-flow/flowModel.md?raw'),
        flowModelSimple: import('./examples/first-flow/flowModelSimple.md?raw'),
        flowForm: import('./examples/first-flow/flowForm.md?raw'),
        flowTemplate: import('./examples/first-flow/flow-template.md?raw'),
        flowCss: import('./examples/first-flow/app.css?raw'),
    };

    public readonly firstNodeExample: Record<string, TuiRawLoaderContent> = {
        TypeScript: import('./examples/first-node/first-node.ts?raw'),
        HTML: import('./examples/first-node/first-node.html?raw'),
        CSS: import('./examples/first-node/first-node.css?raw'),
    };

    public readonly firstFlowExample: Record<string, TuiRawLoaderContent> = {
        TypeScript: import('./examples/first-flow/app.ts?raw'),
        HTML: import('./examples/first-flow/app.html?raw'),
        CSS: import('./examples/first-flow/app.css?raw'),
    };

    protected firstFlow: DfDataModel = {
        nodes: new Map().set('node-1', {
            id: 'node-1',
            data: {
                type: 'firstNode',
            },
            position: {x: 0, y: 0},
        }),
        connections: [],
    };

    public firstFlowForm = new FormControl(this.firstFlow);

    /*
     * Example for the enhanced node and flow
     */
    public enhancedSteps = {
        enhancedModelTs: import(
            './examples/first-flow-enhanced/flowModelEnhanced.md?raw'
        ),
        enhancedNodeHtml: import('./examples/first-node-enhanced/enhanced-node.html?raw'),
    };

    public readonly firstNodeEnhancedExample: Record<string, TuiRawLoaderContent> = {
        TypeScript: import('./examples/first-node-enhanced/enhanced-node.ts?raw'),
        HTML: import('./examples/first-node-enhanced/enhanced-node.html?raw'),
        CSS: import('./examples/first-node-enhanced/enhanced-node.css?raw'),
    };

    protected firstFlowEnhanced: DfDataModel = {
        nodes: new Map().set('node-1', {
            id: 'node-1',
            data: {
                type: 'enhancedNode',
                text: 'This is a base node with data injection',
            },
            position: {x: 0, y: 0},
        }),
        connections: [],
    };

    public firstFlowEnhancedForm = new FormControl(this.firstFlowEnhanced);

    /*
     * Example for connectors flow
     */
    public connectorSteps = {
        dfConnectorPosition: import(
            './examples/first-node-connected/dfConnectorPosition.ts.md?raw'
        ),
        dfInput: import('./examples/first-node-connected/df-input.html.md?raw'),
        dfOutput: import('./examples/first-node-connected/df-output.html.md?raw'),
        conectorCSS: import(
            './examples/first-node-connected/first-node-connected.component.less?raw'
        ),
    };

    public readonly firstNodeConnectedExample: Record<string, TuiRawLoaderContent> = {
        TypeScript: import(
            './examples/first-node-connected/first-node-connected.component.ts?raw'
        ),
        HTML: import(
            './examples/first-node-connected/first-node-connected.component.html?raw'
        ),
        CSS: import(
            './examples/first-node-connected/first-node-connected.component.less?raw'
        ),
    };

    protected firstFlowConnectors: DfDataModel = {
        nodes: new Map().set('node-1', {
            id: 'node-1',
            data: {
                type: 'firstNodeConnected',
                text: 'This is a node with one input and one output connector',
            },
            position: {x: 0, y: 0},
        }),
        connections: [],
    };

    public firstFlowConnectorsForm = new FormControl(this.firstFlowConnectors);

    protected finalFlowSteps = {
        finalFlowModel: import('./examples/more_nodes_and_data.ts.md?raw'),
    };

    /*
     * Final flow
     */
    public finalFlow: DfDataModel = {
        nodes: new Map()
            .set('node-1', {
                id: 'node-1',
                data: {
                    type: 'firstNodeConnected',
                    text: 'Start Node',
                },
                position: {x: -150, y: 0},
                startNode: true,
            })
            .set('node-2', {
                id: 'node-2',
                data: {
                    type: 'firstNodeConnected',
                    text: 'Child Node 1',
                },
                position: {x: 100, y: 50},
            })
            .set('node-3', {
                id: 'node-3',
                data: {
                    type: 'firstNodeConnected',
                    text: 'Child Node 2',
                },
                position: {x: 100, y: -50},
            })
            .set('node-4', {
                id: 'node-4',
                data: {
                    type: 'firstNodeConnected',
                    text: 'End Node',
                },
                position: {x: 350, y: 0},
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

    public finalFlowForm = new FormControl<DfDataModel>(this.finalFlow);
}
