import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {NgDrawFlowComponent} from '@ng-draw-flow/core';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiLink} from '@taiga-ui/core';

import ConnectorExampleComponent from './example/connector-example.component';

@Component({
    standalone: true,
    selector: 'app-connectors',
    imports: [
        ConnectorExampleComponent,
        NgDrawFlowComponent,
        ReactiveFormsModule,
        RouterLink,
        TuiAddonDoc,
        TuiLink,
    ],
    templateUrl: './connectors.component.html',
    styleUrl: './connectors.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ConnectorsComponent {
    public readonly examples = {
        actionOutput: import('./examples/action-output.md?raw'),
        customContent: import('./examples/custom-content.md?raw'),
        interactive: {
            TypeScript: import('./example/connector-example.component.ts?raw'),
            'Node TypeScript':
                import('./example/connector-example-node.component.ts?raw'),
            'Node Template':
                import('./example/connector-example-node.component.html?raw'),
            'Node Styles': import('./example/connector-example-node.component.less?raw'),
        },
    };
}
