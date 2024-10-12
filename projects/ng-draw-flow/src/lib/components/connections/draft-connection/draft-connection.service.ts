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
    DfConnectorData,
    DfDataConnection,
    DfDataConnector,
} from '../../../ng-draw-flow.interfaces';
import {DfConnectionPoint, DfConnectorPosition} from '../../../ng-draw-flow.interfaces';
import {CoordinatesService} from '../../../services/coordinates.service';
import {PanZoomService} from '../../pan-zoom/pan-zoom.service';
import {getConnectorDataset} from '../utils/get-coonector-dataset.util';

@Injectable()
export class DraftConnectionService implements OnDestroy {
    private readonly panZoomService = inject(PanZoomService);
    private readonly coordinatesService = inject(CoordinatesService);
    protected readonly destroy$ = new Subject<void>();
    private sourceConnector!: DfDataConnector;

    public readonly source$ = new BehaviorSubject<DfConnectorData>({
        point: INITIAL_COORDINATES,
        position: DfConnectorPosition.Right,
    });

    public readonly target$ = new BehaviorSubject<DfConnectorData>({
        point: INITIAL_COORDINATES,
        position: DfConnectorPosition.Left,
    });

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
        const sourcePoint: DfConnectorData | undefined =
            this.coordinatesService.getConnectionPoint(sourceId)?.value;

        if (!sourcePoint) {
            return;
        }

        this.source$.next(sourcePoint);
        this.target$.next({
            ...sourcePoint,
            position: this.getTargetPosition(this.source$.value.position),
        });
    }

    private onDragMove(previousEvent: PointerEvent, currentEvent: PointerEvent): void {
        const {deltaX, deltaY} = dfDistanceBetweenPoints(previousEvent, currentEvent);
        const {zoom} = this.panZoomService.panzoomModel;
        const target: DfConnectorData = this.target$.value;

        this.target$.next({
            position: target.position,
            point: {
                x: target.point.x + deltaX / zoom,
                y: target.point.y + deltaY / zoom,
            },
        });
    }

    private getTargetPosition(
        startPosition: DfConnectorPosition | null,
    ): DfConnectorPosition | null {
        switch (startPosition) {
            case DfConnectorPosition.Bottom:
                return DfConnectorPosition.Top;
            case DfConnectorPosition.Left:
                return DfConnectorPosition.Right;
            case DfConnectorPosition.Right:
                return DfConnectorPosition.Left;
            case DfConnectorPosition.Top:
                return DfConnectorPosition.Bottom;
            default:
                return null;
        }
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
        this.source$.next({
            point: INITIAL_COORDINATES,
            position: DfConnectorPosition.Right,
        });
        this.target$.next({
            point: INITIAL_COORDINATES,
            position: null,
        });
    }
}
