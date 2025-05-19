"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_validation_examples_local-1_md_raw"],{

/***/ 3467:
/*!**********************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/validation/examples/local-1.md?raw ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "```ts\n@Component({\n  standalone: true,\n  selector: 'app-your-form-node',\n  imports: [\n    ReactiveFormsModule,\n    // another imports\n  ],\n  templateUrl: './form-node.component.html',\n  styleUrls: ['./form-node.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  host: {\n    '(keydown.delete.stop)': '0',\n    '(keydown.backspace.stop)': '0',\n  },\n})\nexport class FormNodeComponent extends DrawFlowBaseNode {\n  public form = new FormGroup<NodeForm>({\n    field1: new FormGroup<NodeFormGroup>({\n      connectorId: new FormControl<string>('node-5-output-1'),\n      fieldValue: new FormControl<string>('', [Validators.required]),\n    }),\n    field2: new FormGroup<NodeFormGroup>({\n      connectorId: new FormControl<string>('node-5-output-2'),\n      fieldValue: new FormControl<string>('', [Validators.required]),\n    }),\n  });\n\n  public override get invalid(): boolean {\n    return Object.values(this.form.controls).some((fieldGroup: FormGroup<NodeFormGroup>): boolean => {\n      return fieldGroup.controls.fieldValue.dirty && fieldGroup.controls.fieldValue.invalid;\n    });\n  }\n}\n```\n";

/***/ })

}]);