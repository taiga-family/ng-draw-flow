import {computed, Injectable, signal} from '@angular/core';
import {Subject} from 'rxjs';

/** Per-editor form state used to guard user editing in descendant components. */
@Injectable()
export class DfInteractionStateService {
    private readonly disabledSignal = signal(false);
    private readonly readonlySignal = signal(false);
    private readonly cancellationSubject = new Subject<void>();

    public readonly cancellation$ = this.cancellationSubject.asObservable();
    public readonly disabled = this.disabledSignal.asReadonly();
    public readonly readonly = this.readonlySignal.asReadonly();
    public readonly editingDisabled = computed(
        () => this.disabledSignal() || this.readonlySignal(),
    );

    public setDisabled(value: boolean): void {
        this.disabledSignal.set(value);
    }

    public setReadonly(value: boolean): void {
        this.readonlySignal.set(value);
    }

    public cancelEditing(): void {
        this.cancellationSubject.next();
    }
}
