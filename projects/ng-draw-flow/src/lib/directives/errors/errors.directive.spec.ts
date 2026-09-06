import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {type ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {FormControl, NgControl, ReactiveFormsModule} from '@angular/forms';
import {delay, of} from 'rxjs';

import {INVALID_NODES} from '../../validators/invalid-nodes.token';
import {ErrorsDirective} from './errors.directive';

@Component({
    standalone: true,
    imports: [ErrorsDirective],
    template: '<div dfErrors [errors]="errors()"></div>',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class ExplicitErrorsHost {
    public readonly errors = signal<unknown>([{kind: 'initial', nodeIds: ['node-1']}]);
}

@Component({
    standalone: true,
    imports: [ErrorsDirective, ReactiveFormsModule],
    template: '<input dfErrors [formControl]="control" />',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class ReactiveErrorsHost {
    public readonly control = new FormControl('', {nonNullable: true});
}

@Component({
    standalone: true,
    selector: 'df-async-errors-host',
    imports: [ErrorsDirective, ReactiveFormsModule],
    template: '<input dfErrors [formControl]="control" />',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class AsyncErrorsHost {
    public readonly control = new FormControl('valid', {
        nonNullable: true,
        asyncValidators: [
            ({value}) =>
                of(value === 'invalid' ? {asyncNodes: ['async-node']} : null).pipe(
                    delay(1),
                ),
        ],
    });
}

const compatibilityErrors = signal<unknown>(null);

@Component({
    standalone: true,
    selector: 'df-compatibility-errors-host',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NgControl,
            useFactory: () => ({
                control: {
                    get errors(): unknown {
                        return compatibilityErrors();
                    },
                },
            }),
        },
    ],
    hostDirectives: [ErrorsDirective],
})
class CompatibilityErrorsHost {}

describe('ErrorsDirective', () => {
    let invalidNodes: ReturnType<typeof signal<string[]>>;

    beforeEach(() => {
        invalidNodes = signal<string[]>([]);
        compatibilityErrors.set(null);

        TestBed.configureTestingModule({
            providers: [{provide: INVALID_NODES, useValue: invalidNodes}],
        });
    });

    afterEach(() => TestBed.resetTestingModule());

    it('reacts to explicit Signal Forms-style errors and explicit clearing', () => {
        const fixture = TestBed.createComponent(ExplicitErrorsHost);

        fixture.detectChanges();
        expect(invalidNodes()).toEqual(['node-1']);

        fixture.componentInstance.errors.set([
            {kind: 'updated', context: {cycleNodes: ['node-2']}},
        ]);
        fixture.detectChanges();
        expect(invalidNodes()).toEqual(['node-2']);

        fixture.componentInstance.errors.set(null);
        fixture.detectChanges();
        expect(invalidNodes()).toEqual([]);
    });

    it('reacts to Reactive Forms errors when the errors input is absent', () => {
        const fixture = TestBed.createComponent(ReactiveErrorsHost);

        fixture.detectChanges();
        fixture.componentInstance.control.setErrors({requiredNodes: ['node-1']});
        expect(invalidNodes()).toEqual(['node-1']);

        fixture.componentInstance.control.setErrors({custom: {nodeIds: ['node-2']}});
        fixture.detectChanges();
        expect(invalidNodes()).toEqual(['node-2']);

        fixture.componentInstance.control.setErrors(null);
        fixture.detectChanges();
        expect(invalidNodes()).toEqual([]);
    });

    it('does not fall back to stale Reactive Forms errors after an explicit clear', () => {
        @Component({
            standalone: true,
            imports: [ErrorsDirective, ReactiveFormsModule],
            template: '<input dfErrors [errors]="errors()" [formControl]="control" />',
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class MixedErrorsHost {
            public readonly control = new FormControl('', {nonNullable: true});
            public readonly errors = signal<unknown>([]);
        }

        const fixture: ComponentFixture<MixedErrorsHost> =
            TestBed.createComponent(MixedErrorsHost);

        fixture.detectChanges();
        fixture.componentInstance.control.setErrors({nodes: ['stale']});
        fixture.detectChanges();

        expect(invalidNodes()).toEqual([]);
    });

    it('updates and clears highlighting when an async validator completes', fakeAsync(() => {
        const fixture = TestBed.createComponent(AsyncErrorsHost);

        fixture.detectChanges();
        tick(1);
        fixture.componentInstance.control.setValue('invalid');
        tick(1);
        expect(invalidNodes()).toEqual(['async-node']);

        fixture.componentInstance.control.reset('valid');
        tick(1);

        expect(invalidNodes()).toEqual([]);
    }));

    it('does not require valueChanges or statusChanges from a compatibility NgControl', () => {
        const fixture = TestBed.createComponent(CompatibilityErrorsHost);

        fixture.detectChanges();
        compatibilityErrors.set([
            {kind: 'compatibility', context: {nodeIds: ['compatibility-node']}},
        ]);
        fixture.detectChanges();

        expect(invalidNodes()).toEqual(['compatibility-node']);
    });
});
