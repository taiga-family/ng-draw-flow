import type {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

import type {
    DfDataConnection,
    DfDataInitialNode,
    DfDataModel,
    DfDataNode,
    DfId,
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

        // 1. Нечего проверять?
        if (!model?.nodes?.length) {
            return null;
        }

        // 2. Собираем id всех узлов, участвующих в связях
        const connectedIds = new Set<DfId>();

        model.connections?.forEach((c: DfDataConnection) => {
            connectedIds.add(c.source.nodeId);
            connectedIds.add(c.target.nodeId);
        });

        // 3. Определяем изолированные узлы
        const isolatedNodes: DfId[] = model.nodes
            .filter((node: DfDataInitialNode | DfDataNode) => !connectedIds.has(node.id))
            .map((node) => node.id);

        return isolatedNodes.length ? {hasIsolatedNodes: true, isolatedNodes} : null;
    };
}
