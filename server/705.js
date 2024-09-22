"use strict";exports.id=705,exports.ids=[705],exports.modules={80894:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{TuiAddonDocModule:()=>TuiAddonDocModule});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(35548),_taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(33561);let TuiAddonDocModule=(()=>{class TuiAddonDocModule2{}return TuiAddonDocModule2.\u0275fac=function(t){return new(t||TuiAddonDocModule2)},TuiAddonDocModule2.\u0275mod=_angular_core__WEBPACK_IMPORTED_MODULE_0__.oAB({type:TuiAddonDocModule2}),TuiAddonDocModule2.\u0275inj=_angular_core__WEBPACK_IMPORTED_MODULE_0__.cJS({imports:[_taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_1__.JF,_taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_1__.mG,_taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_1__.Lx,_taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_1__.Lq,_taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_1__.u4]}),TuiAddonDocModule2})()},40705:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>StressTestComponent});var _angular_forms__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(25859),_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(94184),_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(80894),ngx_markdown__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(78466),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(35548),_taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(33561);let StressTestComponent=(()=>{var _StressTestComponent;class StressTestComponent2{constructor(){this.data={nodes:this.createNodesMap(13,13),connections:this.createConnectionsArray(13,13)},this.form=new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NI(this.data)}createNodesMap(rows,columns){const nodesMap=new Map;for(let i=1;i<=rows;i++)for(let j=1;j<=columns;j++){const nodeId=`node-${(i-1)*columns+j}`;nodesMap.set(nodeId,{id:nodeId,data:{type:"miniNode",index:(i-1)*columns+j},position:{x:70*(j-1),y:70*(i-1)}})}return nodesMap}createConnectionsArray(rows,columns){const connectionsArray=[];for(let row=1;row<=rows;row++)for(let col=1;col<=columns;col++){const sourceId=`node-${(row-1)*columns+col}`;col<columns?connectionsArray.push({source:{nodeId:sourceId,connectorType:_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.LL.Output,connectorId:"output-1"},target:{nodeId:`node-${(row-1)*columns+col+1}`,connectorType:_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.LL.Input,connectorId:"input-1"}}):row<rows&&connectionsArray.push({source:{nodeId:sourceId,connectorType:_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.LL.Output,connectorId:"output-1"},target:{nodeId:"node-"+(row*columns+1),connectorType:_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.LL.Input,connectorId:"input-1"}})}return connectionsArray}}return(_StressTestComponent=StressTestComponent2).\u0275fac=function(t){return new(t||_StressTestComponent)},_StressTestComponent.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_2__.Xpm({type:_StressTestComponent,selectors:[["stress-test"]],standalone:!0,features:[_angular_core__WEBPACK_IMPORTED_MODULE_2__._Bn([(0,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.KB)({topPosition:50,leftPosition:50})]),_angular_core__WEBPACK_IMPORTED_MODULE_2__.jDz],decls:5,vars:1,consts:[["header","Stress test"],[1,"tui-space_top-4"],[1,"editor"],[3,"formControl"]],template:function(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_2__.TgZ(0,"tui-doc-page",0),_angular_core__WEBPACK_IMPORTED_MODULE_2__._uU(1," You doubt we can render a lot of nodes and edges? See for yourself. "),_angular_core__WEBPACK_IMPORTED_MODULE_2__.TgZ(2,"section",1)(3,"div",2),_angular_core__WEBPACK_IMPORTED_MODULE_2__._UZ(4,"ng-draw-flow",3),_angular_core__WEBPACK_IMPORTED_MODULE_2__.qZA()()()),2&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_2__.xp6(4),_angular_core__WEBPACK_IMPORTED_MODULE_2__.Q6J("formControl",ctx.form))},dependencies:[ngx_markdown__WEBPACK_IMPORTED_MODULE_3__.JP,_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.pg,_angular_forms__WEBPACK_IMPORTED_MODULE_1__.UX,_angular_forms__WEBPACK_IMPORTED_MODULE_1__.JJ,_angular_forms__WEBPACK_IMPORTED_MODULE_1__.oH,_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__.TuiAddonDocModule,_taiga_ui_addon_doc_components__WEBPACK_IMPORTED_MODULE_5__.qo],styles:[".editor{block-size:50rem;inline-size:100%;margin:0 auto;background:#fff}\n"],encapsulation:2,changeDetection:0}),StressTestComponent2})()}};