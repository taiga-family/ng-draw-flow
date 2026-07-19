```ts
private readonly autoLayout = inject(DfAutoLayoutService);

addChild(parentId: string): void {
  const model = this.createModelWithChild(parentId);

  this.autoLayout.apply({model, anchorNodeId: parentId});
}
```
