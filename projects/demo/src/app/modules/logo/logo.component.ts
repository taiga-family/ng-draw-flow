// import {TUI_IS_E2E} from '@taiga-ui/cdk';
// import { isPlatformServer } from '@angular/common';
import {HttpClient} from '@angular/common/http';
import type {OnInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    inject,
    /* PLATFORM_ID,*/ signal,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {RouterLink} from '@angular/router';
import {TuiButton, TuiIcon, TuiLink} from '@taiga-ui/core';
import {TuiBadgedContent} from '@taiga-ui/kit';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {environment} from '../../../environments/environment';

@Component({
    standalone: true,
    selector: 'logo',
    imports: [RouterLink, TuiBadgedContent, TuiButton, TuiIcon, TuiLink],
    templateUrl: './logo.template.html',
    styleUrls: ['./logo.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent implements OnInit {
    protected readonly stars = signal('');
    // private readonly isE2E = inject(TUI_IS_E2E);
    // private readonly isServer = isPlatformServer(inject(PLATFORM_ID));
    private readonly destroyRef = inject(DestroyRef);
    private readonly http = inject(HttpClient);

    public ngOnInit(): void {
        /* uncomment this block if you want to skip the GitHub stars fetch in server or e2e mode or dev mode
        if (this.isServer || this.isE2E || !environment.production) {
            return;
        }*/

        this.http
            .get<Record<string, any>>(environment.github)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((response) =>
                this.stars.set(
                    Intl.NumberFormat('en', {notation: 'compact'}).format(
                        response['stargazers_count'],
                    ),
                ),
            );
    }
}

export const LOGO_CONTENT = new PolymorpheusComponent(LogoComponent);
