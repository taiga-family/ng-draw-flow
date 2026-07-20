"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_quickstart_examples_editor_component_md_raw"],{

/***/ 45552
/*!*******************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/quickstart/examples/editor.component.md?raw ***!
  \*******************************************************************************************/
(module) {

module.exports = "```ts\nimport {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {\n  DfArrowhead,\n  DfConnectionPoint,\n  DfConnectionType,\n  type DfDataModel,\n  NgDrawFlowComponent,\n  provideNgDrawFlowConfigs,\n} from '@ng-draw-flow/core';\n\nimport {YourNodeComponent} from './your-node.component';\n\n@Component({\n  standalone: true,\n  selector: 'app-graph-editor',\n  imports: [NgDrawFlowComponent, ReactiveFormsModule],\n  template: `\n    <ng-draw-flow [formControl]=\"form\" />\n  `,\n  providers: [\n    provideNgDrawFlowConfigs({\n      nodes: {task: YourNodeComponent},\n      connection: {\n        type: DfConnectionType.SmoothStep,\n        arrowhead: {type: DfArrowhead.ArrowClosed},\n      },\n    }),\n  ],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class GraphEditorComponent {\n  readonly form = new FormControl<DfDataModel>(\n    {\n      nodes: [\n        {\n          id: 'task-1',\n          data: {type: 'task', text: 'Plan'},\n          position: {x: 0, y: 0},\n          startNode: true,\n        },\n        {\n          id: 'task-2',\n          data: {type: 'task', text: 'Build'},\n          position: {x: 280, y: 80},\n          endNode: true,\n        },\n      ],\n      connections: [\n        {\n          source: {\n            nodeId: 'task-1',\n            connectorId: 'task-1-output-1',\n            connectorType: DfConnectionPoint.Output,\n          },\n          target: {\n            nodeId: 'task-2',\n            connectorId: 'task-2-input-1',\n            connectorType: DfConnectionPoint.Input,\n          },\n        },\n      ],\n    },\n    {nonNullable: true},\n  );\n}\n```\n";

/***/ }

}]);