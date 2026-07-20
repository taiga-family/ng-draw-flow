"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_layouts_examples_tree-engine-options_md_raw"],{

/***/ 67800
/*!*******************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/layouts/examples/tree-engine-options.md?raw ***!
  \*******************************************************************************************/
(module) {

module.exports = "```ts\nimport {DfNodeSizingStrategy, DfTreeLayoutDirection, provideNgDrawFlowLayouts} from '@ng-draw-flow/layouts';\n\n@Component({\n  providers: [\n    provideNgDrawFlowLayouts({\n      tree: {\n        direction: DfTreeLayoutDirection.TopToBottom,\n        nodeSizing: {\n          strategy: DfNodeSizingStrategy.Fixed,\n          size: {width: 240, height: 80},\n        },\n        levelGap: 120,\n        siblingGap: 40,\n      },\n    }),\n  ],\n})\nexport class GraphEditorComponent {}\n```\n";

/***/ }

}]);