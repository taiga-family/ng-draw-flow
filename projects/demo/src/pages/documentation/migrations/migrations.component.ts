import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';

@Component({
    standalone: true,
    selector: 'migrations-doc-page',
    imports: [TuiAddonDoc],
    templateUrl: './migrations.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MigrationsComponent {
    public data = {
        nodeVariables: import('./examples/v1-node-variables.md?raw'),
    };
}
