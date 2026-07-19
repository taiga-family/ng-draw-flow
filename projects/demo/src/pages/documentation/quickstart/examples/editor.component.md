```ts
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {
  DfArrowhead,
  DfConnectionPoint,
  DfConnectionType,
  type DfDataModel,
  NgDrawFlowComponent,
  provideNgDrawFlowConfigs,
} from '@ng-draw-flow/core';

import {YourNodeComponent} from './your-node.component';

@Component({
  standalone: true,
  selector: 'app-graph-editor',
  imports: [NgDrawFlowComponent, ReactiveFormsModule],
  template: `
    <ng-draw-flow [formControl]="form" />
  `,
  providers: [
    provideNgDrawFlowConfigs({
      nodes: {task: YourNodeComponent},
      connection: {
        type: DfConnectionType.SmoothStep,
        arrowhead: {type: DfArrowhead.ArrowClosed},
      },
    }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraphEditorComponent {
  readonly form = new FormControl<DfDataModel>(
    {
      nodes: [
        {
          id: 'task-1',
          data: {type: 'task', text: 'Plan'},
          position: {x: 0, y: 0},
          startNode: true,
        },
        {
          id: 'task-2',
          data: {type: 'task', text: 'Build'},
          position: {x: 280, y: 80},
          endNode: true,
        },
      ],
      connections: [
        {
          source: {
            nodeId: 'task-1',
            connectorId: 'task-1-output-1',
            connectorType: DfConnectionPoint.Output,
          },
          target: {
            nodeId: 'task-2',
            connectorId: 'task-2-input-1',
            connectorType: DfConnectionPoint.Input,
          },
        },
      ],
    },
    {nonNullable: true},
  );
}
```
