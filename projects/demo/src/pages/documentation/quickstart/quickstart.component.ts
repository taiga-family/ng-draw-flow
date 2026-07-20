import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {type DfDataModel, NgDrawFlowComponent} from '@ng-draw-flow/core';
import {TuiAddonDoc, type TuiRawLoaderContent} from '@taiga-ui/addon-doc';
import {TuiButton, TuiNotification} from '@taiga-ui/core';

import FirstExampleComponent from './examples/first-example/component';

@Component({
    standalone: true,
    selector: 'quickstart-doc-page',
    imports: [
        FirstExampleComponent,
        NgDrawFlowComponent,
        ReactiveFormsModule,
        RouterLink,
        TuiAddonDoc,
        TuiButton,
        TuiNotification,
    ],
    templateUrl: './quickstart.component.html',
    styleUrl: './quickstart.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class QuickstartComponent {
    public gettingStarted = {
        editor: import('./examples/editor.component.md?raw'),
        installation: import('./examples/installation.md?raw'),
    };

    public readonly customNodeExample: Record<string, TuiRawLoaderContent> = {
        TypeScript: import('./examples/node.component.ts?raw'),
        Styles: import('./examples/node.styles.less?raw'),
        Template: import('./examples/node.template.html?raw'),
    };

    public readonly nodeData: DfDataModel = {
        nodes: [
            {
                id: 'node-1',
                data: {type: 'simpleNode', text: 'Node example'},
                position: {x: 0, y: 0},
            },
        ],
        connections: [],
    };

    public readonly nodeForm = new FormControl<DfDataModel>(this.nodeData, {
        nonNullable: true,
    });
}
