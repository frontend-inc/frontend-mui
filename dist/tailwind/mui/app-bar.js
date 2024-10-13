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
exports.AppBar = void 0;
var react_1 = __importDefault(require("react"));
var utils_1 = require("../../shadcn/lib/utils");
var AppBar = function (_a) {
    var children = _a.children, _b = _a.position, position = _b === void 0 ? 'fixed' : _b, _c = _a.color, color = _c === void 0 ? 'primary' : _c, _d = _a.elevation, elevation = _d === void 0 ? 4 : _d, className = _a.className, props = __rest(_a, ["children", "position", "color", "elevation", "className"]);
    var positionClasses = {
        fixed: 'fixed top-0 left-0 right-0',
        absolute: 'absolute top-0 left-0 right-0',
        sticky: 'sticky top-0',
        static: 'static',
        relative: 'relative',
    };
    var colorClasses = {
        default: 'bg-background text-foreground',
        primary: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        transparent: 'bg-transparent',
    };
    var elevationClasses = {
        0: '',
        1: 'shadow-sm',
        2: 'shadow',
        3: 'shadow-md',
        4: 'shadow-lg',
    };
    return (react_1.default.createElement("header", __assign({ className: (0, utils_1.cn)('z-40', positionClasses[position], colorClasses[color], elevationClasses[elevation], className) }, props), children));
};
exports.AppBar = AppBar;
