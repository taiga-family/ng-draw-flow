"use strict";exports.id=590,exports.ids=[590],exports.modules={85590:module=>{module.exports="import {AsyncPipe, NgIf} from '@angular/common';\nimport {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {DfInputComponent, DfOutputComponent, DrawFlowBaseNode} from '@ng-draw-flow/core';\n\n@Component({\n    standalone: true,\n    selector: 'app-simple-node',\n    imports: [AsyncPipe, DfInputComponent, DfOutputComponent, NgIf],\n    templateUrl: './simple-node.component.html',\n    styleUrls: ['./simple-node.component.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SimpleNodeComponent extends DrawFlowBaseNode {}\n"}};