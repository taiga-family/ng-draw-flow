import {DfConnectorPosition, type DfPoint} from '../../../../../ng-draw-flow.interfaces';

/**
 * Minimum length (in px) of the first straight segment that leaves a connector.
 */
export const MIN_SEGMENT_LENGTH = 20;

/**
 * Unit vectors that describe where a connection should leave a connector
 * depending on its declared position.
 */
export const CONNECTOR_DIRECTIONS: Record<DfConnectorPosition, DfPoint> = {
    [DfConnectorPosition.Left]: {x: -1, y: 0},
    [DfConnectorPosition.Right]: {x: 1, y: 0},
    [DfConnectorPosition.Top]: {x: 0, y: -1},
    [DfConnectorPosition.Bottom]: {x: 0, y: 1},
};
