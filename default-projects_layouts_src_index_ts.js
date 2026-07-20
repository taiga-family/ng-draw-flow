"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["default-projects_layouts_src_index_ts"],{

/***/ 48503
/*!***************************************!*\
  !*** ./projects/layouts/src/index.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DfAutoLayoutService: () => (/* reexport safe */ _lib_auto_layout_service__WEBPACK_IMPORTED_MODULE_0__.DfAutoLayoutService),
/* harmony export */   DfNodeSizingStrategy: () => (/* reexport safe */ _lib_layout_interfaces__WEBPACK_IMPORTED_MODULE_2__.DfNodeSizingStrategy),
/* harmony export */   DfTreeLayoutDirection: () => (/* reexport safe */ _lib_layout_interfaces__WEBPACK_IMPORTED_MODULE_2__.DfTreeLayoutDirection),
/* harmony export */   DfTreeLayoutError: () => (/* reexport safe */ _lib_tree_tree_layout_error__WEBPACK_IMPORTED_MODULE_3__.DfTreeLayoutError),
/* harmony export */   provideNgDrawFlowLayouts: () => (/* reexport safe */ _lib_layout_configs__WEBPACK_IMPORTED_MODULE_1__.provideNgDrawFlowLayouts)
/* harmony export */ });
/* harmony import */ var _lib_auto_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/auto-layout.service */ 57778);
/* harmony import */ var _lib_layout_configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/layout.configs */ 51328);
/* harmony import */ var _lib_layout_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/layout.interfaces */ 62291);
/* harmony import */ var _lib_tree_tree_layout_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/tree/tree-layout.error */ 51069);





/***/ },

/***/ 57778
/*!*********************************************************!*\
  !*** ./projects/layouts/src/lib/auto-layout.service.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DfAutoLayoutService: () => (/* binding */ DfAutoLayoutService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _layout_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.interfaces */ 62291);
/* harmony import */ var _tree_d3_tree_layout_engine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree/d3-tree-layout.engine */ 88707);
/* harmony import */ var _tree_layout_options_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tree-layout-options.token */ 30562);
var _DfAutoLayoutService;






const EMPTY_NODE_SIZES = new Map();
const EMPTY_CONNECTOR_ORDERS = new Map();
class DfAutoLayoutService {
  constructor() {
    var _this$treeOptions$nod;
    this.store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.NgDrawFlowStoreService);
    this.treeOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_tree_layout_options_token__WEBPACK_IMPORTED_MODULE_4__.DF_TREE_LAYOUT_OPTIONS);
    this.nodeSizeRegistry = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DF_NODE_SIZE_REGISTRY);
    this.connectorOrderRegistry = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_1__.DF_CONNECTOR_ORDER_REGISTRY);
    this.engine = new _tree_d3_tree_layout_engine__WEBPACK_IMPORTED_MODULE_3__.D3TreeLayoutEngine(this.treeOptions);
    this.runningSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false);
    this.resultSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    this.errorSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    this.lastAppliedSizes = null;
    this.lastAppliedConnectorOrders = null;
    this.hasApplied = false;
    this.running = this.runningSignal.asReadonly();
    this.result = this.resultSignal.asReadonly();
    this.error = this.errorSignal.asReadonly();
    const nodeSizeRegistry = this.nodeSizeRegistry;
    if (((_this$treeOptions$nod = this.treeOptions.nodeSizing) === null || _this$treeOptions$nod === void 0 ? void 0 : _this$treeOptions$nod.strategy) === _layout_interfaces__WEBPACK_IMPORTED_MODULE_2__.DfNodeSizingStrategy.Measured && nodeSizeRegistry) {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
        const sizes = nodeSizeRegistry.sizes();
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.untracked)(() => this.applyMeasuredSizes(sizes));
      });
    }
    const connectorOrderRegistry = this.connectorOrderRegistry;
    if (connectorOrderRegistry) {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
        const orders = connectorOrderRegistry.orders();
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.untracked)(() => this.applyConnectorOrders(orders));
      });
    }
  }
  apply(options = {}) {
    var _options$model, _this$nodeSizeRegistr, _this$nodeSizeRegistr2, _this$connectorOrderR, _this$connectorOrderR2, _this$treeOptions$nod2;
    const sourceModel = this.store.dataModel();
    const model = (_options$model = options.model) !== null && _options$model !== void 0 ? _options$model : sourceModel;
    if (!model) {
      return;
    }
    const measuredSizes = (_this$nodeSizeRegistr = (_this$nodeSizeRegistr2 = this.nodeSizeRegistry) === null || _this$nodeSizeRegistr2 === void 0 ? void 0 : _this$nodeSizeRegistr2.sizes()) !== null && _this$nodeSizeRegistr !== void 0 ? _this$nodeSizeRegistr : EMPTY_NODE_SIZES;
    const connectorOrders = (_this$connectorOrderR = (_this$connectorOrderR2 = this.connectorOrderRegistry) === null || _this$connectorOrderR2 === void 0 ? void 0 : _this$connectorOrderR2.orders()) !== null && _this$connectorOrderR !== void 0 ? _this$connectorOrderR : EMPTY_CONNECTOR_ORDERS;
    this.hasApplied = true;
    this.lastAppliedConnectorOrders = connectorOrders;
    if (((_this$treeOptions$nod2 = this.treeOptions.nodeSizing) === null || _this$treeOptions$nod2 === void 0 ? void 0 : _this$treeOptions$nod2.strategy) === _layout_interfaces__WEBPACK_IMPORTED_MODULE_2__.DfNodeSizingStrategy.Measured) {
      this.lastAppliedSizes = measuredSizes;
      this.pendingMeasurementAnchorNodeId = this.hasMissingSizes(model, measuredSizes) ? options.anchorNodeId : undefined;
    }
    this.applyLayout(model, sourceModel !== null && sourceModel !== void 0 ? sourceModel : model, measuredSizes, connectorOrders, options.anchorNodeId);
  }
  applyMeasuredSizes(sizes) {
    var _this$connectorOrderR3, _this$connectorOrderR4;
    const model = this.store.dataModel();
    if (!model || sizes === this.lastAppliedSizes || this.hasMissingSizes(model, sizes)) {
      return;
    }
    const anchorNodeId = this.pendingMeasurementAnchorNodeId;
    this.lastAppliedSizes = sizes;
    this.pendingMeasurementAnchorNodeId = undefined;
    this.applyLayout(model, model, sizes, (_this$connectorOrderR3 = (_this$connectorOrderR4 = this.connectorOrderRegistry) === null || _this$connectorOrderR4 === void 0 ? void 0 : _this$connectorOrderR4.orders()) !== null && _this$connectorOrderR3 !== void 0 ? _this$connectorOrderR3 : EMPTY_CONNECTOR_ORDERS, anchorNodeId);
  }
  applyConnectorOrders(orders) {
    var _this$nodeSizeRegistr3, _this$nodeSizeRegistr4, _this$treeOptions$nod3;
    const model = this.store.dataModel();
    const measuredSizes = (_this$nodeSizeRegistr3 = (_this$nodeSizeRegistr4 = this.nodeSizeRegistry) === null || _this$nodeSizeRegistr4 === void 0 ? void 0 : _this$nodeSizeRegistr4.sizes()) !== null && _this$nodeSizeRegistr3 !== void 0 ? _this$nodeSizeRegistr3 : EMPTY_NODE_SIZES;
    if (!this.hasApplied || !model || orders === this.lastAppliedConnectorOrders || ((_this$treeOptions$nod3 = this.treeOptions.nodeSizing) === null || _this$treeOptions$nod3 === void 0 ? void 0 : _this$treeOptions$nod3.strategy) === _layout_interfaces__WEBPACK_IMPORTED_MODULE_2__.DfNodeSizingStrategy.Measured && this.hasMissingSizes(model, measuredSizes)) {
      return;
    }
    this.lastAppliedConnectorOrders = orders;
    this.applyLayout(model, model, measuredSizes, orders);
  }
  applyLayout(model, sourceModel, measuredSizes, connectorOrders, anchorNodeId) {
    this.runningSignal.set(true);
    this.errorSignal.set(null);
    try {
      const result = this.engine.layout(model, measuredSizes, connectorOrders);
      const anchoredResult = this.anchorResult(sourceModel, result, anchorNodeId);
      this.store.setDataModel(anchoredResult.model);
      this.resultSignal.set(anchoredResult);
    } catch (error) {
      this.resultSignal.set(null);
      this.errorSignal.set(error instanceof Error ? error : new Error(String(error)));
    } finally {
      this.runningSignal.set(false);
    }
  }
  hasMissingSizes(model, sizes) {
    return model.nodes.some(({
      id
    }) => !sizes.has(id));
  }
  anchorResult(sourceModel, result, anchorNodeId) {
    if (!anchorNodeId) {
      return result;
    }
    const sourceAnchor = sourceModel.nodes.find(({
      id
    }) => id === anchorNodeId);
    const resultAnchor = result.model.nodes.find(({
      id
    }) => id === anchorNodeId);
    if (!sourceAnchor || !resultAnchor || !('position' in sourceAnchor) || !('position' in resultAnchor) || !Number.isFinite(sourceAnchor.position.x) || !Number.isFinite(sourceAnchor.position.y) || !Number.isFinite(resultAnchor.position.x) || !Number.isFinite(resultAnchor.position.y)) {
      return result;
    }
    const deltaX = sourceAnchor.position.x - resultAnchor.position.x;
    const deltaY = sourceAnchor.position.y - resultAnchor.position.y;
    if (!deltaX && !deltaY) {
      return result;
    }
    return {
      ...result,
      model: {
        ...result.model,
        nodes: result.model.nodes.map(node => 'position' in node ? {
          ...node,
          position: {
            x: node.position.x + deltaX,
            y: node.position.y + deltaY
          }
        } : node)
      }
    };
  }
}
_DfAutoLayoutService = DfAutoLayoutService;
_DfAutoLayoutService.ɵfac = function DfAutoLayoutService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DfAutoLayoutService)();
};
_DfAutoLayoutService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _DfAutoLayoutService,
  factory: _DfAutoLayoutService.ɵfac,
  providedIn: 'root'
});

/***/ },

/***/ 51328
/*!****************************************************!*\
  !*** ./projects/layouts/src/lib/layout.configs.ts ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideNgDrawFlowLayouts: () => (/* binding */ provideNgDrawFlowLayouts)
/* harmony export */ });
/* harmony import */ var _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-draw-flow/core */ 85577);
/* harmony import */ var _auto_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auto-layout.service */ 57778);
/* harmony import */ var _layout_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.interfaces */ 62291);
/* harmony import */ var _tree_layout_options_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree-layout-options.token */ 30562);




function provideNgDrawFlowLayouts(options = {}) {
  var _options$tree, _options$tree2;
  const providers = [_auto_layout_service__WEBPACK_IMPORTED_MODULE_1__.DfAutoLayoutService, _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfConnectorOrderRegistryService, {
    provide: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DF_CONNECTOR_ORDER_REGISTRY,
    useExisting: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfConnectorOrderRegistryService
  }, {
    provide: _tree_layout_options_token__WEBPACK_IMPORTED_MODULE_3__.DF_TREE_LAYOUT_OPTIONS,
    useValue: (_options$tree = options.tree) !== null && _options$tree !== void 0 ? _options$tree : {}
  }];
  if (((_options$tree2 = options.tree) === null || _options$tree2 === void 0 || (_options$tree2 = _options$tree2.nodeSizing) === null || _options$tree2 === void 0 ? void 0 : _options$tree2.strategy) === _layout_interfaces__WEBPACK_IMPORTED_MODULE_2__.DfNodeSizingStrategy.Measured) {
    providers.push(_ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfNodeSizeRegistryService, {
      provide: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DF_NODE_SIZE_REGISTRY,
      useExisting: _ng_draw_flow_core__WEBPACK_IMPORTED_MODULE_0__.DfNodeSizeRegistryService
    });
  }
  return providers;
}

/***/ },

/***/ 62291
/*!*******************************************************!*\
  !*** ./projects/layouts/src/lib/layout.interfaces.ts ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DfNodeSizingStrategy: () => (/* binding */ DfNodeSizingStrategy),
/* harmony export */   DfTreeLayoutDirection: () => (/* binding */ DfTreeLayoutDirection)
/* harmony export */ });
var DfTreeLayoutDirection;
(function (DfTreeLayoutDirection) {
  DfTreeLayoutDirection["BottomToTop"] = "bottom-to-top";
  DfTreeLayoutDirection["LeftToRight"] = "left-to-right";
  DfTreeLayoutDirection["RightToLeft"] = "right-to-left";
  DfTreeLayoutDirection["TopToBottom"] = "top-to-bottom";
})(DfTreeLayoutDirection || (DfTreeLayoutDirection = {}));
var DfNodeSizingStrategy;
(function (DfNodeSizingStrategy) {
  DfNodeSizingStrategy["Fixed"] = "fixed";
  DfNodeSizingStrategy["Measured"] = "measured";
})(DfNodeSizingStrategy || (DfNodeSizingStrategy = {}));

/***/ },

/***/ 30562
/*!***************************************************************!*\
  !*** ./projects/layouts/src/lib/tree-layout-options.token.ts ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DF_TREE_LAYOUT_OPTIONS: () => (/* binding */ DF_TREE_LAYOUT_OPTIONS)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);

const DF_TREE_LAYOUT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('[DF_TREE_LAYOUT_OPTIONS]: Tree layout options', {
  factory: () => ({})
});

/***/ },

/***/ 88707
/*!****************************************************************!*\
  !*** ./projects/layouts/src/lib/tree/d3-tree-layout.engine.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D3TreeLayoutEngine: () => (/* binding */ D3TreeLayoutEngine)
/* harmony export */ });
/* harmony import */ var d3_hierarchy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-hierarchy */ 82207);
/* harmony import */ var d3_hierarchy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-hierarchy */ 42527);
/* harmony import */ var _layout_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout.interfaces */ 62291);
/* harmony import */ var _tree_layout_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree-layout.error */ 51069);



const DEFAULT_NODE_SIZE = {
  width: 180,
  height: 64
};
const DEFAULT_LEVEL_GAP = 80;
const DEFAULT_SIBLING_GAP = 32;
const DEFAULT_ORIGIN = {
  x: 0,
  y: 0
};
const EMPTY_CONNECTOR_ORDERS = new Map();
class D3TreeLayoutEngine {
  constructor(options = {}) {
    this.options = options;
    this.id = 'd3-tree';
  }
  layout(model, measuredSizes = new Map(), connectorOrders = EMPTY_CONNECTOR_ORDERS) {
    var _this$options$directi, _this$options$sibling;
    const direction = (_this$options$directi = this.options.direction) !== null && _this$options$directi !== void 0 ? _this$options$directi : _layout_interfaces__WEBPACK_IMPORTED_MODULE_2__.DfTreeLayoutDirection.LeftToRight;
    if (!model.nodes.length) {
      return {
        model: {
          ...model,
          nodes: [],
          connections: model.connections.slice()
        },
        diagnostics: []
      };
    }
    const graph = this.buildGraph(model, connectorOrders);
    const root = (0,d3_hierarchy__WEBPACK_IMPORTED_MODULE_0__["default"])(graph.root, node => {
      var _graph$children$get;
      return (_graph$children$get = graph.children.get(node.id)) !== null && _graph$children$get !== void 0 ? _graph$children$get : [];
    });
    const horizontal = direction === _layout_interfaces__WEBPACK_IMPORTED_MODULE_2__.DfTreeLayoutDirection.LeftToRight || direction === _layout_interfaces__WEBPACK_IMPORTED_MODULE_2__.DfTreeLayoutDirection.RightToLeft;
    const sizes = new Map(model.nodes.map(({
      id
    }) => [id, this.resolveNodeSize(id, measuredSizes)]));
    const breadthSize = nodeId => {
      const size = sizes.get(nodeId);
      return horizontal ? size.height : size.width;
    };
    const depthSize = nodeId => {
      const size = sizes.get(nodeId);
      return horizontal ? size.width : size.height;
    };
    const siblingGap = (_this$options$sibling = this.options.siblingGap) !== null && _this$options$sibling !== void 0 ? _this$options$sibling : DEFAULT_SIBLING_GAP;
    const maxDepthSizes = [];
    root.each(node => {
      var _maxDepthSizes$node$d;
      maxDepthSizes[node.depth] = Math.max((_maxDepthSizes$node$d = maxDepthSizes[node.depth]) !== null && _maxDepthSizes$node$d !== void 0 ? _maxDepthSizes$node$d : 0, depthSize(node.data.id));
    });
    const depthOffsets = maxDepthSizes.map((_, depth) => {
      let offset = 0;
      for (let index = 1; index <= depth; index++) {
        var _this$options$levelGa;
        offset += maxDepthSizes[index - 1] / 2 + ((_this$options$levelGa = this.options.levelGap) !== null && _this$options$levelGa !== void 0 ? _this$options$levelGa : DEFAULT_LEVEL_GAP) + maxDepthSizes[index] / 2;
      }
      return offset;
    });
    (0,d3_hierarchy__WEBPACK_IMPORTED_MODULE_1__["default"])().nodeSize([1, 1]).separation((left, right) => {
      const distance = (breadthSize(left.data.id) + breadthSize(right.data.id)) / 2 + siblingGap;
      return left.parent === right.parent ? distance : distance * 1.25;
    })(root);
    const anchor = this.resolveAnchor(graph.root);
    const positions = new Map();
    root.each(node => {
      var _node$x, _depthOffsets$node$de;
      positions.set(node.data.id, this.orientPosition(direction, anchor, (_node$x = node.x) !== null && _node$x !== void 0 ? _node$x : 0, (_depthOffsets$node$de = depthOffsets[node.depth]) !== null && _depthOffsets$node$de !== void 0 ? _depthOffsets$node$de : 0));
    });
    return {
      model: {
        ...model,
        nodes: model.nodes.map(node => ({
          ...node,
          data: {
            ...node.data
          },
          position: positions.get(node.id)
        })),
        connections: model.connections.map(connection => ({
          ...connection,
          source: {
            ...connection.source
          },
          target: {
            ...connection.target
          },
          label: connection.label ? {
            ...connection.label
          } : undefined
        }))
      },
      diagnostics: []
    };
  }
  resolveNodeSize(nodeId, measuredSizes) {
    const sizing = this.options.nodeSizing;
    if ((sizing === null || sizing === void 0 ? void 0 : sizing.strategy) === _layout_interfaces__WEBPACK_IMPORTED_MODULE_2__.DfNodeSizingStrategy.Measured) {
      var _measuredSizes$get;
      return (_measuredSizes$get = measuredSizes.get(nodeId)) !== null && _measuredSizes$get !== void 0 ? _measuredSizes$get : sizing.fallback;
    }
    return (sizing === null || sizing === void 0 ? void 0 : sizing.strategy) === _layout_interfaces__WEBPACK_IMPORTED_MODULE_2__.DfNodeSizingStrategy.Fixed ? sizing.size : DEFAULT_NODE_SIZE;
  }
  buildGraph(model, connectorOrders) {
    var _rootCandidates$;
    const nodes = new Map();
    model.nodes.forEach(node => {
      if (nodes.has(node.id)) {
        throw new _tree_layout_error__WEBPACK_IMPORTED_MODULE_3__.DfTreeLayoutError('duplicate-node', `Tree layout requires unique node ids; "${node.id}" is duplicated.`, [node.id]);
      }
      nodes.set(node.id, node);
    });
    const parentByChild = new Map();
    const childrenByParent = new Map();
    const sourceConnectorByChild = new Map();
    const links = new Set();
    model.connections.forEach(connection => {
      var _childrenByParent$get;
      const parentId = connection.source.nodeId;
      const childId = connection.target.nodeId;
      const parent = nodes.get(parentId);
      const child = nodes.get(childId);
      if (!parent || !child) {
        const missingIds = [parent ? null : parentId, child ? null : childId].filter(id => id !== null);
        throw new _tree_layout_error__WEBPACK_IMPORTED_MODULE_3__.DfTreeLayoutError('missing-node', `Tree layout connection references missing node(s): ${missingIds.join(', ')}.`, missingIds);
      }
      const linkKey = `${parentId}\u0000${childId}`;
      if (links.has(linkKey)) {
        return;
      }
      links.add(linkKey);
      const existingParent = parentByChild.get(childId);
      if (existingParent && existingParent !== parentId) {
        throw new _tree_layout_error__WEBPACK_IMPORTED_MODULE_3__.DfTreeLayoutError('multiple-parents', `Tree node "${childId}" has more than one parent.`, [existingParent, parentId, childId]);
      }
      parentByChild.set(childId, parentId);
      sourceConnectorByChild.set(childId, connection.source.connectorId);
      childrenByParent.set(parentId, [...((_childrenByParent$get = childrenByParent.get(parentId)) !== null && _childrenByParent$get !== void 0 ? _childrenByParent$get : []), child]);
    });
    this.sortChildrenByOutputOrder(childrenByParent, sourceConnectorByChild, connectorOrders);
    const rootCandidates = model.nodes.filter(node => !parentByChild.has(node.id));
    const root = this.options.rootId ? nodes.get(this.options.rootId) : rootCandidates[0];
    if (!root || parentByChild.has(root.id) || rootCandidates.length !== 1 || this.options.rootId && ((_rootCandidates$ = rootCandidates[0]) === null || _rootCandidates$ === void 0 ? void 0 : _rootCandidates$.id) !== this.options.rootId) {
      throw new _tree_layout_error__WEBPACK_IMPORTED_MODULE_3__.DfTreeLayoutError('invalid-root', 'Tree layout requires exactly one root node with no incoming connections.', rootCandidates.map(({
        id
      }) => id));
    }
    const visited = new Set();
    const pending = [root];
    while (pending.length) {
      var _childrenByParent$get2;
      const current = pending.pop();
      if (visited.has(current.id)) {
        continue;
      }
      visited.add(current.id);
      pending.push(...((_childrenByParent$get2 = childrenByParent.get(current.id)) !== null && _childrenByParent$get2 !== void 0 ? _childrenByParent$get2 : []));
    }
    if (visited.size !== model.nodes.length) {
      const disconnected = model.nodes.filter(node => !visited.has(node.id)).map(({
        id
      }) => id);
      throw new _tree_layout_error__WEBPACK_IMPORTED_MODULE_3__.DfTreeLayoutError('disconnected-graph', `Tree layout cannot reach node(s) from root "${root.id}": ${disconnected.join(', ')}.`, disconnected);
    }
    return {
      root,
      children: childrenByParent
    };
  }
  sortChildrenByOutputOrder(childrenByParent, sourceConnectorByChild, connectorOrders) {
    childrenByParent.forEach((children, parentId) => {
      const connectorIds = [...new Set(children.map(child => sourceConnectorByChild.get(child.id)))];
      if (connectorIds.length < 2) {
        return;
      }
      const nodeOrders = connectorOrders.get(parentId);
      const orderByConnector = new Map();
      const connectorByOrder = new Map();
      connectorIds.forEach(connectorId => {
        const order = nodeOrders === null || nodeOrders === void 0 ? void 0 : nodeOrders.get(connectorId);
        if (order === undefined || order === null) {
          throw new _tree_layout_error__WEBPACK_IMPORTED_MODULE_3__.DfTreeLayoutError('missing-output-order', `Tree node "${parentId}" has multiple connected outputs, but connector "${connectorId}" has no layoutOrder.`, [parentId]);
        }
        if (!Number.isInteger(order) || order < 0) {
          throw new _tree_layout_error__WEBPACK_IMPORTED_MODULE_3__.DfTreeLayoutError('invalid-output-order', `Tree output "${connectorId}" on node "${parentId}" requires a non-negative integer layoutOrder.`, [parentId]);
        }
        const duplicateConnectorId = connectorByOrder.get(order);
        if (duplicateConnectorId) {
          throw new _tree_layout_error__WEBPACK_IMPORTED_MODULE_3__.DfTreeLayoutError('duplicate-output-order', `Tree outputs "${duplicateConnectorId}" and "${connectorId}" on node "${parentId}" use the same layoutOrder ${order}.`, [parentId]);
        }
        orderByConnector.set(connectorId, order);
        connectorByOrder.set(order, connectorId);
      });
      children.sort((left, right) => orderByConnector.get(sourceConnectorByChild.get(left.id)) - orderByConnector.get(sourceConnectorByChild.get(right.id)));
    });
  }
  resolveAnchor(root) {
    var _this$options$origin;
    if (this.options.preserveRootPosition !== false && 'position' in root && Number.isFinite(root.position.x) && Number.isFinite(root.position.y)) {
      return {
        ...root.position
      };
    }
    return {
      ...((_this$options$origin = this.options.origin) !== null && _this$options$origin !== void 0 ? _this$options$origin : DEFAULT_ORIGIN)
    };
  }
  orientPosition(direction, anchor, breadth, depth) {
    switch (direction) {
      case _layout_interfaces__WEBPACK_IMPORTED_MODULE_2__.DfTreeLayoutDirection.BottomToTop:
        return {
          x: anchor.x + breadth,
          y: anchor.y - depth
        };
      case _layout_interfaces__WEBPACK_IMPORTED_MODULE_2__.DfTreeLayoutDirection.RightToLeft:
        return {
          x: anchor.x - depth,
          y: anchor.y + breadth
        };
      case _layout_interfaces__WEBPACK_IMPORTED_MODULE_2__.DfTreeLayoutDirection.TopToBottom:
        return {
          x: anchor.x + breadth,
          y: anchor.y + depth
        };
      case _layout_interfaces__WEBPACK_IMPORTED_MODULE_2__.DfTreeLayoutDirection.LeftToRight:
      default:
        return {
          x: anchor.x + depth,
          y: anchor.y + breadth
        };
    }
  }
}

/***/ },

/***/ 51069
/*!************************************************************!*\
  !*** ./projects/layouts/src/lib/tree/tree-layout.error.ts ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DfTreeLayoutError: () => (/* binding */ DfTreeLayoutError)
/* harmony export */ });
class DfTreeLayoutError extends Error {
  constructor(code, message, nodeIds = []) {
    super(message);
    this.code = code;
    this.nodeIds = nodeIds;
    this.name = 'DfTreeLayoutError';
  }
}

/***/ },

/***/ 97525
/*!**************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/ancestors.js ***!
  \**************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var node = this,
    nodes = [node];
  while (node = node.parent) {
    nodes.push(node);
  }
  return nodes;
}

/***/ },

/***/ 68808
/*!**********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/count.js ***!
  \**********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function count(node) {
  var sum = 0,
    children = node.children,
    i = children && children.length;
  if (!i) sum = 1;else while (--i >= 0) sum += children[i].value;
  node.value = sum;
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.eachAfter(count);
}

/***/ },

/***/ 71095
/*!****************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/descendants.js ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return Array.from(this);
}

/***/ },

/***/ 47966
/*!*********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/each.js ***!
  \*********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback, that) {
  let index = -1;
  for (const node of this) {
    callback.call(that, node, ++index, this);
  }
  return this;
}

/***/ },

/***/ 10426
/*!**************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/eachAfter.js ***!
  \**************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback, that) {
  var node = this,
    nodes = [node],
    next = [],
    children,
    i,
    n,
    index = -1;
  while (node = nodes.pop()) {
    next.push(node);
    if (children = node.children) {
      for (i = 0, n = children.length; i < n; ++i) {
        nodes.push(children[i]);
      }
    }
  }
  while (node = next.pop()) {
    callback.call(that, node, ++index, this);
  }
  return this;
}

/***/ },

/***/ 87361
/*!***************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/eachBefore.js ***!
  \***************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback, that) {
  var node = this,
    nodes = [node],
    children,
    i,
    index = -1;
  while (node = nodes.pop()) {
    callback.call(that, node, ++index, this);
    if (children = node.children) {
      for (i = children.length - 1; i >= 0; --i) {
        nodes.push(children[i]);
      }
    }
  }
  return this;
}

/***/ },

/***/ 47916
/*!*********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/find.js ***!
  \*********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback, that) {
  let index = -1;
  for (const node of this) {
    if (callback.call(that, node, ++index, this)) {
      return node;
    }
  }
}

/***/ },

/***/ 82207
/*!**********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/index.js ***!
  \**********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Node: () => (/* binding */ Node),
/* harmony export */   computeHeight: () => (/* binding */ computeHeight),
/* harmony export */   "default": () => (/* binding */ hierarchy)
/* harmony export */ });
/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./count.js */ 68808);
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each.js */ 47966);
/* harmony import */ var _eachBefore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eachBefore.js */ 87361);
/* harmony import */ var _eachAfter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eachAfter.js */ 10426);
/* harmony import */ var _find_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./find.js */ 47916);
/* harmony import */ var _sum_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sum.js */ 77260);
/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sort.js */ 64511);
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./path.js */ 95168);
/* harmony import */ var _ancestors_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ancestors.js */ 97525);
/* harmony import */ var _descendants_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./descendants.js */ 71095);
/* harmony import */ var _leaves_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./leaves.js */ 59559);
/* harmony import */ var _links_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./links.js */ 1134);
/* harmony import */ var _iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./iterator.js */ 62089);













function hierarchy(data, children) {
  if (data instanceof Map) {
    data = [undefined, data];
    if (children === undefined) children = mapChildren;
  } else if (children === undefined) {
    children = objectChildren;
  }
  var root = new Node(data),
    node,
    nodes = [root],
    child,
    childs,
    i,
    n;
  while (node = nodes.pop()) {
    if ((childs = children(node.data)) && (n = (childs = Array.from(childs)).length)) {
      node.children = childs;
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = childs[i] = new Node(childs[i]));
        child.parent = node;
        child.depth = node.depth + 1;
      }
    }
  }
  return root.eachBefore(computeHeight);
}
function node_copy() {
  return hierarchy(this).eachBefore(copyData);
}
function objectChildren(d) {
  return d.children;
}
function mapChildren(d) {
  return Array.isArray(d) ? d[1] : null;
}
function copyData(node) {
  if (node.data.value !== undefined) node.value = node.data.value;
  node.data = node.data.data;
}
function computeHeight(node) {
  var height = 0;
  do node.height = height; while ((node = node.parent) && node.height < ++height);
}
function Node(data) {
  this.data = data;
  this.depth = this.height = 0;
  this.parent = null;
}
Node.prototype = hierarchy.prototype = {
  constructor: Node,
  count: _count_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  each: _each_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  eachAfter: _eachAfter_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  eachBefore: _eachBefore_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  find: _find_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  sum: _sum_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  sort: _sort_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  path: _path_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  ancestors: _ancestors_js__WEBPACK_IMPORTED_MODULE_8__["default"],
  descendants: _descendants_js__WEBPACK_IMPORTED_MODULE_9__["default"],
  leaves: _leaves_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  links: _links_js__WEBPACK_IMPORTED_MODULE_11__["default"],
  copy: node_copy,
  [Symbol.iterator]: _iterator_js__WEBPACK_IMPORTED_MODULE_12__["default"]
};

/***/ },

/***/ 62089
/*!*************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/iterator.js ***!
  \*************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function* __WEBPACK_DEFAULT_EXPORT__() {
  var node = this,
    current,
    next = [node],
    children,
    i,
    n;
  do {
    current = next.reverse(), next = [];
    while (node = current.pop()) {
      yield node;
      if (children = node.children) {
        for (i = 0, n = children.length; i < n; ++i) {
          next.push(children[i]);
        }
      }
    }
  } while (next.length);
}

/***/ },

/***/ 59559
/*!***********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/leaves.js ***!
  \***********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var leaves = [];
  this.eachBefore(function (node) {
    if (!node.children) {
      leaves.push(node);
    }
  });
  return leaves;
}

/***/ },

/***/ 1134
/*!**********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/links.js ***!
  \**********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var root = this,
    links = [];
  root.each(function (node) {
    if (node !== root) {
      // Don’t include the root’s parent, if any.
      links.push({
        source: node.parent,
        target: node
      });
    }
  });
  return links;
}

/***/ },

/***/ 95168
/*!*********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/path.js ***!
  \*********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(end) {
  var start = this,
    ancestor = leastCommonAncestor(start, end),
    nodes = [start];
  while (start !== ancestor) {
    start = start.parent;
    nodes.push(start);
  }
  var k = nodes.length;
  while (end !== ancestor) {
    nodes.splice(k, 0, end);
    end = end.parent;
  }
  return nodes;
}
function leastCommonAncestor(a, b) {
  if (a === b) return a;
  var aNodes = a.ancestors(),
    bNodes = b.ancestors(),
    c = null;
  a = aNodes.pop();
  b = bNodes.pop();
  while (a === b) {
    c = a;
    a = aNodes.pop();
    b = bNodes.pop();
  }
  return c;
}

/***/ },

/***/ 64511
/*!*********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/sort.js ***!
  \*********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(compare) {
  return this.eachBefore(function (node) {
    if (node.children) {
      node.children.sort(compare);
    }
  });
}

/***/ },

/***/ 77260
/*!********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/sum.js ***!
  \********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return this.eachAfter(function (node) {
    var sum = +value(node.data) || 0,
      children = node.children,
      i = children && children.length;
    while (--i >= 0) sum += children[i].value;
    node.value = sum;
  });
}

/***/ },

/***/ 42527
/*!***********************************************!*\
  !*** ./node_modules/d3-hierarchy/src/tree.js ***!
  \***********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hierarchy_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hierarchy/index.js */ 82207);

function defaultSeparation(a, b) {
  return a.parent === b.parent ? 1 : 2;
}

// function radialSeparation(a, b) {
//   return (a.parent === b.parent ? 1 : 2) / a.depth;
// }

// This function is used to traverse the left contour of a subtree (or
// subforest). It returns the successor of v on this contour. This successor is
// either given by the leftmost child of v or by the thread of v. The function
// returns null if and only if v is on the highest level of its subtree.
function nextLeft(v) {
  var children = v.children;
  return children ? children[0] : v.t;
}

// This function works analogously to nextLeft.
function nextRight(v) {
  var children = v.children;
  return children ? children[children.length - 1] : v.t;
}

// Shifts the current subtree rooted at w+. This is done by increasing
// prelim(w+) and mod(w+) by shift.
function moveSubtree(wm, wp, shift) {
  var change = shift / (wp.i - wm.i);
  wp.c -= change;
  wp.s += shift;
  wm.c += change;
  wp.z += shift;
  wp.m += shift;
}

// All other shifts, applied to the smaller subtrees between w- and w+, are
// performed by this function. To prepare the shifts, we have to adjust
// change(w+), shift(w+), and change(w-).
function executeShifts(v) {
  var shift = 0,
    change = 0,
    children = v.children,
    i = children.length,
    w;
  while (--i >= 0) {
    w = children[i];
    w.z += shift;
    w.m += shift;
    shift += w.s + (change += w.c);
  }
}

// If vi-’s ancestor is a sibling of v, returns vi-’s ancestor. Otherwise,
// returns the specified (default) ancestor.
function nextAncestor(vim, v, ancestor) {
  return vim.a.parent === v.parent ? vim.a : ancestor;
}
function TreeNode(node, i) {
  this._ = node;
  this.parent = null;
  this.children = null;
  this.A = null; // default ancestor
  this.a = this; // ancestor
  this.z = 0; // prelim
  this.m = 0; // mod
  this.c = 0; // change
  this.s = 0; // shift
  this.t = null; // thread
  this.i = i; // number
}
TreeNode.prototype = Object.create(_hierarchy_index_js__WEBPACK_IMPORTED_MODULE_0__.Node.prototype);
function treeRoot(root) {
  var tree = new TreeNode(root, 0),
    node,
    nodes = [tree],
    child,
    children,
    i,
    n;
  while (node = nodes.pop()) {
    if (children = node._.children) {
      node.children = new Array(n = children.length);
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new TreeNode(children[i], i));
        child.parent = node;
      }
    }
  }
  (tree.parent = new TreeNode(null, 0)).children = [tree];
  return tree;
}

// Node-link tree diagram using the Reingold-Tilford "tidy" algorithm
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var separation = defaultSeparation,
    dx = 1,
    dy = 1,
    nodeSize = null;
  function tree(root) {
    var t = treeRoot(root);

    // Compute the layout using Buchheim et al.’s algorithm.
    t.eachAfter(firstWalk), t.parent.m = -t.z;
    t.eachBefore(secondWalk);

    // If a fixed node size is specified, scale x and y.
    if (nodeSize) root.eachBefore(sizeNode);

    // If a fixed tree size is specified, scale x and y based on the extent.
    // Compute the left-most, right-most, and depth-most nodes for extents.
    else {
      var left = root,
        right = root,
        bottom = root;
      root.eachBefore(function (node) {
        if (node.x < left.x) left = node;
        if (node.x > right.x) right = node;
        if (node.depth > bottom.depth) bottom = node;
      });
      var s = left === right ? 1 : separation(left, right) / 2,
        tx = s - left.x,
        kx = dx / (right.x + s + tx),
        ky = dy / (bottom.depth || 1);
      root.eachBefore(function (node) {
        node.x = (node.x + tx) * kx;
        node.y = node.depth * ky;
      });
    }
    return root;
  }

  // Computes a preliminary x-coordinate for v. Before that, FIRST WALK is
  // applied recursively to the children of v, as well as the function
  // APPORTION. After spacing out the children by calling EXECUTE SHIFTS, the
  // node v is placed to the midpoint of its outermost children.
  function firstWalk(v) {
    var children = v.children,
      siblings = v.parent.children,
      w = v.i ? siblings[v.i - 1] : null;
    if (children) {
      executeShifts(v);
      var midpoint = (children[0].z + children[children.length - 1].z) / 2;
      if (w) {
        v.z = w.z + separation(v._, w._);
        v.m = v.z - midpoint;
      } else {
        v.z = midpoint;
      }
    } else if (w) {
      v.z = w.z + separation(v._, w._);
    }
    v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
  }

  // Computes all real x-coordinates by summing up the modifiers recursively.
  function secondWalk(v) {
    v._.x = v.z + v.parent.m;
    v.m += v.parent.m;
  }

  // The core of the algorithm. Here, a new subtree is combined with the
  // previous subtrees. Threads are used to traverse the inside and outside
  // contours of the left and right subtree up to the highest common level. The
  // vertices used for the traversals are vi+, vi-, vo-, and vo+, where the
  // superscript o means outside and i means inside, the subscript - means left
  // subtree and + means right subtree. For summing up the modifiers along the
  // contour, we use respective variables si+, si-, so-, and so+. Whenever two
  // nodes of the inside contours conflict, we compute the left one of the
  // greatest uncommon ancestors using the function ANCESTOR and call MOVE
  // SUBTREE to shift the subtree and prepare the shifts of smaller subtrees.
  // Finally, we add a new thread (if necessary).
  function apportion(v, w, ancestor) {
    if (w) {
      var vip = v,
        vop = v,
        vim = w,
        vom = vip.parent.children[0],
        sip = vip.m,
        sop = vop.m,
        sim = vim.m,
        som = vom.m,
        shift;
      while (vim = nextRight(vim), vip = nextLeft(vip), vim && vip) {
        vom = nextLeft(vom);
        vop = nextRight(vop);
        vop.a = v;
        shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
        if (shift > 0) {
          moveSubtree(nextAncestor(vim, v, ancestor), v, shift);
          sip += shift;
          sop += shift;
        }
        sim += vim.m;
        sip += vip.m;
        som += vom.m;
        sop += vop.m;
      }
      if (vim && !nextRight(vop)) {
        vop.t = vim;
        vop.m += sim - sop;
      }
      if (vip && !nextLeft(vom)) {
        vom.t = vip;
        vom.m += sip - som;
        ancestor = v;
      }
    }
    return ancestor;
  }
  function sizeNode(node) {
    node.x *= dx;
    node.y = node.depth * dy;
  }
  tree.separation = function (x) {
    return arguments.length ? (separation = x, tree) : separation;
  };
  tree.size = function (x) {
    return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], tree) : nodeSize ? null : [dx, dy];
  };
  tree.nodeSize = function (x) {
    return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], tree) : nodeSize ? [dx, dy] : null;
  };
  return tree;
}

/***/ }

}]);
//# sourceMappingURL=default-projects_layouts_src_index_ts.js.map