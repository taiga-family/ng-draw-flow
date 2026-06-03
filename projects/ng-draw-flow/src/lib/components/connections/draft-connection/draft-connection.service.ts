import {DOCUMENT} from '@angular/common';
import {inject, Injectable, type OnDestroy, signal} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {
    animationFrameScheduler,
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

import {INITIAL_COORDINATES} from '../../../consts';
import {createConnectorHash, dfDistanceBetweenPoints} from '../../../helpers';
import {DRAW_FLOW_OPTIONS} from '../../../ng-draw-flow.configs';
import {
    DfConnectionPoint,
    type DfConnectorData,
    DfConnectorPosition,
    type DfDataConnection,
    type DfDataConnector,
    type DfOptions,
} from '../../../ng-draw-flow.interfaces';
import {CoordinatesService} from '../../../services/coordinates.service';
import {PanZoomService} from '../../pan-zoom/pan-zoom.service';
import {getConnectorDataset} from '../utils/get-coonector-dataset.util';

@Injectable()
export class DraftConnectionService implements OnDestroy {
    private readonly document = inject(DOCUMENT);
    private readonly panZoomService = inject(PanZoomService);
    private readonly coordinatesService = inject(CoordinatesService);
    private readonly options = inject<DfOptions>(DRAW_FLOW_OPTIONS);
    private readonly activeConnectorSignal = signal<DfDataConnector | null>(null);
    private readonly lastConnectionCreatedSignal = signal<DfDataConnection | null>(null);
    private sourceConnector!: DfDataConnector;
    protected readonly destroy$ = new Subject<void>();

    public source = signal<DfConnectorData>({
        point: INITIAL_COORDINATES,
        position: DfConnectorPosition.Right,
    });

    public target = signal<DfConnectorData>({
        point: INITIAL_COORDINATES,
        position: DfConnectorPosition.Left,
    });

    public readonly isConnectionCreating = signal(false);
    public readonly isConnectionCreating$ = toObservable(this.isConnectionCreating);
    public readonly activeConnector = this.activeConnectorSignal.asReadonly();
    public readonly lastConnectionCreated = this.lastConnectionCreatedSignal.asReadonly();

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
        this.connection$
            .pipe(
                filter(() => this.options.options.connectionsCreatable),
                tap((connectorData) => this.onDragStart(connectorData)),
                switchMap(() => fromEvent<PointerEvent>(this.document, 'pointermove')),
                filter(() => this.isConnectionCreating()),
                observeOn(animationFrameScheduler),
                pairwise(),
                map(([previousEvent, currentEvent]) =>
                    this.onDragMove(previousEvent, currentEvent),
                ),

                takeUntil(
                    fromEvent<PointerEvent>(this.document, 'pointerup').pipe(
                        filter(() => this.isConnectionCreating()),
                        tap((event: PointerEvent) => this.onDragEnd(event)),
                    ),
                ),

                takeUntil(this.destroy$),
                repeat(),
            )
            .subscribe();
    }

    private onDragStart(connector: DfDataConnector): void {
        if (!this.options.options.connectionsCreatable) {
            return;
        }

        this.sourceConnector = connector;
        this.activeConnectorSignal.set(connector);
        this.isConnectionCreating.set(true);
        const sourceId = createConnectorHash(connector);
        const sourcePoint = this.coordinatesService.getConnectionPointSignal(sourceId)();

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
        const {zoom} = this.panZoomService.snapshot();
        const target = this.target();

        this.target.set({
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

        if (targetConnector?.connectorType === DfConnectionPoint.Input) {
            const connection: DfDataConnection = {
                source: this.sourceConnector,
                target: targetConnector,
                label: this.sourceConnector.connectionLabel,
            };

            this.lastConnectionCreatedSignal.set(connection);
            this.connectionCreated$.next(connection);
        }

        this.resetConnectors();
        this.isConnectionCreating.set(false);
    }

    private resetConnectors(): void {
        this.activeConnectorSignal.set(null);
        this.source.set({
            point: INITIAL_COORDINATES,
            position: DfConnectorPosition.Right,
        });
        this.target.set({
            point: INITIAL_COORDINATES,
            position: null,
        });
    }
}
