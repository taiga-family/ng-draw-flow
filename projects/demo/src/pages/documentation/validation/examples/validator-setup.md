```ts
readonly form = new FormControl<DfDataModel>(initialModel, {
  nonNullable: true,
  validators: [
    dfCycleDetectionValidator(),
    dfIsolatedNodesValidator(),
  ],
});
```
