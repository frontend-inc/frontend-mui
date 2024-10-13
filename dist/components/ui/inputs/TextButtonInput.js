'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var input_1 = require("../../../shadcn/ui/input");
var button_1 = require("../../../shadcn/ui/button");
var lucide_react_1 = require("lucide-react");
var utils_1 = require("../../../shadcn/lib/utils");
function TextButtonInput(_a) {
    var name = _a.name, value = _a.value, handleChange = _a.handleChange, placeholder = _a.placeholder, _b = _a.color, color = _b === void 0 ? 'primary' : _b, onClick = _a.onClick, loading = _a.loading, children = _a.children;
    return (react_1.default.createElement("div", { className: "flex w-full items-end" },
        react_1.default.createElement(input_1.Input, { name: name, value: value, onChange: handleChange, placeholder: placeholder, className: (0, utils_1.cn)('py-3', 'rounded-r-none', 'focus-visible:ring-0 focus-visible:ring-offset-0', 'border-r-0') }),
        react_1.default.createElement(button_1.Button, { size: "sm", variant: color === 'primary' ? 'default' : 'secondary', className: (0, utils_1.cn)('h-[43px] px-3 py-0 rounded-l-none', 'focus-visible:ring-0 focus-visible:ring-offset-0'), onClick: onClick },
            loading && react_1.default.createElement(lucide_react_1.Loader2, { className: "mr-2 h-4 w-4 animate-spin" }),
            children)));
}
exports.default = TextButtonInput;
