"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_documentation_pan-zoom-configuration_examples_camera-commands_md_raw"],{

/***/ 45825
/*!******************************************************************************************************!*\
  !*** ./projects/demo/src/pages/documentation/pan-zoom-configuration/examples/camera-commands.md?raw ***!
  \******************************************************************************************************/
(module) {

module.exports = "```ts\nreadonly store = inject(NgDrawFlowStoreService);\n\nzoomToOverview(): void {\n  this.store.setPosition({x: 40, y: 40, zoom: 0.75});\n}\n\nzoomToActualSize(): void {\n  this.store.setScale(1);\n}\n\nresetCamera(): void {\n  this.store.resetPosition();\n}\n```\n";

/***/ }

}]);