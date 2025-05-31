import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiIcon, TuiLink} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'app-footer-love',
    imports: [CommonModule, TuiIcon, TuiLink],
    templateUrl: './footer-love.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterLoveComponent {}
