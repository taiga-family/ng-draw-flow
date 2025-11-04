import {MockBuilder, MockRender} from 'ng-mocks';

import {DfConnectionPoint} from '../../ng-draw-flow.interfaces';
import {ConnectionsService} from './connections.service';

describe('ConnectionsService', () => {
    let service: ConnectionsService;

    const connection = {
        source: {
            nodeId: 'n1',
            connectorType: DfConnectionPoint.Output,
            connectorId: 'o1',
        },
        target: {nodeId: 'n2', connectorType: DfConnectionPoint.Input, connectorId: 'i1'},
    };

    const anotherConnection = {
        source: {
            nodeId: 'n3',
            connectorType: DfConnectionPoint.Output,
            connectorId: 'o2',
        },
        target: {nodeId: 'n4', connectorType: DfConnectionPoint.Input, connectorId: 'i2'},
    };

    beforeEach(async () => {
        await MockBuilder(ConnectionsService);
        service = MockRender(ConnectionsService).point.componentInstance;
    });

    it('adds connections without duplicates', () => {
        service.addConnections([connection]);
        service.addConnections([connection]);

        expect(service.connections$.value.length).toBe(1);
        expect(service.usedConnectors$.value).toEqual(['o1', 'i1']);
    });

    it('removes connection and updates used connectors', () => {
        service.addConnections([connection]);
        service.removeConnection(connection);

        expect(service.connections$.value.length).toBe(0);
        expect(service.usedConnectors$.value.length).toBe(0);
    });

    it('removes connections by node id', () => {
        service.addConnections([connection]);
        service.removeConnectionsByNodeId('n1');

        expect(service.connections$.value.length).toBe(0);
    });

    it('removes connections by connector id', () => {
        service.addConnections([connection]);
        service.removeConnectionsByConnectorId('o1');

        expect(service.connections$.value.length).toBe(0);
    });

    it('updates selected node for highlighting connections', () => {
        service.addConnections([connection, anotherConnection]);

        service.highlightConnectionsForNode('n1');
        expect(service.selectedNodeId$.value).toBe('n1');

        service.highlightConnectionsForNode('n1');
        expect(service.selectedNodeId$.value).toBe('n1');

        service.highlightConnectionsForNode('n2');
        expect(service.selectedNodeId$.value).toBe('n2');

        service.highlightConnectionsForNode(null);
        expect(service.selectedNodeId$.value).toBeNull();
    });
});
