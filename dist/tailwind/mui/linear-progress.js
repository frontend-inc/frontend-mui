'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinearProgress = void 0;
var react_1 = __importDefault(require("react"));
var utils_1 = require("../../shadcn/lib/utils");
var colorClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    success: 'bg-success',
    error: 'bg-destructive',
    warning: 'bg-warning',
    info: 'bg-info',
};
var LinearProgress = function (_a) {
    var _b = _a.value, value = _b === void 0 ? 0 : _b, _c = _a.variant, variant = _c === void 0 ? 'determinate' : _c, _d = _a.color, color = _d === void 0 ? 'primary' : _d, className = _a.className;
    var colorClass = colorClasses[color];
    return (react_1.default.createElement("div", { role: "progressbar", "aria-valuenow": variant === 'determinate' ? value : undefined, "aria-valuemin": 0, "aria-valuemax": 100, className: (0, utils_1.cn)('w-full h-1 bg-secondary/20 overflow-hidden', className) },
        react_1.default.createElement("div", { className: (0, utils_1.cn)(colorClass, 'h-full transition-all duration-300 ease-in-out', variant === 'indeterminate' && 'animate-indeterminate-progress'), style: {
                width: variant === 'determinate' ? "".concat(value, "%") : '100%',
            } })));
};
exports.LinearProgress = LinearProgress;
