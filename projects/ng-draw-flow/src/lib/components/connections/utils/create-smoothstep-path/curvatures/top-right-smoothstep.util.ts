import type {DfPathCoords} from '@ng-draw-flow/core';

import {MIN_LINE_SIZE} from '../consts';
import {
    adjustRadius,
    createEndPoint,
    createHorizontalLineWithCurve,
    createStartPoint,
    createVerticalLineToLeftWithCurve,
    createVerticalLineToRightWithCurve,
} from '../utils';

export function createTopRightCurve({
    startX,
    startY,
    endX,
    endY,
    radius,
}: DfPathCoords): string {
    const isEndPointOnRightSide = startX + MIN_LINE_SIZE + radius < endX;
    const isEndPointOnUpSide = startY > endY;
    const verticalDifference = startY - endY - MIN_LINE_SIZE;

    if (isEndPointOnRightSide && isEndPointOnUpSide) {
        const secondRadius = adjustRadius(verticalDifference, radius);

        return [
            createStartPoint(startX, startY),
            createVerticalLineToRightWithCurve(
                startX,
                startY - MIN_LINE_SIZE,
                radius,
                isEndPointOnUpSide,
            ),
            createHorizontalLineWithCurve(
                endX + MIN_LINE_SIZE,
                startY - MIN_LINE_SIZE,
                secondRadius,
                isEndPointOnRightSide,
                isEndPointOnUpSide,
            ),
            createVerticalLineToLeftWithCurve(
                endX + MIN_LINE_SIZE,
                endY,
                secondRadius,
                isEndPointOnUpSide,
            ),
            createEndPoint(endX, endY),
        ].join(' ');
    }

    if (!isEndPointOnUpSide && isEndPointOnRightSide) {
        const secondRadius = adjustRadius(verticalDifference, radius);

        return [
            createStartPoint(startX, startY),
            createVerticalLineToRightWithCurve(
                startX,
                startY - MIN_LINE_SIZE,
                radius,
                !isEndPointOnUpSide,
            ),
            createHorizontalLineWithCurve(
                endX + MIN_LINE_SIZE,
                startY - MIN_LINE_SIZE,
                secondRadius,
                isEndPointOnRightSide,
                isEndPointOnUpSide,
            ),
            createVerticalLineToLeftWithCurve(
                endX + MIN_LINE_SIZE,
                endY,
                secondRadius,
                isEndPointOnUpSide,
            ),
            createEndPoint(endX, endY),
        ].join(' ');
    }

    if (!isEndPointOnUpSide && !isEndPointOnRightSide) {
        return [
            createStartPoint(startX, startY),
            createVerticalLineToRightWithCurve(
                startX,
                startY - MIN_LINE_SIZE,
                radius,
                !isEndPointOnUpSide,
            ),
            createHorizontalLineWithCurve(
                startX + MIN_LINE_SIZE,
                startY - MIN_LINE_SIZE,
                radius,
                true,
                isEndPointOnUpSide,
            ),
            createVerticalLineToLeftWithCurve(
                startX + MIN_LINE_SIZE,
                endY,
                radius,
                isEndPointOnUpSide,
            ),
            createEndPoint(endX, endY),
        ].join(' ');
    }

    if (!isEndPointOnRightSide && isEndPointOnUpSide) {
        return [
            createStartPoint(startX, startY),
            createVerticalLineToLeftWithCurve(startX, endY, radius, isEndPointOnUpSide),
            createEndPoint(endX, endY),
        ].join(' ');
    }

    return '';
}
