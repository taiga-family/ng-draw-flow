```ts
readonly store = inject(NgDrawFlowStoreService);

readonly selectedTitle = computed(
  () => this.store.selectedNode()?.data['title'] ?? 'Nothing selected',
);
readonly canDelete = this.store.hasSelection;

zoomIn(): void {
  this.store.zoomIn();
}

addNode(): void {
  const model = this.store.dataModel();

  if (!model) {
    return;
  }

  this.store.setDataModel({
    ...model,
    nodes: [
      ...model.nodes,
      {
        id: crypto.randomUUID(),
        data: {type: 'task', title: 'New task'},
        position: {x: 0, y: 0},
      },
    ],
  });
}
```
