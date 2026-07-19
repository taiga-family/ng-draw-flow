import {signal, type WritableSignal} from '@angular/core';
import {fakeAsync, TestBed, tick} from '@angular/core/testing';
import {MockBuilder, MockProvider, MockRender, ngMocks} from 'ng-mocks';

import {INITIAL_COORDINATES} from '../../consts';
import {DfDragDropStage} from '../../directives';
import {DRAW_FLOW_OPTIONS} from '../../ng-draw-flow.configs';
import {
    DfArrowhead,
    DfConnectionType,
    type DfDataInitialNode,
    type DfDataNode,
    type DfOptions,
} from '../../ng-draw-flow.interfaces';
import {DRAW_FLOW_ROOT_ELEMENT} from '../../ng-draw-flow.token';
import {CoordinatesService} from '../../services/coordinates.service';
import {NgDrawFlowStoreService} from '../../services/ng-draw-flow-store.service';
import {DF_NODE_SIZE_REGISTRY} from '../../services/node-size-registry.service';
import {ConnectionsService} from '../connections/connections.service';
import {
    DF_PAN_ZOOM_OPTIONS,
    type DfPanSizeDimensions,
    type DfPanZoomOptions,
} from '../pan-zoom/pan-zoom.options';
import {PanZoomService} from '../pan-zoom/pan-zoom.service';
import {HostComponent} from './mocks/host.component.mock';
import {MockNodeContentComponent} from './mocks/node-content.component.mock';
import {NodeComponent} from './node.component';

jest.mock('./node.component.html', () => '', {virtual: true});
jest.mock('./node.component.less', () => '', {virtual: true});

describe('NodeComponent', () => {
    let panZoomOptions: DfPanZoomOptions;
    let panSizeSignal: WritableSignal<DfPanSizeDimensions>;
    let workspaceOriginSignal: WritableSignal<{x: number; y: number}>;
    let upsertNodeBounds: jest.Mock;
    let removeNodeBounds: jest.Mock;
    let addConnectionPoint: jest.Mock;
    let clearSelectedNode: jest.Mock;
    let emitNodeSelected: jest.Mock;
    let highlightConnectionsForNode: jest.Mock;
    let setNodeSize: jest.Mock;
    let removeNodeSize: jest.Mock;
    let panZoomServiceMock: {
        panzoomModel: {
            x: number;
            y: number;
            zoom: number;
            offsetX: number;
            offsetY: number;
        };
        panSize: WritableSignal<DfPanSizeDimensions>;
        workspaceOrigin: WritableSignal<{x: number; y: number}>;
        panzoomDisabled: boolean;
        upsertNodeBounds: jest.Mock;
        removeNodeBounds: jest.Mock;
        setDisabled: jest.Mock;
        snapshot(): {
            x: number;
            y: number;
            zoom: number;
            offsetX: number;
            offsetY: number;
        };
    };

    beforeEach(async () => {
        TestBed.overrideComponent(NodeComponent, {
            set: {
                template: `
                    <div #nodeElement [class]="nodeClassName()">
                        <div class="node-content">
                            <ng-container #container></ng-container>
                        </div>
                    </div>
                `,
            },
        });

        const options: DfOptions = {
            connection: {
                type: DfConnectionType.Bezier,
                arrowhead: {type: DfArrowhead.Arrow, height: 8, width: 8},
                curvature: 0,
            },
            nodes: {simpleNode: MockNodeContentComponent},
            options: {
                nodeDragThreshold: 1,
                nodesDraggable: true,
                nodesDeletable: true,
                connectionsDeletable: true,
                connectionsCreatable: true,
            },
        };

        panZoomOptions = {
            panSize: 2000,
            leftPosition: null,
            topPosition: null,
            minZoom: 0.25,
            maxZoom: 3,
            zoomStep: 0.25,
            zoomAnimationDuration: 300,
            zoomWheelSensitivity: 0.01,
            touchSensitivity: 0.01,
            wheelBehavior: 'zoom',
            wheelSpeed: 1,
            wheelStep: 0.008,
            pinchZoomSpeed: 1,
            backgroundCanvas: {visible: true},
        };

        panSizeSignal = signal({width: 2000, height: 2000});
        workspaceOriginSignal = signal({x: 1000, y: 1000});
        upsertNodeBounds = jest.fn();
        removeNodeBounds = jest.fn();
        addConnectionPoint = jest.fn();
        clearSelectedNode = jest.fn();
        emitNodeSelected = jest.fn();
        highlightConnectionsForNode = jest.fn();
        setNodeSize = jest.fn();
        removeNodeSize = jest.fn();

        panZoomServiceMock = {
            panzoomModel: {
                x: 0,
                y: 0,
                zoom: 1,
                offsetX: 0,
                offsetY: 0,
            },
            panSize: panSizeSignal,
            workspaceOrigin: workspaceOriginSignal,
            panzoomDisabled: false,
            upsertNodeBounds,
            removeNodeBounds,
            snapshot() {
                return this.panzoomModel;
            },
            setDisabled: jest.fn((value: boolean) => {
                this.panzoomDisabled = value;
            }),
        };

        return MockBuilder(HostComponent)
            .keep(NodeComponent)
            .provide([
                MockProvider(NgDrawFlowStoreService, {
                    clearSelectedNode,
                    emitNodeSelected,
                }),
                MockProvider(DRAW_FLOW_OPTIONS, options),
                MockProvider(DRAW_FLOW_ROOT_ELEMENT, {
                    offsetWidth: 1000,
                    offsetHeight: 1000,
                } as HTMLElement),
                MockProvider(PanZoomService, panZoomServiceMock),
                MockProvider(CoordinatesService, {
                    addConnectionPoint,
                    getConnectionPointSignal: () => signal(null),
                }),
                MockProvider(DF_PAN_ZOOM_OPTIONS, panZoomOptions),
                MockProvider(ConnectionsService, {
                    selectedNodeId: signal<string | null>(null),
                    highlightConnectionsForNode,
                } as ConnectionsService),
                MockProvider(DF_NODE_SIZE_REGISTRY, {
                    sizes: signal(new Map()).asReadonly(),
                    set: setNodeSize,
                    remove: removeNodeSize,
                }),
            ]);
    });

    afterEach(() => {
        ngMocks.flushTestBed();
    });

    it('centres new node relative to viewport and pan/zoom', () => {
        MockRender(HostComponent);
        const component = ngMocks.findInstance(NodeComponent) as any;
        const geometry = component.nodeGeometry;

        const initialValue: DfDataNode = component.resolvedNodeValue;

        expect(initialValue.position).toEqual({
            x: INITIAL_COORDINATES.x,
            y: INITIAL_COORDINATES.y,
        });

        const panZoomService = TestBed.inject(PanZoomService);

        panZoomService.panzoomModel = {
            x: -150,
            y: 200,
            zoom: 2,
            offsetX: 0,
            offsetY: 0,
        };

        const panCentered = geometry.getCenterOfViewport();

        expect(panCentered.x).toBeCloseTo(
            INITIAL_COORDINATES.x + (panZoomService.panzoomModel.x / 2) * -1,
            5,
        );
        expect(panCentered.y).toBeCloseTo(
            INITIAL_COORDINATES.y + (panZoomService.panzoomModel.y / 2) * -1,
            5,
        );

        panZoomOptions.leftPosition = 100;
        panZoomOptions.topPosition = 120;

        const edgeShifted = geometry.getCenterOfViewport();

        expect(edgeShifted.x).toBeCloseTo(275, 5);
        expect(edgeShifted.y).toBeCloseTo(90, 5);

        workspaceOriginSignal.set({x: 10000, y: 10000});
        panZoomService.panzoomModel = {
            x: 0,
            y: 0,
            zoom: 1,
            offsetX: 0,
            offsetY: 0,
        };

        const withShiftedWorkspaceOrigin = geometry.getCenterOfViewport();

        expect(withShiftedWorkspaceOrigin.x).toBeCloseTo(400, 5);
        expect(withShiftedWorkspaceOrigin.y).toBeCloseTo(380, 5);
    });

    it('keeps node position stable when workspace origin changes and no longer clamps by panSize', () => {
        MockRender(HostComponent);
        const component = ngMocks.findInstance(NodeComponent) as any;
        const geometry = component.nodeGeometry;

        geometry.measureContent({
            offsetWidth: 120,
            offsetHeight: 80,
        } as HTMLElement);
        component.resolvedNodeValue = {
            id: 'node-1',
            data: {type: 'simpleNode'},
            position: {x: 460, y: 440},
        };

        panZoomOptions.leftPosition = 50;
        panZoomOptions.topPosition = 60;
        workspaceOriginSignal.set({x: 460, y: 440});

        expect(geometry.getCenteredPosition(component.resolvedNodeValue)).toEqual({
            x: 400,
            y: 400,
        });

        workspaceOriginSignal.set({x: 10_460, y: 10_440});

        expect(geometry.getCenteredPosition(component.resolvedNodeValue)).toEqual({
            x: 400,
            y: 400,
        });
        expect(geometry.clampPositionToPanBounds({x: -2000, y: 2000})).toEqual({
            x: -2000,
            y: 2000,
        });
    });

    it('synchronizes resolved node inputs into dynamic content component', async () => {
        const fixture = MockRender(HostComponent);
        const host = fixture.point.componentInstance;
        const component = host.nodeComponent();
        const innerComponent = ngMocks.findInstance(MockNodeContentComponent);

        expect(innerComponent.nodeId).toBe('draft-node');
        expect(innerComponent.model).toEqual({type: 'simpleNode'});
        expect(innerComponent.startNode).toBe(false);
        expect(innerComponent.endNode).toBe(false);
        expect(innerComponent.selected).toBe(false);
        expect(innerComponent.invalid).toBe(false);

        (component as any).onSelectedChanged(true);
        fixture.detectChanges();
        await fixture.whenStable();

        expect(innerComponent.selected).toBe(true);
    });

    it('synchronizes dynamic content when node input is replaced', async () => {
        const fixture = MockRender(HostComponent);
        const host = fixture.point.componentInstance;
        const component = host.nodeComponent();
        const innerComponent = ngMocks.findInstance(MockNodeContentComponent);

        host.node.set({
            id: 'draft-node',
            data: {type: 'simpleNode', title: 'updated'},
            position: {x: 123, y: 456},
        });

        fixture.detectChanges();
        await fixture.whenStable();

        expect(innerComponent.model).toEqual({
            type: 'simpleNode',
            title: 'updated',
        });
        expect((component as any).getResolvedNode().position).toEqual({
            x: 123,
            y: 456,
        });
    });

    it('applies node className to the node wrapper', async () => {
        const fixture = MockRender(HostComponent);
        const host = fixture.point.componentInstance;
        const nodeElement = fixture.nativeElement.querySelector(
            '.draw-flow-node',
        ) as HTMLElement;

        host.node.set({
            id: 'draft-node',
            className: 'warning-node',
            data: {type: 'simpleNode'},
        });

        fixture.detectChanges();
        await fixture.whenStable();

        expect(nodeElement.classList.contains('warning-node')).toBe(true);

        host.node.set({
            id: 'draft-node',
            className: ['wide-node', 'accent-node'],
            data: {type: 'simpleNode'},
        });

        fixture.detectChanges();
        await fixture.whenStable();

        expect(nodeElement.classList.contains('warning-node')).toBe(false);
        expect(nodeElement.classList.contains('wide-node')).toBe(true);
        expect(nodeElement.classList.contains('accent-node')).toBe(true);
    });

    it('preserves resolved position when same node input is replaced without position', async () => {
        const fixture = MockRender(HostComponent);
        const host = fixture.point.componentInstance;
        const component = host.nodeComponent();
        const previousPosition = {
            ...((component as any).getResolvedNode() as DfDataNode).position,
        };

        host.node.set({
            id: 'draft-node',
            data: {type: 'simpleNode', title: 'without position'},
        });

        fixture.detectChanges();
        await fixture.whenStable();

        const resolvedNode = (component as any).getResolvedNode() as DfDataNode;

        expect(resolvedNode.data).toEqual({
            type: 'simpleNode',
            title: 'without position',
        });
        expect(resolvedNode.position).toEqual(previousPosition);
    });

    it('skips node refresh when node input is replaced with equivalent values', async () => {
        const fixture = MockRender(HostComponent);
        const host = fixture.point.componentInstance;
        const component = host.nodeComponent();
        const resolvedNode = (component as any).getResolvedNode() as DfDataNode;
        const refreshRenderedGeometrySpy = jest.spyOn(
            component as any,
            'refreshRenderedGeometry',
        );
        const syncWorkspaceGeometrySpy = jest.spyOn(
            component as any,
            'syncWorkspaceGeometry',
        );
        const syncInputsSpy = jest.spyOn(
            (component as any).nodeContentHost,
            'syncInputs',
        );

        host.node.set({
            id: resolvedNode.id,
            data: resolvedNode.data,
            position: {...resolvedNode.position},
        });

        fixture.detectChanges();
        await fixture.whenStable();

        expect(refreshRenderedGeometrySpy).not.toHaveBeenCalled();
        expect(syncWorkspaceGeometrySpy).not.toHaveBeenCalled();
        expect(syncInputsSpy).not.toHaveBeenCalled();
    });

    it('syncs data-only node input updates without recalculating geometry', async () => {
        const fixture = MockRender(HostComponent);
        const host = fixture.point.componentInstance;
        const component = host.nodeComponent();
        const innerComponent = ngMocks.findInstance(MockNodeContentComponent);
        const resolvedNode = (component as any).getResolvedNode() as DfDataNode;
        const refreshRenderedGeometrySpy = jest.spyOn(
            component as any,
            'refreshRenderedGeometry',
        );
        const syncWorkspaceGeometrySpy = jest.spyOn(
            component as any,
            'syncWorkspaceGeometry',
        );

        host.node.set({
            id: resolvedNode.id,
            data: {type: 'simpleNode', title: 'data only'},
            position: {...resolvedNode.position},
        });

        fixture.detectChanges();
        await fixture.whenStable();

        expect(innerComponent.model).toEqual({
            type: 'simpleNode',
            title: 'data only',
        });
        expect(refreshRenderedGeometrySpy).not.toHaveBeenCalled();
        expect(syncWorkspaceGeometrySpy).not.toHaveBeenCalled();
    });

    it('coalesces node size sync into one animation frame', fakeAsync(() => {
        const fixture = MockRender(HostComponent);
        const component = fixture.point.componentInstance.nodeComponent();
        const measureNodeContentSpy = jest.spyOn(component as any, 'measureNodeContent');
        const refreshRenderedGeometrySpy = jest.spyOn(
            component as any,
            'refreshRenderedGeometry',
        );

        measureNodeContentSpy.mockClear();
        refreshRenderedGeometrySpy.mockClear();
        upsertNodeBounds.mockClear();

        (component as any).scheduleNodeSizeSync();
        (component as any).scheduleNodeSizeSync();

        expect(measureNodeContentSpy).not.toHaveBeenCalled();
        expect(refreshRenderedGeometrySpy).not.toHaveBeenCalled();
        expect(upsertNodeBounds).not.toHaveBeenCalled();

        tick(16);

        expect(measureNodeContentSpy).toHaveBeenCalledTimes(1);
        expect(refreshRenderedGeometrySpy).toHaveBeenCalledTimes(1);
        expect(refreshRenderedGeometrySpy).toHaveBeenCalledWith(false);
        expect(upsertNodeBounds).toHaveBeenCalledTimes(1);
    }));

    it('publishes the rendered wrapper size to the opt-in registry', () => {
        const fixture = MockRender(HostComponent);
        const component = fixture.point.componentInstance.nodeComponent();
        const nodeElement = fixture.nativeElement.querySelector(
            '.draw-flow-node',
        ) as HTMLElement;

        Object.defineProperties(nodeElement, {
            offsetWidth: {value: 220},
            offsetHeight: {value: 96},
        });
        setNodeSize.mockClear();
        removeNodeSize.mockClear();

        (component as any).syncNodeSizeRegistry();

        expect(setNodeSize).toHaveBeenCalledWith('draft-node', {
            width: 220,
            height: 96,
        });

        fixture.destroy();

        expect(removeNodeSize).toHaveBeenCalledWith('draft-node');
    });

    it('throws readable error when node type is not registered', () => {
        expect(() => {
            MockRender(NodeComponent, {
                invalid: false,
                node: {
                    id: 'unknown-node',
                    data: {type: 'unknownNode'},
                } satisfies DfDataInitialNode,
            });
        }).toThrow(
            'NodeComponent cannot render node "unknown-node" because node type "unknownNode" is not registered',
        );
    });

    it('emits nodeSelected and clears selection on delete for non-start nodes', () => {
        const fixture = MockRender(HostComponent);
        const component = fixture.point.componentInstance.nodeComponent();
        const emitNodeSelectedSpy = jest.spyOn(component.nodeSelected, 'emit');
        const emitNodeDeletedSpy = jest.spyOn(component.nodeDeleted, 'emit');

        (component as any).onSelectedChanged(true);

        expect(highlightConnectionsForNode).toHaveBeenCalledWith('draft-node');
        expect(emitNodeSelected).toHaveBeenCalledWith(
            expect.objectContaining({id: 'draft-node'}),
        );
        expect(emitNodeSelectedSpy).toHaveBeenCalledWith(
            expect.objectContaining({id: 'draft-node'}),
        );

        const keyboardEvent = new KeyboardEvent('keydown', {key: 'Delete'});
        const preventDefaultSpy = jest.spyOn(keyboardEvent, 'preventDefault');

        (component as any).handleKeyboardEvent(keyboardEvent);

        expect(preventDefaultSpy).toHaveBeenCalled();
        expect(clearSelectedNode).toHaveBeenCalledWith('draft-node');
        expect(emitNodeDeletedSpy).toHaveBeenCalled();
    });

    it('does not emit nodeDeleted for start nodes even when selected', () => {
        const fixture = MockRender(NodeComponent, {
            invalid: false,
            node: {
                id: 'start-node',
                startNode: true,
                data: {type: 'simpleNode'},
            } satisfies DfDataInitialNode,
        });
        const component = fixture.point.componentInstance;
        const emitNodeDeletedSpy = jest.spyOn(component.nodeDeleted, 'emit');

        (component as any).onSelectedChanged(true);
        (component as any).handleKeyboardEvent(
            new KeyboardEvent('keydown', {key: 'Delete'}),
        );

        expect(clearSelectedNode).not.toHaveBeenCalled();
        expect(emitNodeDeletedSpy).not.toHaveBeenCalled();
    });

    it('moves resolved node and emits nodeMoved after drag end', () => {
        const fixture = MockRender(HostComponent);
        const component = fixture.point.componentInstance.nodeComponent();
        const emitNodeMovedSpy = jest.spyOn(component.nodeMoved, 'emit');
        const node = (component as any).getResolvedNode() as DfDataNode;
        const initialPosition = {...node.position};

        (component as any).onDrag({
            stage: DfDragDropStage.Move,
            sourceElement: document.createElement('div'),
            distance: {deltaX: 10, deltaY: -5},
        });

        expect(node.position).toEqual({
            x: initialPosition.x + 10,
            y: initialPosition.y - 5,
        });
        expect(panZoomServiceMock.setDisabled).toHaveBeenCalledWith(true);
        expect(component.cursor()).toBe('grabbing');

        (component as any).onDrag({
            stage: DfDragDropStage.End,
            sourceElement: document.createElement('div'),
            distance: {deltaX: 0, deltaY: 0},
        });

        expect(emitNodeMovedSpy).toHaveBeenCalledWith(node);
        expect(panZoomServiceMock.setDisabled).toHaveBeenLastCalledWith(false);
        expect(component.cursor()).toBe('initial');
    });

    it('keeps drag threshold accumulation local to the node interaction state', () => {
        const fixture = MockRender(HostComponent);
        const component = fixture.point.componentInstance.nodeComponent();
        const node = (component as any).getResolvedNode() as DfDataNode;
        const initialPosition = {...node.position};

        (component as any).onDrag({
            stage: DfDragDropStage.Move,
            sourceElement: document.createElement('div'),
            distance: {deltaX: 0.5, deltaY: -0.5},
        });

        expect(node.position).toEqual(initialPosition);
        expect(INITIAL_COORDINATES).toEqual({x: 0, y: 0});

        (component as any).onDrag({
            stage: DfDragDropStage.End,
            sourceElement: document.createElement('div'),
            distance: {deltaX: 0, deltaY: 0},
        });
    });

    it('registers and unregisters node bounds in the dynamic workspace tracker', () => {
        const fixture = MockRender(HostComponent);
        const component = ngMocks.findInstance(NodeComponent);

        expect(upsertNodeBounds).toHaveBeenCalledTimes(1);
        expect(upsertNodeBounds).toHaveBeenCalledWith(
            'draft-node',
            expect.objectContaining({
                minX: expect.any(Number),
                minY: expect.any(Number),
                maxX: expect.any(Number),
                maxY: expect.any(Number),
            }),
        );

        fixture.destroy();

        expect(removeNodeBounds).toHaveBeenCalledWith(component.node().id);
    });
});
