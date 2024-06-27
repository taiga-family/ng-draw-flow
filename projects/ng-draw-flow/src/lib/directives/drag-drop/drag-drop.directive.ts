import {Directive, inject} from '@angular/core';

import {DragDropService} from './drag-drop.service';

@Directive({
    standalone: true,
    selector: '[dfDragDrop]',
    outputs: ['dfDragDrop'],
    providers: [DragDropService],
})
export class DragDropDirective {
    protected readonly dfDragDrop = inject(DragDropService);
}
