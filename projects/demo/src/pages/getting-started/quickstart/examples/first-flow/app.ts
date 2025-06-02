import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import type {DfDataModel} from '@ng-draw-flow/core';
import {NgDrawFlowComponent, provideNgDrawFlowConfigs} from '@ng-draw-flow/core';

import {FirstNode} from '../first-node/first-node';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [NgDrawFlowComponent, ReactiveFormsModule],
    templateUrl: './app.html',
    styleUrls: ['./app.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideNgDrawFlowConfigs({
            nodes: {
                firstNode: FirstNode,
            },
        }),
    ],
})
export class App {
    private readonly flow: DfDataModel = {
        nodes: new Map().set('node-1', {
            id: 'node-1',
            data: {
                type: 'firstNode',
                text: 'This base node',
            },
            position: {x: 0, y: 0},
        }),
        connections: [],
    };

    protected form = new FormControl<DfDataModel>(this.flow);
}
