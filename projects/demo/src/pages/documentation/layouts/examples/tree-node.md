```ts
import {ChangeDetectionStrategy, Component, inject, Injectable} from '@angular/core';
import {
  type DfDataConnectorConfig,
  DfInputComponent,
  DfOutputComponent,
  DfOutputMode,
  DrawFlowBaseNode,
} from '@ng-draw-flow/core';
import {TuiIcon} from '@taiga-ui/core';

@Injectable()
export class TreeActionsService {
  private handler?: (connector: DfDataConnectorConfig) => void;

  configure(handler: (connector: DfDataConnectorConfig) => void): void {
    this.handler = handler;
  }

  addChild(connector: DfDataConnectorConfig): void {
    this.handler?.(connector);
  }
}

@Component({
  standalone: true,
  selector: 'app-tree-node',
  imports: [DfInputComponent, DfOutputComponent, TuiIcon],
  templateUrl: './tree-node.component.html',
  styles: `
    :host {
      position: relative;
      display: block;
      min-inline-size: 10rem;
    }

    .input,
    .output {
      position: absolute;
      transform: translateY(-50%);
    }

    .input {
      inset-block-start: 50%;
      inset-inline-start: -1rem;
    }

    .output {
      inset-inline-end: -1rem;
    }

    .output-primary {
      inset-block-start: 35%;
    }

    .output-secondary {
      inset-block-start: 65%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeNodeComponent extends DrawFlowBaseNode {
  private readonly actions = inject(TreeActionsService);

  readonly outputMode = DfOutputMode;

  addChild(connector: DfDataConnectorConfig): void {
    this.actions.addChild(connector);
  }
}
```
