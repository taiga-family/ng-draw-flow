```ts
interface TaskNodeData {
  readonly type: 'task';
  readonly title: string;
  readonly status: 'draft' | 'ready';
}

export class TaskNodeComponent extends DrawFlowBaseNode {
  readonly task = computed(() => this.modelSignal() as TaskNodeData);
  readonly connectorPrefix = computed(() => `${this.nodeIdSignal()}-task`);
}
```
