import {HttpClient} from '@angular/common/http';
import type {OnInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    inject,
    signal,
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
    private readonly destroyRef = inject(DestroyRef);
    private readonly http = inject(HttpClient);

    public ngOnInit(): void {
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
