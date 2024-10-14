import type {DfPathCoords} from '@ng-draw-flow/core';

import {MIN_LINE_SIZE} from '../consts';
import {
    createEndPoint,
    createHorizontalLineWithCurve,
    createStartPoint,
    createVerticalLineToLeftWithCurve,
    createVerticalLineToRightWithCurve,
} from '../utils';

export function createBottomLeftCurve({
    startX,
    startY,
    endX,
    endY,
    radius,
}: DfPathCoords): string {
    const isEndPointOnLeftSide = startX > endX;
    const isEndPointOnUpSide = startY > endY;
    const halfY = (startY + endY) / 2;

    if (isEndPointOnLeftSide && isEndPointOnUpSide) {
        return [
            createStartPoint(startX, startY),
            createVerticalLineToLeftWithCurve(
                startX,
                startY + MIN_LINE_SIZE,
                radius,
                !isEndPointOnUpSide,
            ),
            createHorizontalLineWithCurve(
                endX - MIN_LINE_SIZE,
                startY + MIN_LINE_SIZE,
                radius,
                !isEndPointOnLeftSide,
                isEndPointOnUpSide,
            ),
            createVerticalLineToRightWithCurve(
                endX - MIN_LINE_SIZE,
                endY,
                radius,
                isEndPointOnUpSide,
            ),
            createEndPoint(endX, endY),
        ].join(' ');
    }

    if (!isEndPointOnLeftSide && isEndPointOnUpSide) {
        return [
            createStartPoint(startX, startY),
            createVerticalLineToLeftWithCurve(
                startX,
                startY + MIN_LINE_SIZE,
                radius,
                !isEndPointOnUpSide,
            ),
            createHorizontalLineWithCurve(
                startX - MIN_LINE_SIZE,
                startY + MIN_LINE_SIZE,
                radius,
                isEndPointOnLeftSide,
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

    if (!isEndPointOnLeftSide && !isEndPointOnUpSide) {
        return [
            createStartPoint(startX, startY),
            createVerticalLineToRightWithCurve(startX, endY, radius, isEndPointOnUpSide),
            createEndPoint(endX, endY),
        ].join(' ');
    }

    if (isEndPointOnLeftSide && !isEndPointOnUpSide) {
        if (endY <= startY + MIN_LINE_SIZE + radius * 2) {
            return [
                createStartPoint(startX, startY),
                createVerticalLineToLeftWithCurve(
                    startX,
                    endY + MIN_LINE_SIZE * 1.5,
                    radius,
                    isEndPointOnUpSide,
                ),
                createHorizontalLineWithCurve(
                    endX - MIN_LINE_SIZE,
                    endY + MIN_LINE_SIZE * 1.5,
                    radius,
                    !isEndPointOnLeftSide,
                    !isEndPointOnUpSide,
                ),
                createVerticalLineToRightWithCurve(
                    endX - MIN_LINE_SIZE,
                    endY,
                    radius,
                    !isEndPointOnUpSide,
                ),
                createEndPoint(endX, endY),
            ].join(' ');
        }

        return [
            createStartPoint(startX, startY),
            createVerticalLineToLeftWithCurve(
                startX,
                startY + Math.min(MIN_LINE_SIZE, halfY),
                radius,
                isEndPointOnUpSide,
            ),
            createHorizontalLineWithCurve(
                endX - MIN_LINE_SIZE,
                startY + Math.min(MIN_LINE_SIZE, halfY),
                radius,
                !isEndPointOnLeftSide,
                isEndPointOnUpSide,
            ),
            createVerticalLineToRightWithCurve(
                endX - MIN_LINE_SIZE,
                endY,
                radius,
                isEndPointOnUpSide,
            ),
            createEndPoint(endX, endY),
        ].join(' ');
    }

    return '';
}
