"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_connectors_examples_custom-content_md_raw"],{

/***/ 55102
/*!*****************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/connectors/examples/custom-content.md?raw ***!
  \*****************************************************************************************/
(module) {

module.exports = "```html\n<ng-template\n  #connectorContent\n  let-connector\n>\n  <tui-icon icon=\"@tui.plus\" />\n  <span>{{ connector.data?.['label'] }}</span>\n</ng-template>\n\n<df-output\n  [connectorData]=\"{\n    nodeId: nodeIdSignal(),\n    connectorId: nodeIdSignal() + '-output-1',\n    single: false,\n    data: {label: 'Add child'},\n  }\"\n  [content]=\"connectorContent\"\n/>\n```\n";

/***/ }

}]);