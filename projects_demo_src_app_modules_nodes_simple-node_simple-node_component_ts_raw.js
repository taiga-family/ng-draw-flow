"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_app_modules_nodes_simple-node_simple-node_component_ts_raw"],{

/***/ 8550:
/*!**************************************************************************************!*\
  !*** ./projects/demo/src/app/modules/nodes/simple-node/simple-node.component.ts?raw ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "import {AsyncPipe, NgIf} from '@angular/common';\nimport {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {DfInputComponent, DfOutputComponent, DrawFlowBaseNode} from '@ng-draw-flow/core';\n\n@Component({\n    standalone: true,\n    selector: 'app-simple-node',\n    imports: [AsyncPipe, DfInputComponent, DfOutputComponent, NgIf],\n    templateUrl: './simple-node.component.html',\n    styleUrls: ['./simple-node.component.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SimpleNodeComponent extends DrawFlowBaseNode {}\n";

/***/ })

}]);