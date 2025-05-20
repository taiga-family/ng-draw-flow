```ts
@Component({
  standalone: true,
  selector: 'app-your-form-node',
  imports: [
    ReactiveFormsModule,
    // another imports
  ],
  templateUrl: './form-node.component.html',
  styleUrls: ['./form-node.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(keydown.delete.stop)': '0',
    '(keydown.backspace.stop)': '0',
  },
})
export class FormNodeComponent extends DrawFlowBaseNode {
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

  @Input()
  public override set invalid(value: boolean) {
    super.invalid = value;
  }

  public override get invalid(): boolean {
    const formInvalid = Object.values(this.form.controls).some(
      (fieldGroup: FormGroup<NodeFormGroup>): boolean =>
        fieldGroup.controls.fieldValue.touched && fieldGroup.controls.fieldValue.invalid,
    );

    return super.invalid || formInvalid;
  }
}
```
