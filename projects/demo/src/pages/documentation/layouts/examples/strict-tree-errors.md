```ts
readonly treeLayoutError = computed(() => {
  const error = this.autoLayout.error();

  return error instanceof DfTreeLayoutError ? error : null;
});

// error.code:
// 'duplicate-node' | 'missing-node' | 'multiple-parents'
// | 'invalid-root' | 'disconnected-graph'
// | 'missing-output-order' | 'invalid-output-order'
// | 'duplicate-output-order'
```
