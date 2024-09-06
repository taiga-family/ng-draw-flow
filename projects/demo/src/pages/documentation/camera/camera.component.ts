import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAddonDocModule} from '@taiga-ui/addon-doc';

import CameraExample1Component from './examples/camera-example-1/camera-example-1.component';
import CameraExample2Component from './examples/camera-example-2/camera-example-2.component';
import CameraExample3Component from './examples/camera-example-3/camera-example-3.component';

@Component({
    standalone: true,
    selector: 'app-camera',
    imports: [
        TuiAddonDocModule,
        CameraExample1Component,
        CameraExample2Component,
        CameraExample3Component,
    ],
    templateUrl: './camera.component.html',
    styleUrls: ['./camera.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CameraComponent {}
