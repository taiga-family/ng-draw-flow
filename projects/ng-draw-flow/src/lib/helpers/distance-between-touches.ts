export function dfDistanceBetweenTouches(
    firstEvent: PointerEvent,
    secondEvent: PointerEvent,
): number {
    return Math.hypot(
        firstEvent.clientX - secondEvent.clientX,
        firstEvent.clientY - secondEvent.clientY,
    );
}
