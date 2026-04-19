import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    inject,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {
    FormControl,
    FormGroup,
    FormRecord,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import {DfInputComponent, DfOutputComponent, DrawFlowBaseNode} from '@ng-draw-flow/core';
import {TuiButton, TuiInput, TuiTextfield} from '@taiga-ui/core';

interface NodeFieldForm {
    connectorId: FormControl<string>;
    fieldValue: FormControl<string>;
}

@Component({
    standalone: true,
    selector: 'app-form-node',
    imports: [
        DfInputComponent,
        DfOutputComponent,
        ReactiveFormsModule,
        TuiButton,
        TuiInput,
        TuiTextfield,
    ],
    templateUrl: './form-node.component.html',
    styleUrl: './form-node.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'(keydown.backspace.stop)': '0', '(keydown.delete.stop)': '0'},
})
export class FormNodeComponent extends DrawFlowBaseNode implements AfterViewInit {
    private readonly destroyRef = inject(DestroyRef);

    public readonly form = new FormRecord<FormGroup<NodeFieldForm>>({
        field1: this.createFieldGroup(1, true),
        field2: this.createFieldGroup(2, true),
    });

    public get fieldNames(): string[] {
        return Object.keys(this.form.controls);
    }

    public getConnectorId(fieldName: string | null): string | null {
        if (!fieldName) {
            return null;
        }

        const group = this.form.controls[fieldName];

        if (!group) {
            return null;
        }

        return group.controls.connectorId.value;
    }

    public ngAfterViewInit(): void {
        this.form.valueChanges
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((value) => {
                this.model.value = value;
            });
    }

    public add(): void {
        const index = Object.keys(this.form.controls).length + 1;
        const newFieldKey = `field${index}`;

        this.form.addControl(newFieldKey, this.createFieldGroup(index, false));
    }

    protected override get invalidState(): boolean {
        const formInvalid = Object.values(this.form.controls).some(
            (fieldGroup: FormGroup<NodeFieldForm>): boolean =>
                fieldGroup.controls.fieldValue.touched &&
                fieldGroup.controls.fieldValue.invalid,
        );

        return this.invalidSignal() || formInvalid;
    }

    private createFieldGroup(index: number, required: boolean): FormGroup<NodeFieldForm> {
        return new FormGroup<NodeFieldForm>({
            connectorId: new FormControl(`node-5-output-${index}`, {
                nonNullable: true,
            }),
            fieldValue: new FormControl('', {
                nonNullable: true,
                validators: required ? [Validators.required] : [],
            }),
        });
    }
}
