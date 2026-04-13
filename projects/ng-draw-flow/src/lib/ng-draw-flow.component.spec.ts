import {TestBed} from '@angular/core/testing';

import {ConnectionsService} from './components/connections/connections.service';
import {
    DF_PAN_ZOOM_DEFAULT_OPTIONS,
    DF_PAN_ZOOM_OPTIONS,
} from './components/pan-zoom/pan-zoom.options';
import {PanZoomService} from './components/pan-zoom/pan-zoom.service';
import {NgDrawFlowComponent} from './ng-draw-flow.component';
import {NgDrawFlowStoreService} from './services/ng-draw-flow-store.service';
import {SelectionService} from './services/selection.service';

jest.mock('./ng-draw-flow.component.html', () => '', {virtual: true});
jest.mock('./ng-draw-flow.component.less', () => '', {virtual: true});
jest.mock('./components/pan-zoom/pan-zoom.component.html', () => '', {virtual: true});
jest.mock('./components/pan-zoom/pan-zoom.component.less', () => '', {virtual: true});
jest.mock('./components/scene/scene.component.html', () => '', {virtual: true});
jest.mock('./components/scene/scene.component.less', () => '', {virtual: true});
jest.mock('./components/connections/connection/connection.component.svg', () => '', {
    virtual: true,
});
jest.mock(
    './components/connections/draft-connection/draft-connection.component.svg',
    () => '',
    {virtual: true},
);
jest.mock('./components/node/node.component.html', () => '', {virtual: true});
jest.mock('./components/node/node.component.less', () => '', {virtual: true});

describe('NgDrawFlowComponent', () => {
    beforeEach(async () => {
        TestBed.overrideComponent(NgDrawFlowComponent, {
            set: {
                template: '',
                imports: [],
                hostDirectives: [],
                providers: [
                    {
                        provide: PanZoomService,
                        useValue: {
                            snapshot: jest.fn(() => ({
                                x: 0,
                                y: 0,
                                zoom: 1,
                                offsetX: 0,
                                offsetY: 0,
                            })),
                            setCamera: jest.fn(),
                            usableRect: jest.fn(() => ({
                                minX: 0,
                                minY: 0,
                                maxX: 0,
                                maxY: 0,
                            })),
                            getBoundsForNodeIds: jest.fn(() => null),
                        },
                    },
                    {
                        provide: ConnectionsService,
                        useValue: {removeConnection: jest.fn()},
                    },
                    {
                        provide: NgDrawFlowStoreService,
                        useValue: {
                            attach: jest.fn(),
                            detach: jest.fn(),
                            updateDataModel: jest.fn(),
                            clearSelectedNode: jest.fn(),
                            clearSelectedConnection: jest.fn(),
                            setScaleValue: jest.fn(),
                        },
                    },
                    {
                        provide: SelectionService,
                        useValue: {clearSelection: jest.fn()},
                    },
                    {
                        provide: DF_PAN_ZOOM_OPTIONS,
                        useValue: {...DF_PAN_ZOOM_DEFAULT_OPTIONS},
                    },
                ],
            },
        });

        await TestBed.configureTestingModule({
            imports: [NgDrawFlowComponent],
        }).compileComponents();
    });

    afterEach(() => {
        TestBed.resetTestingModule();
    });

    it('frames only on the first non-empty external model write', () => {
        const fixture = TestBed.createComponent(NgDrawFlowComponent);
        const component = fixture.componentInstance;
        const scheduleViewportFraming = jest.spyOn(
            component as never,
            'scheduleViewportFraming' as never,
        );
        const model = {
            nodes: [
                {
                    id: 'node-1',
                    data: {type: 'simpleNode'},
                },
            ],
            connections: [],
        };

        component.writeValue(model);

        expect(scheduleViewportFraming).toHaveBeenCalledTimes(1);

        scheduleViewportFraming.mockClear();
        model.nodes.push({
            id: 'node-2',
            data: {type: 'simpleNode'},
        });

        component.writeValue(model);

        expect(scheduleViewportFraming).not.toHaveBeenCalled();
    });

    it('allows framing again after the external model becomes empty', () => {
        const fixture = TestBed.createComponent(NgDrawFlowComponent);
        const component = fixture.componentInstance;
        const scheduleViewportFraming = jest.spyOn(
            component as never,
            'scheduleViewportFraming' as never,
        );

        component.writeValue({
            nodes: [
                {
                    id: 'node-1',
                    data: {type: 'simpleNode'},
                },
            ],
            connections: [],
        });
        component.writeValue({
            nodes: [],
            connections: [],
        });

        scheduleViewportFraming.mockClear();

        component.writeValue({
            nodes: [
                {
                    id: 'node-3',
                    data: {type: 'simpleNode'},
                },
            ],
            connections: [],
        });

        expect(scheduleViewportFraming).toHaveBeenCalledTimes(1);
    });
});
