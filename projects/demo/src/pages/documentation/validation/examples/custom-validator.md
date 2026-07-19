```ts
export function requiredRootValidator(): ValidatorFn {
  return (control): ValidationErrors | null => {
    const model = control.value as DfDataModel;
    const invalidIds = model.nodes.filter((node) => node.startNode !== true).map((node) => node.id);

    return invalidIds.length ? {requiredRoot: {nodeIds: invalidIds}} : null;
  };
}
```
