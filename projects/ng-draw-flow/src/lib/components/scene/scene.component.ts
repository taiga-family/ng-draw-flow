import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
    EventEmitter,
    forwardRef,
    inject,
    type OnInit,
    Output,
    type Signal,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {type ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {filter} from 'rxjs';

import {
    type DfDataConnection,
    type DfDataInitialNode,
    type DfDataModel,
    type DfDataNode,
    type DfEvent,
} from '../../ng-draw-flow.interfaces';
import {INVALID_NODES} from '../../validators/invalid-nodes.token';
import {ConnectionComponent} from '../connections/connection/connection.component';
import {ConnectionsService} from '../connections/connections.service';
import {DraftConnectionComponent} from '../connections/draft-connection/draft-connection.component';
import {DraftConnectionService} from '../connections/draft-connection/draft-connection.service';
import {NodeComponent} from '../node/node.component';
import {DF_PAN_ZOOM_OPTIONS} from '../pan-zoom/pan-zoom.options';

@Component({
    standalone: true,
    selector: 'df-scene',
    imports: [CommonModule, ConnectionComponent, DraftConnectionComponent, NodeComponent],
    templateUrl: './scene.component.html',
    styleUrls: ['./scene.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SceneComponent),
            multi: true,
        },
    ],
    host: {
        'data-element': 'scene',
        '[style.height.px]': 'this.panSize',
        '[style.width.px]': 'this.panSize',
    },
})
export class SceneComponent implements ControlValueAccessor, OnInit {
    private readonly cdr = inject(ChangeDetectorRef);
    private readonly connectionsService = inject(ConnectionsService);
    private readonly draftConnectionService = inject(DraftConnectionService);
    private readonly destroyRef = inject(DestroyRef);

    @Output()
    protected readonly nodeSelected = new EventEmitter<DfDataNode>();

    @Output()
    protected readonly nodeMoved = new EventEmitter<DfEvent<DfDataNode>>();

    @Output()
    protected readonly nodeDeleted = new EventEmitter<DfEvent<DfDataNode>>();

    @Output()
    protected readonly connectionCreated = new EventEmitter<DfEvent<DfDataConnection>>();

    @Output()
    protected readonly connectionDeleted = new EventEmitter<DfEvent<DfDataConnection>>();

    @Output()
    protected readonly connectionSelected = new EventEmitter<DfDataConnection>();

    protected isConnectionCreating$ = this.draftConnectionService.isConnectionCreating$;
    protected readonly panSize = inject(DF_PAN_ZOOM_OPTIONS).panSize;
    protected model!: DfDataModel;
    protected $invalidNodes: Signal<string[]> = inject(INVALID_NODES);

    public ngOnInit(): void {
        this.initializeConnectionsSubscription();
    }

    public writeValue(value: DfDataModel): void {
        if (!value) {
            return;
        }

        this.model = value;
        this.connectionsService.addConnections(this.model.connections);

        this.cdr.markForCheck();
    }

    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    protected onConnectionCreated(connection: DfDataConnection): void {
        this.connectionsService.addConnections([connection]);
        this.connectionCreated.emit({
            target: connection,
            model: this.model,
        });
    }

    protected onConnectionDeleted(connection: DfDataConnection): void {
        this.connectionDeleted.emit({
            target: connection,
            model: this.model,
        });
    }

    protected onConnectorDeleted(connectorId: string): void {
        this.connectionsService.removeConnectionsByConnectorId(connectorId);
        this.cdr.detectChanges();
    }

    protected onNodeMoved(updated: DfDataNode): void {
        this.model = {
            ...this.model,
            nodes: this.model.nodes.map((n) => (n.id === updated.id ? updated : n)),
        };
        this.nodeMoved.emit({
            target: updated,
            model: this.model,
        });
    }

    protected onNodeDeleted(id: string): void {
        const deleted: DfDataNode = this.model.nodes.find(
            (n) => n.id === id,
        ) as DfDataNode;

        this.model = {
            ...this.model,
            nodes: this.model.nodes.filter((n) => n.id !== id),
        };
        this.nodeDeleted.emit({target: deleted, model: this.model});
        this.emitConnectionDeletedByNodeId(id);
        this.connectionsService.removeConnectionsByNodeId(id);
    }

    protected onNodeSelected(node: DfDataNode): void {
        this.nodeSelected.emit(node);
    }

    protected trackByNodeId(_: number, node: DfDataInitialNode | DfDataNode): string {
        return node.id;
    }

    protected trackByConnectionsFn(_index: number, connection: DfDataConnection): string {
        return `${connection.source.nodeId}-${connection.source.connectorId}to${connection.target.nodeId}-${connection.target.connectorId}`;
    }

    private initializeConnectionsSubscription(): void {
        this.connectionsService.connections$
            .pipe(
                filter(() => !!this.model),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe((connections: DfDataConnection[]) => {
                this.model.connections = connections;
                this.cdr.markForCheck();
            });
    }

    private emitConnectionDeletedByNodeId(nodeId: string): void {
        this.connectionsService.connections$.value
            .filter(
                (connection) =>
                    connection.source.nodeId === nodeId ||
                    connection.target.nodeId === nodeId,
            )
            ?.forEach((connection) =>
                this.connectionDeleted.emit({target: connection, model: this.model}),
            );
    }

    // @ts-ignore
    private onChange: (value: DfDataModel) => void = (_: DfDataModel) => {};
    // @ts-ignore
    private onTouched: () => void = () => {};
}
