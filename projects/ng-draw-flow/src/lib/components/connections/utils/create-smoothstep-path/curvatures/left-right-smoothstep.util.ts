import type {DfPathCoords} from '../../../../../ng-draw-flow.interfaces';
import {MIN_LINE_SIZE} from '../consts';
import {
    adjustRadius,
    createEndPoint,
    createHorizontalLineWithCurve,
    createStartPoint,
    createVerticalLineToLeftWithCurve,
    createVerticalLineToRightWithCurve,
} from '../utils';

export function createLeftRightCurve({
    startX,
    startY,
    endX,
    endY,
    radius,
}: DfPathCoords): string {
    const verticalDifference = startY - endY;

    radius = adjustRadius(verticalDifference, radius);
    const halfX = (startX + endX) / 2;
    const halfY = (startY + endY) / 2;
    const isEndPointOnLeftSide = startX > endX;
    const isEndPointOnRightSide = startX < endX + MIN_LINE_SIZE;
    const isEndPointOnUpSide = startY > endY;

    if (endX === startX) {
        return '';
    }

    if (
        isEndPointOnRightSide &&
        isEndPointOnLeftSide &&
        startY < endY + MIN_LINE_SIZE &&
        startY + MIN_LINE_SIZE > endY
    ) {
        return [
            createStartPoint(startX, startY),
            createHorizontalLineWithCurve(
                halfX,
                startY,
                radius,
                !isEndPointOnRightSide,
                isEndPointOnUpSide,
            ),
            createVerticalLineToLeftWithCurve(halfX, endY, radius, isEndPointOnUpSide),
            createEndPoint(endX, endY),
        ].join(' ');
    }

    if (!isEndPointOnRightSide) {
        return [
            createStartPoint(startX, startY),
            createHorizontalLineWithCurve(
                halfX,
                startY,
                radius,
                isEndPointOnRightSide,
                isEndPointOnUpSide,
            ),
            createVerticalLineToLeftWithCurve(halfX, endY, radius, isEndPointOnUpSide),
            createEndPoint(endX, endY),
        ].join(' ');
    }

    return [
        createStartPoint(startX, startY),
        createHorizontalLineWithCurve(
            startX - MIN_LINE_SIZE,
            startY,
            radius,
            !isEndPointOnRightSide,
            isEndPointOnUpSide,
        ),
        createVerticalLineToRightWithCurve(
            startX - MIN_LINE_SIZE,
            halfY,
            radius,
            isEndPointOnUpSide,
        ),
        createHorizontalLineWithCurve(
            endX + MIN_LINE_SIZE,
            halfY,
            radius,
            isEndPointOnRightSide,
            isEndPointOnUpSide,
        ),
        createVerticalLineToLeftWithCurve(
            endX + MIN_LINE_SIZE,
            endY,
            radius,
            isEndPointOnUpSide,
        ),
        createEndPoint(endX, endY),
    ].join(' ');
}
