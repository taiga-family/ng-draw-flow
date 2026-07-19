import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiLink, TuiNotification} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'app-layouts',
    imports: [RouterLink, TuiAddonDoc, TuiLink, TuiNotification],
    templateUrl: './layouts.component.html',
    styleUrl: './layouts.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LayoutsComponent {
    public readonly examples = {
        animation: import('./examples/animation.md?raw'),
        apply: import('./examples/apply-layout.md?raw'),
        installation: import('./examples/installation.md?raw'),
        measuredSizing: import('./examples/measured-sizing.md?raw'),
        model: import('./examples/model.md?raw'),
        strictTreeErrors: import('./examples/strict-tree-errors.md?raw'),
        treeEngine: import('./examples/tree-engine.md?raw'),
        treeEngineOptions: import('./examples/tree-engine-options.md?raw'),
    };
}
