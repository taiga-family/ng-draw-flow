```ts
import {type AfterViewInit, Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {
  DfArrowhead,
  DfConnectionPoint,
  DfConnectionType,
  type DfDataConnectorConfig,
  type DfDataModel,
  NgDrawFlowComponent,
  provideNgDrawFlowConfigs,
} from '@ng-draw-flow/core';
import {
  DfAutoLayoutService,
  DfNodeSizingStrategy,
  DfTreeLayoutDirection,
  provideNgDrawFlowLayouts,
} from '@ng-draw-flow/layouts';

import {TreeActionsService, TreeNodeComponent} from './tree-node.component';

@Component({
  standalone: true,
  selector: 'app-dynamic-tree',
  imports: [NgDrawFlowComponent, ReactiveFormsModule],
  template: `
    <ng-draw-flow [formControl]="form" />
  `,
  providers: [
    TreeActionsService,
    provideNgDrawFlowConfigs({
      nodes: {task: TreeNodeComponent},
      connection: {
        type: DfConnectionType.SmoothStep,
        arrowhead: {type: DfArrowhead.ArrowClosed},
        curvature: 16,
      },
      options: {
        nodesDraggable: false,
        connectionsCreatable: false,
        connectionsDeletable: false,
      },
      positionAnimation: {duration: 280, easing: 'ease-in-out'},
    }),
    provideNgDrawFlowLayouts({
      tree: {
        direction: DfTreeLayoutDirection.LeftToRight,
        nodeSizing: {
          strategy: DfNodeSizingStrategy.Measured,
          fallback: {width: 180, height: 64},
        },
        levelGap: 96,
        siblingGap: 32,
      },
    }),
  ],
})
export class DynamicTreeComponent implements AfterViewInit {
  private readonly actions = inject(TreeActionsService);
  private readonly autoLayout = inject(DfAutoLayoutService);

  readonly form = new FormControl<DfDataModel>(
    {
      nodes: [
        {
          id: 'root',
          data: {type: 'task', title: 'Root'},
          position: {x: 0, y: 0},
          startNode: true,
        },
      ],
      connections: [],
    },
    {nonNullable: true},
  );

  constructor() {
    this.actions.configure((connector) => this.addChild(connector));
  }

  ngAfterViewInit(): void {
    this.autoLayout.apply();
  }

  private addChild({nodeId, connectorId}: DfDataConnectorConfig): void {
    const model = this.form.getRawValue();
    const parent = model.nodes.find(({id}) => id === nodeId);

    if (!parent) {
      return;
    }

    const childId = crypto.randomUUID();
    const position = 'position' in parent ? {...parent.position} : {x: 0, y: 0};

    this.autoLayout.apply({
      anchorNodeId: nodeId,
      model: {
        nodes: [
          ...model.nodes,
          {
            id: childId,
            data: {type: 'task', title: 'New task'},
            position,
          },
        ],
        connections: [
          ...model.connections,
          {
            source: {
              nodeId,
              connectorId,
              connectorType: DfConnectionPoint.Output,
            },
            target: {
              nodeId: childId,
              connectorId: `${childId}-input-1`,
              connectorType: DfConnectionPoint.Input,
            },
          },
        ],
      },
    });
  }
}
```
