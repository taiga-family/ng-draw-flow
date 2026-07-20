"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_validation_examples_local-1_md_raw"],{

/***/ 83467
/*!**********************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/validation/examples/local-1.md?raw ***!
  \**********************************************************************************/
(module) {

module.exports = "```ts\n@Component({\n  standalone: true,\n  selector: 'app-form-node',\n  imports: [ReactiveFormsModule],\n  template: `\n    <label>\n      Task name\n      <input [formControl]=\"name\" />\n    </label>\n  `,\n  host: {\n    '(keydown.delete.stop)': '0',\n    '(keydown.backspace.stop)': '0',\n  },\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class FormNodeComponent extends DrawFlowBaseNode {\n  readonly name = new FormControl('', {\n    nonNullable: true,\n    validators: [Validators.required],\n  });\n\n  protected override get invalidState(): boolean {\n    const localInvalid = this.name.touched && this.name.invalid;\n\n    return this.invalidSignal() || localInvalid;\n  }\n}\n```\n";

/***/ }

}]);