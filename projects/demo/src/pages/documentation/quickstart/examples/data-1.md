```ts
readonly data: DfDataModel = {
  nodes: [],
  connections: [],
};

readonly form = new FormControl<DfDataModel>(this.data, {
  nonNullable: true,
});
```
