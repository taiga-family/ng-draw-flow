import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';

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
        ConnectionsExampleComponent,
        ConnectorsExampleComponent,
        NodesExampleComponent,
        PanZoomConfigurationExample1Component,
        PanZoomConfigurationExample2Component,
        PanZoomConfigurationExample3Component,
        RouterLink,
        TuiAddonDocModule,
        TuiLinkModule,
    ],
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TermsAndDefinitionsComponent {}