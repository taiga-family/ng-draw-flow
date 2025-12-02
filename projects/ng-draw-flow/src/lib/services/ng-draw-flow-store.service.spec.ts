import {MockBuilder, ngMocks} from 'ng-mocks';

import {type NgDrawFlowComponent} from '../ng-draw-flow.component';
import {
    DfConnectionPoint,
    type DfDataConnection,
    type DfDataModel,
    type DfDataNode,
    type DfEvent,
} from '../ng-draw-flow.interfaces';
import {NgDrawFlowStoreService} from './ng-draw-flow-store.service';

describe('NgDrawFlowStoreService', () => {
    let service: NgDrawFlowStoreService;

    const node: DfDataNode = {
        id: 'node-1',
        data: {type: 'simpleNode'},
        position: {x: 10, y: 20},
    };

    const connection: DfDataConnection = {
        source: {
            nodeId: 'node-1',
            connectorId: 'src',
            connectorType: DfConnectionPoint.Output,
        },
        target: {
            nodeId: 'node-2',
            connectorId: 'dst',
            connectorType: DfConnectionPoint.Input,
        },
    };

    const model: DfDataModel = {
        nodes: [{...node}],
        connections: [{...connection}],
    };

    beforeEach(async () => {
        await MockBuilder(NgDrawFlowStoreService);
        service = ngMocks.get(NgDrawFlowStoreService);
    });

    afterEach(() => {
        service.clear();
    });

    it('should mirror host public methods after attach', () => {
        const host = {
            zoomIn: jest.fn(),
            zoomOut: jest.fn(),
            resetPosition: jest.fn(),
            setScale: jest.fn(),
            removeConnection: jest.fn(),
            clearSelection: jest.fn(),
        } as unknown as NgDrawFlowComponent;

        service.attach(host);

        service.zoomIn();
        service.zoomOut();
        service.resetPosition();
        service.setScale(1.25);
        service.removeConnection(connection);

        expect(host.zoomIn).toHaveBeenCalled();
        expect(host.zoomOut).toHaveBeenCalled();
        expect(host.resetPosition).toHaveBeenCalled();
        expect(host.setScale).toHaveBeenCalledWith(1.25);
        expect(host.removeConnection).toHaveBeenCalledWith(connection);
        expect(service.scale()).toBe(125);

        service.detach(host);

        expect(service.dataModel()).toBeNull();
        expect(service.selectedNode()).toBeNull();
        expect(service.selectedConnection()).toBeNull();
        expect(service.scale()).toBe(100);
    });

    it('should keep data model up to date', () => {
        service.updateDataModel(model);

        expect(service.dataModel()).toEqual({
            ...model,
            nodes: [expect.objectContaining(node)],
            connections: [expect.objectContaining(connection)],
        });

        // remove node clears selection automatically
        service.emitNodeSelected(node);
        service.updateDataModel({...model, nodes: []});

        expect(service.selectedNode()).toBeNull();

        // remove connection clears connection selection
        service.emitConnectionSelected(connection);
        service.updateDataModel({...model, connections: []});

        expect(service.selectedConnection()).toBeNull();
    });

    it('should clear scene selection when clearing node via API', () => {
        const host = {clearSelection: jest.fn()} as unknown as NgDrawFlowComponent;

        service.attach(host);
        service.setSelectedNode(node);
        service.clearSelectedNode(node.id);

        expect(service.selectedNode()).toBeNull();
        expect(host.clearSelection).toHaveBeenCalled();
    });

    it('should propagate node events', () => {
        const deletedSpy = jest.fn();
        const movedSpy = jest.fn();
        const selectedSpy = jest.fn();

        service.nodeDeleted$.subscribe(deletedSpy);
        service.nodeMoved$.subscribe(movedSpy);
        service.nodeSelected$.subscribe(selectedSpy);

        const deleteEvent: DfEvent<DfDataNode> = {
            target: node,
            model: {nodes: [], connections: []},
        };
        const movedNode: DfDataNode = {...node, position: {x: 50, y: 70}};
        const moveEvent: DfEvent<DfDataNode> = {
            target: movedNode,
            model: {nodes: [movedNode], connections: model.connections.slice()},
        };

        service.emitNodeSelected(node);
        service.emitNodeMoved(moveEvent);
        expect((service.dataModel()?.nodes[0] as DfDataNode)?.position).toEqual({
            x: 50,
            y: 70,
        });
        service.emitNodeDeleted(deleteEvent);

        expect(selectedSpy).toHaveBeenCalledWith(node);
        expect(movedSpy).toHaveBeenCalledWith(moveEvent);
        expect(deletedSpy).toHaveBeenCalledWith(deleteEvent);
        expect(service.selectedNode()).toBeNull();
        expect(service.dataModel()?.nodes).toHaveLength(0);
    });

    it('should propagate connection events', () => {
        const createdSpy = jest.fn();
        const deletedSpy = jest.fn();
        const selectedSpy = jest.fn();

        service.connectionCreated$.subscribe(createdSpy);
        service.connectionDeleted$.subscribe(deletedSpy);
        service.connectionSelected$.subscribe(selectedSpy);

        const createdEvent: DfEvent<DfDataConnection> = {
            target: connection,
            model,
        };
        const deletedEvent: DfEvent<DfDataConnection> = {
            target: connection,
            model: {nodes: model.nodes.slice(), connections: []},
        };

        service.emitConnectionCreated(createdEvent);
        service.emitConnectionSelected(connection);
        service.emitConnectionDeleted(deletedEvent);

        expect(createdSpy).toHaveBeenCalledWith(createdEvent);
        expect(selectedSpy).toHaveBeenCalledWith(connection);
        expect(deletedSpy).toHaveBeenCalledWith(deletedEvent);
        expect(service.selectedConnection()).toBeNull();
        expect(service.dataModel()?.connections).toHaveLength(0);
    });

    it('should allow manual scale updates', () => {
        service.setScaleValue(85);

        expect(service.scale()).toBe(85);
    });
});
