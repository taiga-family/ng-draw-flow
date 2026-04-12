import {isPlatformBrowser} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    inject,
    type OnInit,
    PLATFORM_ID,
    signal,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {RouterLink} from '@angular/router';
import {TuiButton, TuiIcon, TuiLink} from '@taiga-ui/core';
import {TuiBadgedContent} from '@taiga-ui/kit';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {GITHUB_API} from '../../constants';

@Component({
    standalone: true,
    selector: 'logo',
    imports: [RouterLink, TuiBadgedContent, TuiButton, TuiIcon, TuiLink],
    templateUrl: './logo.template.html',
    styleUrl: './logo.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent implements OnInit {
    private readonly destroyRef = inject(DestroyRef);
    private readonly http = inject(HttpClient);
    private readonly platformId = inject(PLATFORM_ID);
    protected readonly stars = signal('');

    public ngOnInit(): void {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }

        this.http
            .get<Record<string, any>>(GITHUB_API)
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
