"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_quickstart_examples_node_component_ts_raw"],{

/***/ 8341:
/*!*****************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/quickstart/examples/node.component.ts?raw ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "import {NgIf} from '@angular/common';\nimport {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {DfInputComponent, DfOutputComponent, DrawFlowBaseNode} from '@ng-draw-flow/core';\n\n@Component({\n    standalone: true,\n    selector: 'app-your-node',\n    imports: [DfInputComponent, DfOutputComponent, NgIf],\n    templateUrl: './node.template.html',\n    styleUrls: ['./node.styles.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class YourNodeComponent extends DrawFlowBaseNode {}\n";

/***/ })

}]);