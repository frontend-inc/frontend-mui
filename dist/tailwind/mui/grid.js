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
exports.Grid = void 0;
var react_1 = __importDefault(require("react"));
var utils_1 = require("../../shadcn/lib/utils");
var Grid = function (_a) {
    var _b = _a.container, container = _b === void 0 ? false : _b, _c = _a.item, item = _c === void 0 ? false : _c, children = _a.children, className = _a.className, props = __rest(_a, ["container", "item", "children", "className"]);
    var containerClasses = container ? 'w-full flex flex-wrap' : '';
    var itemClasses = item ? "w-full sm:1-1/2 md:w-1/3 lg:w-1/3 p-4" : '';
    return (react_1.default.createElement("div", __assign({ className: (0, utils_1.cn)(containerClasses, itemClasses, className) }, props), children));
};
exports.Grid = Grid;
