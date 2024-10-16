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
exports.TextArea = void 0;
var react_1 = __importDefault(require("react"));
var textarea_1 = require("../../shadcn/ui/textarea");
var label_1 = require("../../shadcn/ui/label");
var utils_1 = require("../../shadcn/lib/utils");
function TextArea(_a) {
    var label = _a.label, helperText = _a.helperText, _b = _a.error, error = _b === void 0 ? false : _b, _c = _a.fullWidth, fullWidth = _c === void 0 ? false : _c, className = _a.className, id = _a.id, name = _a.name, value = _a.value, onChange = _a.onChange, props = __rest(_a, ["label", "helperText", "error", "fullWidth", "className", "id", "name", "value", "onChange"]);
    var textareaId = id || name || (label === null || label === void 0 ? void 0 : label.toLowerCase().replace(/\s+/g, '-'));
    return (react_1.default.createElement("div", { className: (0, utils_1.cn)('flex flex-col space-y-2', fullWidth && 'w-full') },
        label && (react_1.default.createElement(label_1.Label, { htmlFor: textareaId, className: (0, utils_1.cn)('text-sm font-medium', error ? 'text-destructive' : 'text-foreground') }, label)),
        react_1.default.createElement(textarea_1.Textarea, __assign({ id: textareaId, name: name, value: value, onChange: onChange, className: (0, utils_1.cn)('transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2', error && 'border-destructive focus:ring-destructive', fullWidth && 'w-full', className) }, props)),
        helperText && (react_1.default.createElement("p", { className: (0, utils_1.cn)('text-sm', error ? 'text-destructive' : 'text-muted-foreground') }, helperText))));
}
exports.TextArea = TextArea;
