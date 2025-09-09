import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {type DfDataModel} from '@ng-draw-flow/core';
import {TuiAddonDoc, type TuiRawLoaderContent} from '@taiga-ui/addon-doc';
import {TuiLink, TuiNotification} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'app-validation',
    imports: [
        NgIf,
        ReactiveFormsModule,
        RouterLink,
        TuiAddonDoc,
        TuiLink,
        TuiNotification,
    ],
    templateUrl: './validation.component.html',
    styleUrls: ['./validation.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ValidationComponent {
    public readonly validationExamples: Record<string, TuiRawLoaderContent> = {
        LocalValidation: import('./examples/local-1.md?raw'),
        CycleDetectionValidatorError: import(
            './examples/cycle-detection-validator-error.md?raw'
        ),
        IsolatedNodesValidatorError: import(
            './examples/isolated-nodes-validator-error.md?raw'
        ),
    };

    public nodeData: DfDataModel = {
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
