import {MIN_LINE_SIZE} from '../consts';
import {
    adjustRadius,
    createEndPoint,
    createHorizontalLineWithCurve,
    createStartPoint,
    createVerticalLineToLeftWithCurve,
} from '../utils';

export function createRightBottomCurve(
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    radius: number,
): string {
    const isEndPointOnRightSide = startX + MIN_LINE_SIZE < endX;
    const isEndPointOnUpSide = startY > endY + MIN_LINE_SIZE - radius;
    const horizontalDifference = startX + MIN_LINE_SIZE - endX;
    const verticalDifference = startY + MIN_LINE_SIZE - endY;
    const halfY = (startY + endY) / 2;
    let secondRadius = radius;

    if (isEndPointOnRightSide && isEndPointOnUpSide) {
        return [
            createStartPoint(startX, startY),
            createHorizontalLineWithCurve(
                endX,
                startY,
                radius,
                isEndPointOnRightSide,
                isEndPointOnUpSide,
            ),
            createEndPoint(endX, endY),
        ].join(' ');
    }

    if (!isEndPointOnRightSide && isEndPointOnUpSide) {
        secondRadius = Math.min(
            adjustRadius(horizontalDifference, radius),
            adjustRadius(verticalDifference, radius),
        );

        return [
            createStartPoint(startX, startY),
            createHorizontalLineWithCurve(
                startX + MIN_LINE_SIZE,
                startY,
                secondRadius,
                !isEndPointOnRightSide,
                isEndPointOnUpSide,
            ),
            createVerticalLineToLeftWithCurve(
                startX + MIN_LINE_SIZE,
                halfY,
                secondRadius,
                isEndPointOnUpSide,
            ),
            createHorizontalLineWithCurve(
                endX,
                halfY,
                secondRadius,
                isEndPointOnRightSide,
                isEndPointOnUpSide,
            ),
            createEndPoint(endX, endY),
        ].join(' ');
    }

    if (isEndPointOnRightSide && !isEndPointOnUpSide) {
        radius = adjustRadius(verticalDifference, radius);

        return [
            createStartPoint(startX, startY),
            createHorizontalLineWithCurve(
                endX + MIN_LINE_SIZE,
                startY,
                radius,
                isEndPointOnRightSide,
                isEndPointOnUpSide,
            ),
            createVerticalLineToLeftWithCurve(
                endX + MIN_LINE_SIZE,
                endY + MIN_LINE_SIZE,
                radius,
                isEndPointOnUpSide,
            ),
            createHorizontalLineWithCurve(
                endX,
                endY + MIN_LINE_SIZE,
                radius,
                !isEndPointOnRightSide,
                !isEndPointOnUpSide,
            ),
            createEndPoint(endX, endY),
        ].join(' ');
    }

    if (!isEndPointOnRightSide && !isEndPointOnUpSide) {
        console.warn(456);
        radius = adjustRadius(horizontalDifference, radius);
        secondRadius = adjustRadius(verticalDifference, radius);

        return [
            createStartPoint(startX, startY),
            createHorizontalLineWithCurve(
                startX + MIN_LINE_SIZE,
                startY,
                secondRadius,
                !isEndPointOnRightSide,
                isEndPointOnUpSide,
            ),
            createVerticalLineToLeftWithCurve(
                startX + MIN_LINE_SIZE,
                endY + MIN_LINE_SIZE,
                secondRadius,
                isEndPointOnUpSide,
            ),
            createHorizontalLineWithCurve(
                endX,
                endY + MIN_LINE_SIZE,
                radius,
                isEndPointOnRightSide,
                !isEndPointOnUpSide,
            ),
            createEndPoint(endX, endY),
        ].join(' ');
    }

    return '';
}
