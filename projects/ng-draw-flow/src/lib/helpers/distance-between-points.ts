import {type DfDelta} from '../ng-draw-flow.interfaces';

export function dfDistanceBetweenPoints(
    firstEvent: PointerEvent,
    secondEvent: PointerEvent,
): DfDelta {
    const deltaX = secondEvent.clientX - firstEvent.clientX;
    const deltaY = secondEvent.clientY - firstEvent.clientY;

    return {deltaX, deltaY};
}
