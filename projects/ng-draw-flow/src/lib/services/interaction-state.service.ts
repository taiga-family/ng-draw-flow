import {computed, Injectable, signal, untracked} from '@angular/core';
import {merge, Subject} from 'rxjs';

import {DRAW_FLOW_DEFAULT_OPTIONS} from '../ng-draw-flow.configs';
import {type DfInteractionOptions} from '../ng-draw-flow.interfaces';

/** Per-editor form state used to guard user editing in descendant components. */
@Injectable()
export class DfInteractionStateService {
    private readonly disabledSignal = signal(false);
    private readonly readonlySignal = signal(false);
    private readonly cancellationSubject = new Subject<void>();
    private readonly nodeDragCancelledSubject = new Subject<void>();
    private readonly connectionCreationCancelledSubject = new Subject<void>();
    private readonly defaults = signal<DfInteractionOptions>(
        DRAW_FLOW_DEFAULT_OPTIONS.options,
    );

    private readonly overrides = signal<Partial<DfInteractionOptions>>({});

    public readonly cancellation$ = this.cancellationSubject.asObservable();
    public readonly nodeDragCancellation$ = merge(
        this.cancellation$,
        this.nodeDragCancelledSubject,
    );

    public readonly connectionCreationCancellation$ = merge(
        this.cancellation$,
        this.connectionCreationCancelledSubject,
    );

    public readonly disabled = this.disabledSignal.asReadonly();
    public readonly readonly = this.readonlySignal.asReadonly();
    public readonly editingDisabled = computed(
        () => this.disabledSignal() || this.readonlySignal(),
    );

    public readonly nodesDraggable = computed(() => this.isAllowed('nodesDraggable'));
    public readonly nodesDeletable = computed(() => this.isAllowed('nodesDeletable'));
    public readonly connectionsCreatable = computed(() =>
        this.isAllowed('connectionsCreatable'),
    );

    public readonly connectionsDeletable = computed(() =>
        this.isAllowed('connectionsDeletable'),
    );

    public setDefaults(value: DfInteractionOptions): void {
        this.updatePermissions(() => this.defaults.set(value));
    }

    public setOptions(value: Partial<DfInteractionOptions>): void {
        this.updatePermissions(() => this.overrides.set(value));
    }

    public setDisabled(value: boolean): void {
        this.updatePermissions(() => this.disabledSignal.set(value));
    }

    public setReadonly(value: boolean): void {
        this.updatePermissions(() => this.readonlySignal.set(value));
    }

    public cancelEditing(): void {
        this.cancellationSubject.next();
    }

    private isAllowed(key: keyof DfInteractionOptions): boolean {
        return !this.editingDisabled() && (this.overrides()[key] ?? this.defaults()[key]);
    }

    private updatePermissions(update: () => void): void {
        untracked(() => {
            const couldDrag = this.nodesDraggable();
            const couldConnect = this.connectionsCreatable();

            update();

            if (couldDrag && !this.nodesDraggable()) {
                this.nodeDragCancelledSubject.next();
            }

            if (couldConnect && !this.connectionsCreatable()) {
                this.connectionCreationCancelledSubject.next();
            }
        });
    }
}
