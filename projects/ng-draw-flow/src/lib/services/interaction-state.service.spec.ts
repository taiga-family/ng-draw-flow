import {DfInteractionStateService} from './interaction-state.service';

describe('DfInteractionStateService', () => {
    it('merges partial overrides with defaults and restores omitted fields', () => {
        const state = new DfInteractionStateService();

        state.setDefaults({
            nodesDraggable: false,
            nodesDeletable: true,
            connectionsCreatable: false,
            connectionsDeletable: true,
        });
        state.setOptions({nodesDraggable: true, nodesDeletable: false});
        expect(state.nodesDraggable()).toBe(true);
        expect(state.nodesDeletable()).toBe(false);
        expect(state.connectionsCreatable()).toBe(false);
        expect(state.connectionsDeletable()).toBe(true);
        state.setOptions({});
        expect(state.nodesDraggable()).toBe(false);
        expect(state.nodesDeletable()).toBe(true);
    });

    it('applies global locks without losing the latest per-action settings', () => {
        const state = new DfInteractionStateService();

        state.setReadonly(true);
        state.setDisabled(true);
        state.setOptions({nodesDeletable: false});
        expect(state.nodesDraggable()).toBe(false);
        expect(state.connectionsCreatable()).toBe(false);
        expect(state.connectionsDeletable()).toBe(false);
        state.setReadonly(false);
        expect(state.nodesDraggable()).toBe(false);
        state.setDisabled(false);
        expect(state.nodesDraggable()).toBe(true);
        expect(state.nodesDeletable()).toBe(false);
        expect(state.connectionsCreatable()).toBe(true);
    });

    it('cancels only the action whose permission is revoked', () => {
        const state = new DfInteractionStateService();
        const drag = jest.fn();
        const connection = jest.fn();
        const dragSubscription = state.nodeDragCancellation$.subscribe(drag);
        const connectionSubscription =
            state.connectionCreationCancellation$.subscribe(connection);

        state.setOptions({nodesDeletable: false, connectionsDeletable: false});
        expect(drag).not.toHaveBeenCalled();
        expect(connection).not.toHaveBeenCalled();
        state.setOptions({nodesDraggable: false});
        expect(drag).toHaveBeenCalledTimes(1);
        expect(connection).not.toHaveBeenCalled();
        state.setOptions({nodesDraggable: false, connectionsCreatable: false});
        expect(drag).toHaveBeenCalledTimes(1);
        expect(connection).toHaveBeenCalledTimes(1);
        state.cancelEditing();
        expect(drag).toHaveBeenCalledTimes(2);
        expect(connection).toHaveBeenCalledTimes(2);
        dragSubscription.unsubscribe();
        connectionSubscription.unsubscribe();
    });

    it('keeps permissions isolated between editors', () => {
        const first = new DfInteractionStateService();
        const second = new DfInteractionStateService();

        first.setOptions({nodesDraggable: false});
        first.setReadonly(true);
        expect(second.nodesDraggable()).toBe(true);
        expect(second.connectionsCreatable()).toBe(true);
    });
});
