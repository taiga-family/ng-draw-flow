import {DOCUMENT} from '@angular/common';
import {
    effect,
    inject,
    Injectable,
    type OnDestroy,
    signal,
    untracked,
} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {
    animationFrameScheduler,
    filter,
    fromEvent,
    map,
    merge,
    observeOn,
    pairwise,
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
import {DfInteractionStateService} from '../../../services/interaction-state.service';
import {PanZoomService} from '../../pan-zoom/pan-zoom.service';
import {getConnectorDataset} from '../utils/get-coonector-dataset.util';

@Injectable()
export class DraftConnectionService implements OnDestroy {
    private readonly document = inject(DOCUMENT);
    private readonly panZoomService = inject(PanZoomService);
    private readonly coordinatesService = inject(CoordinatesService);
    private readonly options = inject<DfOptions>(DRAW_FLOW_OPTIONS);
    private readonly interactionState = inject(DfInteractionStateService, {
        optional: true,
    });

    private readonly activeConnectorSignal = signal<DfDataConnector | null>(null);
    private readonly lastConnectionCreatedSignal = signal<DfDataConnection | null>(null);
    private sourceConnector!: DfDataConnector;
    private readonly connectionCancelled$ = new Subject<void>();
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

        this.interactionState?.cancellation$
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.cancelConnection());

        effect(() => {
            if (this.interactionState?.editingDisabled()) {
                untracked(() => this.cancelConnection());
            }
        });
    }

    public ngOnDestroy(): void {
        this.cancelConnection();
        this.destroy$.next();
        this.destroy$.complete();
        this.connectionCancelled$.complete();
    }

    private connectionSubscription(): void {
        this.connection$
            .pipe(
                filter(
                    () =>
                        this.options.options.connectionsCreatable &&
                        !(this.interactionState?.editingDisabled() ?? false),
                ),
                tap((connectorData) => this.onDragStart(connectorData)),
                switchMap(() =>
                    fromEvent<PointerEvent>(this.document, 'pointermove').pipe(
                        observeOn(animationFrameScheduler),
                        pairwise(),
                        map(([previousEvent, currentEvent]) =>
                            this.onDragMove(previousEvent, currentEvent),
                        ),
                        takeUntil(
                            merge(
                                this.connectionCancelled$,
                                fromEvent<PointerEvent>(this.document, 'pointerup').pipe(
                                    tap((event) => this.onDragEnd(event)),
                                ),
                                fromEvent<PointerEvent>(
                                    this.document,
                                    'pointercancel',
                                ).pipe(tap(() => this.cancelConnection())),
                            ),
                        ),
                    ),
                ),
                takeUntil(this.destroy$),
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
        const target = event.target;
        const targetConnector =
            target instanceof HTMLElement ? getConnectorDataset(target) : null;

        if (
            targetConnector?.connectorType === DfConnectionPoint.Input &&
            !(this.interactionState?.editingDisabled() ?? false)
        ) {
            const connection: DfDataConnection = {
                source: this.sourceConnector,
                target: targetConnector,
                label: this.sourceConnector.connectionLabel,
            };

            this.lastConnectionCreatedSignal.set(connection);
            this.connectionCreated$.next(connection);
        }

        this.cancelConnection();
    }

    private cancelConnection(): void {
        this.resetConnectors();
        this.isConnectionCreating.set(false);
        this.connectionCancelled$.next();
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
