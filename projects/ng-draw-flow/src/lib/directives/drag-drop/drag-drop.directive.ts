import {Directive, ElementRef, inject} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';
import {EMPTY, startWith, switchMap} from 'rxjs';

import {DfInteractionStateService} from '../../services/interaction-state.service';
import {DragDropService} from './drag-drop.service';

@Directive({
    standalone: true,
    selector: '[dfDragDrop]',
})
export class DragDropDirective {
    private readonly interactionState = inject(DfInteractionStateService, {
        optional: true,
    });

    private readonly dragDropService = inject(DragDropService);

    protected readonly elementRef: ElementRef<HTMLElement> = inject(ElementRef);
    protected readonly dfDragDrop = outputFromObservable(
        (this.interactionState?.cancellation$ ?? EMPTY).pipe(
            startWith(undefined),
            switchMap(() =>
                this.dragDropService.streamFor(this.elementRef.nativeElement),
            ),
        ),
        {alias: 'dfDragDrop'},
    );
}
