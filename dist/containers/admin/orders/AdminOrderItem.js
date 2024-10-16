'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var AdminOrderItem = function (props) {
    var _a, _b;
    var order = props.resource, selectable = props.selectable, selected = props.selected, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete, handleSelect = props.handleSelect, rest = __rest(props, ["resource", "selectable", "selected", "handleClick", "handleEdit", "handleDelete", "handleSelect"]);
    var product = (_a = order === null || order === void 0 ? void 0 : order.order_line_items[0]) === null || _a === void 0 ? void 0 : _a.product;
    return (react_1.default.createElement(components_1.ResourceListItem, __assign({ selectable: selectable, selected: selected, image: (_b = product === null || product === void 0 ? void 0 : product.image) === null || _b === void 0 ? void 0 : _b.url, primary: "Order ".concat(order.display_number), secondary: react_1.default.createElement(components_1.DisplayFields, { resource: order, fields: [{ label: 'Name', name: 'customer_name', variant: 'string' }] }), secondaryAction: react_1.default.createElement(components_1.Label, { label: order === null || order === void 0 ? void 0 : order.status }), handleEdit: handleEdit, handleClick: handleClick, handleSelect: handleSelect }, rest)));
};
exports.default = AdminOrderItem;
