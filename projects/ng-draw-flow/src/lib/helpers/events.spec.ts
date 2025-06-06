import {fakeAsync} from '@angular/core/testing';
import {first, Subject} from 'rxjs';

import {dfPreventDefault, dfStopPropagation} from './events';

describe('Event helper', () => {
    it('prevents event default behavior', fakeAsync(() => {
        const event = new Event('click', {cancelable: true});
        const subject = new Subject<Event>();

        subject.pipe(dfPreventDefault(), first()).subscribe();
        subject.next(event);

        expect(event.defaultPrevented).toBe(true);
    }));

    it('stops event propagation', fakeAsync(() => {
        const event = new Event('click');
        const subject = new Subject<Event>();

        subject.pipe(dfStopPropagation(), first()).subscribe();
        subject.next(event);

        expect(event.cancelBubble).toBe(true);
    }));
});
