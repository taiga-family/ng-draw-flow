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
import {
    type DfNodeValidationError,
    type DfSignalValidator,
} from '../graph-validation.interfaces';

export interface DfIsolatedNodesError {
    readonly hasIsolatedNodes: true;
    readonly isolatedNodes: readonly DfId[];
}

/** Finds disconnected nodes without depending on an Angular form control. */
export function dfValidateIsolatedNodes(
    model: DfDataModel | null | undefined,
): DfIsolatedNodesError | null {
    if (!model?.nodes.length) {
        return null;
    }

    const connectedIds = new Set<DfId>();

    model.connections.forEach((connection: DfDataConnection) => {
        connectedIds.add(connection.source.nodeId);
        connectedIds.add(connection.target.nodeId);
    });

    const isolatedNodes = model.nodes
        .filter((node: DfDataInitialNode | DfDataNode) => !connectedIds.has(node.id))
        .map((node) => node.id);

    return isolatedNodes.length ? {hasIsolatedNodes: true, isolatedNodes} : null;
}

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
        return dfValidateIsolatedNodes(readControlModel(control));
    };
}

/** Creates a validator accepted directly by Signal Forms `validate()`. */
export function dfIsolatedNodesSignalValidator(): DfSignalValidator {
    return ({value}) => toSignalError(dfValidateIsolatedNodes(value()));
}

function toSignalError(
    error: DfIsolatedNodesError | null,
): DfNodeValidationError | undefined {
    return error
        ? {
              kind: 'hasIsolatedNodes',
              nodeIds: error.isolatedNodes,
          }
        : undefined;
}

function readControlModel(control: AbstractControl): DfDataModel | null | undefined {
    const value: unknown = control.value;

    return isDataModel(value) ? value : null;
}

function isDataModel(value: unknown): value is DfDataModel {
    if (typeof value !== 'object' || value === null) {
        return false;
    }

    const candidate = value as Partial<DfDataModel>;

    return Array.isArray(candidate.nodes) && Array.isArray(candidate.connections);
}
