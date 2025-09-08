import type {ElementRef, Signal} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    Output,
    ViewChild,
} from '@angular/core';

import {DRAW_FLOW_OPTIONS} from '../../../ng-draw-flow.configs';
import type {DfConnectorData, DfOptions} from '../../../ng-draw-flow.interfaces';
import {DfConnectionType} from '../../../ng-draw-flow.interfaces';
import {createBezierPath, createSmoothStepPath} from '../utils';
import {DraftConnectionService} from './draft-connection.service';

@Component({
    standalone: true,
    selector: 'df-draft-connection',
    templateUrl: './draft-connection.component.svg',
    styleUrls: ['../connection.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraftConnectionComponent {
    private readonly draftConnectionService = inject(DraftConnectionService);
    private readonly options: DfOptions = inject(DRAW_FLOW_OPTIONS);

    @ViewChild('connectionPath')
    protected connectionPath!: ElementRef;

    @Output()
    protected readonly connectionCreated = this.draftConnectionService.connectionCreated$;

    protected pathData: Signal<string> = computed(() => {
        const sourcePoint: DfConnectorData = this.draftConnectionService.source();
        const targetPoint: DfConnectorData = this.draftConnectionService.target();
        const curvature = this.options.connection.curvature;

        switch (this.options.connection.type) {
            case DfConnectionType.SmoothStep: {
                const [path] = createSmoothStepPath(sourcePoint, targetPoint, curvature);

                return path;
            }
            case DfConnectionType.Bezier:
            default: {
                const [path] = createBezierPath(sourcePoint, targetPoint, curvature);

                return path;
            }
        }
    });
}
