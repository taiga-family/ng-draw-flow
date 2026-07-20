"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_connectors_example_dynamic-connector-example-actions_se-55ca88"],{

/***/ 50127
/*!*******************************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/connectors/example/dynamic-connector-example-actions.service.ts?raw ***!
  \*******************************************************************************************************************/
(module) {

module.exports = "import {Injectable} from '@angular/core';\nimport {type DfDataConnectorConfig} from '@ng-draw-flow/core';\n\n@Injectable()\nexport class DynamicConnectorExampleActionsService {\n    private addChildHandler: ((connector: DfDataConnectorConfig) => void) | null = null;\n\n    public configure(handler: (connector: DfDataConnectorConfig) => void): void {\n        this.addChildHandler = handler;\n    }\n\n    public addChild(connector: DfDataConnectorConfig): void {\n        this.addChildHandler?.(connector);\n    }\n}\n";

/***/ }

}]);