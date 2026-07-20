"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_connectors_examples_action-output_md_raw"],{

/***/ 29079
/*!****************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/connectors/examples/action-output.md?raw ***!
  \****************************************************************************************/
(module) {

module.exports = "```html\n<ng-template #addChildIcon>\n  <tui-icon icon=\"@tui.plus\" />\n</ng-template>\n\n<df-output\n  title=\"Add child\"\n  [connectorData]=\"{\n    nodeId: nodeIdSignal(),\n    connectorId: nodeIdSignal() + '-add-child',\n    single: false,\n    data: {childType: 'task'},\n  }\"\n  [content]=\"addChildIcon\"\n  [layoutOrder]=\"0\"\n  [mode]=\"outputMode.Action\"\n  (activated)=\"addChild($event)\"\n/>\n```\n";

/***/ }

}]);