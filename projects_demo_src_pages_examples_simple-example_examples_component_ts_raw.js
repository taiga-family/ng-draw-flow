"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_examples_simple-example_examples_component_ts_raw"],{

/***/ 9568:
/*!***********************************************************************************!*\
  !*** ./projects/demo/src/pages/examples/simple-example/examples/component.ts?raw ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "import {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport type {DfDataModel} from '@ng-draw-flow/core';\nimport {\n    DfConnectionPoint,\n    dfPanZoomOptionsProvider,\n    NgDrawFlowComponent,\n} from '@ng-draw-flow/core';\n\n@Component({\n    standalone: true,\n    selector: 'simple-example-doc-page',\n    imports: [NgDrawFlowComponent, ReactiveFormsModule],\n    templateUrl: '../simple-example.component.html',\n    styleUrls: ['../simple-example.component.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        dfPanZoomOptionsProvider({\n            leftPosition: 0,\n        }),\n    ],\n})\nexport default class GettingStartedDocComponent {\n    public data: DfDataModel = {\n        nodes: new Map()\n            .set('node-1', {\n                id: 'node-1',\n                data: {type: 'simpleNode', text: 'This base node'},\n                position: {x: 50, y: 0},\n                startNode: true,\n            })\n            .set('node-2', {\n                id: 'node-2',\n                data: {type: 'simpleNode', text: 'This child node 1'},\n                position: {x: 350, y: -50},\n            })\n            .set('node-3', {\n                id: 'node-3',\n                data: {type: 'simpleNode', text: 'This child node 2'},\n                position: {x: 350, y: 50},\n            }),\n        connections: [\n            {\n                source: {\n                    nodeId: 'node-1',\n                    connectorType: DfConnectionPoint.Output,\n                    connectorId: 'node-1-output-1',\n                },\n                target: {\n                    nodeId: 'node-2',\n                    connectorType: DfConnectionPoint.Input,\n                    connectorId: 'node-2-input-1',\n                },\n            },\n            {\n                source: {\n                    nodeId: 'node-1',\n                    connectorType: DfConnectionPoint.Output,\n                    connectorId: 'node-1-output-1',\n                },\n                target: {\n                    nodeId: 'node-3',\n                    connectorType: DfConnectionPoint.Input,\n                    connectorId: 'node-3-input-1',\n                },\n            },\n        ],\n    };\n\n    public form = new FormControl(this.data);\n}\n";

/***/ })

}]);