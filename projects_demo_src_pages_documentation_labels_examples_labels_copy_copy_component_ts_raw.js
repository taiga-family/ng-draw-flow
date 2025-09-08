"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_labels_examples_labels_copy_copy_component_ts_raw"],{

/***/ 95772:
/*!*************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/labels/examples/labels/copy/copy.component.ts?raw ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';\nimport {WA_NAVIGATOR} from '@ng-web-apis/common';\nimport {TuiIcon} from '@taiga-ui/core';\nimport {injectContext} from '@taiga-ui/polymorpheus';\n\n@Component({\n    standalone: true,\n    imports: [TuiIcon],\n    template: `\n        <div\n            class=\"copy\"\n            (click)=\"copy()\"\n        >\n            <tui-icon\n                class=\"copy-icon\"\n                [class.copied]=\"copied()\"\n                [icon]=\"copied() ? '@tui.check' : '@tui.copy'\"\n            />\n            {{ copied() ? 'Copied' : 'Copy' }}\n        </div>\n    `,\n    styleUrls: ['./copy.component.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class CopyComponent {\n    private readonly navigator = inject(WA_NAVIGATOR);\n    protected readonly context = injectContext<{$implicit: string}>();\n    public link = this.context.$implicit;\n\n    protected copied = signal(false);\n\n    protected copy(): void {\n        this.navigator.clipboard.writeText(this.link).then(() => {\n            this.copied.set(true);\n            setTimeout(() => this.copied.set(false), 3000);\n        });\n    }\n}\n";

/***/ })

}]);