import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiLink} from '@taiga-ui/core';

import {
    PanZoomConfigurationExample1Component,
    PanZoomConfigurationExample2Component,
    PanZoomConfigurationExample3Component,
} from '../../documentation/pan-zoom-configuration/examples';
import ConnectionsExampleComponent from './examples/connections-example/connections-example.component';
import ConnectorsExampleComponent from './examples/connectors-example/connectors-example.component';
import NodesExampleComponent from './examples/nodes-example/nodes-example.component';

@Component({
    standalone: true,
    selector: 'terms-and-definitions',
    imports: [
        ConnectionsExampleComponent,
        ConnectorsExampleComponent,
        NodesExampleComponent,
        PanZoomConfigurationExample1Component,
        PanZoomConfigurationExample2Component,
        PanZoomConfigurationExample3Component,
        RouterLink,
        TuiAddonDoc,
        TuiLink,
    ],
    templateUrl: './terms-and-definitions.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TermsAndDefinitionsComponent {}
