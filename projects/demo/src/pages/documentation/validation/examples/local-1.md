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

  public ngAfterViewInit(): void {
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

  private checkFormValidity(): void {
    this.invalid = Object.values(this.form.controls).some((fieldGroup) => {
      const group = fieldGroup as FormGroup<NodeFormGroup>;
      const fieldValue = group.controls.fieldValue;

      return fieldValue.dirty && fieldValue.invalid;
    });
  }
}
```
