```ts
private readonly autoLayout = inject(DfAutoLayoutService);

readonly layoutRunning = this.autoLayout.running;
readonly layoutResult = this.autoLayout.result;
readonly layoutError = this.autoLayout.error;

ngAfterViewInit(): void {
  this.autoLayout.apply();
}
```
