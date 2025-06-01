import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiLink, TuiNotification} from '@taiga-ui/core';

import {FooterLoveComponent} from '../../../app/modules/docs-ui/footer-love/footer-love.component';
import ConnectionsExampleComponent from './examples/connections-example/connections-example.component';
import ConnectorsExampleComponent from './examples/connectors-example/connectors-example.component';
import NodesExampleComponent from './examples/nodes-example/nodes-example.component';

@Component({
    standalone: true,
    selector: 'core-concepts',
    imports: [
        ConnectionsExampleComponent,
        ConnectorsExampleComponent,
        FooterLoveComponent,
        NodesExampleComponent,
        RouterLink,
        TuiAddonDoc,
        TuiLink,
        TuiNotification,
    ],
    templateUrl: './terms-and-definitions.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TermsAndDefinitionsComponent {}
