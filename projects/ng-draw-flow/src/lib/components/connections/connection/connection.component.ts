import {AsyncPipe} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostListener,
    inject,
    Input,
    Output,
} from '@angular/core';
import type {BehaviorSubject, Observable} from 'rxjs';
import {
    animationFrameScheduler,
    combineLatest,
    debounceTime,
    distinctUntilChanged,
    map,
    observeOn,
    switchMap,
} from 'rxjs';

import {SelectableElementDirective} from '../../../directives/selectable-element';
import {connectorName} from '../../../helpers';
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
    templateUrl: './connection.component.html',
    styleUrls: ['../connection.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConnectionComponent {
    private readonly connectionsService = inject(ConnectionsService);
    private readonly coordinatesService = inject(CoordinatesService);
    private readonly options = inject(DRAW_FLOW_OPTIONS);
    private connectionSelected = false;

    @Input()
    public connection!: DfDataConnection;

    @Output()
    protected readonly connectionDeleted = new EventEmitter<void>();

    @HostListener('document:keydown.delete', ['$event'])
    @HostListener('document:keydown.backspace', ['$event'])
    protected handleKeyboardEvent(event: KeyboardEvent): void {
        if (!this.connectionSelected) {
            return;
        }

        event.preventDefault();

        this.connectionsService.removeConnection(this.connection);
        this.connectionDeleted.emit();
    }

    protected path$: Observable<string> =
        this.coordinatesService.connectionPointsMapChange$.pipe(
            debounceTime(50),
            observeOn(animationFrameScheduler),
            switchMap(() => {
                const sourcePoint = this.getConnectionPoint(this.connection?.source);
                const targetPoint = this.getConnectionPoint(this.connection?.target);

                if (!sourcePoint || !targetPoint) {
                    console.warn('One of the connection points not found');

                    return [];
                }

                return combineLatest([sourcePoint, targetPoint]).pipe(
                    distinctUntilChanged(
                        ([prevSource, prevTarget], [currSource, currTarget]) =>
                            prevSource === currSource && prevTarget === currTarget,
                    ),
                );
            }),
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
                        const distance = calculateDistance(start.point, end.point);
                        const maxCurvature = this.options.connection.curvature;
                        const curvature = calculateCurvature(distance, maxCurvature);

                        return createBezierPath(start, end, curvature);
                    }
                }
            }),
        );

    protected onSelectedChanged(selected: boolean): void {
        this.connectionSelected = selected;
    }

    private getConnectionPoint(
        connector: DfDataConnector,
    ): BehaviorSubject<DfConnectorData> | undefined {
        const {nodeId, connectorType, connectorId} = connector;

        return this.coordinatesService.getConnectionPoint(
            connectorName({nodeId, connectorType, connectorId}),
        );
    }
}
