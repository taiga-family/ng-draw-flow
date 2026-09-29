import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiDocMain} from '@taiga-ui/addon-doc';
import {TUI_DARK_MODE, TuiButton, TuiRoot} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'my-app',
    imports: [TuiButton, TuiDocMain, TuiRoot],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    protected readonly darkMode = inject(TUI_DARK_MODE);
}
