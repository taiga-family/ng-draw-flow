import type {NgZone, OnDestroy} from '@angular/core';
import {Injectable} from '@angular/core';

interface SelectableItem {
    element: HTMLElement;
    callback: (selected: boolean) => void;
}

@Injectable()
export class SelectionService implements OnDestroy {
    private readonly selectedElements = new Set<HTMLElement>();
    private readonly registeredElements = new Map<HTMLElement, SelectableItem>();

    private isDragging = false;
    private startX: number | null = null;
    private startY: number | null = null;
    private readonly dragThreshold = 5;
    private currentTarget: HTMLElement | null = null;

    constructor(private readonly ngZone: NgZone) {
        // Use NgZone.runOutsideAngular to prevent change detection
        // from running on every mouse event
        this.ngZone.runOutsideAngular(() => {
            document.addEventListener('mousedown', this.onMouseDown.bind(this));
            document.addEventListener('mousemove', this.onMouseMove.bind(this));
            document.addEventListener('mouseup', this.onMouseUp.bind(this));
        });
    }

    public ngOnDestroy(): void {
        document.removeEventListener('mousedown', this.onMouseDown.bind(this));
        document.removeEventListener('mousemove', this.onMouseMove.bind(this));
        document.removeEventListener('mouseup', this.onMouseUp.bind(this));

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

        // Check if the target element is the scene
        if (this.currentTarget.dataset.element === 'scene') {
            // If clicked on the scene, clear selection
            this.clearSelection();

            return;
        }

        // Find the closest registered element
        const targetElement = this.findRegisteredParent(this.currentTarget);

        if (targetElement) {
            // If Ctrl or Shift key is pressed, add to selection
            const multiSelect = event.ctrlKey || event.shiftKey;

            this.selectElement(targetElement, !multiSelect);
        } else {
            // If click is not on a registered element, clear selection
            this.clearSelection();
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
    private onMouseUp(event: MouseEvent): void {
        const target = event.target as HTMLElement;

        // If it was a drag and release on the scene, do nothing
        if (this.isDragging && target.dataset.element === 'scene') {
            this.reset();

            return;
        }

        // If it wasn't a drag, process as a normal click
        if (!this.isDragging) {
            const targetElement = this.findRegisteredParent(target);

            if (targetElement) {
                // If Ctrl or Shift key is pressed, toggle selection
                if (event.ctrlKey || event.shiftKey) {
                    if (this.isSelected(targetElement)) {
                        this.deselectElement(targetElement);
                    } else {
                        this.selectElement(targetElement, false);
                    }
                }
            }
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
    }
}
