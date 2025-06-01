import {ChangeDetectionStrategy, Component} from '@angular/core';

// eslint-disable-next-line @angular-eslint/prefer-standalone
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
