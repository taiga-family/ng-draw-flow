```ts
@Directive()
export abstract class DrawFlowBaseNode {
  public readonly inputs = viewChildren(DfInputComponent);

  public readonly outputs = viewChildren(DfOutputComponent);

  public readonly connectorsUpdated = output();

  public readonly nodeIdSignal = input('', {alias: 'nodeId'});

  public readonly modelSignal = input.required<Record<string, any> & {type: string}>({
    alias: 'model',
  });

  public readonly startNodeSignal = input(false, {alias: 'startNode'});

  public readonly endNodeSignal = input(false, {alias: 'endNode'});

  public readonly selectedSignal = input(false, {alias: 'selected'});
  public readonly invalidSignal = input(false, {alias: 'invalid'});

  public get nodeId(): string {
    return this.nodeIdSignal();
  }

  public get model(): Record<string, any> & {type: string} {
    return this.modelSignal();
  }

  public get startNode(): boolean {
    return this.startNodeSignal();
  }

  public get endNode(): boolean {
    return this.endNodeSignal();
  }

  public get selected(): boolean {
    return this.selectedSignal();
  }

  public get invalid(): boolean {
    return this.invalidSignal();
  }
}
```
