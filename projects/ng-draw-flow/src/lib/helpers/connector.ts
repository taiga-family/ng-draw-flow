import {type DfConnectionPoint, type DfDataConnector} from '../ng-draw-flow.interfaces';

export function isConnectorType(type: string): type is DfConnectionPoint {
    return ['input', 'output'].includes(type);
}

/**
 * Creates a unique string identifier for a connector.
 *
 * The function generates a string that uniquely identifies a connector
 * based on its key properties: node identifier, connector type, and
 * connector identifier. The resulting identifier is used
 * as a key in various data structures (e.g., in connectionPointsMap)
 * for tracking and updating connector positions.
 *
 * @param connector - Connector object containing nodeId, connectorType, and connectorId
 * @returns String identifier in the format "nodeId:value,connectorType:value,connectorId:value"
 */
export function createConnectorHash(connector: DfDataConnector): string {
    return `nodeId:${connector.nodeId},connectorType:${connector.connectorType},connectorId:${connector.connectorId}`;
}
