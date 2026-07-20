"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_state-and-events_examples_store-signals_md_raw"],{

/***/ 68929
/*!**********************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/state-and-events/examples/store-signals.md?raw ***!
  \**********************************************************************************************/
(module) {

module.exports = "```ts\nreadonly store = inject(NgDrawFlowStoreService);\n\nreadonly selectedTitle = computed(\n  () => this.store.selectedNode()?.data['title'] ?? 'Nothing selected',\n);\nreadonly canDelete = this.store.hasSelection;\n\nzoomIn(): void {\n  this.store.zoomIn();\n}\n\naddNode(): void {\n  const model = this.store.dataModel();\n\n  if (!model) {\n    return;\n  }\n\n  this.store.setDataModel({\n    ...model,\n    nodes: [\n      ...model.nodes,\n      {\n        id: crypto.randomUUID(),\n        data: {type: 'task', title: 'New task'},\n        position: {x: 0, y: 0},\n      },\n    ],\n  });\n}\n```\n";

/***/ }

}]);