"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_validation_examples_custom-validator_md_raw"],{

/***/ 79682
/*!*******************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/validation/examples/custom-validator.md?raw ***!
  \*******************************************************************************************/
(module) {

module.exports = "```ts\nexport function requiredRootValidator(): ValidatorFn {\n  return (control): ValidationErrors | null => {\n    const model = control.value as DfDataModel;\n    const roots = model.nodes.filter((node) => node.startNode === true);\n\n    return roots.length === 1 ? null : {requiredRoot: {nodeIds: model.nodes.map(({id}) => id)}};\n  };\n}\n```\n";

/***/ }

}]);