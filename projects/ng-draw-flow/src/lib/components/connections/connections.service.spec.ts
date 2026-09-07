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
        const changed = jest.fn();

        service.connectionsChanged$.subscribe(changed);
        service.addConnections([connection]);
        service.addConnections([connection]);

        expect(service.connections().length).toBe(1);
        expect(service.usedConnectors()).toEqual(['o1', 'i1']);
        expect(changed).toHaveBeenCalledTimes(1);
        expect(changed).toHaveBeenCalledWith([connection]);
    });

    it('does not report external synchronization as a user change', () => {
        const changed = jest.fn();

        service.connectionsChanged$.subscribe(changed);
        service.setConnections([connection]);

        expect(service.connections()).toEqual([connection]);
        expect(changed).not.toHaveBeenCalled();
    });

    it('removes connection and updates used connectors', () => {
        const changed = jest.fn();

        service.connectionsChanged$.subscribe(changed);
        service.addConnections([connection]);
        changed.mockClear();
        service.removeConnection(connection);
        service.removeConnection(connection);

        expect(service.connections().length).toBe(0);
        expect(service.usedConnectors().length).toBe(0);
        expect(changed).toHaveBeenCalledTimes(1);
        expect(changed).toHaveBeenCalledWith([]);
    });

    it('removes connections by node id', () => {
        service.addConnections([connection]);
        service.removeConnectionsByNodeId('n1');

        expect(service.connections().length).toBe(0);
    });

    it('removes connections by connector id', () => {
        service.addConnections([connection]);
        service.removeConnectionsByConnectorId('o1');

        expect(service.connections().length).toBe(0);
    });

    it('updates selected node for highlighting connections', () => {
        service.addConnections([connection, anotherConnection]);

        service.highlightConnectionsForNode('n1');
        expect(service.selectedNodeId()).toBe('n1');

        service.highlightConnectionsForNode('n1');
        expect(service.selectedNodeId()).toBe('n1');

        service.highlightConnectionsForNode('n2');
        expect(service.selectedNodeId()).toBe('n2');

        service.highlightConnectionsForNode(null);
        expect(service.selectedNodeId()).toBeNull();
    });
});
