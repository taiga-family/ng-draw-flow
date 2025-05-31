export function adjustRadius(difference: number, radius: number): number {
    if (Math.abs(difference) <= radius * 4) {
        return Math.abs(difference) / 4;
    }

    if (Math.abs(difference) <= radius * 2) {
        return Math.abs(difference) / 2;
    }

    return radius;
}

export function createStartPoint(x: number, y: number): string {
    return `M ${x} ${y}`;
}

export function createEndPoint(x: number, y: number): string {
    return createLine(x, y);
}

/* eslint-disable @typescript-eslint/max-params */
export function createHorizontalLineWithCurve(
    x: number,
    y: number,
    radius: number,
    isEndPointOnRightSide: boolean,
    isEndPointOnUpSide: boolean,
): string {
    const lineToCurvature = createLine(
        isEndPointOnRightSide ? x - radius : x + radius,
        y,
    );

    return `${lineToCurvature} Q ${x} ${y}, ${x} ${isEndPointOnUpSide ? y - radius : y + radius}`;
}

export function createVerticalLineToRightWithCurve(
    x: number,
    y: number,
    radius: number,
    isEndPointOnUpSide = false,
): string {
    const lineToCurvature = createLine(x, isEndPointOnUpSide ? y + radius : y - radius);

    return `${lineToCurvature} Q ${x} ${y}, ${x + radius} ${y}`;
}

export function createVerticalLineToLeftWithCurve(
    x: number,
    y: number,
    radius: number,
    isEndPointOnUpSide = false,
): string {
    const lineToCurvature = createLine(x, isEndPointOnUpSide ? y + radius : y - radius);

    return `${lineToCurvature} Q ${x} ${y}, ${x - radius} ${y}`;
}
/* eslint-enable @typescript-eslint/max-params */

export function createLine(x: number, y: number): string {
    return `L ${x} ${y}`;
}
