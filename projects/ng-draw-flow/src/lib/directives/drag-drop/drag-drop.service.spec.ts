import {fakeAsync, tick} from '@angular/core/testing';
import {MockBuilder, MockRender} from 'ng-mocks';
import {type Subscription} from 'rxjs';

import {DfDragDropStage} from './drag-drop.enum';
import {DragDropService} from './drag-drop.service';

describe('DragDropService', () => {
    let service: DragDropService;
    let host: HTMLElement;
    let subscriptions: Subscription[];

    function dispatchPointer(
        target: EventTarget,
        type: string,
        pointerId: number,
        clientX = 0,
    ): void {
        const event = new MouseEvent(type, {bubbles: true, clientX});

        Object.defineProperty(event, 'pointerId', {value: pointerId});
        target.dispatchEvent(event);
    }

    beforeEach(async () => {
        await MockBuilder(DragDropService);

        service = MockRender(DragDropService).point.componentInstance;
        host = document.createElement('div');
        document.body.appendChild(host);
        subscriptions = [];
    });

    afterEach(() => {
        subscriptions.forEach((subscription) => subscription.unsubscribe());
        host.remove();
        jest.restoreAllMocks();
    });

    it('shares document listeners and releases them when all subscribers leave', () => {
        const addListener = jest.spyOn(document, 'addEventListener');
        const removeListener = jest.spyOn(document, 'removeEventListener');

        subscriptions.push(service.streamFor(host).subscribe());
        subscriptions.push(service.streamFor(host).subscribe());
        dispatchPointer(host, 'pointerdown', 1);

        for (const type of ['pointermove', 'pointerup', 'pointercancel']) {
            expect(
                addListener.mock.calls.filter(([event]) => event === type),
            ).toHaveLength(1);
        }

        subscriptions[0]!.unsubscribe();
        expect(removeListener).not.toHaveBeenCalled();
        subscriptions[1]!.unsubscribe();

        for (const type of ['pointermove', 'pointerup', 'pointercancel']) {
            expect(
                removeListener.mock.calls.filter(([event]) => event === type),
            ).toHaveLength(1);
        }
    });

    it('ends only the matching cancelled drag and supports the next gesture', fakeAsync(() => {
        const emitted = jest.fn();

        subscriptions.push(service.streamFor(host).subscribe(emitted));
        dispatchPointer(host, 'pointerdown', 1);
        dispatchPointer(document, 'pointermove', 1, 10);
        dispatchPointer(document, 'pointercancel', 2);
        expect(emitted).toHaveBeenCalledTimes(1);
        dispatchPointer(document, 'pointercancel', 1);
        expect(emitted).toHaveBeenLastCalledWith({
            stage: DfDragDropStage.End,
            sourceElement: host,
            distance: {deltaX: 0, deltaY: 0},
        });
        dispatchPointer(document, 'pointermove', 1, 20);
        tick(20);
        expect(emitted).toHaveBeenCalledTimes(2);

        dispatchPointer(host, 'pointerdown', 3, 20);
        dispatchPointer(document, 'pointermove', 3, 25);
        dispatchPointer(document, 'pointerup', 3);
        expect(emitted).toHaveBeenNthCalledWith(3, {
            stage: DfDragDropStage.Move,
            sourceElement: host,
            distance: {deltaX: 5, deltaY: 0},
        });
        expect(emitted).toHaveBeenCalledTimes(4);
    }));

    it('returns cached observable on repeated streamFor calls', () => {
        expect(service.streamFor(host)).toBe(service.streamFor(host));
    });
});
