import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDocMain} from '@taiga-ui/addon-doc';
import {TuiRoot} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'my-app',
    imports: [TuiDocMain, TuiRoot],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
