import {ChangeDetectionStrategy, Component} from '@angular/core';
import {fakeAsync, TestBed, tick} from '@angular/core/testing';

import {DfInteractionStateService} from '../../services/interaction-state.service';
import {DragDropDirective} from './drag-drop.directive';
import {DfDragDropStage} from './drag-drop.enum';
import {type DfDragDrop} from './drag-drop.interface';

@Component({
    standalone: true,
    imports: [DragDropDirective],
    template: '<div dfDragDrop (dfDragDrop)="events.push($event)"></div>',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class DragHost {
    public readonly events: DfDragDrop[] = [];
}

describe('DragDropDirective', () => {
    it('ignores the cancelled pointer session until a new pointerdown', fakeAsync(() => {
        TestBed.configureTestingModule({
            imports: [DragHost],
            providers: [DfInteractionStateService],
        });

        const fixture = TestBed.createComponent(DragHost);
        const interactionState = TestBed.inject(DfInteractionStateService);
        const {events} = fixture.componentInstance;

        fixture.detectChanges();

        const element: HTMLElement = fixture.nativeElement.querySelector('div');

        dispatchPointer(element, 'pointerdown', 1, 0);
        dispatchPointer(document, 'pointermove', 1, 10);
        dispatchPointer(document, 'pointermove', 1, 20);
        expect(events).toHaveLength(1);

        interactionState.cancelEditing();
        dispatchPointer(document, 'pointermove', 1, 30);
        tick(16);
        dispatchPointer(document, 'pointerup', 1, 30);

        expect(events).toHaveLength(1);

        dispatchPointer(element, 'pointerdown', 2, 100);
        dispatchPointer(document, 'pointermove', 2, 110);
        dispatchPointer(document, 'pointerup', 2, 110);
        tick(16);

        expect(events.map(({stage}) => stage)).toEqual([
            DfDragDropStage.Move,
            DfDragDropStage.Move,
            DfDragDropStage.End,
        ]);
        expect(events[1]?.distance).toEqual({deltaX: 10, deltaY: 0});
        fixture.destroy();
    }));
});

function dispatchPointer(
    target: EventTarget,
    type: string,
    pointerId: number,
    clientX: number,
): void {
    const event = new MouseEvent(type, {clientX, bubbles: true});

    Object.defineProperty(event, 'pointerId', {value: pointerId});
    target.dispatchEvent(event);
}
