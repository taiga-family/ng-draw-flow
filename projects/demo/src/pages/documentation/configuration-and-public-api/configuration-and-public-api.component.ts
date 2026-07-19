import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiLink, TuiNotification} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'configuration-and-public-api',
    imports: [RouterLink, TuiAddonDoc, TuiLink, TuiNotification],
    templateUrl: './configuration-and-public-api.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ConfigurationAndPublicApiComponent {
    public data = {
        configurations: import('./examples/configurations.md?raw'),
        nodeStyles: import('./examples/node-styles.md?raw'),
        positionAnimation: import('./examples/position-animation.md?raw'),
    };
}
