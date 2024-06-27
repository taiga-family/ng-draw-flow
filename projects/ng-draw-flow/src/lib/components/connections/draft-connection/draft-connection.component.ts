import {AsyncPipe} from '@angular/common';
import type {ElementRef} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
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

    @Input()
    private readonly maxCurvature = 50;

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
            const distance = calculateDistance(sourcePoint, targetPoint);
            const curvature = calculateCurvature(distance, this.maxCurvature);

            return createCurvature(
                sourcePoint.x,
                sourcePoint.y,
                targetPoint.x,
                targetPoint.y,
                curvature,
            );
        }),
    );
}
