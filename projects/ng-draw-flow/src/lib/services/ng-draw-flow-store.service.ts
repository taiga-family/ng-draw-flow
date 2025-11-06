import {computed, Injectable, signal} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {Subject} from 'rxjs';

import {type NgDrawFlowComponent} from '../ng-draw-flow.component';
import {
    type DfDataConnection,
    type DfDataModel,
    type DfDataNode,
    type DfEvent,
} from '../ng-draw-flow.interfaces';

type Nullable<T> = T | null;

/**
 * Root-scoped facade that mirrors `NgDrawFlowComponent` state and public
 * controls so host applications can interact with the editor without a
 * component reference.
 */
@Injectable({providedIn: 'root'})
export class NgDrawFlowStoreService {
    private host?: NgDrawFlowComponent;

    private readonly dataModelSignal = signal<Nullable<DfDataModel>>(null);
    private readonly selectedNodeSignal = signal<Nullable<DfDataNode>>(null);
    private readonly selectedConnectionSignal = signal<Nullable<DfDataConnection>>(null);
    private readonly scaleSignal = signal<number>(100);

    private readonly nodeDeletedSubject = new Subject<DfEvent<DfDataNode>>();
    private readonly nodeMovedSubject = new Subject<DfEvent<DfDataNode>>();
    private readonly nodeSelectedSubject = new Subject<DfDataNode>();

    private readonly connectionCreatedSubject = new Subject<DfEvent<DfDataConnection>>();
    private readonly connectionDeletedSubject = new Subject<DfEvent<DfDataConnection>>();
    private readonly connectionSelectedSubject = new Subject<DfDataConnection>();

    /** Snapshot of the current editor data model. */
    public readonly dataModel = this.dataModelSignal.asReadonly();

    /** Stream of data model updates emitted after each change. */
    public readonly dataModel$ = toObservable(this.dataModelSignal);

    /** Snapshot of the currently selected node (if any). */
    public readonly selectedNode = this.selectedNodeSignal.asReadonly();

    /** Stream of node selection changes. */
    public readonly selectedNode$ = toObservable(this.selectedNodeSignal);

    /** Snapshot of the currently selected connection (if any). */
    public readonly selectedConnection = this.selectedConnectionSignal.asReadonly();

    /** Stream of connection selection changes. */
    public readonly selectedConnection$ = toObservable(this.selectedConnectionSignal);

    /** Snapshot of the current zoom scale in percents. */
    public readonly scale = this.scaleSignal.asReadonly();

    /** Stream of zoom scale updates. */
    public readonly scale$ = toObservable(this.scaleSignal);

    /** Whether a node or a connection is selected. */
    public readonly hasSelection = computed(
        () => !!this.selectedNodeSignal() || !!this.selectedConnectionSignal(),
    );

    /** Emits whenever a node is deleted (UI or API). */
    public readonly nodeDeleted$ = this.nodeDeletedSubject.asObservable();

    /** Emits whenever a node moves. */
    public readonly nodeMoved$ = this.nodeMovedSubject.asObservable();

    /** Emits whenever a node becomes selected. */
    public readonly nodeSelected$ = this.nodeSelectedSubject.asObservable();

    /** Emits whenever a connection is created. */
    public readonly connectionCreated$ = this.connectionCreatedSubject.asObservable();

    /** Emits whenever a connection is removed. */
    public readonly connectionDeleted$ = this.connectionDeletedSubject.asObservable();

    /** Emits whenever a connection becomes selected. */
    public readonly connectionSelected$ = this.connectionSelectedSubject.asObservable();

    /**
     * Binds a component instance so store methods can forward commands and
     * reflect state changes.
     */
    public attach(host: NgDrawFlowComponent): void {
        this.host = host;
    }

    /**
     * Unbinds the current component instance and clears all cached state.
     */
    public detach(host: NgDrawFlowComponent): void {
        if (this.host !== host) {
            return;
        }

        this.host = undefined;
        this.reset();
    }

    /** Forwards a zoom-in command to the live editor. */
    public zoomIn(): void {
        this.host?.zoomIn();
    }

    /** Forwards a zoom-out command to the live editor. */
    public zoomOut(): void {
        this.host?.zoomOut();
    }

    /** Resets pan and zoom on the live editor. */
    public resetPosition(): void {
        this.host?.resetPosition();
    }

    /**
     * Applies an absolute zoom factor on the live editor and stores its
     * percentage representation.
     */
    public setScale(scale: number): void {
        this.host?.setScale(scale);

        const percent = Math.round(scale * 100);

        this.scaleSignal.set(percent);
    }

    /**
     * Removes the provided connection via the live editor instance.
     */
    public removeConnection(connection: DfDataConnection): void {
        this.host?.removeConnection(connection);
    }

    /**
     * Replaces the cached data model and revalidates current selections.
     */
    public updateDataModel(model: DfDataModel): void {
        this.dataModelSignal.set(this.cloneModel(model));

        const selectedNode = this.selectedNodeSignal();

        if (selectedNode && !model.nodes.some((node) => node.id === selectedNode.id)) {
            this.selectedNodeSignal.set(null);
        }

        const selectedConnection = this.selectedConnectionSignal();

        if (
            selectedConnection &&
            !model.connections.some((connection) =>
                this.isSameConnection(connection, selectedConnection),
            )
        ) {
            this.selectedConnectionSignal.set(null);
        }
    }

    /** Pushes a new zoom scale in percents without touching the live editor. */
    public setScaleValue(scale: number): void {
        this.scaleSignal.set(scale);
    }

    /** Stores the provided node as selected and clears connection selection. */
    public setSelectedNode(node: DfDataNode): void {
        this.selectedNodeSignal.set(this.cloneNode(node));
        this.selectedConnectionSignal.set(null);
        this.nodeSelectedSubject.next(node);
    }

    /** Clears node selection optionally guarding against mismatched ids. */
    public clearSelectedNode(id?: string): void {
        const current = this.selectedNodeSignal();

        if (!current) {
            return;
        }

        if (!id || current.id === id) {
            this.selectedNodeSignal.set(null);
        }
    }

    /** Updates cached node data when the selected node changes externally. */
    public updateSelectedNode(node: DfDataNode): void {
        const current = this.selectedNodeSignal();

        if (current?.id === node.id) {
            this.selectedNodeSignal.set(this.cloneNode(node));
        }
    }

    /** Stores the provided connection as selected and clears node selection. */
    public setSelectedConnection(connection: DfDataConnection): void {
        this.selectedConnectionSignal.set(this.cloneConnection(connection));
        this.selectedNodeSignal.set(null);

        this.connectionSelectedSubject.next(connection);
    }

    /** Clears connection selection optionally guarding by equality check. */
    public clearSelectedConnection(connection?: DfDataConnection): void {
        const current = this.selectedConnectionSignal();

        if (!current) {
            return;
        }

        if (!connection || this.isSameConnection(current, connection)) {
            this.selectedConnectionSignal.set(null);
        }
    }

    /** Updates cached connection data when the selected connection changes. */
    public updateSelectedConnection(connection: DfDataConnection): void {
        const current = this.selectedConnectionSignal();

        if (current && this.isSameConnection(current, connection)) {
            this.selectedConnectionSignal.set(this.cloneConnection(connection));
        }
    }

    /** Emits a node deletion event and reconciles cached state. */
    public emitNodeDeleted(event: DfEvent<DfDataNode>): void {
        this.nodeDeletedSubject.next(event);

        if (this.selectedNodeSignal()?.id === event.target.id) {
            this.selectedNodeSignal.set(null);
        }

        this.updateDataModel(event.model);
    }

    /** Emits a node movement event and reconciles cached state. */
    public emitNodeMoved(event: DfEvent<DfDataNode>): void {
        this.nodeMovedSubject.next(event);
        this.updateSelectedNode(event.target);
        this.updateDataModel(event.model);
    }

    /** Emits a connection creation event and reconciles cached state. */
    public emitConnectionCreated(event: DfEvent<DfDataConnection>): void {
        this.connectionCreatedSubject.next(event);
        this.updateDataModel(event.model);
    }

    /** Emits a connection deletion event and reconciles cached state. */
    public emitConnectionDeleted(event: DfEvent<DfDataConnection>): void {
        this.connectionDeletedSubject.next(event);
        this.clearSelectedConnection(event.target);
        this.updateDataModel(event.model);
    }

    /** Records a connection as selected and notifies subscribers. */
    public emitConnectionSelected(connection: DfDataConnection): void {
        this.setSelectedConnection(connection);
    }

    /** Records a node as selected and notifies subscribers. */
    public emitNodeSelected(node: DfDataNode): void {
        this.setSelectedNode(node);
    }

    /** Clears all cached state (model, selections, scale). */
    public clear(): void {
        this.reset();
    }

    private reset(): void {
        this.dataModelSignal.set(null);
        this.selectedNodeSignal.set(null);
        this.selectedConnectionSignal.set(null);
        this.scaleSignal.set(100);
    }

    private cloneModel(model: DfDataModel): DfDataModel {
        return {
            ...model,
            nodes: model.nodes?.map((node) =>
                'position' in node
                    ? this.cloneNode(node)
                    : {
                          ...node,
                          data: {...node.data},
                      },
            ),
            connections: model.connections?.map((connection) =>
                this.cloneConnection(connection),
            ),
        };
    }

    private cloneNode(node: DfDataNode): DfDataNode {
        return {
            ...node,
            data: {...node.data},
            position: {...node.position},
        };
    }

    private cloneConnection(connection: DfDataConnection): DfDataConnection {
        return {
            ...connection,
            source: {...connection.source},
            target: {...connection.target},
            label: connection.label ? {...connection.label} : undefined,
        };
    }

    private isSameConnection(left: DfDataConnection, right: DfDataConnection): boolean {
        return (
            left.source.nodeId === right.source.nodeId &&
            left.source.connectorId === right.source.connectorId &&
            left.target.nodeId === right.target.nodeId &&
            left.target.connectorId === right.target.connectorId
        );
    }
}
