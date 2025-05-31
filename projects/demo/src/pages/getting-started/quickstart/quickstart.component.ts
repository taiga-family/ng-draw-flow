import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import type {DfDataModel} from '@ng-draw-flow/core';
import {NgDrawFlowComponent} from '@ng-draw-flow/core';
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
