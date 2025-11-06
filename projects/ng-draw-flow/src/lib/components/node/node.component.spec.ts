import {TestBed} from '@angular/core/testing';
import {MockBuilder, MockProvider, MockRender, ngMocks} from 'ng-mocks';
import {BehaviorSubject} from 'rxjs';

import {INITIAL_COORDINATES} from '../../consts';
import {DRAW_FLOW_OPTIONS} from '../../ng-draw-flow.configs';
import {
    DfArrowhead,
    DfConnectionType,
    type DfDataNode,
    type DfOptions,
} from '../../ng-draw-flow.interfaces';
import {DRAW_FLOW_ROOT_ELEMENT} from '../../ng-draw-flow.token';
import {CoordinatesService} from '../../services/coordinates.service';
import {NgDrawFlowStoreService} from '../../services/ng-draw-flow-store.service';
import {ConnectionsService} from '../connections/connections.service';
import {DF_PAN_ZOOM_OPTIONS, type DfPanZoomOptions} from '../pan-zoom/pan-zoom.options';
import {PanZoomService} from '../pan-zoom/pan-zoom.service';
import {HostComponent} from './mocks/host.component.mock';
import {MockNodeContentComponent} from './mocks/node-content.component.mock';
import {NodeComponent} from './node.component';

jest.mock('./node.component.html', () => '', {virtual: true});
jest.mock('./node.component.less', () => '', {virtual: true});

describe('NodeComponent', () => {
    beforeEach(async () => {
        TestBed.overrideComponent(NodeComponent, {
            set: {
                template:
                    '<div #nodeElement class="mock-node"><div class="node-content"><ng-container #container></ng-container></div></div>',
            },
        });

        const options: DfOptions = {
            connection: {
                type: DfConnectionType.Bezier,
                arrowhead: {type: DfArrowhead.Arrow, height: 8, width: 8},
                curvature: 0,
            },
            nodes: {
                simpleNode: MockNodeContentComponent,
            },
            options: {
                nodeDragThreshold: 1,
                nodesDraggable: true,
                nodesDeletable: true,
                connectionsDeletable: true,
                connectionsCreatable: true,
            },
        };

        const panZoomOptions: DfPanZoomOptions = {
            panSize: 2000,
            leftPosition: null,
            topPosition: null,
            minZoom: 0.25,
            maxZoom: 3,
            zoomStep: 0.25,
            zoomAnimationDuration: 300,
            zoomWheelSensitivity: 0.01,
            touchSensitivity: 0.01,
        };

        return MockBuilder(HostComponent)
            .keep(NodeComponent)
            .provide([MockProvider(NgDrawFlowStoreService)])
            .provide([
                MockProvider(DRAW_FLOW_OPTIONS, options),
                MockProvider(DRAW_FLOW_ROOT_ELEMENT, {
                    offsetWidth: 1000,
                    offsetHeight: 1000,
                } as HTMLElement),
                MockProvider(PanZoomService, {
                    panzoomModel: {
                        x: 0,
                        y: 0,
                        zoom: 1,
                        offsetX: 0,
                        offsetY: 0,
                    },
                    panzoomDisabled: false,
                }),
                MockProvider(CoordinatesService, {
                    addConnectionPoint: jest.fn(),
                    getConnectionPoint: () => new BehaviorSubject(null),
                }),
                MockProvider(DF_PAN_ZOOM_OPTIONS, panZoomOptions),
                MockProvider(ConnectionsService, {
                    selectedNodeId$: new BehaviorSubject(null),
                } as ConnectionsService),
            ]);
    });

    afterEach(() => {
        ngMocks.flushTestBed();
    });

    it('centres new node relative to viewport and pan/zoom', () => {
        MockRender(HostComponent);
        const component = ngMocks.findInstance(NodeComponent) as any;

        const initialValue: DfDataNode = component.value;

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

        const panCentered = component.getCenterOfViewport();

        expect(panCentered.x).toBeCloseTo(
            INITIAL_COORDINATES.x + (panZoomService.panzoomModel.x / 2) * -1,
            5,
        );
        expect(panCentered.y).toBeCloseTo(
            INITIAL_COORDINATES.y + (panZoomService.panzoomModel.y / 2) * -1,
            5,
        );
    });
});
