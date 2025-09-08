import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {
    type DfDataModel,
    dfPanZoomOptionsProvider,
    NgDrawFlowComponent,
    provideNgDrawFlowConfigs,
} from '@ng-draw-flow/core';

import {PanComponent} from '../../nodes/pan/pan.component';

@Component({
    standalone: true,
    selector: 'app-pan-zoom-configuration-example-3',
    imports: [NgDrawFlowComponent, ReactiveFormsModule],
    templateUrl: './template.html',
    styleUrls: ['./styles.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideNgDrawFlowConfigs({
            nodes: {
                pan: PanComponent,
            },
        }),
        dfPanZoomOptionsProvider({
            topPosition: null,
            leftPosition: null,
        }),
    ],
})
export class PanZoomConfigurationExample3Component {
    protected data: DfDataModel = {
        nodes: [
            {
                id: 'node-1',
                data: {type: 'pan'},
                position: {x: 0, y: 0},
            },
        ],
        connections: [],
    };

    public form = new FormControl(this.data);
}
