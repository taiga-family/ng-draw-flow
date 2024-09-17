"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8702],{8702:n=>{n.exports="```ts\n@Component({\n  standalone: true,\n  selector: 'editor',\n  imports: [AsyncPipe, ReactiveFormsModule, CommonModule, TuiButtonModule, NgDrawFlowComponent],\n  templateUrl: './editor.component.html',\n  styleUrls: ['./editor.component.less'],\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  providers: [\n    dfPanzoomOptionsProvider({\n      leftPosition: 50,\n    }),\n  ],\n})\nexport default class EditorComponent {\n  @ViewChild(NgDrawFlowComponent)\n  public editor!: NgDrawFlowComponent;\n\n  public data: DfDataModel = {\n    nodes: new Map()\n      .set('node-1', {\n        id: 'node-1',\n        data: {type: 'simpleNode', text: 'This base node'},\n        position: {x: 0, y: 0},\n        startNode: true,\n      })\n      .set('node-2', {\n        id: 'node-2',\n        data: {type: 'simpleNode', text: 'This child node 1'},\n        position: {x: 250, y: 50},\n      })\n      .set('node-3', {\n        id: 'node-3',\n        data: {type: 'simpleNode', text: 'This child node 2'},\n        position: {x: 250, y: -50},\n      })\n      .set('node-4', {\n        id: 'node-4',\n        data: {type: 'simpleNode', text: 'This child node 3'},\n        position: {x: 500, y: 0},\n        endNode: true,\n      }),\n    connections: [\n      {\n        source: {\n          nodeId: 'node-1',\n          connectorType: DfConnectionPoint.Output,\n          connectorId: 'node-1-output-1',\n        },\n        target: {\n          nodeId: 'node-2',\n          connectorType: DfConnectionPoint.Input,\n          connectorId: 'node-2-input-1',\n        },\n      },\n      {\n        source: {\n          nodeId: 'node-1',\n          connectorType: DfConnectionPoint.Output,\n          connectorId: 'node-1-output-1',\n        },\n        target: {\n          nodeId: 'node-3',\n          connectorType: DfConnectionPoint.Input,\n          connectorId: 'node-3-input-1',\n        },\n      },\n      {\n        source: {\n          nodeId: 'node-2',\n          connectorType: DfConnectionPoint.Output,\n          connectorId: 'node-2-output-1',\n        },\n        target: {\n          nodeId: 'node-4',\n          connectorType: DfConnectionPoint.Input,\n          connectorId: 'node-4-input-1',\n        },\n      },\n      {\n        source: {\n          nodeId: 'node-3',\n          connectorType: DfConnectionPoint.Output,\n          connectorId: 'node-3-output-1',\n        },\n        target: {\n          nodeId: 'node-4',\n          connectorType: DfConnectionPoint.Input,\n          connectorId: 'node-4-input-1',\n        },\n      },\n    ],\n  };\n\n  public currentScale$: BehaviorSubject<number> = new BehaviorSubject<number>(100);\n  public fullscreen$ = new BehaviorSubject<boolean>(false);\n  public counter = 0;\n  public form = new FormControl<DfDataModel>(this.data);\n\n  public onScaleChange(zoomLevel: number): void {\n    this.currentScale$.next(zoomLevel);\n  }\n\n  public onConnectionCreated(event: DfEvent<DfDataConnection>): void {\n    console.warn(event, 'onConnectionCreated');\n  }\n\n  public onConnectionDeleted(event: DfEvent<DfDataConnection>): void {\n    console.warn(event, 'onConnectionDeleted');\n  }\n\n  public onNodeMoved(event: DfEvent<DfDataNode>): void {\n    console.warn(event, 'onNodeMoved');\n  }\n\n  public onNodeSelected(event: DfDataNode): void {\n    console.warn(event, 'onNodeSelected');\n  }\n\n  public onNodeDeleted(event: DfEvent<DfDataNode>): void {\n    console.warn(event, 'onNodeDeleted');\n  }\n\n  public toggleFullscreen(): void {\n    this.fullscreen$.next(!this.fullscreen$.value);\n    this.editor.resetPosition();\n  }\n\n  public addNodeToDrawFlow(): void {\n    const id = `qwqe${this.counter}`;\n\n    this.data.nodes.set(id, {\n      id,\n      data: {\n        type: 'simpleNode',\n        text: `created node ${this.counter + 1}`,\n      },\n    });\n    this.form.setValue(this.data);\n    this.counter++;\n  }\n}\n```\n"}}]);