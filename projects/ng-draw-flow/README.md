# @ng-draw-flow/core

The core Angular package for building node-based editors, workflow builders and interactive diagrams with custom node
components.

- [Documentation](https://taiga-family.github.io/ng-draw-flow/documentation/quickstart)
- [Examples](https://taiga-family.github.io/ng-draw-flow/examples/overview)
- [Source and issues](https://github.com/taiga-family/ng-draw-flow)

## Features

- Angular components as graph nodes
- Reactive Forms data model
- Custom input and output connectors
- Bezier and smooth-step connections
- Selection, dragging and deletion
- Pan, zoom and camera controls
- Configurable read-only and constrained modes
- Validation APIs
- Signal snapshots and RxJS event streams
- Polymorpheus content inside connectors

Node positions are part of `DfDataModel`. Core does not run an automatic layout, so applications retain complete control
over manually placed, draggable or externally calculated positions.

## Requirements

- `@angular/common` and `@angular/core` 19 or later
- `@angular/forms` for the Reactive Forms integration
- `@taiga-ui/polymorpheus` 5
- `@ng-web-apis/resize-observer` 5.2

## Installation

```bash
npm install @ng-draw-flow/core
```

## Basic Usage

Create a custom node component. Connector ids must be unique across the complete graph; prefixing them with the node id
is the recommended convention.

```ts
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DfInputComponent, DfOutputComponent, DrawFlowBaseNode} from '@ng-draw-flow/core';

@Component({
  standalone: true,
  selector: 'app-task-node',
  imports: [DfInputComponent, DfOutputComponent],
  template: `
    @if (!startNodeSignal()) {
      <df-input
        class="input"
        [connectorData]="{
          nodeId: nodeIdSignal(),
          connectorId: nodeIdSignal() + '-input-1',
          single: false,
        }"
      />
    }

    <strong>{{ modelSignal().title }}</strong>

    @if (!endNodeSignal()) {
      <df-output
        class="output"
        [connectorData]="{
          nodeId: nodeIdSignal(),
          connectorId: nodeIdSignal() + '-output-1',
          single: false,
        }"
      />
    }
  `,
  styles: `
    :host {
      position: relative;
      display: block;
      min-inline-size: 10rem;
    }

    .input,
    .output {
      position: absolute;
      inset-block-start: 50%;
      transform: translateY(-50%);
    }

    .input {
      inset-inline-start: -1rem;
    }

    .output {
      inset-inline-end: -1rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskNodeComponent extends DrawFlowBaseNode {}
```

Register the node type and bind a graph model to `NgDrawFlowComponent`.

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

import {TaskNodeComponent} from './task-node.component';

@Component({
  standalone: true,
  selector: 'app-task-editor',
  imports: [NgDrawFlowComponent, ReactiveFormsModule],
  template: `
    <ng-draw-flow [formControl]="graph" />
  `,
  providers: [
    provideNgDrawFlowConfigs({
      nodes: {task: TaskNodeComponent},
      connection: {
        type: DfConnectionType.SmoothStep,
        arrowhead: {type: DfArrowhead.ArrowClosed},
      },
    }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskEditorComponent {
  readonly graph = new FormControl<DfDataModel>(
    {
      nodes: [
        {
          id: 'task-1',
          data: {type: 'task', title: 'Plan'},
          position: {x: 0, y: 0},
          startNode: true,
        },
        {
          id: 'task-2',
          data: {type: 'task', title: 'Build'},
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

User interactions update the form control. To apply an application-side graph change, create the next immutable model
and call `graph.setValue(nextModel)`.

## Configuration

`provideNgDrawFlowConfigs` merges application options with the defaults:

```ts
provideNgDrawFlowConfigs({
  nodes: {task: TaskNodeComponent},
  connection: {
    type: DfConnectionType.SmoothStep,
    curvature: 16,
    arrowhead: {
      type: DfArrowhead.ArrowClosed,
      width: 10,
      height: 6,
    },
  },
  options: {
    nodesDraggable: true,
    nodesDeletable: true,
    connectionsCreatable: true,
    connectionsDeletable: true,
  },
});
```

See [Configuration & Public API](https://taiga-family.github.io/ng-draw-flow/documentation/configuration-and-public-api)
for all options and styling variables.

## State and Commands

`NgDrawFlowStoreService` exposes signal snapshots, RxJS streams and commands without requiring a component reference:

```ts
import {inject} from '@angular/core';
import {NgDrawFlowStoreService} from '@ng-draw-flow/core';

private readonly drawFlow = inject(NgDrawFlowStoreService);

readonly selectedNode = this.drawFlow.selectedNode;
readonly selectedConnection = this.drawFlow.selectedConnection;
readonly scale = this.drawFlow.scale;

zoomIn(): void {
  this.drawFlow.zoomIn();
}

removeSelectedNode(): void {
  const node = this.selectedNode();

  if (node) {
    this.drawFlow.removeNode(node.id);
  }
}
```

The same state is available as observables such as `dataModel$`, `selectedNode$`, `nodeMoved$` and `connectionCreated$`.

## Connectors

Regular `df-output` connectors start draggable connections. Both connector types accept custom Polymorpheus content,
position metadata and `single` constraints. `DfOutputMode.Action` is an opt-in click-only output that emits
`(activated)` instead of starting a draft connection; it is primarily useful when an application owns graph mutations,
including dynamic tree layouts.

See the [connector documentation](https://taiga-family.github.io/ng-draw-flow/documentation/connectors) for regular and
action-output examples.

## Dynamic Layouts

Automatic positioning is provided separately by
[`@ng-draw-flow/layouts`](https://npmjs.com/package/@ng-draw-flow/layouts). Core has no runtime dependency on the
layouts package.

## Migration

See the [migration guides](https://taiga-family.github.io/ng-draw-flow/documentation/migrations) when upgrading between
major versions.
