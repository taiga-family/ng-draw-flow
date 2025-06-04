```ts
@Directive()
export abstract class DrawFlowBaseNode {
  @ViewChildren(DfInputComponent)
  public inputs!: QueryList<DfInputComponent>;

  @ViewChildren(DfOutputComponent)
  public outputs!: QueryList<DfOutputComponent>;

  @Input()
  public nodeId = '';

  @Input()
  public model!: Record<string, any> & {type: string};

  @Input()
  public startNode? = false;

  @Input()
  public endNode? = false;

  @HostBinding('class.df-selected')
  public selected = false;
}
```
