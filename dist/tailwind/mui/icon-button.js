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
exports.IconButton = void 0;
var react_1 = __importDefault(require("react"));
var button_1 = require("../../shadcn/ui/button");
var utils_1 = require("../../shadcn/lib/utils");
var IconButton = function (_a) {
    var _b = _a.color, color = _b === void 0 ? 'ghost' : _b, _c = _a.variant, variant = _c === void 0 ? 'rounded' : _c, className = _a.className, children = _a.children, props = __rest(_a, ["color", "variant", "className", "children"]);
    var variantClasses = {
        rounded: 'rounded-md',
        circular: 'rounded-full',
    };
    return (react_1.default.createElement(button_1.Button, __assign({ size: "icon", variant: 'ghost', className: (0, utils_1.cn)('bg-transparent hover:bg-secondary/10', 'flex items-center justify-center', variantClasses[variant], className) }, props), children));
};
exports.IconButton = IconButton;
