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
import type {
    DfConnectorData,
    DfDataConnection,
    DfDataConnector,
} from '../../../ng-draw-flow.interfaces';
import {CoordinatesService} from '../../../services/coordinates.service';
import {ConnectionsService} from '../connections.service';
import {calculateCurvature, calculateDistance, createCurvature} from '../utils';

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
    private connectionSelected = false;

    @Input()
    private readonly maxCurvature = 50;

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
                const distance = calculateDistance(start.point, end.point);
                const curvature = calculateCurvature(distance, this.maxCurvature);

                return start && end
                    ? createCurvature(
                          start.point.x,
                          start.point.y,
                          end.point.x,
                          end.point.y,
                          curvature,
                      )
                    : '';
            }),
        );

    protected onSelectedChanged(selected: boolean): void {
        this.connectionSelected = selected;
    }

    private getConnectionPoint(
        connector: DfDataConnector,
    ): BehaviorSubject<DfConnectorData> | undefined {
        const {nodeId, connectorType, connectorId, position} = connector;

        return this.coordinatesService.getConnectionPoint(
            connectorName({nodeId, connectorType, connectorId, position}),
        );
    }
}
