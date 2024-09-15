import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAddonDocModule} from '@taiga-ui/addon-doc';

import {
    PanZoomConfigurationExample1Component,
    PanZoomConfigurationExample2Component,
    PanZoomConfigurationExample3Component,
} from '../pan-zoom-configuration/examples';
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
        PanZoomConfigurationExample1Component,
        PanZoomConfigurationExample2Component,
        PanZoomConfigurationExample3Component,
    ],
    templateUrl: './terms-and-definitions.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TermsAndDefinitionsComponent {}
