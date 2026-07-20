"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_connectors_example_dynamic-connector-example-node_compo-3de5b3"],{

/***/ 89618
/*!******************************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/connectors/example/dynamic-connector-example-node.component.ts?raw ***!
  \******************************************************************************************************************/
(module) {

module.exports = "import {ChangeDetectionStrategy, Component, inject} from '@angular/core';\nimport {\n    type DfDataConnectorConfig,\n    DfInputComponent,\n    DfOutputComponent,\n    DfOutputMode,\n    DrawFlowBaseNode,\n} from '@ng-draw-flow/core';\nimport {TuiIcon} from '@taiga-ui/core';\n\nimport {DynamicConnectorExampleActionsService} from './dynamic-connector-example-actions.service';\n\n@Component({\n    standalone: true,\n    selector: 'dynamic-connector-example-node',\n    imports: [DfInputComponent, DfOutputComponent, TuiIcon],\n    templateUrl: './dynamic-connector-example-node.component.html',\n    styleUrl: './dynamic-connector-example-node.component.less',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class DynamicConnectorExampleNodeComponent extends DrawFlowBaseNode {\n    private readonly actions = inject(DynamicConnectorExampleActionsService);\n\n    protected readonly outputMode = DfOutputMode;\n\n    protected addChild(connector: DfDataConnectorConfig): void {\n        this.actions.addChild(connector);\n    }\n}\n";

/***/ }

}]);