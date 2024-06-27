import {
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    inject,
    Output,
} from '@angular/core';

@Directive({standalone: true, selector: '[dfSelectableElement]'})
export class SelectableElementDirective {
    private selected = false;
    private readonly el = inject(ElementRef);

    @Output()
    protected readonly selectionChanged = new EventEmitter<boolean>();

    @HostListener('document:mousedown', ['$event.target'])
    protected onDocumentClick(targetElement: any): void {
        const clickedInside = this.el.nativeElement.contains(targetElement);

        this.setSelected(clickedInside);
    }

    private setSelected(selected: boolean): void {
        if (this.selected !== selected) {
            this.selected = selected;

            this.selectionChanged.emit(this.selected);

            if (selected) {
                this.selectNode();
            } else {
                this.deselectNode();
            }
        }
    }

    private selectNode(): void {
        this.el.nativeElement.classList.add('df-selected');
    }

    private deselectNode(): void {
        this.el.nativeElement.classList.remove('df-selected');
    }
}
