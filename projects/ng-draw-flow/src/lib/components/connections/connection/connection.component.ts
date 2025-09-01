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
    concat,
    delay,
    distinctUntilChanged,
    map,
    observeOn,
    of,
    shareReplay,
    skip,
    startWith,
    switchMap,
} from 'rxjs';

import {SelectableElementDirective} from '../../../directives';
import {createConnectorHash, deepEqual} from '../../../helpers';
import {DRAW_FLOW_OPTIONS} from '../../../ng-draw-flow.configs';
import type {
    DfArrowheadOptions,
    DfConnectorData,
    DfDataConnection,
    DfDataConnector,
} from '../../../ng-draw-flow.interfaces';
import {DfConnectionType} from '../../../ng-draw-flow.interfaces';
import {CoordinatesService} from '../../../services/coordinates.service';
import {ConnectionsService} from '../connections.service';
import {createBezierPath, createSmoothStepPath} from '../utils';

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
    private readonly arrowhead: DfArrowheadOptions = this.options.connection.arrowhead;

    protected readonly markerEnd =
        this.arrowhead.type === 'none'
            ? null
            : `url(#df-arrowhead-${this.arrowhead.type})`;

    private readonly arrowWidth = this.arrowhead.width;
    private readonly arrowHeight = this.arrowhead.height;

    protected readonly arrowMarkerWidth = this.arrowWidth + this.arrowHeight;
    protected readonly arrowMarkerHeight = this.arrowHeight * 2;

    protected readonly arrowViewBox = `-${this.arrowMarkerWidth} -${this.arrowMarkerHeight / 2} ${this.arrowMarkerWidth} ${this.arrowMarkerHeight}`;
    protected readonly arrowPoints = `-${this.arrowWidth},-${this.arrowHeight / 2} 0,0 -${this.arrowWidth},${this.arrowHeight / 2}`;
    protected readonly arrowClosedPoints = `${this.arrowPoints} -${this.arrowWidth},-${this.arrowHeight / 2}`;

    @Input()
    public connection!: DfDataConnection;

    @Output()
    protected readonly connectionDeleted = new EventEmitter<void>();

    @Output()
    protected readonly connectionSelected = new EventEmitter<void>();

    protected readonly path$: Observable<string> = of(null).pipe(
        observeOn(asyncScheduler),
        switchMap(() =>
            combineLatest([
                this.getConnectionPoint(this.connection?.source),
                this.getConnectionPoint(this.connection?.target),
            ]),
        ),
        switchMap(([sourcePoint, targetPoint]) => {
            if (!sourcePoint || !targetPoint) {
                console.warn('One of the connection points not found');

                return of([]);
            }

            return of([sourcePoint, targetPoint]);
        }),
        distinctUntilChanged(deepEqual),
        observeOn(animationFrameScheduler),
        map(([start, end]) => {
            if (!start || !end) {
                return '';
            }

            switch (this.options.connection.type) {
                case DfConnectionType.SmoothStep:
                    return createSmoothStepPath(
                        start,
                        end,
                        this.options.connection.curvature,
                    );
                case DfConnectionType.Bezier:
                default: {
                    const curvature = this.options.connection.curvature;
                    const [path] = createBezierPath(start, end, curvature);

                    return path;
                }
            }
        }),
        shareReplay({bufferSize: 1, refCount: true}),
    );

    protected readonly optimization$: Observable<boolean> = this.path$.pipe(
        skip(1),
        switchMap(() => concat(of(true), of(false).pipe(delay(400)))),
        startWith(false),
        distinctUntilChanged(),
    );

    protected handleKeyboardEvent(event: KeyboardEvent): void {
        if (!this.selected) {
            return;
        }

        event.preventDefault();

        this.connectionsService.removeConnection(this.connection);
        this.connectionDeleted.emit();
    }

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
