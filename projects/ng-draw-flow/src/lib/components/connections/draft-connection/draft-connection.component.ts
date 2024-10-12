import {AsyncPipe} from '@angular/common';
import type {ElementRef} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Output,
    ViewChild,
} from '@angular/core';
import type {DfOptions} from '@ng-draw-flow/core';
import {DRAW_FLOW_OPTIONS} from '@ng-draw-flow/core';
import type {Observable} from 'rxjs';
import {animationFrameScheduler, combineLatest, map, observeOn} from 'rxjs';

import {calculateCurvature, calculateDistance, createCurvature} from '../utils';
import {DraftConnectionService} from './draft-connection.service';

@Component({
    standalone: true,
    selector: 'df-draft-connection',
    imports: [AsyncPipe],
    templateUrl: './draft-connection.component.html',
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

    protected path$: Observable<string> = combineLatest([
        this.draftConnectionService.source$,
        this.draftConnectionService.target$,
    ]).pipe(
        observeOn(animationFrameScheduler),
        map(([sourcePoint, targetPoint]) => {
            const distance = calculateDistance(sourcePoint.point, targetPoint.point);
            const curvature = calculateCurvature(distance, this.maxCurvature);

            return createCurvature(
                sourcePoint.point.x,
                sourcePoint.point.y,
                targetPoint.point.x,
                targetPoint.point.y,
                curvature,
            );
        }),
    );
}
