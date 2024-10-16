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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardActionArea = void 0;
var react_1 = __importStar(require("react"));
var utils_1 = require("../../shadcn/lib/utils");
var CardActionArea = (0, react_1.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, _b = _a.disabled, disabled = _b === void 0 ? false : _b, props = __rest(_a, ["children", "className", "disabled"]);
    return (react_1.default.createElement("button", __assign({ ref: ref, className: (0, utils_1.cn)('w-full text-left', 'transition-colors duration-200', 'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2', 'disabled:pointer-events-none disabled:opacity-50', !disabled && 'hover:bg-accent hover:text-accent-foreground', className), disabled: disabled }, props),
        react_1.default.createElement("span", { className: "absolute inset-0", "aria-hidden": "true" }),
        children));
});
exports.CardActionArea = CardActionArea;
CardActionArea.displayName = 'CardActionArea';
