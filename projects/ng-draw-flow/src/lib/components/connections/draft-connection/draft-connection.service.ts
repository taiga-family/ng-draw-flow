import {DOCUMENT} from '@angular/common';
import type {OnDestroy} from '@angular/core';
import {inject, Injectable} from '@angular/core';
import {
    animationFrameScheduler,
    BehaviorSubject,
    filter,
    fromEvent,
    map,
    observeOn,
    pairwise,
    repeat,
    Subject,
    switchMap,
    takeUntil,
    tap,
} from 'rxjs';

import {
    connectorName,
    dfDistanceBetweenPoints,
    INITIAL_COORDINATES,
} from '../../../helpers';
import type {
    DfDataConnection,
    DfDataConnector,
    DfPoint,
} from '../../../ng-draw-flow.interfaces';
import {DfConnectionPoint} from '../../../ng-draw-flow.interfaces';
import {CoordinatesService} from '../../../services/coordinates.service';
import {PanzoomService} from '../../panzoom/panzoom.service';
import {getConnectorDataset} from '../utils/get-coonector-dataset.util';

@Injectable()
export class DraftConnectionService implements OnDestroy {
    private readonly panzoomService = inject(PanzoomService);
    private readonly coordinatesService = inject(CoordinatesService);
    protected readonly destroy$ = new Subject<void>();
    private sourceConnector!: DfDataConnector;

    public readonly source$ = new BehaviorSubject<DfPoint>(INITIAL_COORDINATES);
    public readonly target$ = new BehaviorSubject<DfPoint>(INITIAL_COORDINATES);
    public readonly isConnectionCreating$ = new BehaviorSubject<boolean>(false);
    public readonly connectionCreated$ = new Subject<DfDataConnection>();
    public readonly connection$ = new Subject<DfDataConnector>();

    constructor() {
        this.connectionSubscription();
    }

    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    private connectionSubscription(): void {
        const document = inject(DOCUMENT);

        this.connection$
            .pipe(
                tap((connectorData: DfDataConnector) => this.onDragStart(connectorData)),
                switchMap(() => fromEvent<PointerEvent>(document, 'pointermove')),
                filter(() => this.isConnectionCreating$.value),
                observeOn(animationFrameScheduler),
                pairwise(),
                map(([previousEvent, currentEvent]) =>
                    this.onDragMove(previousEvent, currentEvent),
                ),
                // eslint-disable-next-line rxjs/no-unsafe-takeuntil
                takeUntil(
                    fromEvent<PointerEvent>(document, 'pointerup').pipe(
                        filter(() => this.isConnectionCreating$.value),
                        tap((event: PointerEvent) => this.onDragEnd(event)),
                    ),
                ),
                // eslint-disable-next-line rxjs/no-unsafe-takeuntil
                takeUntil(this.destroy$),
                repeat(),
            )
            .subscribe();
    }

    private onDragStart(connector: DfDataConnector): void {
        this.sourceConnector = connector;
        this.isConnectionCreating$.next(true);
        const sourceId = connectorName(connector);
        const sourcePoint: DfPoint | undefined =
            this.coordinatesService.getConnectionPoint(sourceId)?.value;

        if (!sourcePoint) {
            return;
        }

        this.source$.next(sourcePoint);
        this.target$.next(sourcePoint);
    }

    private onDragMove(previousEvent: PointerEvent, currentEvent: PointerEvent): void {
        const {deltaX, deltaY} = dfDistanceBetweenPoints(previousEvent, currentEvent);
        const {zoom} = this.panzoomService.panzoomModel;

        this.target$.next({
            x: this.target$.value.x + deltaX / zoom,
            y: this.target$.value.y + deltaY / zoom,
        });
    }

    private onDragEnd(event: PointerEvent): void {
        const target = event.target as HTMLElement | null;
        const targetConnector = target ? getConnectorDataset(target) : null;

        if (
            targetConnector &&
            targetConnector.connectorType === DfConnectionPoint.Input
        ) {
            this.connectionCreated$.next({
                source: this.sourceConnector,
                target: targetConnector,
            });
        }

        this.resetConnectors();
        this.isConnectionCreating$.next(false);
    }

    private resetConnectors(): void {
        this.source$.next(INITIAL_COORDINATES);
        this.target$.next(INITIAL_COORDINATES);
    }
}
