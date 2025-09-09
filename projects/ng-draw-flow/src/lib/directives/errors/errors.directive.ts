import {DestroyRef, Directive, inject, type OnInit} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {NgControl} from '@angular/forms';
import {combineLatest, distinctUntilChanged, map, startWith} from 'rxjs';

import {deepEqual} from '../../helpers';
import {collectInvalidNodeIds} from '../../helpers/collect-invalid-node-ids';
import {INVALID_NODES} from '../../validators/invalid-nodes.token';

@Directive({standalone: true, selector: '[dfErrors]'})
export class ErrorsDirective implements OnInit {
    private readonly destroyRef = inject(DestroyRef);
    private readonly ngControl = inject(NgControl);
    private readonly $invalidNodes = inject(INVALID_NODES);

    public ngOnInit(): void {
        if (!this.ngControl?.control) {
            return;
        }

        const control = this.ngControl.control;

        combineLatest([
            control.statusChanges.pipe(startWith(control.status)),
            control.valueChanges.pipe(startWith(control.value)),
        ])
            .pipe(
                map(() => collectInvalidNodeIds(control.errors)),
                distinctUntilChanged(deepEqual),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe((idsSet: Set<string>) => {
                this.$invalidNodes.set(Array.from(idsSet));
            });
    }
}
