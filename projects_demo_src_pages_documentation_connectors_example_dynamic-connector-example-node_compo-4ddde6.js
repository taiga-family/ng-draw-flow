"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_connectors_example_dynamic-connector-example-node_compo-4ddde6"],{

/***/ 47110
/*!********************************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/connectors/example/dynamic-connector-example-node.component.html?raw ***!
  \********************************************************************************************************************/
(module) {

module.exports = "<ng-template #addChildIcon>\n    <tui-icon icon=\"@tui.plus\" />\n</ng-template>\n\n@if (!startNodeSignal()) {\n    <df-input\n        class=\"input\"\n        [connectorData]=\"{\n            nodeId: nodeIdSignal(),\n            connectorId: nodeIdSignal() + '-input-1',\n            single: true,\n        }\"\n    />\n}\n\n<strong>{{ modelSignal().title }}</strong>\n<span>Dynamic tree node</span>\n\n<df-output\n    title=\"Add child\"\n    class=\"action-output\"\n    [connectorData]=\"{\n        nodeId: nodeIdSignal(),\n        connectorId: nodeIdSignal() + '-output-1',\n        single: false,\n        data: {childType: 'dynamicConnectorExample'},\n    }\"\n    [content]=\"addChildIcon\"\n    [layoutOrder]=\"0\"\n    [mode]=\"outputMode.Action\"\n    (activated)=\"addChild($event)\"\n/>\n";

/***/ }

}]);