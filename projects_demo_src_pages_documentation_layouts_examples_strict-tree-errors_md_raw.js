"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_layouts_examples_strict-tree-errors_md_raw"],{

/***/ 91074
/*!******************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/layouts/examples/strict-tree-errors.md?raw ***!
  \******************************************************************************************/
(module) {

module.exports = "```ts\nreadonly treeLayoutError = computed(() => {\n  const error = this.autoLayout.error();\n\n  return error instanceof DfTreeLayoutError ? error : null;\n});\n\n// error.code:\n// 'duplicate-node' | 'missing-node' | 'multiple-parents'\n// | 'invalid-root' | 'disconnected-graph'\n// | 'missing-output-order' | 'invalid-output-order'\n// | 'duplicate-output-order'\n```\n";

/***/ }

}]);