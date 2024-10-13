'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Typography = void 0;
var react_1 = __importDefault(require("react"));
var utils_1 = require("../../shadcn/lib/utils");
var Typography = function (_a) {
    var variant = _a.variant, _b = _a.color, color = _b === void 0 ? 'text.primary' : _b, _c = _a.textAlign, textAlign = _c === void 0 ? 'left' : _c, _d = _a.fontFamily, fontFamily = _d === void 0 ? 'Inter' : _d, className = _a.className, children = _a.children;
    var baseClasses = (0, utils_1.cn)(color === 'text.primary' && 'text-foreground', color == 'text.secondary' && 'text-muted-foreground', color, 'whitespace-pre-line');
    var variantClasses = {
        h1: 'text-6xl font-bold tracking-tight',
        h2: 'text-5xl font-bold tracking-tight',
        h3: 'text-4xl font-semibold',
        h4: 'text-3xl font-semibold',
        h5: 'text-2xl font-semibold',
        h6: 'text-xl font-semibold',
        subtitle1: 'text-lg font-medium',
        subtitle2: 'text-base font-medium',
        button: 'text-base',
        body1: 'text-base',
        body2: 'text-sm',
        caption: 'text-sm',
        overline: 'text-xs uppercase tracking-widest',
    };
    var alignmentClasses = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    };
    var fontFamilyClass = "font-['".concat(fontFamily, "']");
    return (react_1.default.createElement("div", { className: (0, utils_1.cn)(baseClasses, fontFamilyClass, variantClasses[variant], alignmentClasses[textAlign], className) }, children));
};
exports.Typography = Typography;
