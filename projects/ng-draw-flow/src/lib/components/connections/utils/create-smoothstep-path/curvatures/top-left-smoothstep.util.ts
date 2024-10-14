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

export function createTopLeftCurve({
    startX,
    startY,
    endX,
    endY,
    radius,
}: DfPathCoords): string {
    const isEndPointOnRightSide = startX - MIN_LINE_SIZE + radius < endX;
    const isEndPointOnUpSide = startY > endY;
    const verticalDifference = startY - endY - MIN_LINE_SIZE;

    if (!isEndPointOnRightSide && isEndPointOnUpSide) {
        const secondRadius = adjustRadius(verticalDifference, radius);

        return [
            createStartPoint(startX, startY),
            createVerticalLineToLeftWithCurve(
                startX,
                startY - MIN_LINE_SIZE,
                radius,
                isEndPointOnUpSide,
            ),
            createHorizontalLineWithCurve(
                endX - MIN_LINE_SIZE,
                startY - MIN_LINE_SIZE,
                secondRadius,
                isEndPointOnRightSide,
                isEndPointOnUpSide,
            ),
            createVerticalLineToRightWithCurve(
                endX - MIN_LINE_SIZE,
                endY,
                secondRadius,
                isEndPointOnUpSide,
            ),
            createEndPoint(endX, endY),
        ].join(' ');
    }

    if (!isEndPointOnUpSide && !isEndPointOnRightSide) {
        const secondRadius = adjustRadius(verticalDifference, radius);

        return [
            createStartPoint(startX, startY),
            createVerticalLineToLeftWithCurve(
                startX,
                startY - MIN_LINE_SIZE,
                radius,
                !isEndPointOnUpSide,
            ),
            createHorizontalLineWithCurve(
                Math.min(startX - MIN_LINE_SIZE, endX - MIN_LINE_SIZE),
                startY - MIN_LINE_SIZE,
                secondRadius,
                false,
                isEndPointOnUpSide,
            ),
            createVerticalLineToRightWithCurve(
                Math.min(startX - MIN_LINE_SIZE, endX - MIN_LINE_SIZE),
                endY,
                secondRadius,
                isEndPointOnUpSide,
            ),
            createEndPoint(endX, endY),
        ].join(' ');
    }

    if (!isEndPointOnUpSide && isEndPointOnRightSide) {
        return [
            createStartPoint(startX, startY),
            createVerticalLineToLeftWithCurve(
                startX,
                startY - MIN_LINE_SIZE,
                radius,
                !isEndPointOnUpSide,
            ),
            createHorizontalLineWithCurve(
                startX - MIN_LINE_SIZE,
                startY - MIN_LINE_SIZE,
                radius,
                false,
                isEndPointOnUpSide,
            ),
            createVerticalLineToRightWithCurve(
                startX - MIN_LINE_SIZE,
                endY,
                radius,
                isEndPointOnUpSide,
            ),
            createEndPoint(endX, endY),
        ].join(' ');
    }

    if (isEndPointOnRightSide && isEndPointOnUpSide) {
        return [
            createStartPoint(startX, startY),
            createVerticalLineToRightWithCurve(startX, endY, radius, isEndPointOnUpSide),
            createEndPoint(endX, endY),
        ].join(' ');
    }

    return '';
}
