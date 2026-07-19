import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiLink, TuiNotification} from '@taiga-ui/core';

import ConnectorExampleComponent from './example/connector-example.component';
import DynamicConnectorExampleComponent from './example/dynamic-connector-example.component';

@Component({
    standalone: true,
    selector: 'app-connectors',
    imports: [
        ConnectorExampleComponent,
        DynamicConnectorExampleComponent,
        RouterLink,
        TuiAddonDoc,
        TuiLink,
        TuiNotification,
    ],
    templateUrl: './connectors.component.html',
    styleUrl: './connectors.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ConnectorsComponent {
    public readonly examples = {
        actionOutput: import('./examples/action-output.md?raw'),
        actionHandler: import('./examples/action-handler.md?raw'),
        customContent: import('./examples/custom-content.md?raw'),
        regular: {
            TypeScript: import('./example/connector-example.component.ts?raw'),
            'Node TypeScript':
                import('./example/connector-example-node.component.ts?raw'),
            'Node Template':
                import('./example/connector-example-node.component.html?raw'),
            'Node Styles': import('./example/connector-example-node.component.less?raw'),
        },
        dynamic: {
            TypeScript: import('./example/dynamic-connector-example.component.ts?raw'),
            'Action Service':
                import('./example/dynamic-connector-example-actions.service.ts?raw'),
            'Node TypeScript':
                import('./example/dynamic-connector-example-node.component.ts?raw'),
            'Node Template':
                import('./example/dynamic-connector-example-node.component.html?raw'),
            'Node Styles':
                import('./example/dynamic-connector-example-node.component.less?raw'),
        },
    };
}
