import {Directive, ElementRef, inject} from '@angular/core';
import type {Observable} from 'rxjs';

import type {DfDragDrop} from './drag-drop.interface';
import {DragDropService} from './drag-drop.service';

@Directive({
    standalone: true,
    selector: '[dfDragDrop]',
    outputs: ['dfDragDrop'],
})
export class DragDropDirective {
    protected readonly elementRef: ElementRef<HTMLElement> = inject(ElementRef);
    protected readonly dfDragDrop: Observable<DfDragDrop> = inject(
        DragDropService,
    ).streamFor(this.elementRef.nativeElement);
}
