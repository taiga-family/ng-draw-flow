import type {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import type {DfDataConnection, DfDataModel, DfId} from '@ng-draw-flow/core';

/**
 * Validator that checks for *isolated* (disconnected) nodes — nodes that do **not** appear in any connection.
 *
 * ### Validation error shape
 * ```ts
 * {
 *   hasIsolatedNodes: true,
 *   isolatedNodes: DfId[] // array of nodeIds without connections
 * }
 * ```
 * When there are **no** isolated nodes, it returns `null` so the control is valid.
 */
export function dfIsolatedNodesValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const model: DfDataModel = control.value;

        if (!model?.nodes?.size) {
            return null; // nothing to validate
        }

        // Collect all node ids that participate in at least one connection
        const connectedIds = new Set<DfId>();

        if (model.connections?.length) {
            model.connections.forEach((connection: DfDataConnection) => {
                connectedIds.add(connection.source.nodeId);
                connectedIds.add(connection.target.nodeId);
            });
        }

        // Every node absent in connectedIds is isolated
        const isolatedNodes: DfId[] = [];

        Array.from(model.nodes.keys()).forEach((nodeId: string) => {
            if (!connectedIds.has(nodeId)) {
                isolatedNodes.push(nodeId);
            }
        });

        if (isolatedNodes.length) {
            return {
                hasIsolatedNodes: true,
                isolatedNodes,
            } as ValidationErrors;
        }

        // All nodes have at least one connection
        return null;
    };
}
