import {DfConnectorPosition, type DfDataNode} from '../../ng-draw-flow.interfaces';
import {type CoordinatesService} from '../../services/coordinates.service';
import {type DfOutputComponent} from '../connectors';
import {NodeConnectorsController} from './node-connectors.controller';
import {type DfNodeContentRenderer} from './node-content.renderer';

describe('NodeConnectorsController', () => {
    function createRect(
        left: number,
        top: number,
        width: number,
        height: number,
    ): DOMRect {
        return {
            x: left,
            y: top,
            left,
            top,
            width,
            height,
            right: left + width,
            bottom: top + height,
            toJSON: () => ({}),
        };
    }

    function createController(node: DfDataNode): {
        controller: NodeConnectorsController;
        renderer: jest.Mocked<Pick<DfNodeContentRenderer, 'applyConnectionLabel'>>;
    } {
        const renderer = {
            applyConnectionLabel: jest.fn(),
        };

        const controller = new NodeConnectorsController({
            coordinatesService: null as never,
            destroyRef: null as never,
            environmentInjector: null as never,
            getCenteredPosition: jest.fn(),
            getNode: () => node,
            getNodeContentRenderer: () => renderer as unknown as DfNodeContentRenderer,
            getZoom: () => 1,
            onConnectorDeleted: jest.fn(),
        });

        return {controller, renderer};
    }

    it('applies configured connection label to output connectors', () => {
        const connectionLabel = {content: 'Label'};
        const {controller, renderer} = createController({
            id: 'node-1',
            data: {type: 'simpleNode', connectionLabel},
            position: {x: 0, y: 0},
        });

        controller.applyOutputsConnectionLabel();

        expect(renderer.applyConnectionLabel).toHaveBeenCalledWith(connectionLabel);
    });

    it('clears output connector labels when node connection label is removed', () => {
        const {controller, renderer} = createController({
            id: 'node-1',
            data: {type: 'simpleNode'},
            position: {x: 0, y: 0},
        });

        controller.applyOutputsConnectionLabel();

        expect(renderer.applyConnectionLabel).toHaveBeenCalledWith(undefined);
    });

    it('uses rendered connector center at the current zoom', () => {
        const nodeElement = document.createElement('div');
        const connectorElement = document.createElement('div');
        const addConnectionPoint = jest.fn();
        const connector = {
            nativeElement: connectorElement,
            position: DfConnectorPosition.Right,
            coordinates: undefined,
        };
        const coordinatesService = {addConnectionPoint};
        const renderer = {
            inputConnectors: () => [],
            outputConnectors: () => [connector as DfOutputComponent],
        };

        nodeElement.dataset.drawFlowNode = '';
        connectorElement.dataset.connectorId = 'output-1';
        nodeElement.append(connectorElement);

        nodeElement.getBoundingClientRect = jest.fn(() => createRect(100, 200, 320, 128));
        connectorElement.getBoundingClientRect = jest.fn(() =>
            createRect(396, 248, 32, 32),
        );

        const controller = new NodeConnectorsController({
            coordinatesService: coordinatesService as CoordinatesService,
            destroyRef: null as never,
            environmentInjector: null as never,
            getCenteredPosition: jest.fn(),
            getNode: jest.fn(),
            getNodeContentRenderer: () => renderer as DfNodeContentRenderer,
            getZoom: () => 2,
            onConnectorDeleted: jest.fn(),
        });

        controller.updateCoordinatesAt({x: 10, y: 20}, 'node-1');

        expect(connector).toHaveProperty('coordinates', {x: 166, y: 52});
        expect(addConnectionPoint).toHaveBeenCalledWith(
            'nodeId:node-1,connectorType:output,connectorId:output-1',
            {x: 166, y: 52},
            DfConnectorPosition.Right,
        );
        expect(connectorElement.getBoundingClientRect).toHaveBeenCalled();
        expect(nodeElement.getBoundingClientRect).toHaveBeenCalled();
    });

    it('translates stored coordinates without measuring DOM', () => {
        const connectorElement = document.createElement('div');
        const addConnectionPoint = jest.fn();
        const connector = {
            nativeElement: connectorElement,
            position: DfConnectorPosition.Right,
            coordinates: {x: 166, y: 52},
            data: {
                nodeId: 'node-1',
                connectorId: 'output-1',
            },
        };
        const renderer = {
            inputConnectors: () => [],
            outputConnectors: () => [connector as DfOutputComponent],
        };

        connectorElement.getBoundingClientRect = jest.fn();

        const controller = new NodeConnectorsController({
            coordinatesService: {addConnectionPoint} as unknown as CoordinatesService,
            destroyRef: null as never,
            environmentInjector: null as never,
            getCenteredPosition: jest.fn(),
            getNode: jest.fn(),
            getNodeContentRenderer: () => renderer as DfNodeContentRenderer,
            getZoom: () => 1,
            onConnectorDeleted: jest.fn(),
        });

        controller.translateCoordinates({deltaX: 10, deltaY: -5});

        expect(connector.coordinates).toEqual({x: 176, y: 47});
        expect(addConnectionPoint).toHaveBeenCalledWith(
            'nodeId:node-1,connectorType:output,connectorId:output-1',
            {x: 176, y: 47},
            DfConnectorPosition.Right,
        );
        expect(connectorElement.getBoundingClientRect).not.toHaveBeenCalled();
    });
});
