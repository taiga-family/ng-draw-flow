import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import type {DfDataModel} from '@ng-draw-flow/core';
import {NgDrawFlowComponent} from '@ng-draw-flow/core';
import type {TuiRawLoaderContent} from '@taiga-ui/addon-doc';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';

@Component({
    standalone: true,
    selector: 'app-creating-nodes',
    imports: [NgDrawFlowComponent, ReactiveFormsModule, TuiAddonDoc],
    templateUrl: './creating-nodes.component.html',
    styleUrls: ['./creating-nodes.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CreatingNodesComponent {
    public readonly customNodeExample: Record<string, TuiRawLoaderContent> = {
        TypeScript: import('./examples/node.component.ts?raw'),
        Styles: import('./examples/node.styles.less?raw'),
        Template: import('./examples/node.template.html?raw'),
    };

    public gettingStarted = {
        baseNode: import('./examples/base-node.md?raw'),
    };

    protected nodeData: DfDataModel = {
        nodes: [
            {
                id: 'node-1',
                data: {type: 'simpleNode', text: 'Node example'},
                position: {x: 0, y: 0},
            },
        ],
        connections: [],
    };

    public nodeForm = new FormControl(this.nodeData);
}
