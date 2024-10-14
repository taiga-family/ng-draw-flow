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

export function createRightTopCurve({
    startX,
    startY,
    endX,
    endY,
    radius,
}: DfPathCoords): string {
    const isEndPointOnRightSide = startX < endX;
    const isEndPointOnUpSide = startY > endY;
    const horizontalDifference = startX - endX;
    const halfX = (startX + endX) / 2;
    const halfY = (startY + endY) / 2;

    if (isEndPointOnRightSide && isEndPointOnUpSide) {
        radius = adjustRadius(horizontalDifference, radius);

        return [
            createStartPoint(startX, startY),
            createHorizontalLineWithCurve(
                halfX,
                startY,
                radius,
                isEndPointOnRightSide,
                isEndPointOnUpSide,
            ),
            createVerticalLineToRightWithCurve(
                halfX,
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

    if (isEndPointOnRightSide && !isEndPointOnUpSide) {
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

        const firstLineEndX = startX + MIN_LINE_SIZE;

        if (startY + radius * 2 >= endY - radius * 2) {
            radius = (endY - startY) / 4;
        }

        const secondCurveRadius = Math.min(radius, firstLineEndX - endX);
        const secondLineEndX = endX + secondCurveRadius / 2;
        const horizontalLineToEndX = `L ${secondLineEndX} ${halfY}`;
        const thirdCurve = `Q ${secondLineEndX - secondCurveRadius / 2} ${halfY} ${endX} ${halfY + secondCurveRadius / 2}`;

        return [
            createStartPoint(startX, startY),
            createHorizontalLineWithCurve(
                startX + MIN_LINE_SIZE,
                startY,
                radius,
                isEndPointOnRightSide,
                isEndPointOnUpSide,
            ),
            createVerticalLineToLeftWithCurve(
                startX + MIN_LINE_SIZE,
                halfY,
                secondCurveRadius,
                isEndPointOnUpSide,
            ),
            horizontalLineToEndX,
            thirdCurve,
            createEndPoint(endX, endY),
        ].join(' ');
    }

    if (!isEndPointOnRightSide && !isEndPointOnUpSide) {
        if (startY + radius * 2 >= endY - radius * 2) {
            radius = (endY - startY) / 4;
        }

        return [
            createStartPoint(startX, startY),
            createHorizontalLineWithCurve(
                startX + MIN_LINE_SIZE,
                startY,
                radius,
                !isEndPointOnRightSide,
                isEndPointOnUpSide,
            ),
            createVerticalLineToLeftWithCurve(
                startX + MIN_LINE_SIZE,
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
        return [
            createStartPoint(startX, startY),
            createHorizontalLineWithCurve(
                startX + MIN_LINE_SIZE,
                startY,
                radius,
                !isEndPointOnRightSide,
                isEndPointOnUpSide,
            ),
            createVerticalLineToLeftWithCurve(
                startX + MIN_LINE_SIZE,
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
