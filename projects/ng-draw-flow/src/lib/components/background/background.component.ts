import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';

import {DRAW_FLOW_OPTIONS} from '../../ng-draw-flow.configs';
import type {DfOptions, DfWorkspaceOptions} from '../../ng-draw-flow.interfaces';

@Component({
    standalone: true,
    selector: 'df-background',
    imports: [AsyncPipe, NgIf],
    templateUrl: './background.component.html',
    styleUrls: ['./background.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundComponent {
    protected readonly options: DfWorkspaceOptions =
        inject<DfOptions>(DRAW_FLOW_OPTIONS).options;

    protected readonly patternId = `df-pattern-${Math.random().toString(36).slice(2, 9)}`;
    protected readonly gap = this.options.backgroundPattern?.gap ?? 10;
    protected readonly pointSize = this.options.backgroundPattern?.pointSize ?? 1;
    protected readonly fillColor = this.options.backgroundPattern?.fillColor ?? '#001024';
    protected readonly fillOpacity = this.options.backgroundPattern?.fillOpacity ?? 0.12;
}
