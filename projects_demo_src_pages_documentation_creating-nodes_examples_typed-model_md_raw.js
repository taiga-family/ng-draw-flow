"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_creating-nodes_examples_typed-model_md_raw"],{

/***/ 51597
/*!******************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/creating-nodes/examples/typed-model.md?raw ***!
  \******************************************************************************************/
(module) {

module.exports = "```ts\ninterface TaskNodeData {\n  readonly type: 'task';\n  readonly title: string;\n  readonly status: 'draft' | 'ready';\n}\n\nexport class TaskNodeComponent extends DrawFlowBaseNode {\n  readonly task = computed(() => this.modelSignal() as TaskNodeData);\n  readonly connectorPrefix = computed(() => `${this.nodeIdSignal()}-task`);\n}\n```\n";

/***/ }

}]);