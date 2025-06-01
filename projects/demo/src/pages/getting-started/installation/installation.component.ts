import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiDocCode, TuiDocPage} from '@taiga-ui/addon-doc';
import {TuiLink, TuiNotification, TuiTitle} from '@taiga-ui/core';
import {FooterLoveComponent} from 'projects/demo/src/app/modules/docs-ui/footer-love/footer-love.component';

@Component({
    standalone: true,
    selector: 'app-installation',
    imports: [
        CommonModule,
        FooterLoveComponent,
        RouterLink,
        TuiDocCode,
        TuiDocPage,
        TuiLink,
        TuiNotification,
        TuiTitle,
    ],
    templateUrl: './installation.component.html',
    styleUrls: ['./installation.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InstallationComponent {}
