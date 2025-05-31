import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';

@Component({
    standalone: true,
    selector: 'configuration-and-public-api',
    imports: [TuiAddonDoc],
    templateUrl: './configuration-and-public-api.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ConfigurationAndPublicApiComponent {
    public data = {
        configurations: import('./examples/configurations.md?raw'),
    };
}
