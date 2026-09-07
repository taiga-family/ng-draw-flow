import {signal} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {Subject} from 'rxjs';

import {
    DfConnectionPoint,
    type DfDataConnection,
    type DfDataModel,
} from '../../ng-draw-flow.interfaces';
import {NgDrawFlowStoreService} from '../../services/ng-draw-flow-store.service';
import {INVALID_NODES} from '../../validators/invalid-nodes.token';
import {ConnectionsService} from '../connections/connections.service';
import {DraftConnectionService} from '../connections/draft-connection/draft-connection.service';
import {PanZoomService} from '../pan-zoom/pan-zoom.service';
import {SceneComponent} from './scene.component';

jest.mock('./scene.component.html', () => '', {virtual: true});
jest.mock('./scene.component.less', () => '', {virtual: true});
jest.mock('../connections/connection/connection.component.svg', () => '', {
    virtual: true,
});
jest.mock('../connections/draft-connection/draft-connection.component.svg', () => '', {
    virtual: true,
});
jest.mock('../node/node.component.html', () => '', {virtual: true});
jest.mock('../node/node.component.less', () => '', {virtual: true});

describe('SceneComponent', () => {
    let connectionState: ReturnType<typeof signal<DfDataConnection[]>>;
    let connectionsChanged: Subject<DfDataConnection[]>;

    beforeEach(async () => {
        connectionState = signal<DfDataConnection[]>([]);
        connectionsChanged = new Subject<DfDataConnection[]>();

        await TestBed.configureTestingModule({
            imports: [SceneComponent],
            providers: [
                {
                    provide: PanZoomService,
                    useValue: {panSize: signal({width: 2_000, height: 1_500})},
                },
                {
                    provide: ConnectionsService,
                    useValue: {
                        connectionsChanged$: connectionsChanged,
                        connections: connectionState,
                        addConnections: jest.fn(),
                        setConnections: jest.fn(),
                        removeConnectionsByConnectorId: jest.fn(),
                        removeConnectionsByNodeId: jest.fn(),
                    },
                },
                {
                    provide: DraftConnectionService,
                    useValue: {isConnectionCreating: signal(false)},
                },
                {
                    provide: NgDrawFlowStoreService,
                    useValue: {
                        updateDataModel: jest.fn(),
                        emitConnectionCreated: jest.fn(),
                        emitConnectionDeleted: jest.fn(),
                        emitNodeMoved: jest.fn(),
                        emitNodeDeleted: jest.fn(),
                    },
                },
                {
                    provide: INVALID_NODES,
                    useValue: signal<string[]>([]),
                },
            ],
        }).compileComponents();
    });

    afterEach(() => {
        TestBed.resetTestingModule();
    });

    it('does not bind scene size to dynamic pan bounds', () => {
        const fixture = TestBed.createComponent(SceneComponent);

        fixture.componentInstance.writeValue({nodes: [], connections: []});
        fixture.detectChanges();

        const scene = fixture.nativeElement as HTMLElement;

        expect(scene.style.width).toBe('');
        expect(scene.style.height).toBe('');
    });

    it('keeps connection track keys unique for duplicate edges', () => {
        const fixture = TestBed.createComponent(SceneComponent);
        const component = fixture.componentInstance;
        const connection: DfDataConnection = {
            source: {
                nodeId: 'source',
                connectorId: 'output',
                connectorType: DfConnectionPoint.Output,
            },
            target: {
                nodeId: 'target',
                connectorId: 'input',
                connectorType: DfConnectionPoint.Input,
            },
        };

        expect((component as any).trackByConnectionsFn(0, connection)).not.toBe(
            (component as any).trackByConnectionsFn(1, connection),
        );
    });

    it('does not echo external writes and publishes user connection changes once', () => {
        const fixture = TestBed.createComponent(SceneComponent);
        const component = fixture.componentInstance;
        const onChange = jest.fn();
        const connection: DfDataConnection = {
            source: {
                nodeId: 'source',
                connectorId: 'output',
                connectorType: DfConnectionPoint.Output,
            },
            target: {
                nodeId: 'target',
                connectorId: 'input',
                connectorType: DfConnectionPoint.Input,
            },
        };

        component.registerOnChange(onChange);
        component.writeValue({nodes: [], connections: []});
        expect(onChange).not.toHaveBeenCalled();

        connectionState.set([connection]);
        connectionsChanged.next([connection]);

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith({nodes: [], connections: [connection]});

        component.writeValue(null);
        expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('publishes node and related connection deletion as one final model', () => {
        const fixture = TestBed.createComponent(SceneComponent);
        const component = fixture.componentInstance;
        const connections = TestBed.inject(ConnectionsService);
        const store = TestBed.inject(NgDrawFlowStoreService);
        const setConnections = jest.spyOn(connections, 'setConnections');
        const emitNodeDeleted = jest.spyOn(store, 'emitNodeDeleted');
        const emitConnectionDeleted = jest.spyOn(store, 'emitConnectionDeleted');
        const onChange = jest.fn();
        const connection: DfDataConnection = {
            source: {
                nodeId: 'source',
                connectorId: 'output',
                connectorType: DfConnectionPoint.Output,
            },
            target: {
                nodeId: 'target',
                connectorId: 'input',
                connectorType: DfConnectionPoint.Input,
            },
        };
        const initial: DfDataModel = {
            nodes: [
                {id: 'source', data: {type: 'test'}, position: {x: 0, y: 0}},
                {id: 'target', data: {type: 'test'}, position: {x: 10, y: 10}},
            ],
            connections: [connection],
        };
        const finalModel: DfDataModel = {
            nodes: [initial.nodes[1]],
            connections: [],
        };

        component.registerOnChange(onChange);
        component.writeValue(initial);
        setConnections.mockClear();

        const scene = component as unknown as {
            onNodeDeleted(id: string): void;
        };

        scene.onNodeDeleted('source');

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(finalModel);
        expect(setConnections).toHaveBeenCalledTimes(1);
        expect(setConnections).toHaveBeenCalledWith([]);
        expect(emitNodeDeleted).toHaveBeenCalledWith({
            target: initial.nodes[0],
            model: finalModel,
        });
        expect(emitConnectionDeleted).toHaveBeenCalledWith({
            target: connection,
            model: finalModel,
        });
    });
});
