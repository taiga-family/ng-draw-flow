/** Restricts graph shortcuts to unhandled events from non-editable editor content. */
export function isEditorKeyboardEvent(event: KeyboardEvent, root: HTMLElement): boolean {
    const target = event.target;
    const path = event.composedPath();
    const editableSelector =
        'input, textarea, select, [contenteditable]:not([contenteditable="false"]), [role="textbox"], [role="combobox"]';
    const owningEditor = path.find(
        (item) => item instanceof Element && item.matches('ng-draw-flow'),
    );

    return (
        !event.defaultPrevented &&
        !event.isComposing &&
        target instanceof Element &&
        (owningEditor ?? target.closest('ng-draw-flow')) === root &&
        !target.closest(editableSelector) &&
        !path.some((item) => item instanceof Element && item.matches(editableSelector))
    );
}
