import {computed, DestroyRef, EnvironmentInjector, signal} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {Subject} from 'rxjs';

import {DfConnectorPosition, type DfDataNode} from '../../ng-draw-flow.interfaces';
import {CoordinatesService} from '../../services/coordinates.service';
import {type DfInputComponent, type DfOutputComponent} from '../connectors';
import {NodeConnectorsController} from './node-connectors.controller';
import {type DfNodeContentRenderer} from './node-content.renderer';

describe('NodeConnectorsController', () => {
    function createRenderer(
        overrides: Partial<DfNodeContentRenderer> = {},
    ): DfNodeContentRenderer {
        return {
            nativeElement: document.createElement('div'),
            invalid: false,
            inputConnectors: signal<readonly DfInputComponent[]>([]),
            outputConnectors: signal<readonly DfOutputComponent[]>([]),
            connectorUpdates$: new Subject<void>(),
            syncInputs: jest.fn(),
            applyConnectionLabel: jest.fn(),
            ...overrides,
        };
    }

    it('destroys signal watchers on disconnect and renderer replacement', () => {
        TestBed.configureTestingModule({});
        const inputs = signal<readonly DfInputComponent[]>([]);
        const reads = jest.fn();
        const firstRenderer: DfNodeContentRenderer = {
            nativeElement: document.createElement('div'),
            invalid: false,
            inputConnectors: computed(() => {
                reads();

                return inputs();
            }),
            outputConnectors: signal<readonly DfOutputComponent[]>([]),
            connectorUpdates$: new Subject<void>(),
            syncInputs: jest.fn(),
            applyConnectionLabel: jest.fn(),
        };
        let renderer = firstRenderer;
        const controller = new NodeConnectorsController({
            coordinatesService: TestBed.runInInjectionContext(
                () => new CoordinatesService(),
            ),
            destroyRef: TestBed.inject(DestroyRef),
            environmentInjector: TestBed.inject(EnvironmentInjector),
            getCenteredPosition: () => ({x: 0, y: 0}),
            getNode: () => ({id: 'node', position: {x: 0, y: 0}, data: {type: 'node'}}),
            getNodeContentRenderer: () => renderer,
            getZoom: () => 1,
            onConnectorDeleted: jest.fn(),
        });

        controller.watch();
        TestBed.flushEffects();
        expect(reads).toHaveBeenCalledTimes(1);
        controller.disconnect();
        inputs.set([]);
        TestBed.flushEffects();
        expect(reads).toHaveBeenCalledTimes(1);

        controller.watch();
        TestBed.flushEffects();
        expect(reads).toHaveBeenCalledTimes(2);
        renderer = {
            ...firstRenderer,
            inputConnectors: signal<readonly DfInputComponent[]>([]),
        };
        controller.watch();
        TestBed.flushEffects();
        inputs.set([]);
        TestBed.flushEffects();
        expect(reads).toHaveBeenCalledTimes(2);
        controller.disconnect();
    });

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
        renderer: DfNodeContentRenderer;
    } {
        const renderer = createRenderer();

        const controller = new NodeConnectorsController({
            coordinatesService: new CoordinatesService(),
            destroyRef: TestBed.inject(DestroyRef),
            environmentInjector: TestBed.inject(EnvironmentInjector),
            getCenteredPosition: jest.fn(),
            getNode: () => node,
            getNodeContentRenderer: () => renderer,
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
        const coordinatesService = new CoordinatesService();
        const addConnectionPoint = jest.spyOn(coordinatesService, 'addConnectionPoint');
        const removeConnectionPoint = jest.spyOn(
            coordinatesService,
            'removeConnectionPoint',
        );
        const connector = {
            nativeElement: connectorElement,
            position: DfConnectorPosition.Right,
            coordinates: undefined,
        };
        const renderer = createRenderer({
            outputConnectors: signal([connector as DfOutputComponent]),
        });

        nodeElement.dataset.drawFlowNode = '';
        connectorElement.dataset.connectorId = 'output-1';
        nodeElement.append(connectorElement);

        nodeElement.getBoundingClientRect = jest.fn(() => createRect(100, 200, 320, 128));
        connectorElement.getBoundingClientRect = jest.fn(() =>
            createRect(396, 248, 32, 32),
        );

        const controller = new NodeConnectorsController({
            coordinatesService,
            destroyRef: TestBed.inject(DestroyRef),
            environmentInjector: TestBed.inject(EnvironmentInjector),
            getCenteredPosition: jest.fn(),
            getNode: jest.fn(),
            getNodeContentRenderer: () => renderer,
            getZoom: () => 2,
            onConnectorDeleted: jest.fn(),
        });

        controller.updateCoordinatesAt({x: 10, y: 20}, 'node-1');

        expect(connector).toHaveProperty('coordinates', {x: 166, y: 52});
        expect(addConnectionPoint).toHaveBeenCalledWith(
            '["node-1","output","output-1"]',
            {x: 166, y: 52},
            DfConnectorPosition.Right,
        );
        expect(connectorElement.getBoundingClientRect).toHaveBeenCalled();
        expect(nodeElement.getBoundingClientRect).toHaveBeenCalled();
        controller.disconnect();
        expect(removeConnectionPoint).toHaveBeenCalledWith(
            '["node-1","output","output-1"]',
        );
    });

    it('translates stored coordinates without measuring DOM', () => {
        const connectorElement = document.createElement('div');
        const coordinatesService = new CoordinatesService();
        const addConnectionPoint = jest.spyOn(coordinatesService, 'addConnectionPoint');
        const connector = {
            nativeElement: connectorElement,
            position: DfConnectorPosition.Right,
            coordinates: {x: 166, y: 52},
            data: {
                nodeId: 'node-1',
                connectorId: 'output-1',
            },
        };
        const renderer = createRenderer({
            outputConnectors: signal([connector as DfOutputComponent]),
        });

        connectorElement.getBoundingClientRect = jest.fn();

        const controller = new NodeConnectorsController({
            coordinatesService,
            destroyRef: TestBed.inject(DestroyRef),
            environmentInjector: TestBed.inject(EnvironmentInjector),
            getCenteredPosition: jest.fn(),
            getNode: jest.fn(),
            getNodeContentRenderer: () => renderer,
            getZoom: () => 1,
            onConnectorDeleted: jest.fn(),
        });

        controller.translateCoordinates({deltaX: 10, deltaY: -5});

        expect(connector.coordinates).toEqual({x: 176, y: 47});
        expect(addConnectionPoint).toHaveBeenCalledWith(
            '["node-1","output","output-1"]',
            {x: 176, y: 47},
            DfConnectorPosition.Right,
        );
        expect(connectorElement.getBoundingClientRect).not.toHaveBeenCalled();
    });
});
