import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {
    type DfDataModel,
    NgDrawFlowComponent,
    provideNgDrawFlowConfigs,
} from '@ng-draw-flow/core';
import {TuiAddonDoc, type TuiRawLoaderContent} from '@taiga-ui/addon-doc';
import {TuiLink, TuiNotification} from '@taiga-ui/core';

import {YourNodeComponent} from './examples/node.component';

@Component({
    standalone: true,
    selector: 'app-creating-nodes',
    imports: [
        NgDrawFlowComponent,
        ReactiveFormsModule,
        RouterLink,
        TuiAddonDoc,
        TuiLink,
        TuiNotification,
    ],
    templateUrl: './creating-nodes.component.html',
    styleUrl: './creating-nodes.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [provideNgDrawFlowConfigs({nodes: {yourNode: YourNodeComponent}})],
})
export default class CreatingNodesComponent {
    public readonly customNodeExample: Record<string, TuiRawLoaderContent> = {
        TypeScript: import('./examples/node.component.ts?raw'),
        Styles: import('./examples/node.styles.less?raw'),
        Template: import('./examples/node.template.html?raw'),
    };

    public gettingStarted = {
        providing: import('./examples/providing.md?raw'),
        typedModel: import('./examples/typed-model.md?raw'),
    };

    public readonly nodeData: DfDataModel = {
        nodes: [
            {
                id: 'node-1',
                data: {type: 'yourNode', text: 'Custom node example'},
                position: {x: 0, y: 0},
            },
        ],
        connections: [],
    };

    public readonly nodeForm = new FormControl<DfDataModel>(this.nodeData, {
        nonNullable: true,
    });
}
