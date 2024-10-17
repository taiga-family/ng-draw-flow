import type {DfPathCoords} from '../../../../../ng-draw-flow.interfaces';
import {MIN_LINE_SIZE} from '../consts';
import {
    adjustRadius,
    createEndPoint,
    createHorizontalLineWithCurve,
    createStartPoint,
    createVerticalLineToRightWithCurve,
} from '../utils';

export function createLeftLeftCurve({
    startX,
    startY,
    endX,
    endY,
    radius,
}: DfPathCoords): string {
    const verticalDifference = startY - endY;

    radius = adjustRadius(verticalDifference, radius);
    const isEndPointOnRightSide = startX < endX;
    const isEndPointOnUpSide = startY > endY;

    if (startX === endX && endY === startY) {
        return '';
    }

    radius = adjustRadius(verticalDifference, radius);

    if (endX <= startX) {
        return [
            createStartPoint(startX, startY),
            createHorizontalLineWithCurve(
                endX - MIN_LINE_SIZE - radius,
                startY,
                radius,
                isEndPointOnRightSide,
                isEndPointOnUpSide,
            ),
            createVerticalLineToRightWithCurve(
                endX - MIN_LINE_SIZE - radius,
                endY,
                radius,
                isEndPointOnUpSide,
            ),
            createEndPoint(endX, endY),
        ].join(' ');
    }

    return [
        createStartPoint(startX, startY),
        createHorizontalLineWithCurve(
            startX - MIN_LINE_SIZE - radius,
            startY,
            radius,
            !isEndPointOnRightSide,
            isEndPointOnUpSide,
        ),
        createVerticalLineToRightWithCurve(
            startX - MIN_LINE_SIZE - radius,
            endY,
            radius,
            isEndPointOnUpSide,
        ),
        createEndPoint(endX, endY),
    ].join(' ');
}
