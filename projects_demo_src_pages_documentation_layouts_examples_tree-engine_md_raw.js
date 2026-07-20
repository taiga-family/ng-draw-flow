"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_layouts_examples_tree-engine_md_raw"],{

/***/ 77919
/*!***********************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/layouts/examples/tree-engine.md?raw ***!
  \***********************************************************************************/
(module) {

module.exports = "```ts\nprivate readonly autoLayout = inject(DfAutoLayoutService);\n\nreadonly layoutRunning = this.autoLayout.running;\nreadonly layoutResult = this.autoLayout.result;\nreadonly layoutError = this.autoLayout.error;\n\nngAfterViewInit(): void {\n  this.autoLayout.apply();\n}\n```\n";

/***/ }

}]);