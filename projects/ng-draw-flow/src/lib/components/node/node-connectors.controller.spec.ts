import {type DfDataNode} from '../../ng-draw-flow.interfaces';
import {NodeConnectorsController} from './node-connectors.controller';
import {type DfNodeContentRenderer} from './node-content.renderer';

describe('NodeConnectorsController', () => {
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
});
