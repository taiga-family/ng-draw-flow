import {DestroyRef, Directive, effect, inject, input, type OnInit} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {AbstractControl, NgControl} from '@angular/forms';
import {merge} from 'rxjs';

import {collectInvalidNodeIds} from '../../helpers/collect-invalid-node-ids';
import {INVALID_NODES} from '../../validators/invalid-nodes.token';

const NO_ERRORS_INPUT = Symbol('NO_ERRORS_INPUT');

@Directive({standalone: true, selector: '[dfErrors]'})
export class ErrorsDirective implements OnInit {
    private readonly destroyRef = inject(DestroyRef);
    private readonly ngControl = inject(NgControl, {optional: true, self: true});
    private readonly $invalidNodes = inject(INVALID_NODES);

    /**
     * Graph validation errors supplied by a form binding. Signal Forms binds
     * this state input automatically through the host directive exposure.
     */
    public readonly errors = input<unknown>(NO_ERRORS_INPUT);

    constructor() {
        effect(() => this.syncInvalidNodes());
    }

    public ngOnInit(): void {
        const control = this.ngControl?.control;

        if (!(control instanceof AbstractControl)) {
            return;
        }

        merge(control.statusChanges, control.valueChanges)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => this.syncInvalidNodes());
    }

    private syncInvalidNodes(): void {
        const inputErrors = this.errors();
        const errors =
            inputErrors === NO_ERRORS_INPUT
                ? (this.ngControl?.control?.errors ?? null)
                : inputErrors;

        this.$invalidNodes.set(Array.from(collectInvalidNodeIds(errors)));
    }
}
