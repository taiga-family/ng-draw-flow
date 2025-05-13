import {CommonModule} from '@angular/common';
import type {AfterViewInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, DestroyRef, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {DfInputComponent, DfOutputComponent, DrawFlowBaseNode} from '@ng-draw-flow/core';
import {TuiButton} from '@taiga-ui/core';
import {TuiInputModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import {distinctUntilChanged, merge} from 'rxjs';

interface NodeForm {
    field1: FormGroup<NodeFormGroup>;
    field2: FormGroup<NodeFormGroup>;
}

interface NodeFormGroup {
    connectorId: FormControl<string | null>;
    fieldValue: FormControl<string | null>;
}

@Component({
    standalone: true,
    selector: 'app-form-node',
    imports: [
        CommonModule,
        DfInputComponent,
        DfOutputComponent,
        ReactiveFormsModule,
        TuiButton,
        TuiInputModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './form-node.component.html',
    styleUrls: ['./form-node.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(keydown.delete.stop)': '0',
        '(keydown.backspace.stop)': '0',
    },
})
export class FormNodeComponent extends DrawFlowBaseNode implements AfterViewInit {
    public form = new FormGroup<NodeForm>({
        field1: new FormGroup<NodeFormGroup>({
            connectorId: new FormControl<string>('node-5-output-1'),
            fieldValue: new FormControl<string>('', [Validators.required]),
        }),
        field2: new FormGroup<NodeFormGroup>({
            connectorId: new FormControl<string>('node-5-output-2'),
            fieldValue: new FormControl<string>('', [Validators.required]),
        }),
    });

    private readonly destroyRef = inject(DestroyRef);

    public get fieldNames(): string[] {
        return Object.keys(this.form.controls);
    }

    public getConnectorId(fieldName: string | null): string | null {
        if (!fieldName) {
            return null;
        }

        const group = this.form.get(fieldName) as FormGroup<NodeFormGroup>;

        return group.controls.connectorId.value;
    }

    public ngAfterViewInit(): void {
        this.form.valueChanges
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((value) => {
                this.model.value = value;
            });

        merge(
            ...Object.values(this.form.controls).map((control) =>
                control.controls.fieldValue.statusChanges.pipe(distinctUntilChanged()),
            ),
        )
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
                this.checkFormValidity();
            });
    }

    public add(): void {
        const index = Object.keys(this.form.controls).length + 1;
        const newFieldKey = `field${index}`;
        const newField = new FormGroup({
            connectorId: new FormControl(`node-5-output-${index}`),
            fieldValue: new FormControl(''),
        });

        // @ts-ignore
        this.form.addControl(newFieldKey, newField);
    }

    private checkFormValidity(): void {
        this.invalid = Object.values(this.form.controls).some((fieldGroup) => {
            const group = fieldGroup as FormGroup<NodeFormGroup>;
            const fieldValue = group.controls.fieldValue;

            return fieldValue.dirty && fieldValue.invalid;
        });
    }
}
