import type {DfPathCoords} from '@ng-draw-flow/core';

import {MIN_LINE_SIZE} from '../consts';
import {
    createEndPoint,
    createHorizontalLineWithCurve,
    createStartPoint,
    createVerticalLineToLeftWithCurve,
    createVerticalLineToRightWithCurve,
} from '../utils';

export function createBottomRightCurve({
    startX,
    startY,
    endX,
    endY,
    radius,
}: DfPathCoords): string {
    const isEndPointOnRightSide = startX < endX;
    const isEndPointOnUpSide = startY > endY;

    if (isEndPointOnRightSide && !isEndPointOnUpSide) {
        return [
            createStartPoint(startX, startY),
            createVerticalLineToRightWithCurve(
                startX,
                endY + MIN_LINE_SIZE,
                radius,
                isEndPointOnUpSide,
            ),
            createHorizontalLineWithCurve(
                endX + MIN_LINE_SIZE,
                endY + MIN_LINE_SIZE,
                radius,
                isEndPointOnRightSide,
                !isEndPointOnUpSide,
            ),
            createVerticalLineToLeftWithCurve(
                endX + MIN_LINE_SIZE,
                endY,
                radius,
                !isEndPointOnUpSide,
            ),
            createEndPoint(endX, endY),
        ].join(' ');
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
                endY,
                radius,
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

    if (!isEndPointOnRightSide && !isEndPointOnUpSide) {
        return [
            createStartPoint(startX, startY),
            createVerticalLineToLeftWithCurve(startX, endY, radius, isEndPointOnUpSide),
            createEndPoint(endX, endY),
        ].join(' ');
    }

    if (!isEndPointOnRightSide && isEndPointOnUpSide) {
        let secondCurvatureRadius = radius;

        if (endX + radius <= startX - radius) {
            secondCurvatureRadius = Math.min(
                radius,
                Math.abs((endX + radius - (startX - radius)) / 4),
            );
        }

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
                    endY,
                    radius,
                    isEndPointOnUpSide,
                ),
                createEndPoint(endX, endY),
            ].join(' ');
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
                endY,
                radius,
                isEndPointOnUpSide,
            ),
            createEndPoint(endX, endY),
        ].join(' ');
    }

    return '';
}
