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

  public override get invalid(): boolean {
    return Object.values(this.form.controls).some((fieldGroup: FormGroup<NodeFormGroup>): boolean => {
      return fieldGroup.controls.fieldValue.dirty && fieldGroup.controls.fieldValue.invalid;
    });
  }
}
```
