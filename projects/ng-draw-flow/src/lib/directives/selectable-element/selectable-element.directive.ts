import {
    Directive,
    ElementRef,
    EventEmitter,
    inject,
    type OnDestroy,
    type OnInit,
    Output,
} from '@angular/core';

import {SelectionService} from '../../services/selection.service';

@Directive({
    standalone: true,
    selector: '[dfSelectableElement]',
})
export class SelectableElementDirective implements OnInit, OnDestroy {
    private selected = false;
    private readonly el = inject(ElementRef<HTMLElement>);
    private readonly selectionService = inject(SelectionService);
    private unregisterFn: (() => void) | null = null;

    @Output('dfSelectableElement')
    protected readonly selectionChanged = new EventEmitter<boolean>();

    public ngOnInit(): void {
        // Register the element in the service and save the unregistration function.
        this.unregisterFn = this.selectionService.registerElement(
            this.el.nativeElement,
            (selected) => this.handleSelectionChange(selected),
        );
    }

    public ngOnDestroy(): void {
        // Unregister when the directive is destroyed
        if (this.unregisterFn) {
            this.unregisterFn();
            this.unregisterFn = null;
        }
    }

    private handleSelectionChange(selected: boolean): void {
        if (this.selected !== selected) {
            this.selected = selected;
            this.selectionChanged.emit(selected);
        }
    }
}
