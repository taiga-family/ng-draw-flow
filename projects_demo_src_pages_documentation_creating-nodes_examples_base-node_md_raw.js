"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_creating-nodes_examples_base-node_md_raw"],{

/***/ 51558
/*!****************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/creating-nodes/examples/base-node.md?raw ***!
  \****************************************************************************************/
(module) {

module.exports = "```ts\n@Directive()\nexport abstract class DrawFlowBaseNode {\n  public readonly inputs = viewChildren(DfInputComponent);\n\n  public readonly outputs = viewChildren(DfOutputComponent);\n\n  public readonly connectorsUpdated = output();\n\n  public readonly nodeIdSignal = input('', {alias: 'nodeId'});\n\n  public readonly modelSignal = input.required<Record<string, any> & {type: string}>({\n    alias: 'model',\n  });\n\n  public readonly startNodeSignal = input(false, {alias: 'startNode'});\n\n  public readonly endNodeSignal = input(false, {alias: 'endNode'});\n\n  public readonly selectedSignal = input(false, {alias: 'selected'});\n  public readonly invalidSignal = input(false, {alias: 'invalid'});\n\n  public get nodeId(): string {\n    return this.nodeIdSignal();\n  }\n\n  public get model(): Record<string, any> & {type: string} {\n    return this.modelSignal();\n  }\n\n  public get startNode(): boolean {\n    return this.startNodeSignal();\n  }\n\n  public get endNode(): boolean {\n    return this.endNodeSignal();\n  }\n\n  public get selected(): boolean {\n    return this.selectedSignal();\n  }\n\n  public get invalid(): boolean {\n    return this.invalidSignal();\n  }\n}\n```\n";

/***/ }

}]);