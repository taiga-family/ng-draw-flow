```ts
export function requiredRootValidator(): ValidatorFn {
  return (control): ValidationErrors | null => {
    const model = control.value as DfDataModel;
    const roots = model.nodes.filter((node) => node.startNode === true);

    return roots.length === 1 ? null : {requiredRoot: {nodeIds: model.nodes.map(({id}) => id)}};
  };
}
```
