"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_app_modules_nodes_label-node_label-node_component_ts_raw"],{

/***/ 72450
/*!************************************************************************************!*\
  !*** ./projects/demo/src/app/modules/nodes/label-node/label-node.component.ts?raw ***!
  \************************************************************************************/
(module) {

module.exports = "import {AsyncPipe} from '@angular/common';\nimport {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {DfInputComponent, DfOutputComponent, DrawFlowBaseNode} from '@ng-draw-flow/core';\nimport {TuiButton} from '@taiga-ui/core';\n\n@Component({\n    standalone: true,\n    selector: 'app-label-node',\n    imports: [AsyncPipe, DfInputComponent, DfOutputComponent, TuiButton],\n    templateUrl: './label-node.component.html',\n    styleUrl: './label-node.component.less',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class LabelNodeComponent extends DrawFlowBaseNode {\n    public outputConnectors = [0];\n\n    public addOutputConnector(): void {\n        this.outputConnectors.push(this.outputs().length);\n    }\n}\n";

/***/ }

}]);