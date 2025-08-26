import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';

import BezierExampleComponent from './bezier-example/bezier-example.component';
import SmoothStepExampleComponent from './smooth-step-example/smooth-step-example.component';

@Component({
    standalone: true,
    selector: 'connections',
    imports: [BezierExampleComponent, SmoothStepExampleComponent, TuiAddonDoc],
    templateUrl: './connections.component.html',
    styleUrls: ['./connections.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ConnectionsComponent {}
