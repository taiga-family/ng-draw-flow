import {MIN_LINE_SIZE} from '../consts';
import {
    adjustRadius,
    createEndPoint,
    createHorizontalLineWithCurve,
    createStartPoint,
    createVerticalLineToLeftWithCurve,
} from '../utils';

export function createRightRightCurve(
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    radius: number,
): string {
    const verticalDifference = startY - endY;

    radius = adjustRadius(verticalDifference, radius);
    const isEndPointOnRightSide = startX < endX;
    const isEndPointOnUpSide = startY > endY;

    if (startX === endX && endY === startY) {
        return '';
    }

    radius = adjustRadius(verticalDifference, radius);

    if (endX >= startX) {
        return [
            createStartPoint(startX, startY),
            createHorizontalLineWithCurve(
                endX + MIN_LINE_SIZE - radius,
                startY,
                radius,
                isEndPointOnRightSide,
                isEndPointOnUpSide,
            ),
            createVerticalLineToLeftWithCurve(
                endX + MIN_LINE_SIZE - radius,
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
            startX + MIN_LINE_SIZE - radius,
            startY,
            radius,
            !isEndPointOnRightSide,
            isEndPointOnUpSide,
        ),
        createVerticalLineToLeftWithCurve(
            startX + MIN_LINE_SIZE - radius,
            endY,
            radius,
            isEndPointOnUpSide,
        ),
        createEndPoint(endX, endY),
    ].join(' ');
}
