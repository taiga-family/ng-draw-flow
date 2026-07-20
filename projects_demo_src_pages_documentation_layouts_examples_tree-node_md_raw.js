"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_layouts_examples_tree-node_md_raw"],{

/***/ 23789
/*!*********************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/layouts/examples/tree-node.md?raw ***!
  \*********************************************************************************/
(module) {

module.exports = "```ts\nimport {ChangeDetectionStrategy, Component, inject, Injectable} from '@angular/core';\nimport {\n  type DfDataConnectorConfig,\n  DfInputComponent,\n  DfOutputComponent,\n  DfOutputMode,\n  DrawFlowBaseNode,\n} from '@ng-draw-flow/core';\nimport {TuiIcon} from '@taiga-ui/core';\n\n@Injectable()\nexport class TreeActionsService {\n  private handler?: (connector: DfDataConnectorConfig) => void;\n\n  configure(handler: (connector: DfDataConnectorConfig) => void): void {\n    this.handler = handler;\n  }\n\n  addChild(connector: DfDataConnectorConfig): void {\n    this.handler?.(connector);\n  }\n}\n\n@Component({\n  standalone: true,\n  selector: 'app-tree-node',\n  imports: [DfInputComponent, DfOutputComponent, TuiIcon],\n  templateUrl: './tree-node.component.html',\n  styles: `\n    :host {\n      position: relative;\n      display: block;\n      min-inline-size: 10rem;\n    }\n\n    .input,\n    .output {\n      position: absolute;\n      transform: translateY(-50%);\n    }\n\n    .input {\n      inset-block-start: 50%;\n      inset-inline-start: -1rem;\n    }\n\n    .output {\n      inset-inline-end: -1rem;\n    }\n\n    .output-primary {\n      inset-block-start: 35%;\n    }\n\n    .output-secondary {\n      inset-block-start: 65%;\n    }\n  `,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class TreeNodeComponent extends DrawFlowBaseNode {\n  private readonly actions = inject(TreeActionsService);\n\n  readonly outputMode = DfOutputMode;\n\n  addChild(connector: DfDataConnectorConfig): void {\n    this.actions.addChild(connector);\n  }\n}\n```\n";

/***/ }

}]);