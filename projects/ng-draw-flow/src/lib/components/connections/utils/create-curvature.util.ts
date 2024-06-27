export function createCurvature(
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    curvature: number,
): string {
    return `M ${startX} ${startY} C ${startX + curvature} ${startY}, ${
        endX - curvature
    } ${endY}, ${endX} ${endY}`;
}
