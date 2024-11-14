import {Directive, ElementRef, EventEmitter, inject, Output} from '@angular/core';

@Directive({
    standalone: true,
    selector: '[dfSelectableElement]',
    host: {
        '(document:mousedown)': 'onMouseDown($event)',
        '(document:mousemove)': 'onMouseMove($event)',
        '(document:mouseup)': 'onMouseUp($event.target)',
    },
})
export class SelectableElementDirective {
    private selected = false;
    private readonly el = inject(ElementRef);
    private isDragging = false;
    private startX: number | null = null;
    private startY: number | null = null;
    private readonly dragThreshold = 5; // Displacement threshold for drag detection

    @Output()
    protected readonly selectionChanged = new EventEmitter<boolean>();

    protected onMouseDown(event: MouseEvent): void {
        this.startX = event.clientX;
        this.startY = event.clientY;
        const targetElement = event.target as HTMLElement;

        this.isDragging = false;

        if (targetElement.dataset.element !== 'scene') {
            const clickedInside = this.el.nativeElement.contains(targetElement);

            this.setSelected(clickedInside);
        }
    }

    protected onMouseMove(event: MouseEvent): void {
        if (!this.startX || !this.startY) {
            return;
        }

        const dx = event.clientX - this.startX;
        const dy = event.clientY - this.startY;

        // Check if the movement exceeds the dragThreshold threshold
        if (Math.sqrt(dx * dx + dy * dy) > this.dragThreshold) {
            this.isDragging = true;
        }
    }

    protected onMouseUp(targetElement: any): void {
        if (this.isDragging && targetElement.dataset.element === 'scene') {
            // If it was a drag and drop across the scene, we do nothing
            this.reset();

            return;
        }

        const clickedInside = this.el.nativeElement.contains(targetElement);

        this.setSelected(clickedInside);
        this.reset();
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

    private reset(): void {
        this.startX = null;
        this.startY = null;
        this.isDragging = false;
    }
}
