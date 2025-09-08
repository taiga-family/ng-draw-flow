import {
    type AbstractControl,
    type ValidationErrors,
    type ValidatorFn,
} from '@angular/forms';

import {
    type DfDataConnection,
    type DfDataInitialNode,
    type DfDataModel,
    type DfDataNode,
    type DfId,
} from '../../ng-draw-flow.interfaces';

/**
 * Validator that checks for *isolated* (disconnected) nodes — nodes that do **not** appear in any connection.
 *
 * ### Validation error shape
 * ```ts
 * {
 *   hasIsolatedNodes: boolean;
 *   isolatedNodes: DfId[] // array of nodeIds without connections
 * }
 * ```
 * When there are **no** isolated nodes, it returns `null` so the control is valid.
 */
export function dfIsolatedNodesValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const model: DfDataModel = control.value;

        if (!model?.nodes?.length) {
            return null;
        }

        const connectedIds = new Set<DfId>();

        model.connections?.forEach((c: DfDataConnection) => {
            connectedIds.add(c.source.nodeId);
            connectedIds.add(c.target.nodeId);
        });

        const isolatedNodes: DfId[] = model.nodes
            .filter((node: DfDataInitialNode | DfDataNode) => !connectedIds.has(node.id))
            .map((node) => node.id);

        return isolatedNodes.length ? {hasIsolatedNodes: true, isolatedNodes} : null;
    };
}
