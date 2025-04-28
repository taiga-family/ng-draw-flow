import {AsyncPipe} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import type {BehaviorSubject, Observable} from 'rxjs';
import {
    animationFrameScheduler,
    asyncScheduler,
    combineLatest,
    distinctUntilChanged,
    map,
    observeOn,
    of,
    switchMap,
} from 'rxjs';

import {SelectableElementDirective} from '../../../directives/selectable-element';
import {createConnectorHash} from '../../../helpers';
import {DRAW_FLOW_OPTIONS} from '../../../ng-draw-flow.configs';
import type {
    DfConnectorData,
    DfDataConnection,
    DfDataConnector,
} from '../../../ng-draw-flow.interfaces';
import {DfConnectionType} from '../../../ng-draw-flow.interfaces';
import {CoordinatesService} from '../../../services/coordinates.service';
import {ConnectionsService} from '../connections.service';
import {calculateCurvature, calculateDistance, createBezierPath} from '../utils';
import {createSmoothstepPath} from '../utils/create-smoothstep-path/create-smoothstep-path.util';

@Component({
    standalone: true,
    selector: 'df-connection',
    imports: [AsyncPipe, SelectableElementDirective],
    templateUrl: './connection.component.svg',
    styleUrls: ['../connection.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(document:keydown.delete)': 'this.handleKeyboardEvent($event)',
        '(document:keydown.backspace)': 'this.handleKeyboardEvent($event)',
    },
})
export class ConnectionComponent {
    private readonly connectionsService = inject(ConnectionsService);
    private readonly coordinatesService = inject(CoordinatesService);
    private readonly options = inject(DRAW_FLOW_OPTIONS);
    protected selected = false;

    @Input()
    public connection!: DfDataConnection;

    @Output()
    protected readonly connectionDeleted = new EventEmitter<void>();

    @Output()
    protected readonly connectionSelected = new EventEmitter<void>();

    protected handleKeyboardEvent(event: KeyboardEvent): void {
        if (!this.selected) {
            return;
        }

        event.preventDefault();

        this.connectionsService.removeConnection(this.connection);
        this.connectionDeleted.emit();
    }

    protected path$: Observable<string> = of(null).pipe(
        observeOn(asyncScheduler),
        switchMap(() =>
            combineLatest([
                this.getConnectionPoint(this.connection?.source),
                this.getConnectionPoint(this.connection?.target),
            ]),
        ),
        observeOn(animationFrameScheduler),
        switchMap(([sourcePoint, targetPoint]) => {
            if (!sourcePoint || !targetPoint) {
                console.warn('One of the connection points not found');

                return of([]);
            }

            return of([sourcePoint, targetPoint]);
        }),
        distinctUntilChanged(
            ([prevSource, prevTarget], [currSource, currTarget]) =>
                JSON.stringify(prevSource) === JSON.stringify(currSource) &&
                JSON.stringify(prevTarget) === JSON.stringify(currTarget),
        ),
        map(([start, end]) => {
            if (!start || !end) {
                return '';
            }

            switch (this.options.connection.type) {
                case DfConnectionType.SmoothStep:
                    return createSmoothstepPath(
                        start,
                        end,
                        this.options.connection.curvature,
                    );
                case DfConnectionType.Bezier:
                default: {
                    const distance = calculateDistance(
                        start.coordinates,
                        end.coordinates,
                    );
                    const maxCurvature = this.options.connection.curvature;
                    const curvature = calculateCurvature(distance, maxCurvature);

                    return createBezierPath(start, end, curvature);
                }
            }
        }),
    );

    protected onSelectedChanged(selected: boolean): void {
        this.selected = selected;

        if (selected) {
            this.connectionSelected.emit();
        }
    }

    private getConnectionPoint(
        connector: DfDataConnector,
    ): BehaviorSubject<DfConnectorData> | BehaviorSubject<null> {
        return this.coordinatesService.getConnectionPoint(createConnectorHash(connector));
    }
}
