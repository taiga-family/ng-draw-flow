import type {OnDestroy} from '@angular/core';
import {inject, Injectable, NgZone} from '@angular/core';

interface SelectableItem {
    element: HTMLElement;
    callback: (selected: boolean) => void;
}

@Injectable()
export class SelectionService implements OnDestroy {
    private readonly ngZone = inject(NgZone);
    private readonly selectedElements = new Set<HTMLElement>();
    private readonly registeredElements = new Map<HTMLElement, SelectableItem>();

    private isDragging = false;
    private clickedOnScene = false;
    private startX: number | null = null;
    private startY: number | null = null;
    private readonly dragThreshold = 5;
    private currentTarget: HTMLElement | null = null;
    private readonly boundMouseDown = this.onMouseDown.bind(this);
    private readonly boundMouseMove = this.onMouseMove.bind(this);
    private readonly boundMouseUp = this.onMouseUp.bind(this);

    constructor() {
        // Use NgZone.runOutsideAngular to prevent change detection
        // from running on every mouse event
        this.ngZone.runOutsideAngular(() => {
            document.addEventListener('mousedown', this.boundMouseDown);
            document.addEventListener('mousemove', this.boundMouseMove);
            document.addEventListener('mouseup', this.boundMouseUp);
        });
    }

    public ngOnDestroy(): void {
        document.removeEventListener('mousedown', this.boundMouseDown);
        document.removeEventListener('mousemove', this.boundMouseMove);
        document.removeEventListener('mouseup', this.boundMouseUp);

        this.registeredElements.clear();
        this.selectedElements.clear();
    }

    /**
     * Registers an element for selection tracking
     * @param element HTML element to track
     * @param callback Callback function triggered when selection changes
     * @returns Function to unregister
     */
    public registerElement(
        element: HTMLElement,
        callback: (selected: boolean) => void,
    ): () => void {
        this.registeredElements.set(element, {element, callback});

        // Return a function to unregister
        return () => {
            this.unregisterElement(element);
        };
    }

    /**
     * Unregisters an element
     * @param element HTML element to unregister
     */
    public unregisterElement(element: HTMLElement): void {
        if (this.selectedElements.has(element)) {
            this.selectedElements.delete(element);
        }

        this.registeredElements.delete(element);
    }

    /**
     * Selects an element
     * @param element HTML element to select
     * @param exclusive If true, deselects all other elements
     */
    public selectElement(element: HTMLElement, exclusive = true): void {
        if (exclusive) {
            this.clearSelection(element);
        }

        if (!this.selectedElements.has(element)) {
            this.selectedElements.add(element);
            const item = this.registeredElements.get(element);

            if (item) {
                // Run callback inside Angular zone for change detection
                this.ngZone.run(() => {
                    item.callback(true);
                });
            }
        }
    }

    /**
     * Deselects an element
     * @param element HTML element to deselect
     */
    public deselectElement(element: HTMLElement): void {
        if (this.selectedElements.has(element)) {
            this.selectedElements.delete(element);
            const item = this.registeredElements.get(element);

            if (item) {
                this.ngZone.run(() => {
                    item.callback(false);
                });
            }
        }
    }

    /**
     * Clears selection of all elements except the excluded one
     * @param exceptElement Element to exclude from clearing
     */
    public clearSelection(exceptElement?: HTMLElement): void {
        this.selectedElements.forEach((element) => {
            if (element !== exceptElement) {
                this.deselectElement(element);
            }
        });
    }

    /**
     * Checks if an element is selected
     * @param element HTML element to check
     * @returns true if the element is selected
     */
    public isSelected(element: HTMLElement): boolean {
        return this.selectedElements.has(element);
    }

    /**
     * Gets all selected elements
     * @returns Array of selected HTML elements
     */
    public getSelectedElements(): HTMLElement[] {
        return Array.from(this.selectedElements);
    }

    /**
     * Mouse down event handler
     */
    private onMouseDown(event: MouseEvent): void {
        this.startX = event.clientX;
        this.startY = event.clientY;
        this.isDragging = false;
        this.currentTarget = event.target as HTMLElement;

        // Find the nearest registered element
        const targetElement = this.findRegisteredParent(this.currentTarget);

        // If clicked on a registered element
        if (targetElement) {
            this.selectElement(targetElement);
        }
        // If clicked on the scene and it's not the start of dragging
        else if (this.currentTarget.dataset.element === 'scene') {
            // Remember that the click was on the scene
            this.clickedOnScene = true;
        }
    }

    /**
     * Mouse move event handler
     */
    private onMouseMove(event: MouseEvent): void {
        if (!this.startX || !this.startY) {
            return;
        }

        const dx = event.clientX - this.startX;
        const dy = event.clientY - this.startY;

        // Check if the drag threshold has been exceeded
        if (!this.isDragging && Math.sqrt(dx * dx + dy * dy) > this.dragThreshold) {
            this.isDragging = true;
        }
    }

    /**
     * Mouse up event handler
     */
    private onMouseUp(_event: MouseEvent): void {
        // If it was dragging and releasing on the scene,
        // just reset the state without changing the selection
        if (this.isDragging) {
            this.reset();

            return;
        }

        // If clicked on the scene (not while dragging)
        if (this.clickedOnScene && !this.isDragging) {
            // Clear selection only when clicking on the scene, not when dragging
            this.clearSelection();
        }

        this.reset();
    }

    /**
     * Finds the closest parent element that is registered in the service
     */
    private findRegisteredParent(element: HTMLElement | null): HTMLElement | null {
        let current = element;

        while (current) {
            if (this.registeredElements.has(current)) {
                return current;
            }

            current = current.parentElement;
        }

        return null;
    }

    /**
     * Resets the drag state
     */
    private reset(): void {
        this.startX = null;
        this.startY = null;
        this.isDragging = false;
        this.currentTarget = null;
        this.clickedOnScene = false; // Reset the scene click flag
    }
}
