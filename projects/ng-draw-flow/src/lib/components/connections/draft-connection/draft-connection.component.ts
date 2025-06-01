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
import {calculateCurvature, calculateDistance, createBezierPath} from '../utils';
import {createSmoothstepPath} from '../utils/create-smoothstep-path/create-smoothstep-path.util';
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
    private readonly maxCurvature = this.options.connection.curvature;

    @ViewChild('connectionPath')
    protected connectionPath!: ElementRef;

    @Output()
    protected readonly connectionCreated = this.draftConnectionService.connectionCreated$;

    protected path: Signal<string> = computed(() => {
        const sourcePoint: DfConnectorData = this.draftConnectionService.source();
        const targetPoint: DfConnectorData = this.draftConnectionService.target();

        switch (this.options.connection.type) {
            case DfConnectionType.SmoothStep:
                return createSmoothstepPath(sourcePoint, targetPoint, this.maxCurvature);
            case DfConnectionType.Bezier:
            default: {
                const distance = calculateDistance(sourcePoint.point, targetPoint.point);
                const curvature = calculateCurvature(distance, this.maxCurvature);

                return createBezierPath(sourcePoint, targetPoint, curvature);
            }
        }
    });
}
