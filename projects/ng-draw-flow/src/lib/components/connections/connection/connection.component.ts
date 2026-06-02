import {
    ChangeDetectionStrategy,
    Component,
    computed,
    effect,
    inject,
    input,
    output,
    type OutputEmitterRef,
    type Signal,
} from '@angular/core';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {
    animationFrameScheduler,
    concat,
    delay,
    distinctUntilChanged,
    observeOn,
    of,
    skip,
    startWith,
    switchMap,
} from 'rxjs';

import {SelectableElementDirective} from '../../../directives';
import {createConnectorHash} from '../../../helpers';
import {DRAW_FLOW_OPTIONS} from '../../../ng-draw-flow.configs';
import {
    DfArrowhead,
    DfConnectionType,
    type DfConnectorData,
    type DfDataConnection,
    type DfDataConnector,
    type DfOptions,
} from '../../../ng-draw-flow.interfaces';
import {CoordinatesService} from '../../../services/coordinates.service';
import {NgDrawFlowStoreService} from '../../../services/ng-draw-flow-store.service';
import {ConnectionsService} from '../connections.service';
import {createBezierPath, createSmoothStepPath} from '../utils';

@Component({
    standalone: true,
    selector: 'df-connection',
    imports: [PolymorpheusOutlet, SelectableElementDirective],
    templateUrl: './connection.component.svg',
    styleUrl: '../connection.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class.df-selected-node-input]': 'this.selectedNodeInput',
        '[class.df-selected-node-output]': 'this.selectedNodeOutput',
        '(document:keydown.backspace)': 'this.handleKeyboardEvent($event)',
        '(document:keydown.delete)': 'this.handleKeyboardEvent($event)',
    },
})
export class ConnectionComponent {
    private readonly connectionsService = inject(ConnectionsService);
    private readonly coordinatesService = inject(CoordinatesService);
    private readonly store = inject(NgDrawFlowStoreService);
    private readonly options = inject<DfOptions>(DRAW_FLOW_OPTIONS);
    private readonly arrowhead = this.options.connection.arrowhead;
    private readonly arrowWidth = this.arrowhead.width;
    private readonly arrowHeight = this.arrowhead.height;
    private readonly pathWithLabel: Signal<{
        path: string;
        labelX: number;
        labelY: number;
    }> = computed(() => {
        const sourcePoint = this.getConnectionPoint(this.connection.source)();
        const targetPoint = this.getConnectionPoint(this.connection.target)();

        if (!sourcePoint || !targetPoint) {
            return {path: '', labelX: 0, labelY: 0};
        }

        switch (this.options.connection.type) {
            case DfConnectionType.SmoothStep: {
                const [path, labelX, labelY] = createSmoothStepPath(
                    sourcePoint,
                    targetPoint,
                    this.options.connection.curvature,
                );

                return {path, labelX, labelY};
            }
            case DfConnectionType.Bezier:
            default: {
                const curvature = this.options.connection.curvature;
                const [path, labelX, labelY] = createBezierPath(
                    sourcePoint,
                    targetPoint,
                    curvature,
                );

                return {path, labelX, labelY};
            }
        }
    });

    protected selected = false;
    protected readonly arrowMarkerWidth = this.arrowWidth + this.arrowHeight;
    protected readonly arrowMarkerHeight = this.arrowHeight * 2;
    protected readonly arrowViewBox = `-${this.arrowMarkerWidth} -${this.arrowMarkerHeight / 2} ${this.arrowMarkerWidth} ${this.arrowMarkerHeight}`;
    protected readonly arrowPoints = `-${this.arrowWidth},-${this.arrowHeight / 2} 0,0 -${this.arrowWidth},${this.arrowHeight / 2}`;
    protected readonly arrowClosedPoints = `${this.arrowPoints} -${this.arrowWidth},-${this.arrowHeight / 2}`;

    protected readonly markerEnd =
        this.arrowhead.type === DfArrowhead.None
            ? null
            : `url(#df-arrowhead-${this.arrowhead.type})`;

    protected readonly path = computed(() => this.pathWithLabel().path);

    protected readonly labelPosition = computed(() => {
        const {labelX, labelY} = this.pathWithLabel();

        return {x: labelX, y: labelY};
    });

    protected readonly optimization = toSignal(
        toObservable(this.path).pipe(
            observeOn(animationFrameScheduler),
            skip(1),
            distinctUntilChanged(),
            switchMap(() => concat(of(true), of(false).pipe(delay(400)))),
            startWith(false),
        ),
        {initialValue: false},
    );

    public deletable = this.options.options.connectionsDeletable;
    protected selectedNodeInput = false;
    protected selectedNodeOutput = false;

    public readonly connectionDeleted: OutputEmitterRef<void> = output();
    public readonly connectionSelected: OutputEmitterRef<void> = output();
    public readonly connectionInput = input.required<DfDataConnection>({
        alias: 'connection',
    });

    constructor() {
        effect(() => {
            this.connectionInput();
            this.updateSelectedNodeClasses();
        });

        effect(() => {
            this.connectionsService.selectedNodeId();
            this.updateSelectedNodeClasses();
        });
    }

    public get connection(): DfDataConnection {
        return this.connectionInput();
    }

    protected handleKeyboardEvent(event: KeyboardEvent): void {
        if (!this.selected || !this.deletable) {
            return;
        }

        event.preventDefault();

        this.store.clearSelectedConnection(this.connection);
        this.connectionsService.removeConnection(this.connection);
        this.connectionDeleted.emit();
    }

    protected onSelectedChanged(selected: boolean): void {
        this.selected = selected;

        if (selected) {
            this.store.emitConnectionSelected(this.connection);
            this.connectionSelected.emit();
        } else {
            this.store.clearSelectedConnection(this.connection);
        }
    }

    private getConnectionPoint(
        connector: DfDataConnector,
    ): Signal<DfConnectorData | null> {
        return this.coordinatesService.getConnectionPointSignal(
            createConnectorHash(connector),
        );
    }

    private updateSelectedNodeClasses(): void {
        this.selectedNodeInput = false;
        this.selectedNodeOutput = false;

        const selectedNodeId = this.connectionsService.selectedNodeId();

        if (!selectedNodeId) {
            return;
        }

        const connection = this.connection;

        if (connection.target.nodeId === selectedNodeId) {
            this.selectedNodeInput = true;
        }

        if (connection.source.nodeId === selectedNodeId) {
            this.selectedNodeOutput = true;
        }
    }
}
