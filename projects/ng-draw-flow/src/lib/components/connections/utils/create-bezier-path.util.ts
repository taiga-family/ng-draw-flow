import type {DfConnectorData} from '../../../ng-draw-flow.interfaces';
import {DfConnectorPosition} from '../../../ng-draw-flow.interfaces';

export function createBezierPath(
    startConnector: DfConnectorData,
    endConnector: DfConnectorData,
    curvature = 2,
): string {
    const {x: startX, y: startY} = startConnector.point;
    const startConnectorPosition = startConnector.position;
    const {x: endX, y: endY} = endConnector.point;
    const endConnectorPosition = endConnector.position;

    if (
        startConnectorPosition === DfConnectorPosition.Right &&
        endConnectorPosition === DfConnectorPosition.Top
    ) {
        const startConnectorPointX = startX + curvature / 2;
        const startConnectorPointY = startY;
        const endConnectorPointX = endX;
        const endConnectorPointY = endY + (endY - startY) / 7;

        return `M ${startX} ${startY} C ${startConnectorPointX} ${startConnectorPointY}, ${endConnectorPointX} ${endConnectorPointY}, ${endX} ${endY}`;
    }

    if (
        startConnectorPosition === DfConnectorPosition.Bottom &&
        endConnectorPosition === DfConnectorPosition.Left
    ) {
        const startConnectorPointX = startX;
        const startConnectorPointY = startY + curvature / 2;
        const endConnectorPointX = endX - (endX - startX) / 7;

        return `M ${startX} ${startY} C ${startConnectorPointX} ${startConnectorPointY}, ${endConnectorPointX} ${endY}, ${endX} ${endY}`;
    }

    if (
        startConnectorPosition === DfConnectorPosition.Bottom &&
        endConnectorPosition === DfConnectorPosition.Top
    ) {
        return `M ${startX} ${startY} C ${startX} ${startY + curvature}, ${endX} ${
            endY - curvature
        } ${endX} ${endY}`;
    }

    if (
        startConnectorPosition === DfConnectorPosition.Right &&
        endConnectorPosition === DfConnectorPosition.Left
    ) {
        return `M ${startX} ${startY} C ${startX + curvature} ${startY}, ${
            endX - curvature
        } ${endY}, ${endX} ${endY}`;
    }

    return '';
}
