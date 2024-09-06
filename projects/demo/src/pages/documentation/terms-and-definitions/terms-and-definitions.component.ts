import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAddonDocModule} from '@taiga-ui/addon-doc';

import CameraExample1Component from '../camera/examples/camera-example-1/camera-example-1.component';
import CameraExample2Component from '../camera/examples/camera-example-2/camera-example-2.component';
import CameraExample3Component from '../camera/examples/camera-example-3/camera-example-3.component';
import ConnectionsExampleComponent from './examplaes/connections-example/connections-example.component';
import ConnectorsExampleComponent from './examplaes/connectors-example/connectors-example.component';
import NodesExampleComponent from './examplaes/nodes-example/nodes-example.component';

@Component({
    standalone: true,
    selector: 'quickstart-doc-page',
    imports: [
        TuiAddonDocModule,
        NodesExampleComponent,
        ConnectorsExampleComponent,
        ConnectionsExampleComponent,
        CameraExample1Component,
        CameraExample2Component,
        CameraExample3Component,
    ],
    templateUrl: './terms-and-definitions.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TermsAndDefinitionsComponent {}
