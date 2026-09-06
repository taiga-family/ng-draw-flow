import {signal} from '@angular/core';
import {fakeAsync, TestBed, tick} from '@angular/core/testing';

import {
    DRAW_FLOW_DEFAULT_OPTIONS,
    DRAW_FLOW_OPTIONS,
} from '../../../ng-draw-flow.configs';
import {
    DfConnectionPoint,
    DfConnectorPosition,
    type DfDataConnector,
} from '../../../ng-draw-flow.interfaces';
import {CoordinatesService} from '../../../services/coordinates.service';
import {DfInteractionStateService} from '../../../services/interaction-state.service';
import {PanZoomService} from '../../pan-zoom/pan-zoom.service';
import {DraftConnectionService} from './draft-connection.service';

describe('DraftConnectionService', () => {
    let service: DraftConnectionService;
    let panZoomService: PanZoomService;
    let interactionState: DfInteractionStateService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                DraftConnectionService,
                DfInteractionStateService,
                PanZoomService,
                {provide: DRAW_FLOW_OPTIONS, useValue: DRAW_FLOW_DEFAULT_OPTIONS},
                {
                    provide: CoordinatesService,
                    useValue: {
                        getConnectionPointSignal: jest.fn(() => signal(null)),
                    },
                },
            ],
        });

        service = TestBed.inject(DraftConnectionService);
        panZoomService = TestBed.inject(PanZoomService);
        interactionState = TestBed.inject(DfInteractionStateService);
    });

    afterEach(() => {
        service.ngOnDestroy();
    });

    it('updates draft target with pointer delta normalized by zoom', () => {
        panZoomService.setCamera({x: 0, y: 0, zoom: 2, offsetX: 0, offsetY: 0});

        service.target.set({
            point: {x: 100, y: 50},
            position: DfConnectorPosition.Left,
        });

        (service as any).onDragMove(
            {clientX: 10, clientY: 20},
            {clientX: 30, clientY: 10},
        );

        expect(service.target().point.x).toBeCloseTo(110, 6);
        expect(service.target().point.y).toBeCloseTo(45, 6);
    });

    it('exposes signal state for active connector and created connection', () => {
        const createdSpy = jest.fn();
        const sourceConnector: DfDataConnector = {
            nodeId: 'source',
            connectorId: 'source-output',
            connectorType: DfConnectionPoint.Output,
        };
        const targetElement = document.createElement('div');

        targetElement.dataset.nodeId = 'target';
        targetElement.dataset.connectorId = 'target-input';
        targetElement.dataset.connectorType = DfConnectionPoint.Input;
        service.connectionCreated$.subscribe(createdSpy);

        (service as any).onDragStart(sourceConnector);

        expect(service.activeConnector()).toEqual(sourceConnector);

        (service as any).onDragEnd({target: targetElement});

        expect(service.activeConnector()).toBeNull();
        expect(service.lastConnectionCreated()).toEqual({
            source: sourceConnector,
            target: {
                nodeId: 'target',
                connectorId: 'target-input',
                connectorType: DfConnectionPoint.Input,
                position: undefined,
            },
            label: undefined,
        });
        expect(createdSpy).toHaveBeenCalledWith(service.lastConnectionCreated());
    });

    it.each(['disabled', 'connectionsCreatable'])(
        'cancels an active draft when %s blocks it',
        (reason) => {
            const createdSpy = jest.fn();
            const sourceConnector: DfDataConnector = {
                nodeId: 'source',
                connectorId: 'source-output',
                connectorType: DfConnectionPoint.Output,
            };
            const targetElement = document.createElement('div');

            targetElement.dataset.nodeId = 'target';
            targetElement.dataset.connectorId = 'target-input';
            targetElement.dataset.connectorType = DfConnectionPoint.Input;
            service.connectionCreated$.subscribe(createdSpy);

            const draft = service as unknown as {
                onDragStart(connector: DfDataConnector): void;
                onDragEnd(event: {readonly target: EventTarget | null}): void;
            };

            draft.onDragStart(sourceConnector);
            expect(service.isConnectionCreating()).toBe(true);

            interactionState.setOptions({connectionsDeletable: false});
            expect(service.isConnectionCreating()).toBe(true);

            if (reason === 'disabled') {
                interactionState.setDisabled(true);
            } else {
                interactionState.setOptions({connectionsCreatable: false});
            }

            TestBed.flushEffects();
            draft.onDragEnd({target: targetElement});

            expect(service.isConnectionCreating()).toBe(false);
            expect(createdSpy).not.toHaveBeenCalled();
        },
    );

    it('discards queued pointer moves when disabled and starts the next draft cleanly', fakeAsync(() => {
        const sourceConnector: DfDataConnector = {
            nodeId: 'source',
            connectorId: 'source-output',
            connectorType: DfConnectionPoint.Output,
        };

        service.connection$.next(sourceConnector);
        document.dispatchEvent(new MouseEvent('pointermove', {clientX: 10}));
        document.dispatchEvent(new MouseEvent('pointermove', {clientX: 30}));

        interactionState.setDisabled(true);
        TestBed.flushEffects();
        tick(16);

        expect(service.isConnectionCreating()).toBe(false);
        expect(service.target().point).toEqual({x: 0, y: 0});

        interactionState.setDisabled(false);
        TestBed.flushEffects();
        service.connection$.next(sourceConnector);
        document.dispatchEvent(new MouseEvent('pointermove', {clientX: 100}));
        tick(16);

        expect(service.target().point).toEqual({x: 0, y: 0});

        document.dispatchEvent(new MouseEvent('pointermove', {clientX: 110}));
        tick(16);

        expect(service.target().point).toEqual({x: 10, y: 0});
        document.dispatchEvent(new MouseEvent('pointerup'));
    }));

    it('cancels a draft on pointercancel and discards its scheduled frame', fakeAsync(() => {
        service.connection$.next({
            nodeId: 'source',
            connectorId: 'source-output',
            connectorType: DfConnectionPoint.Output,
        });
        document.dispatchEvent(new MouseEvent('pointermove', {clientX: 10}));
        document.dispatchEvent(new MouseEvent('pointermove', {clientX: 30}));
        document.dispatchEvent(new MouseEvent('pointercancel'));
        tick(16);

        expect(service.isConnectionCreating()).toBe(false);
        expect(service.activeConnector()).toBeNull();
        expect(service.target().point).toEqual({x: 0, y: 0});
        expect(service.lastConnectionCreated()).toBeNull();
    }));

    it('does not resubscribe or process pending pointer events after destruction', fakeAsync(() => {
        const sourceConnector: DfDataConnector = {
            nodeId: 'source',
            connectorId: 'source-output',
            connectorType: DfConnectionPoint.Output,
        };

        service.connection$.next(sourceConnector);
        document.dispatchEvent(new MouseEvent('pointermove', {clientX: 10}));
        document.dispatchEvent(new MouseEvent('pointermove', {clientX: 30}));
        service.ngOnDestroy();
        service.connection$.next(sourceConnector);
        document.dispatchEvent(new MouseEvent('pointermove', {clientX: 50}));
        tick(16);

        expect(service.isConnectionCreating()).toBe(false);
        expect(service.activeConnector()).toBeNull();
        expect(service.target().point).toEqual({x: 0, y: 0});
        expect(service.lastConnectionCreated()).toBeNull();
    }));

    it('does not complete a draft cancelled by an external model write', fakeAsync(() => {
        const createdSpy = jest.fn();
        const targetElement = document.createElement('div');

        targetElement.dataset.nodeId = 'target';
        targetElement.dataset.connectorId = 'target-input';
        targetElement.dataset.connectorType = DfConnectionPoint.Input;
        document.body.appendChild(targetElement);
        service.connectionCreated$.subscribe(createdSpy);

        try {
            service.connection$.next({
                nodeId: 'old-source',
                connectorId: 'output',
                connectorType: DfConnectionPoint.Output,
            });
            document.dispatchEvent(new MouseEvent('pointermove', {clientX: 10}));
            document.dispatchEvent(new MouseEvent('pointermove', {clientX: 30}));
            interactionState.cancelEditing();
            tick(16);
            targetElement.dispatchEvent(new MouseEvent('pointerup', {bubbles: true}));

            expect(createdSpy).not.toHaveBeenCalled();
            expect(service.isConnectionCreating()).toBe(false);
            expect(service.target().point).toEqual({x: 0, y: 0});

            service.connection$.next({
                nodeId: 'new-source',
                connectorId: 'output',
                connectorType: DfConnectionPoint.Output,
            });
            targetElement.dispatchEvent(new MouseEvent('pointerup', {bubbles: true}));

            expect(createdSpy).toHaveBeenCalledTimes(1);
            expect(service.lastConnectionCreated()?.source.nodeId).toBe('new-source');
        } finally {
            targetElement.remove();
        }
    }));
});
