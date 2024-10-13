"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var scroll_area_1 = require("../../../shadcn/ui/scroll-area");
var ShopifyOrderItem_1 = __importDefault(require("./ShopifyOrderItem"));
var utils_1 = require("../../../shadcn/lib/utils");
var ShopifyOrderList = function (_a) {
    var orders = _a.orders, handleClick = _a.handleClick, className = _a.className;
    return (react_1.default.createElement(scroll_area_1.ScrollArea, { className: (0, utils_1.cn)('h-[400px] rounded-md border', className) },
        react_1.default.createElement("div", { className: "space-y-2 p-4" }, orders === null || orders === void 0 ? void 0 : orders.map(function (order) { return (react_1.default.createElement(ShopifyOrderItem_1.default, { key: order === null || order === void 0 ? void 0 : order.id, order: order, handleClick: function () { return handleClick(order.id); } })); }))));
};
exports.default = ShopifyOrderList;
