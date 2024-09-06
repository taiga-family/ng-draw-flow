import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import type {DfDataModel} from '@ng-draw-flow/core';
import {
    dfPanzoomOptionsProvider,
    NgDrawFlowComponent,
    provideNgDrawFlowConfigs,
} from '@ng-draw-flow/core';

import {PanComponent} from '../../nodes/pan/pan.component';

@Component({
    standalone: true,
    selector: 'app-camera-example-1',
    imports: [NgDrawFlowComponent, ReactiveFormsModule],
    templateUrl: './camera-example-1.component.html',
    styleUrls: ['./camera-example-1.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideNgDrawFlowConfigs({
            pan: PanComponent,
        }),
        dfPanzoomOptionsProvider({
            topPosition: null,
            leftPosition: 1,
        }),
    ],
})
export default class CameraExample1Component {
    protected data: DfDataModel = {
        nodes: new Map().set('node-1', {
            id: 'node-1',
            data: {type: 'pan'},
            position: {x: 0, y: 0},
        }),
        connections: [],
    };

    public form = new FormControl(this.data);
}
