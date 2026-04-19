import {Injectable, signal} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';

import {type DfDataConnection} from '../../ng-draw-flow.interfaces';

@Injectable()
export class ConnectionsService {
    private readonly connectionsSignal = signal<DfDataConnection[]>([]);
    private readonly usedConnectorsSignal = signal<string[]>([]);
    private readonly selectedNodeIdSignal = signal<string | null>(null);

    public readonly connections = this.connectionsSignal.asReadonly();
    public readonly usedConnectors = this.usedConnectorsSignal.asReadonly();
    public readonly selectedNodeId = this.selectedNodeIdSignal.asReadonly();

    public readonly connections$ = toObservable(this.connectionsSignal);
    public readonly usedConnectors$ = toObservable(this.usedConnectorsSignal);
    public readonly selectedNodeId$ = toObservable(this.selectedNodeIdSignal);

    public setConnections(connections: DfDataConnection[]): void {
        const usedConnectors = this.collectUsedConnectors(connections);

        this.usedConnectorsSignal.set(usedConnectors);
        this.connectionsSignal.set([...connections]);
    }

    public addConnections(connections: DfDataConnection[]): void {
        const newConnections = connections.filter(
            (newConnection) =>
                !this.connectionsSignal().some((existingConnection) =>
                    this.areConnectionsEqual(existingConnection, newConnection),
                ),
        );

        if (newConnections.length === 0) {
            return;
        }

        const updatedUsedConnectors = [...this.usedConnectorsSignal()];

        newConnections.forEach((connection) => {
            if (!updatedUsedConnectors.includes(connection.source.connectorId)) {
                updatedUsedConnectors.push(connection.source.connectorId);
            }

            if (!updatedUsedConnectors.includes(connection.target.connectorId)) {
                updatedUsedConnectors.push(connection.target.connectorId);
            }
        });

        this.usedConnectorsSignal.set(updatedUsedConnectors);
        this.connectionsSignal.set([...this.connectionsSignal(), ...newConnections]);
    }

    public removeConnection(connectionToRemove: DfDataConnection): void {
        const filteredConnections = this.connectionsSignal().filter(
            (existingConnection) =>
                !this.areConnectionsEqual(existingConnection, connectionToRemove),
        );

        const usedConnectors = this.usedConnectorsSignal().filter((connectorId: string) =>
            filteredConnections.some(
                (connection) =>
                    connection.source.connectorId === connectorId ||
                    connection.target.connectorId === connectorId,
            ),
        );

        this.usedConnectorsSignal.set(usedConnectors);
        this.connectionsSignal.set(filteredConnections);
    }

    public removeConnectionsByNodeId(id: string): void {
        const connectionsToKeep = this.connectionsSignal().filter(
            (connection) =>
                connection.source.nodeId !== id && connection.target.nodeId !== id,
        );

        const usedConnectors = this.usedConnectorsSignal().filter((connectorId: string) =>
            connectionsToKeep.some(
                (connection) =>
                    connection.source.connectorId === connectorId ||
                    connection.target.connectorId === connectorId,
            ),
        );

        this.usedConnectorsSignal.set(usedConnectors);
        this.connectionsSignal.set(connectionsToKeep);
    }

    public removeConnectionsByConnectorId(connectorIdToRemove: string): void {
        if (!connectorIdToRemove) {
            return;
        }

        const connectionsToKeep = this.connectionsSignal().filter(
            (connection) =>
                connection.source.connectorId !== connectorIdToRemove &&
                connection.target.connectorId !== connectorIdToRemove,
        );

        const usedConnectors = this.usedConnectorsSignal().filter(
            (connectorId) => connectorId !== connectorIdToRemove,
        );

        this.usedConnectorsSignal.set(usedConnectors);
        this.connectionsSignal.set(connectionsToKeep);
    }

    public highlightConnectionsForNode(nodeId: string | null): void {
        if (this.selectedNodeIdSignal() === nodeId) {
            return;
        }

        this.selectedNodeIdSignal.set(nodeId);
    }

    private areConnectionsEqual(
        connection1: DfDataConnection,
        connection2: DfDataConnection,
    ): boolean {
        return (
            connection1.source.nodeId === connection2.source.nodeId &&
            connection1.source.connectorType === connection2.source.connectorType &&
            connection1.source.connectorId === connection2.source.connectorId &&
            connection1.target.nodeId === connection2.target.nodeId &&
            connection1.target.connectorType === connection2.target.connectorType &&
            connection1.target.connectorId === connection2.target.connectorId
        );
    }

    private collectUsedConnectors(connections: DfDataConnection[]): string[] {
        return connections.reduce<string[]>((result, connection) => {
            if (!result.includes(connection.source.connectorId)) {
                result.push(connection.source.connectorId);
            }

            if (!result.includes(connection.target.connectorId)) {
                result.push(connection.target.connectorId);
            }

            return result;
        }, []);
    }
}
