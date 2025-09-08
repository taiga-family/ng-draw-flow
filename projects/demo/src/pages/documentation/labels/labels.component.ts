import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NgDrawFlowComponent} from '@ng-draw-flow/core';
import type {TuiRawLoaderContent} from '@taiga-ui/addon-doc';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';

import ExampleComponent from './examples/component';

@Component({
    standalone: true,
    imports: [ExampleComponent, NgDrawFlowComponent, TuiAddonDoc],
    templateUrl: './labels.component.html',
    styleUrls: ['./labels.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LabelsComponent {
    public readonly labelsExample: Record<string, TuiRawLoaderContent> = {
        TypeScript: import('./examples/component.ts?raw'),
        Template: import('./examples/template.html?raw'),
        'Copy label example': import('./examples/labels/copy/copy.component.ts?raw'),
        'Label node component': import(
            '../../../app/modules/nodes/label-node/label-node.component.ts?raw'
        ),
        'Label node template': import(
            '../../../app/modules/nodes/label-node/label-node.component.html?raw'
        ),
    };
}
