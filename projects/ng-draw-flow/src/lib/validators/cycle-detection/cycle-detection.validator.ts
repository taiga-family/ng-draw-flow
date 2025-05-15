import type {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

import type {DfDataModel} from '../../ng-draw-flow.interfaces';
import {buildAdjacencyMap, findCycleNodes, generateConnectionsHash} from './helpers';

/**
 * Validator for checking cycles in a graph
 *
 * ### Validation error shape
 * ```ts
 * {
 *   hasCycle: true,
 *   cycleNodes: DfId[] // array of nodeIds that form a cycle
 * }
 * ```
 * @returns ValidatorFn that returns an error if a cycle is detected in the graph
 */
export function dfCycleDetectionValidator(): ValidatorFn {
    // Cache for storing previous state
    let previousConnectionsHash: string | null = null;
    let previousResult: ValidationErrors | null = null;

    return (control: AbstractControl): ValidationErrors | null => {
        const model: DfDataModel = control.value;

        if (!model?.connections || model.connections.length === 0) {
            previousConnectionsHash = null;
            previousResult = null;

            return null; // No connections - no cycles
        }

        // Create a hash of current connections for comparison
        const currentConnectionsHash = generateConnectionsHash(model.connections);

        // If the hash hasn't changed, return the previous result
        if (
            previousConnectionsHash === currentConnectionsHash &&
            previousResult !== undefined
        ) {
            return previousResult;
        }

        // Save the new hash
        previousConnectionsHash = currentConnectionsHash;

        // Build the adjacency map
        const {adjacencyMap, nodeIds} = buildAdjacencyMap(model.connections);

        // Check for cycles and get the cycle nodes if any
        const cycleNodes = findCycleNodes(adjacencyMap, nodeIds);

        if (cycleNodes.length > 0) {
            previousResult = {
                hasCycle: true,
                cycleNodes,
            };

            return previousResult;
        }

        previousResult = null;

        return null; // No cycles detected
    };
}
