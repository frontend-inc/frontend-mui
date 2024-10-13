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
exports.Container = void 0;
var react_1 = __importDefault(require("react"));
var utils_1 = require("../../shadcn/lib/utils");
var maxWidthClasses = {
    xs: 'max-w-screen-xs',
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
};
function Container(_a) {
    var _b = _a.maxWidth, maxWidth = _b === void 0 ? 'lg' : _b, _c = _a.disableGutters, disableGutters = _c === void 0 ? false : _c, _d = _a.fixed, fixed = _d === void 0 ? false : _d, className = _a.className, children = _a.children, props = __rest(_a, ["maxWidth", "disableGutters", "fixed", "className", "children"]);
    return (react_1.default.createElement("div", __assign({ className: (0, utils_1.cn)('w-full mx-auto', maxWidthClasses[maxWidth], !disableGutters && 'px-4 sm:px-6 md:px-8', fixed && 'fixed left-0 right-0', className) }, props), children));
}
exports.Container = Container;
