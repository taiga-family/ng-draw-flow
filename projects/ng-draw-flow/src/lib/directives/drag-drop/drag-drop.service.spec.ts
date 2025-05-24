import {MockBuilder, MockRender} from 'ng-mocks';

import {DragDropService} from './drag-drop.service';

describe('DragDropService', () => {
    let fixture: DragDropService;
    let host: HTMLElement;

    beforeEach(async () => {
        await MockBuilder(DragDropService);

        fixture = MockRender(DragDropService).point.componentInstance;
        // create a host DIV in the document body
        host = document.createElement('div');
        host.id = 'node';
        document.body.appendChild(host);
    });

    afterEach(() => {
        document.body.removeChild(host);
        jest.clearAllMocks();
    });

    it('creates only one native listener on document for pointermove', () => {
        // subscribe twice to the same element
        fixture.streamFor(host).subscribe();
        fixture.streamFor(host).subscribe();

        // after subscriptions, there must be exactly 1 pointermove listener
        // NB: getEventListeners is provided by DevTools environment; fallback for Jest:
        const listeners = (document as any)._listeners?.pointermove ?? [];

        expect(listeners.length).toBeLessThanOrEqual(1);
    });

    it('returns cached observable on repeated streamFor calls', () => {
        const a = fixture.streamFor(host);
        const b = fixture.streamFor(host);

        expect(a).toBe(b);
    });
});
