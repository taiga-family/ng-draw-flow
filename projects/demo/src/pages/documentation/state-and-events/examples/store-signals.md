```ts
readonly store = inject(NgDrawFlowStoreService);

readonly selectedTitle = computed(
  () => this.store.selectedNode()?.data['title'] ?? 'Nothing selected',
);

zoomIn(): void {
  this.store.zoomIn();
}

replaceModel(model: DfDataModel): void {
  this.store.setDataModel(model);
}
```
