"use strict";exports.id=137,exports.ids=[137],exports.modules={68137:module=>{module.exports="import {NgIf} from '@angular/common';\nimport {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {DfInputComponent, DfOutputComponent, DrawFlowBaseNode} from '@ng-draw-flow/core';\n\n@Component({\n    standalone: true,\n    selector: 'app-your-node',\n    imports: [DfInputComponent, DfOutputComponent, NgIf],\n    templateUrl: './your-node.component.html',\n    styleUrls: ['./your-node.component.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class YourNodeComponent extends DrawFlowBaseNode {}\n"}};