```ts
@Component({
  standalone: true,
  selector: 'editor',
  imports: [
    AsyncPipe,
    CommonModule,
    ReactiveFormsModule,
    NgDrawFlowComponent,
    TuiButton,
    TuiInputNumber,
    TuiLabel,
    TuiTextfield,
    TuiTextfieldComponent,
  ],
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    dfPanZoomOptionsProvider({
      leftPosition: 50,
    }),
  ],
})
export default class EditorComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  public readonly drawFlowStore = inject(NgDrawFlowStoreService);
  public readonly panZoomOptions = inject<DfPanZoomOptions>(DF_PAN_ZOOM_OPTIONS);

  public readonly scaleControl = new FormControl<number>(1, {nonNullable: true});
  public fullscreen$ = new BehaviorSubject<boolean>(false);
  public counter = 0;
  public form = new FormControl<DfDataModel>(this.data);

  public data: DfDataModel = {
    nodes: [
      {
        id: 'node-1',
        data: {type: 'simpleNode', text: 'This base node'},
        position: {x: 0, y: 0},
        startNode: true,
      },
      {
        id: 'node-2',
        data: {type: 'simpleNode', text: 'This child node 1'},
        position: {x: 250, y: 50},
      },
      {
        id: 'node-3',
        data: {type: 'simpleNode', text: 'This child node 2'},
        position: {x: 250, y: -50},
      },
      {
        id: 'node-4',
        data: {type: 'simpleNode', text: 'This child node 3'},
        position: {x: 500, y: 0},
        endNode: true,
      },
    ],
    connections: [
      {
        source: {
          nodeId: 'node-1',
          connectorType: DfConnectionPoint.Output,
          connectorId: 'node-1-output-1',
        },
        target: {
          nodeId: 'node-2',
          connectorType: DfConnectionPoint.Input,
          connectorId: 'node-2-input-1',
        },
      },
      {
        source: {
          nodeId: 'node-1',
          connectorType: DfConnectionPoint.Output,
          connectorId: 'node-1-output-1',
        },
        target: {
          nodeId: 'node-3',
          connectorType: DfConnectionPoint.Input,
          connectorId: 'node-3-input-1',
        },
      },
      {
        source: {
          nodeId: 'node-2',
          connectorType: DfConnectionPoint.Output,
          connectorId: 'node-2-output-1',
        },
        target: {
          nodeId: 'node-4',
          connectorType: DfConnectionPoint.Input,
          connectorId: 'node-4-input-1',
        },
      },
      {
        source: {
          nodeId: 'node-3',
          connectorType: DfConnectionPoint.Output,
          connectorId: 'node-3-output-1',
        },
        target: {
          nodeId: 'node-4',
          connectorType: DfConnectionPoint.Input,
          connectorId: 'node-4-input-1',
        },
      },
    ],
  };

  public ngOnInit(): void {
    this.scaleControl.valueChanges
      .pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe((value: number) => {
        if (!Number.isFinite(value)) {
          return;
        }

        this.drawFlowStore.setScale(value);
      });
  }

  public onScaleChange(zoomLevel: number): void {
    this.scaleControl.setValue(zoomLevel / 100, {emitEvent: false});
  }

  public toggleFullscreen(): void {
    this.fullscreen$.next(!this.fullscreen$.value);
    this.drawFlowStore.resetPosition();
  }

  public addNodeToDrawFlow(): void {
    const id = `new-node-${this.counter}`;

    this.data.nodes = [
      ...this.data.nodes,
      {
        id,
        data: {
          type: 'simpleNode',
          text: `created node ${this.counter + 1}`,
        },
        position: {x: 600, y: this.counter * 40},
      },
    ];

    this.form.setValue(this.data);
    this.counter++;
  }
}
```
