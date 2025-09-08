import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {TuiIcon} from '@taiga-ui/core';
import {injectContext} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    imports: [TuiIcon],
    template: `
        <div
            class="copy"
            (click)="copy()"
        >
            <tui-icon
                class="copy-icon"
                [class.copied]="copied()"
                [icon]="copied() ? '@tui.check' : '@tui.copy'"
            />
            {{ copied() ? 'Copied' : 'Copy' }}
        </div>
    `,
    styleUrls: ['./copy.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CopyComponent {
    protected readonly context = injectContext<{$implicit: string}>();
    public link = this.context.$implicit;

    protected copied = signal(false);

    protected copy(): void {
        navigator.clipboard.writeText(this.link).then(() => {
            this.copied.set(true);
            setTimeout(() => this.copied.set(false), 3000);
        });
    }
}
