import {type Signal} from '@angular/core';

import {type DfDataModel, type DfId} from '../ng-draw-flow.interfaces';

/** Error shape understood by the editor and Angular Signal Forms. */
export interface DfNodeValidationError {
    readonly kind: string;
    readonly message?: string;
    readonly nodeIds: readonly DfId[];
}

/**
 * Minimal structural subset of a Signal Forms field context.
 *
 * Keeping this interface in core avoids a dependency on
 * `@angular/forms/signals`, while allowing the validator to be passed directly
 * to Signal Forms `validate()`.
 */
export interface DfSignalValidatorContext {
    readonly value: Signal<DfDataModel | null | undefined>;
}

export type DfSignalValidator = (
    context: DfSignalValidatorContext,
) => DfNodeValidationError | readonly DfNodeValidationError[] | null | undefined;
