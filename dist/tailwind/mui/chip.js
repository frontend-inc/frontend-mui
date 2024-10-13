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
exports.Chip = void 0;
var react_1 = __importDefault(require("react"));
var utils_1 = require("../../shadcn/lib/utils");
var lucide_react_1 = require("lucide-react");
var Chip = function (_a) {
    var label = _a.label, _b = _a.variant, variant = _b === void 0 ? 'filled' : _b, _c = _a.color, color = _c === void 0 ? 'default' : _c, _d = _a.size, size = _d === void 0 ? 'medium' : _d, onDelete = _a.onDelete, icon = _a.icon, _e = _a.clickable, clickable = _e === void 0 ? false : _e, className = _a.className, props = __rest(_a, ["label", "variant", "color", "size", "onDelete", "icon", "clickable", "className"]);
    var baseClasses = (0, utils_1.cn)('inline-flex items-center rounded-full font-medium', {
        'text-sm px-2 py-1': size === 'small',
        'text-base px-3 py-1.5': size === 'medium',
        'cursor-pointer': clickable,
    }, getColorClasses(color, variant), className);
    return (react_1.default.createElement("div", __assign({ className: baseClasses }, props),
        icon && react_1.default.createElement("span", { className: "mr-1.5" }, icon),
        label,
        onDelete && (react_1.default.createElement("button", { onClick: onDelete, className: (0, utils_1.cn)('ml-1.5 rounded-full p-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2', {
                'hover:bg-primary/10 focus:ring-primary/30': color === 'primary',
                'hover:bg-secondary/10 focus:ring-secondary/30': color === 'secondary',
                'hover:bg-destructive/10 focus:ring-destructive/30': color === 'destructive',
                'hover:bg-muted/10 focus:ring-muted/30': color === 'default',
            }), "aria-label": "Remove" },
            react_1.default.createElement(lucide_react_1.X, { size: size === 'small' ? 14 : 18 })))));
};
exports.Chip = Chip;
function getColorClasses(color, variant) {
    var colorMap = {
        default: variant === 'filled'
            ? 'bg-muted text-muted-foreground'
            : 'border border-input text-muted-foreground',
        primary: variant === 'filled'
            ? 'bg-primary text-primary-foreground'
            : 'border border-primary text-primary',
        secondary: variant === 'filled'
            ? 'bg-secondary text-secondary-foreground'
            : 'border border-secondary text-secondary',
        destructive: variant === 'filled'
            ? 'bg-destructive text-destructive-foreground'
            : 'border border-destructive text-destructive',
    };
    return colorMap[color];
}
