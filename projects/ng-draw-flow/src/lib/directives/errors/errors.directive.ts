import type {OnInit} from '@angular/core';
import {DestroyRef, Directive, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {NgControl} from '@angular/forms';
import {distinctUntilChanged, map, merge} from 'rxjs';

import {collectInvalidNodeIds} from '../../helpers/collect-invalid-node-ids';
import {INVALID_NODES} from '../../validators/invalid-nodes.token';

@Directive({standalone: true, selector: '[dfErrors]'})
export class ErrorsDirective implements OnInit {
    private readonly destroyRef = inject(DestroyRef);
    private readonly ngControl = inject(NgControl);

    public ngOnInit(): void {
        if (!this.ngControl?.control) {
            return;
        }

        const control = this.ngControl.control;

        merge(control.statusChanges, control.valueChanges)
            .pipe(
                map(() => collectInvalidNodeIds(control.errors)),
                distinctUntilChanged((a, b) => {
                    if (a.size !== b.size) {
                        return false;
                    }

                    for (const id of a) {
                        if (!b.has(id)) {
                            return false;
                        }
                    }

                    return true;
                }),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe((idsSet: Set<string>) => {
                inject(INVALID_NODES).set(Array.from(idsSet));
            });
    }
}
