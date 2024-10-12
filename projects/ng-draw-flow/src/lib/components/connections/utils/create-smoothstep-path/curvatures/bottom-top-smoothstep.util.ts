import {MIN_LINE_SIZE} from '../consts';
import {
    adjustRadius,
    createEndPoint,
    createHorizontalLineWithCurve,
    createStartPoint,
    createVerticalLineToLeftWithCurve,
    createVerticalLineToRightWithCurve,
} from '../utils';

// TODO: НЕ ПРОВЕРЕНО
export function createBottomTopCurve(
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    radius: number,
): string {
    const halfY = (startY + endY) / 2;
    const isEndPointOnRightSide = startX < endX;
    const isEndPointOnUpSide = startY > endY;

    console.warn(startY, startX, endY, endX, 'startY, endY');

    if (!isEndPointOnUpSide) {
        const horizontalDifference = startX - endX;

        radius = adjustRadius(horizontalDifference, radius);

        return [
            createStartPoint(startX, startY),
            isEndPointOnRightSide
                ? createVerticalLineToRightWithCurve(
                      startX,
                      halfY,
                      radius,
                      isEndPointOnUpSide,
                  )
                : createVerticalLineToLeftWithCurve(
                      startX,
                      halfY,
                      radius,
                      isEndPointOnUpSide,
                  ),
            createHorizontalLineWithCurve(
                endX,
                halfY,
                radius,
                isEndPointOnRightSide,
                isEndPointOnUpSide,
            ),
            createEndPoint(endX, endY),
        ].join(' ');
    }

    if (!isEndPointOnRightSide && isEndPointOnUpSide) {
        if (endX >= startX + MIN_LINE_SIZE) {
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
    }

    if (isEndPointOnRightSide && isEndPointOnUpSide) {
        return [
            createStartPoint(startX, startY),
            createVerticalLineToRightWithCurve(
                startX,
                startY + MIN_LINE_SIZE,
                radius,
                !isEndPointOnUpSide,
            ),
            createHorizontalLineWithCurve(
                endX + MIN_LINE_SIZE,
                startY + MIN_LINE_SIZE,
                radius,
                isEndPointOnRightSide,
                isEndPointOnUpSide,
            ),
            createVerticalLineToLeftWithCurve(
                endX + MIN_LINE_SIZE,
                endY - MIN_LINE_SIZE,
                radius,
                isEndPointOnUpSide,
            ),
            createHorizontalLineWithCurve(
                endX,
                endY - MIN_LINE_SIZE,
                radius,
                !isEndPointOnRightSide,
                !isEndPointOnUpSide,
            ),
            createEndPoint(endX, endY),
        ].join(' ');
    }

    if (!isEndPointOnRightSide && isEndPointOnUpSide) {
        let secondCurvatureRadius = radius;

        if (endX + MIN_LINE_SIZE > startX) {
            secondCurvatureRadius = Math.min(
                radius,
                Math.abs((endX + radius - (startX - radius)) / 4),
            );

            return [
                createStartPoint(startX, startY),
                createVerticalLineToRightWithCurve(
                    startX,
                    startY + MIN_LINE_SIZE,
                    secondCurvatureRadius,
                    !isEndPointOnUpSide,
                ),
                createHorizontalLineWithCurve(
                    endX + MIN_LINE_SIZE,
                    startY + MIN_LINE_SIZE,
                    secondCurvatureRadius,
                    !isEndPointOnRightSide,
                    isEndPointOnUpSide,
                ),
                createVerticalLineToLeftWithCurve(
                    endX + MIN_LINE_SIZE,
                    endY - MIN_LINE_SIZE,
                    radius,
                    isEndPointOnUpSide,
                ),
                createHorizontalLineWithCurve(
                    endX,
                    endY - MIN_LINE_SIZE,
                    radius,
                    isEndPointOnRightSide,
                    !isEndPointOnUpSide,
                ),
                createEndPoint(endX, endY),
            ].join(' ');
        }

        if (endX + radius <= startX - radius) {
            secondCurvatureRadius = Math.min(
                radius,
                Math.abs((endX + radius - (startX - radius)) / 4),
            );
        }

        return [
            createStartPoint(startX, startY),
            createVerticalLineToLeftWithCurve(
                startX,
                startY + MIN_LINE_SIZE,
                secondCurvatureRadius,
                !isEndPointOnUpSide,
            ),
            createHorizontalLineWithCurve(
                endX + MIN_LINE_SIZE,
                startY + MIN_LINE_SIZE,
                secondCurvatureRadius,
                isEndPointOnRightSide,
                isEndPointOnUpSide,
            ),
            createVerticalLineToLeftWithCurve(
                endX + MIN_LINE_SIZE,
                endY - MIN_LINE_SIZE,
                radius,
                isEndPointOnUpSide,
            ),
            createHorizontalLineWithCurve(
                endX,
                endY - MIN_LINE_SIZE,
                radius,
                isEndPointOnRightSide,
                !isEndPointOnUpSide,
            ),
            createEndPoint(endX, endY),
        ].join(' ');
    }

    return '';
}
