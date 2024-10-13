"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Breadcrumbs = void 0;
var react_1 = __importDefault(require("react"));
var utils_1 = require("../../shadcn/lib/utils");
var lucide_react_1 = require("lucide-react");
var Breadcrumbs = function (_a) {
    var children = _a.children, _b = _a.separator, separator = _b === void 0 ? react_1.default.createElement(lucide_react_1.ChevronRight, { className: "w-4 h-4 mx-2 text-gray-400" }) : _b, _c = _a.maxItems, maxItems = _c === void 0 ? 8 : _c, _d = _a.itemsBeforeCollapse, itemsBeforeCollapse = _d === void 0 ? 1 : _d, _e = _a.itemsAfterCollapse, itemsAfterCollapse = _e === void 0 ? 1 : _e, className = _a.className;
    var childrenArray = react_1.default.Children.toArray(children);
    var totalItems = childrenArray.length;
    var displayedItems;
    if (totalItems > maxItems) {
        var beforeItems = childrenArray.slice(0, itemsBeforeCollapse);
        var afterItems = childrenArray.slice(totalItems - itemsAfterCollapse);
        displayedItems = __spreadArray(__spreadArray(__spreadArray([], beforeItems, true), [
            react_1.default.createElement("li", { key: "ellipsis", className: "mx-2" }, "...")
        ], false), afterItems, true);
    }
    else {
        displayedItems = childrenArray;
    }
    return (react_1.default.createElement("nav", { "aria-label": "breadcrumb", className: (0, utils_1.cn)('text-sm', className) },
        react_1.default.createElement("ol", { className: "flex items-center" }, displayedItems.map(function (child, index) { return (react_1.default.createElement(react_1.default.Fragment, { key: index },
            index > 0 && separator,
            react_1.default.createElement("li", { className: "flex items-center" }, child))); }))));
};
exports.Breadcrumbs = Breadcrumbs;
