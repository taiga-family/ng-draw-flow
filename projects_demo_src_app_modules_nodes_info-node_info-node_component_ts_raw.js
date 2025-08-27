"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_app_modules_nodes_info-node_info-node_component_ts_raw"],{

/***/ 1370:
/*!**********************************************************************************!*\
  !*** ./projects/demo/src/app/modules/nodes/info-node/info-node.component.ts?raw ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "import {CommonModule} from '@angular/common';\nimport {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {DfInputComponent, DfOutputComponent, DrawFlowBaseNode} from '@ng-draw-flow/core';\n\n@Component({\n    standalone: true,\n    selector: 'app-info-node',\n    imports: [CommonModule, DfInputComponent, DfOutputComponent],\n    templateUrl: './info-node.component.html',\n    styleUrls: ['./info-node.component.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class InfoNodeComponent extends DrawFlowBaseNode {}\n";

/***/ })

}]);