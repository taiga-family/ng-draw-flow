"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_layouts_examples_model_md_raw"],{

/***/ 93011
/*!*****************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/layouts/examples/model.md?raw ***!
  \*****************************************************************************/
(module) {

module.exports = "```html\n<ng-template #addChildIcon>\n  <tui-icon icon=\"@tui.plus\" />\n</ng-template>\n\n@if (!startNodeSignal()) {\n<df-input\n  class=\"input\"\n  [connectorData]=\"{\n      nodeId: nodeIdSignal(),\n      connectorId: nodeIdSignal() + '-input-1',\n      single: true,\n    }\"\n/>\n}\n\n<strong>{{ modelSignal().title }}</strong>\n\n<df-output\n  class=\"output output-primary\"\n  [content]=\"addChildIcon\"\n  [connectorData]=\"{\n    nodeId: nodeIdSignal(),\n    connectorId: nodeIdSignal() + '-add-primary',\n    single: false,\n    data: {branch: 'primary'},\n  }\"\n  [layoutOrder]=\"0\"\n  [mode]=\"outputMode.Action\"\n  (activated)=\"addChild($event)\"\n/>\n\n<df-output\n  class=\"output output-secondary\"\n  [content]=\"addChildIcon\"\n  [connectorData]=\"{\n    nodeId: nodeIdSignal(),\n    connectorId: nodeIdSignal() + '-add-secondary',\n    single: false,\n    data: {branch: 'secondary'},\n  }\"\n  [layoutOrder]=\"1\"\n  [mode]=\"outputMode.Action\"\n  (activated)=\"addChild($event)\"\n/>\n```\n";

/***/ }

}]);