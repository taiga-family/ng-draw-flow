import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import type {DfDataModel} from '@ng-draw-flow/core';
import {DfConnectionPoint, NgDrawFlowComponent} from '@ng-draw-flow/core';
import type {TuiRawLoaderContent} from '@taiga-ui/addon-doc';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiLink} from '@taiga-ui/core';

import FirstExampleComponent from './examples/first-example/component';

@Component({
    standalone: true,
    selector: 'quickstart-doc-page',
    imports: [
        FirstExampleComponent,
        NgDrawFlowComponent,
        ReactiveFormsModule,
        TuiAddonDoc,
        TuiLink,
    ],
    templateUrl: './quickstart.component.html',
    styleUrls: ['./quickstart.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class QuickstartComponent {
    public gettingStarted = {
        imports: import('./examples/imports.md?raw'),
        providing: import('./examples/providing.md?raw'),
        data1: import('./examples/data-1.md?raw'),
        template: import('./examples/template.md?raw'),
        data2: import('./examples/data-2.md?raw'),
    };

    public readonly customNodeExample: Record<string, TuiRawLoaderContent> = {
        TypeScript: import('./examples/node.component.ts?raw'),
        Styles: import('./examples/node.styles.less?raw'),
        Template: import('./examples/node.template.html?raw'),
    };

    protected data: DfDataModel = {
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

    protected nodeData: DfDataModel = {
        nodes: new Map().set('node-1', {
            id: 'node-1',
            data: {type: 'simpleNode', text: 'Node example'},
            position: {x: 0, y: 0},
        }),
        connections: [],
    };

    public nodeForm = new FormControl(this.nodeData);
}
