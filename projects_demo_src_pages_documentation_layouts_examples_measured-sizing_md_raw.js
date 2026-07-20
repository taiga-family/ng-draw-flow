"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_layouts_examples_measured-sizing_md_raw"],{

/***/ 11035
/*!***************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/layouts/examples/measured-sizing.md?raw ***!
  \***************************************************************************************/
(module) {

module.exports = "```ts\nimport {DfNodeSizingStrategy, provideNgDrawFlowLayouts} from '@ng-draw-flow/layouts';\n\n@Component({\n  providers: [\n    provideNgDrawFlowLayouts({\n      tree: {\n        nodeSizing: {\n          strategy: DfNodeSizingStrategy.Measured,\n          fallback: {width: 180, height: 64},\n        },\n      },\n    }),\n  ],\n})\nexport class DynamicTreeComponent {}\n```\n";

/***/ }

}]);