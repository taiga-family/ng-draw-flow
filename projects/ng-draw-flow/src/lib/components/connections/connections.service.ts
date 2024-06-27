import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import type {DfDataConnection} from '../../ng-draw-flow.interfaces';

@Injectable()
export class ConnectionsService {
    public readonly connections$ = new BehaviorSubject<DfDataConnection[]>([]);
    public readonly usedConnectors$ = new BehaviorSubject<string[]>([]);

    public addConnections(connections: DfDataConnection[]): void {
        connections.forEach(connection => {
            const usedConnectors = [
                ...this.usedConnectors$.value,
                connection.source.connectorId,
                connection.target.connectorId,
            ];

            this.usedConnectors$.next(usedConnectors);
        });

        this.connections$.next([...this.connections$.value, ...connections]);
    }

    public removeConnection(connectionToRemove: DfDataConnection): void {
        const filteredConnections = this.connections$.value.filter(
            existingConnection =>
                !this.areConnectionsEqual(existingConnection, connectionToRemove),
        );

        const usedConnectors = this.usedConnectors$.value.filter((connectorId: string) =>
            filteredConnections.some(
                connection =>
                    connection.source.connectorId === connectorId ||
                    connection.target.connectorId === connectorId,
            ),
        );

        this.usedConnectors$.next(usedConnectors);
        this.connections$.next(filteredConnections);
    }

    public removeConnectionsByNodeId(id: string): void {
        const connectionsToKeep = this.connections$.value.filter(
            connection =>
                connection.source.nodeId !== id && connection.target.nodeId !== id,
        );

        const usedConnectors = this.usedConnectors$.value.filter((connectorId: string) =>
            connectionsToKeep.some(
                connection =>
                    connection.source.connectorId === connectorId ||
                    connection.target.connectorId === connectorId,
            ),
        );

        this.usedConnectors$.next(usedConnectors);
        this.connections$.next(connectionsToKeep);
    }

    public removeConnectionsByConnectorId(connectorIdToRemove: string): void {
        if (!connectorIdToRemove) {
            return;
        }

        const connectionsToKeep = this.connections$.value.filter(
            connection =>
                connection.source.connectorId !== connectorIdToRemove &&
                connection.target.connectorId !== connectorIdToRemove,
        );

        const usedConnectors = this.usedConnectors$.value.filter(
            connectorId => connectorId !== connectorIdToRemove,
        );

        this.usedConnectors$.next(usedConnectors);
        this.connections$.next(connectionsToKeep);
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
}
