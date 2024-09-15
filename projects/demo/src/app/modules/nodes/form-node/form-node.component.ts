import {CommonModule} from '@angular/common';
import type {AfterViewInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, DestroyRef, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {DfInputComponent, DfOutputComponent, DrawFlowBaseNode} from '@ng-draw-flow/core';
import {TuiButtonModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/kit';

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
    host: {
        '(keydown.delete.stop)': '0',
        '(keydown.backspace.stop)': '0',
    },
    imports: [
        CommonModule,
        TuiInputModule,
        TuiButtonModule,
        ReactiveFormsModule,
        TuiTextfieldControllerModule,
        DfInputComponent,
        DfOutputComponent,
    ],
    templateUrl: './form-node.component.html',
    styleUrls: ['./form-node.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormNodeComponent extends DrawFlowBaseNode implements AfterViewInit {
    public currentIndex = 1;
    public form = new FormGroup<NodeForm>({
        field1: new FormGroup<NodeFormGroup>({
            connectorId: new FormControl<string>('node-5-output-1'),
            fieldValue: new FormControl<string>(''),
        }),
        field2: new FormGroup<NodeFormGroup>({
            connectorId: new FormControl<string>('node-5-output-2'),
            fieldValue: new FormControl<string>(''),
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
            .subscribe(value => {
                this.model.value = value;
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
}
