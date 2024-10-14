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

export function createTopTopCurve({
    startX,
    startY,
    endX,
    endY,
    radius,
}: DfPathCoords): string {
    const isEndPointOnRightSide = startX < endX;
    const isEndPointOnUpSide = startY > endY;
    const horizontalDifference = startX - endX;

    radius = adjustRadius(horizontalDifference, radius);

    if (startY === endY) {
        return '';
    }

    if (isEndPointOnUpSide) {
        return [
            createStartPoint(startX, startY),
            isEndPointOnRightSide
                ? createVerticalLineToRightWithCurve(
                      startX,
                      endY - MIN_LINE_SIZE,
                      radius,
                      isEndPointOnUpSide,
                  )
                : createVerticalLineToLeftWithCurve(
                      startX,
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

    return [
        createStartPoint(startX, startY),
        isEndPointOnRightSide
            ? createVerticalLineToRightWithCurve(
                  startX,
                  startY - MIN_LINE_SIZE,
                  radius,
                  !isEndPointOnUpSide,
              )
            : createVerticalLineToLeftWithCurve(
                  startX,
                  startY - MIN_LINE_SIZE,
                  radius,
                  !isEndPointOnUpSide,
              ),
        createHorizontalLineWithCurve(
            endX,
            startY - MIN_LINE_SIZE,
            radius,
            isEndPointOnRightSide,
            isEndPointOnUpSide,
        ),
        createEndPoint(endX, endY),
    ].join(' ');
}
