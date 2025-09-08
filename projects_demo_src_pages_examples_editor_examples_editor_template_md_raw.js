"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_pages_examples_editor_examples_editor_template_md_raw"],{

/***/ 53696:
/*!*********************************************************************************!*\
  !*** ./projects/demo/src/pages/examples/editor/examples/editor.template.md?raw ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "```html\n<div\n  class=\"editor\"\n  [ngClass]=\"{fullscreen: fullscreen$ | async}\"\n>\n  <ng-draw-flow\n    [formControl]=\"form\"\n    (connectionCreated)=\"onConnectionCreated($event)\"\n    (connectionDeleted)=\"onConnectionDeleted($event)\"\n    (nodeDeleted)=\"onNodeDeleted($event)\"\n    (nodeMoved)=\"onNodeMoved($event)\"\n    (nodeSelected)=\"onNodeSelected($event)\"\n    (scale)=\"onScaleChange($event)\"\n  />\n\n  <button\n    class=\"add\"\n    size=\"s\"\n    tuiButton\n    type=\"button\"\n    (click)=\"addNodeToDrawFlow()\"\n  >\n    Add node\n  </button>\n\n  <button\n    class=\"fullscreen-btn\"\n    size=\"s\"\n    tuiButton\n    type=\"button\"\n    (click)=\"toggleFullscreen()\"\n  >\n    {{ (fullscreen$ | async) ? 'Exit from fullscreen' : 'Fullscreen' }}\n  </button>\n\n  <div class=\"scale-controls\">\n    <button\n      size=\"s\"\n      tuiButton\n      type=\"button\"\n      (click)=\"editor.zoomOut()\"\n    >\n      zoomOut\n    </button>\n\n    <div class=\"scale-value\">{{ currentScale$ | async }}%</div>\n\n    <button\n      size=\"s\"\n      tuiButton\n      type=\"button\"\n      (click)=\"editor.zoomIn()\"\n    >\n      zomIn\n    </button>\n  </div>\n</div>\n```\n";

/***/ })

}]);