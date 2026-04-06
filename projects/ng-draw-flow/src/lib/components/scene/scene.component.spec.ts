import {signal} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {BehaviorSubject} from 'rxjs';

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
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SceneComponent],
            providers: [
                {
                    provide: PanZoomService,
                    useValue: {
                        panSize: signal({width: 2_000, height: 1_500}),
                    },
                },
                {
                    provide: ConnectionsService,
                    useValue: {
                        connections$: new BehaviorSubject([]),
                        addConnections: jest.fn(),
                        removeConnectionsByConnectorId: jest.fn(),
                        removeConnectionsByNodeId: jest.fn(),
                    },
                },
                {
                    provide: DraftConnectionService,
                    useValue: {
                        isConnectionCreating$: new BehaviorSubject(false),
                    },
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
});
