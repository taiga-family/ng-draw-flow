```ts
@Component({
  standalone: true,
  selector: 'app-form-node',
  imports: [ReactiveFormsModule],
  template: `
    <label>
      Task name
      <input [formControl]="name" />
    </label>
  `,
  host: {
    '(keydown.delete.stop)': '0',
    '(keydown.backspace.stop)': '0',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormNodeComponent extends DrawFlowBaseNode {
  readonly name = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  });

  protected override get invalidState(): boolean {
    const localInvalid = this.name.touched && this.name.invalid;

    return this.invalidSignal() || localInvalid;
  }
}
```
