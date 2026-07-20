"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_state-and-events_examples_state-events-example_componen-c064e1"],{

/***/ 85767
/*!************************************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/state-and-events/examples/state-events-example.component.less?ngResource ***!
  \************************************************************************************************************************/
(module) {

module.exports = ":host {\n    display: block;\n    background: var(--tui-background-base);\n}\n\n.toolbar {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 0.5rem;\n    padding: 0.75rem;\n    border-block-end: 0.0625rem solid var(--tui-border-normal);\n}\n\n.workspace {\n    display: grid;\n    grid-template-columns: minmax(0, 1fr) 16rem;\n    min-block-size: 28rem;\n}\n\n.editor {\n    min-inline-size: 0;\n    background: #fff;\n}\n\n.inspector {\n    padding: 1rem;\n    background: var(--tui-background-neutral-1);\n    border-inline-start: 0.0625rem solid var(--tui-border-normal);\n\n    h3 {\n        margin-block: 0 0.75rem;\n        font-size: 1rem;\n    }\n\n    h3 + ol,\n    h3 + dl {\n        margin-block-start: 0;\n    }\n\n    dl {\n        display: grid;\n        gap: 0.5rem;\n        margin-block-end: 1.5rem;\n    }\n\n    dl > div {\n        display: flex;\n        justify-content: space-between;\n        gap: 1rem;\n    }\n\n    dt {\n        color: var(--tui-text-secondary);\n    }\n\n    dd {\n        margin: 0;\n        text-align: end;\n    }\n\n    ol {\n        display: grid;\n        gap: 0.375rem;\n        padding-inline-start: 1.25rem;\n        font-size: 0.8125rem;\n    }\n}\n\n@media (max-width: 50rem) {\n    .workspace {\n        grid-template-columns: 1fr;\n    }\n\n    .editor {\n        block-size: 24rem;\n    }\n\n    .inspector {\n        border-block-start: 0.0625rem solid var(--tui-border-normal);\n        border-inline-start: 0;\n    }\n}\n";

/***/ }

}]);