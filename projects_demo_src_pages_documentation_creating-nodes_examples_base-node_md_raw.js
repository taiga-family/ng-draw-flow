"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_creating-nodes_examples_base-node_md_raw"],{

/***/ 1558:
/*!****************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/creating-nodes/examples/base-node.md?raw ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "```ts\n@Directive()\nexport abstract class DrawFlowBaseNode {\n  @ViewChildren(DfInputComponent)\n  public inputs!: QueryList<DfInputComponent>;\n\n  @ViewChildren(DfOutputComponent)\n  public outputs!: QueryList<DfOutputComponent>;\n\n  @Input()\n  public nodeId = '';\n\n  @Input()\n  public model!: Record<string, any> & {type: string};\n\n  @Input()\n  public startNode? = false;\n\n  @Input()\n  public endNode? = false;\n\n  @HostBinding('class.df-selected')\n  public selected = false;\n}\n```\n";

/***/ })

}]);