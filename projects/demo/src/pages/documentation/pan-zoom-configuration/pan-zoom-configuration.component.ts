import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAddonDocModule} from '@taiga-ui/addon-doc';

import {
    PanZoomConfigurationExample1Component,
    PanZoomConfigurationExample2Component,
    PanZoomConfigurationExample3Component,
} from './examples';

@Component({
    standalone: true,
    selector: 'app-pan-zoom-configuration',
    imports: [
        TuiAddonDocModule,
        PanZoomConfigurationExample1Component,
        PanZoomConfigurationExample2Component,
        PanZoomConfigurationExample3Component,
    ],
    templateUrl: './pan-zoom-configuration.component.html',
    styleUrls: ['./pan-zoom-configuration.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PanZoomConfigurationComponent {
    public gettingStarted = {
        data0: import('./examples/data-0.md?raw'),
        data1: import('./examples/data-1.md?raw'),
        data2: import('./examples/data-2.md?raw'),
    };
}
