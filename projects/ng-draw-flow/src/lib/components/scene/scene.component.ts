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

    public writeValue(value: DfDataModel | null | undefined): void {
        const model = value ?? {nodes: [], connections: []};

        this.model.set(model);
        this.store.updateDataModel(model);
        this.connectionsService.setConnections(model.connections);
    }

    public registerOnChange(fn: (value: DfDataModel) => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(_fn: () => void): void {}

    public setDisabledState(_isDisabled: boolean): void {}

    protected onConnectionCreated(connection: DfDataConnection): void {
        this.connectionsService.addConnections([connection]);
        const model = this.model();

        const event: DfEvent<DfDataConnection> = {
            target: connection,
            model,
        };

        this.store.emitConnectionCreated(event);

        if (this.model() === model) {
            this.connectionCreated.emit(event);
        }
    }

    protected onConnectionDeleted(connection: DfDataConnection): void {
        const event: DfEvent<DfDataConnection> = {
            target: connection,
            model: this.model(),
        };

        this.store.emitConnectionDeleted(event);

        if (this.model() === event.model) {
            this.connectionDeleted.emit(event);
        }
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

        if (this.model() !== model) {
            return;
        }

        this.nodeMoved.emit(event);
        this.emitModelChange(model);
    }

    protected onNodeDeleted(id: string): void {
        const current = this.model();
        const deleted = current.nodes.find((node) => node.id === id) as
            DfDataNode | undefined;

        if (!deleted) {
            return;
        }

        const deletedConnections = current.connections.filter(
            (connection) =>
                connection.source.nodeId === id || connection.target.nodeId === id,
        );
        const model = this.updateModel(() => ({
            ...current,
            nodes: current.nodes.filter((node) => node.id !== id),
            connections: current.connections.filter(
                (connection) =>
                    connection.source.nodeId !== id && connection.target.nodeId !== id,
            ),
        }));
        const event: DfEvent<DfDataNode> = {target: deleted, model};

        this.connectionsService.setConnections(model.connections);
        this.store.emitNodeDeleted(event);

        if (this.model() !== model) {
            return;
        }

        this.nodeDeleted.emit(event);

        for (const connection of deletedConnections) {
            if (this.model() !== model) {
                return;
            }

            const connectionEvent: DfEvent<DfDataConnection> = {
                target: connection,
                model,
            };

            this.store.emitConnectionDeleted(connectionEvent);

            if (this.model() !== model) {
                return;
            }

            this.connectionDeleted.emit(connectionEvent);
        }

        this.emitModelChange(model);
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
        this.connectionsService.connectionsChanged$
            .pipe(takeUntilDestroyed())
            .subscribe((connections: DfDataConnection[]) => {
                const model = this.updateModel((current) => ({
                    ...current,
                    connections,
                }));

                this.store.updateDataModel(model);
                this.emitModelChange(model);
            });
    }

    private onChange: (value: DfDataModel) => void = (_: DfDataModel) => {};
    private updateModel(update: (model: DfDataModel) => DfDataModel): DfDataModel {
        const model = update(this.model());

        this.model.set(model);

        return model;
    }

    private emitModelChange(model: DfDataModel): void {
        if (this.model() === model) {
            this.onChange(model);
        }
    }
}
