<div align="center">

# <img src="projects/demo/src/assets/icons/logo.svg" alt="ng-draw-flow logo" width="36px"> NgDrawFlow

[![npm version](https://img.shields.io/npm/v/@ng-draw-flow/core.svg)](https://npmjs.com/package/@ng-draw-flow/core)
[![codecov](https://codecov.io/gh/taiga-family/ng-draw-flow/branch/main/graphs/badge.svg)](https://app.codecov.io/gh/taiga-family/ng-draw-flow/tree/main/projects)
[![All packages CI](https://github.com/taiga-family/ng-draw-flow/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/taiga-family/ng-draw-flow/actions/workflows/build.yml)
[![Deploy](https://github.com/taiga-family/ng-draw-flow/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/taiga-family/ng-draw-flow/actions/workflows/deploy.yml)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

</div>

NgDrawFlow is an Angular library for building node-based editors, workflow builders and interactive diagrams. Custom
Angular components render the nodes, while the library provides the canvas, connections, selection, drag and drop, pan
and zoom, validation, and reactive state synchronization.

The main package is `@ng-draw-flow/core`. Node positions belong to the graph model, so core works for both manually
arranged diagrams and applications that calculate positions themselves.

## Packages

| Package                                                                    | Purpose                                                                                 |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [`@ng-draw-flow/core`](https://npmjs.com/package/@ng-draw-flow/core)       | Canvas, custom nodes, connectors, connections, interactions, validation and state APIs. |
| [`@ng-draw-flow/layouts`](https://npmjs.com/package/@ng-draw-flow/layouts) | Optional automatic strict-tree positioning for core graphs.                             |

## Documentation

- [Documentation](https://taiga-family.github.io/ng-draw-flow)
- [Quick start](https://taiga-family.github.io/ng-draw-flow/documentation/quickstart)
- [Connectors](https://taiga-family.github.io/ng-draw-flow/documentation/connectors)
- [Automatic layouts](https://taiga-family.github.io/ng-draw-flow/documentation/layouts)
- [Examples](https://taiga-family.github.io/ng-draw-flow/examples/overview)
- [Migration guides](https://taiga-family.github.io/ng-draw-flow/documentation/migrations)

## Requirements

- Angular 19 or later
- Taiga UI Polymorpheus 5
- Angular reactive forms

## Installation

```bash
npm install @ng-draw-flow/core
```

## Quick Start

Create a standalone component for a node. The node decides where its connectors are rendered and what application data
is displayed.

```ts
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DfInputComponent, DfOutputComponent, DrawFlowBaseNode} from '@ng-draw-flow/core';

@Component({
  standalone: true,
  selector: 'app-basic-node',
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

    <strong>{{ modelSignal().label }}</strong>

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
export class BasicNodeComponent extends DrawFlowBaseNode {}
```

Register the node component, create a `DfDataModel`, and bind it through a non-nullable `FormControl`.

```ts
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {DfConnectionPoint, type DfDataModel, NgDrawFlowComponent, provideNgDrawFlowConfigs} from '@ng-draw-flow/core';

import {BasicNodeComponent} from './basic-node.component';

@Component({
  standalone: true,
  selector: 'app-editor',
  imports: [NgDrawFlowComponent, ReactiveFormsModule],
  template: `
    <ng-draw-flow [formControl]="graph" />
  `,
  providers: [
    provideNgDrawFlowConfigs({
      nodes: {basic: BasicNodeComponent},
    }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorComponent {
  readonly graph = new FormControl<DfDataModel>(
    {
      nodes: [
        {
          id: 'source',
          data: {type: 'basic', label: 'Source'},
          position: {x: 0, y: 0},
          startNode: true,
        },
        {
          id: 'target',
          data: {type: 'basic', label: 'Target'},
          position: {x: 280, y: 80},
          endNode: true,
        },
      ],
      connections: [
        {
          source: {
            nodeId: 'source',
            connectorId: 'source-output-1',
            connectorType: DfConnectionPoint.Output,
          },
          target: {
            nodeId: 'target',
            connectorId: 'target-input-1',
            connectorType: DfConnectionPoint.Input,
          },
        },
      ],
    },
    {nonNullable: true},
  );
}
```

Changes made through the editor are written back to the control. Applications can also replace the complete model with
`graph.setValue(nextModel)`.

## Core Scenarios

`@ng-draw-flow/core` supports:

- manually positioned and draggable nodes;
- draggable connections between custom input and output connectors;
- multiple connector positions and multiple connectors per node;
- custom connector content through Polymorpheus;
- Bezier and smooth-step connection paths with configurable arrowheads;
- node and connection selection, deletion and validation;
- pan, zoom and camera controls;
- signal snapshots, RxJS event streams and imperative controls through `NgDrawFlowStoreService`;
- read-only or constrained editors through `provideNgDrawFlowConfigs`.

## Optional Automatic Layouts

Install `@ng-draw-flow/layouts` when a strict tree should calculate node positions automatically. It is an optional
package; core does not depend on it and continues to support fully manual graphs.

```bash
npm install @ng-draw-flow/layouts
```

See the [automatic layouts documentation](https://taiga-family.github.io/ng-draw-flow/documentation/layouts) for tree
constraints, dynamic node sizing and action-output examples.

## Development

```bash
npm ci
npm start
```

Useful workspace commands:

```bash
npm run test
npm run lint
npm run stylelint
npm run build
```
