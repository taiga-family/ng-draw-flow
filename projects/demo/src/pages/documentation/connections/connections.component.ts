import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';

import BezierExampleComponent from './bezier-example/bezier-example.component';
import SmoothStepExampleComponent from './smooth-step-example/smooth-step-example.component';

@Component({
    standalone: true,
    selector: 'connections',
    imports: [BezierExampleComponent, SmoothStepExampleComponent, TuiAddonDoc],
    templateUrl: './connections.component.html',
    styleUrl: './connections.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ConnectionsComponent {
    public readonly examples = {
        bezier: {
            TypeScript: import('./bezier-example/bezier-example.component.ts?raw'),
            Template: import('./bezier-example/bezier-example.component.html?raw'),
        },
        configuration: import('./examples/connection-options.md?raw'),
        smoothStep: {
            TypeScript:
                import('./smooth-step-example/smooth-step-example.component.ts?raw'),
            Template:
                import('./smooth-step-example/smooth-step-example.component.html?raw'),
        },
        theming: import('./examples/connection-theming.md?raw'),
    };
}
