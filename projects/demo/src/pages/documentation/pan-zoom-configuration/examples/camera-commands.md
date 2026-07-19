```ts
readonly store = inject(NgDrawFlowStoreService);

zoomToOverview(): void {
  this.store.setPosition({x: 40, y: 40, zoom: 0.75});
}

zoomToActualSize(): void {
  this.store.setScale(1);
}

resetCamera(): void {
  this.store.resetPosition();
}
```
