import {DOCUMENT} from '@angular/common';
import type {OnDestroy, WritableSignal} from '@angular/core';
import {inject, Injectable, signal} from '@angular/core';
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
    createConnectorHash,
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

    public source: WritableSignal<DfConnectorData> = signal<DfConnectorData>({
        coordinates: INITIAL_COORDINATES,
        position: DfConnectorPosition.Right,
    });

    public target: WritableSignal<DfConnectorData> = signal<DfConnectorData>({
        coordinates: INITIAL_COORDINATES,
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
        const sourceId = createConnectorHash(connector);
        const sourcePoint: DfConnectorData | null =
            this.coordinatesService.getConnectionPoint(sourceId)?.value;

        if (!sourcePoint) {
            return;
        }

        this.source.set(sourcePoint);
        this.target.set({
            ...sourcePoint,
            position: this.getTargetPosition(this.source().position),
        });
    }

    private onDragMove(previousEvent: PointerEvent, currentEvent: PointerEvent): void {
        const {deltaX, deltaY} = dfDistanceBetweenPoints(previousEvent, currentEvent);
        const {zoom} = this.panZoomService.panzoomModel;
        const target: DfConnectorData = this.target();

        this.target.set({
            position: target.position,
            coordinates: {
                x: target.coordinates.x + deltaX / zoom,
                y: target.coordinates.y + deltaY / zoom,
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
        this.source.set({
            coordinates: INITIAL_COORDINATES,
            position: DfConnectorPosition.Right,
        });
        this.target.set({
            coordinates: INITIAL_COORDINATES,
            position: null,
        });
    }
}
