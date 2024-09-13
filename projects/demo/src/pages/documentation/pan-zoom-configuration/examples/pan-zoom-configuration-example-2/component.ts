import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import type {DfDataModel} from '@ng-draw-flow/core';
import {
    dfPanZoomOptionsProvider,
    NgDrawFlowComponent,
    provideNgDrawFlowConfigs,
} from '@ng-draw-flow/core';

import {PanComponent} from '../../nodes/pan/pan.component';

@Component({
    standalone: true,
    selector: 'app-pan-zoom-configuration-example-2',
    imports: [NgDrawFlowComponent, ReactiveFormsModule],
    templateUrl: './template.html',
    styleUrls: ['./styles.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideNgDrawFlowConfigs({
            pan: PanComponent,
        }),
        dfPanZoomOptionsProvider({
            topPosition: 0,
            leftPosition: null,
        }),
    ],
})
export class PanZoomConfigurationExample2Component {
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
