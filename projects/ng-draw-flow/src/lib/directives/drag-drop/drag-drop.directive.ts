import {Directive, inject, Output} from '@angular/core';

import {DragDropService} from './drag-drop.service';

@Directive({standalone: true, selector: '[dfDragDrop]', providers: [DragDropService]})
export class DragDropDirective {
    @Output()
    public readonly dfDragDrop = inject(DragDropService);
}
