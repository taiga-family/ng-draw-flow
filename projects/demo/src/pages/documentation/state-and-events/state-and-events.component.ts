import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiNotification} from '@taiga-ui/core';

import StateEventsExampleComponent from './examples/state-events-example.component';

@Component({
    standalone: true,
    selector: 'app-state-and-events',
    imports: [StateEventsExampleComponent, TuiAddonDoc, TuiNotification],
    templateUrl: './state-and-events.component.html',
    styleUrl: './state-and-events.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StateAndEventsComponent {
    public readonly examples = {
        componentEvents: import('./examples/component-events.md?raw'),
        localStore: import('./examples/local-store.md?raw'),
        storeSignals: import('./examples/store-signals.md?raw'),
        interactive: {
            TypeScript: import('./examples/state-events-example.component.ts?raw'),
            Template: import('./examples/state-events-example.component.html?raw'),
            Styles: import('./examples/state-events-example.component.less?raw'),
        },
    };
}
