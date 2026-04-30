import {
    ChangeDetectionStrategy,
    Component,
    forwardRef,
    inject,
    output,
    type Signal,
    signal,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {type ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

import {
    type DfDataConnection,
    type DfDataInitialNode,
    type DfDataModel,
    type DfDataNode,
    type DfEvent,
} from '../../ng-draw-flow.interfaces';
import {NgDrawFlowStoreService} from '../../services/ng-draw-flow-store.service';
import {INVALID_NODES} from '../../validators/invalid-nodes.token';
import {ConnectionComponent} from '../connections/connection/connection.component';
import {ConnectionsService} from '../connections/connections.service';
import {DraftConnectionComponent} from '../connections/draft-connection/draft-connection.component';
import {DraftConnectionService} from '../connections/draft-connection/draft-connection.service';
import {NodeComponent} from '../node/node.component';

@Component({
    standalone: true,
    selector: 'df-scene',
    imports: [ConnectionComponent, DraftConnectionComponent, NodeComponent],
    templateUrl: './scene.component.html',
    styleUrl: './scene.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SceneComponent),
            multi: true,
        },
    ],
    host: {'data-element': 'scene'},
})
export class SceneComponent implements ControlValueAccessor {
    private readonly connectionsService = inject(ConnectionsService);
    private readonly draftConnectionService = inject(DraftConnectionService);
    private readonly store = inject(NgDrawFlowStoreService);
    private syncingExternalValue = false;

    protected readonly nodeSelected = output<DfDataNode>();
    protected readonly nodeMoved = output<DfEvent<DfDataNode>>();
    protected readonly nodeDeleted = output<DfEvent<DfDataNode>>();
    protected readonly connectionCreated = output<DfEvent<DfDataConnection>>();
    protected readonly connectionDeleted = output<DfEvent<DfDataConnection>>();
    protected readonly connectionSelected = output<DfDataConnection>();

    protected readonly isConnectionCreating =
        this.draftConnectionService.isConnectionCreating;

    protected readonly model = signal<DfDataModel>({nodes: [], connections: []});
    protected $invalidNodes: Signal<string[]> = inject(INVALID_NODES);

    constructor() {
        this.initializeConnectionsSubscription();
    }

    public writeValue(value: DfDataModel): void {
        if (!value) {
            return;
        }

        this.model.set(value);
        this.store.updateDataModel(value);
        this.syncingExternalValue = true;
        this.connectionsService.setConnections(value.connections);
    }

    public registerOnChange(fn: (value: DfDataModel) => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    public setDisabledState(_isDisabled: boolean): void {}

    protected onConnectionCreated(connection: DfDataConnection): void {
        this.connectionsService.addConnections([connection]);
        const event: DfEvent<DfDataConnection> = {
            target: connection,
            model: this.model(),
        };

        this.store.emitConnectionCreated(event);
        this.connectionCreated.emit(event);
    }

    protected onConnectionDeleted(connection: DfDataConnection): void {
        const model = this.updateModel((current) => ({
            ...current,
            connections: current.connections.filter(
                (existing) => !this.isSameConnection(existing, connection),
            ),
        }));
        const event: DfEvent<DfDataConnection> = {
            target: connection,
            model,
        };

        this.store.emitConnectionDeleted(event);
        this.connectionDeleted.emit(event);
    }

    protected onConnectionSelected(connection: DfDataConnection): void {
        this.connectionSelected.emit(connection);
    }

    protected onConnectorDeleted(connectorId: string): void {
        this.connectionsService.removeConnectionsByConnectorId(connectorId);
    }

    protected onNodeMoved(updated: DfDataNode): void {
        const model = this.updateModel((current) => ({
            ...current,
            nodes: current.nodes.map((n) => (n.id === updated.id ? updated : n)),
        }));
        const event: DfEvent<DfDataNode> = {
            target: updated,
            model,
        };

        this.store.emitNodeMoved(event);
        this.nodeMoved.emit(event);
        this.emitModelChange();
    }

    protected onNodeDeleted(id: string): void {
        const deleted = this.model().nodes.find((n) => n.id === id) as DfDataNode;

        const model = this.updateModel((current) => ({
            ...current,
            nodes: current.nodes.filter((n) => n.id !== id),
        }));
        const event: DfEvent<DfDataNode> = {target: deleted, model};

        this.store.emitNodeDeleted(event);
        this.nodeDeleted.emit(event);
        this.emitConnectionDeletedByNodeId(id);
        this.connectionsService.removeConnectionsByNodeId(id);
        this.emitModelChange();
    }

    protected onNodeSelected(node: DfDataNode): void {
        this.nodeSelected.emit(node);
    }

    protected trackByNodeId(_: number, node: DfDataInitialNode | DfDataNode): string {
        return node.id;
    }

    protected trackByConnectionsFn(index: number, connection: DfDataConnection): string {
        return `${connection.source.nodeId}-${connection.source.connectorId}to${connection.target.nodeId}-${connection.target.connectorId}-${index}`;
    }

    private initializeConnectionsSubscription(): void {
        this.connectionsService.connections$
            .pipe(takeUntilDestroyed())
            .subscribe((connections: DfDataConnection[]) => {
                const model = this.updateModel((current) => ({
                    ...current,
                    connections,
                }));

                this.store.updateDataModel(model);
                this.emitModelChange();
            });
    }

    private emitConnectionDeletedByNodeId(nodeId: string): void {
        this.connectionsService
            .connections()
            .filter(
                (connection) =>
                    connection.source.nodeId === nodeId ||
                    connection.target.nodeId === nodeId,
            )
            .forEach((connection) => {
                const model = this.updateModel((current) => ({
                    ...current,
                    connections: current.connections.filter(
                        (existing) => !this.isSameConnection(existing, connection),
                    ),
                }));
                const event: DfEvent<DfDataConnection> = {
                    target: connection,
                    model,
                };

                this.store.emitConnectionDeleted(event);
                this.connectionDeleted.emit(event);
            });
    }

    private isSameConnection(left: DfDataConnection, right: DfDataConnection): boolean {
        return (
            left.source.nodeId === right.source.nodeId &&
            left.source.connectorId === right.source.connectorId &&
            left.target.nodeId === right.target.nodeId &&
            left.target.connectorId === right.target.connectorId
        );
    }

    private onChange: (value: DfDataModel) => void = (_: DfDataModel) => {};
    private onTouched: () => void = () => {};

    private updateModel(update: (model: DfDataModel) => DfDataModel): DfDataModel {
        const model = update(this.model());

        this.model.set(model);

        return model;
    }

    private emitModelChange(): void {
        if (this.syncingExternalValue) {
            this.syncingExternalValue = false;

            return;
        }

        this.onTouched();
        this.onChange(this.model());
    }
}
