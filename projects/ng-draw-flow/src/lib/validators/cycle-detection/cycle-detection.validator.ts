import {
    type AbstractControl,
    type ValidationErrors,
    type ValidatorFn,
} from '@angular/forms';

import {type DfDataModel, type DfId} from '../../ng-draw-flow.interfaces';
import {
    type DfNodeValidationError,
    type DfSignalValidator,
} from '../graph-validation.interfaces';
import {buildAdjacencyMap, findCycleNodes, generateConnectionsHash} from './helpers';

export interface DfCycleDetectionError {
    readonly hasCycle: true;
    readonly cycleNodes: readonly DfId[];
}

/** Runs cycle detection without depending on an Angular form control. */
export function dfValidateCycles(
    model: DfDataModel | null | undefined,
): DfCycleDetectionError | null {
    if (!model?.connections.length) {
        return null;
    }

    const {adjacencyMap, nodeIds} = buildAdjacencyMap(model.connections);
    const cycleNodes = findCycleNodes(adjacencyMap, nodeIds);

    return cycleNodes.length ? {hasCycle: true, cycleNodes} : null;
}

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
    const validate = createCachedCycleValidator();

    return (control: AbstractControl): ValidationErrors | null => {
        return validate(readControlModel(control));
    };
}

/** Creates a validator accepted directly by Signal Forms `validate()`. */
export function dfCycleDetectionSignalValidator(): DfSignalValidator {
    const validate = createCachedCycleValidator();

    return ({value}) => toSignalError(validate(value()));
}

function createCachedCycleValidator(): (
    model: DfDataModel | null | undefined,
) => DfCycleDetectionError | null {
    let previousConnectionsHash: string | null = null;
    let previousResult: DfCycleDetectionError | null = null;

    return (model) => {
        if (!model?.connections.length) {
            previousConnectionsHash = null;
            previousResult = null;

            return null;
        }

        const currentConnectionsHash = generateConnectionsHash(model.connections);

        if (previousConnectionsHash === currentConnectionsHash) {
            return previousResult;
        }

        previousConnectionsHash = currentConnectionsHash;
        previousResult = dfValidateCycles(model);

        return previousResult;
    };
}

function toSignalError(
    error: DfCycleDetectionError | null,
): DfNodeValidationError | undefined {
    return error
        ? {
              kind: 'hasCycle',
              nodeIds: error.cycleNodes,
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
