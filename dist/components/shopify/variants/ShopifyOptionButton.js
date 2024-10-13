"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var button_1 = require("../../../shadcn/ui/button");
var utils_1 = require("../../../shadcn/lib/utils");
var ShopifyOptionButton = function (_a) {
    var value = _a.value, name = _a.name, active = _a.active, handleClick = _a.handleClick, children = _a.children, width = _a.width, justifyContent = _a.justifyContent;
    return (react_1.default.createElement(button_1.Button, { className: (0, utils_1.cn)('whitespace-nowrap', active ? 'opacity-100' : 'opacity-80', width && "w-".concat(width), justifyContent && "justify-".concat(justifyContent)), variant: active ? 'default' : 'secondary', onClick: function () { return handleClick(name, value); } }, children));
};
exports.default = ShopifyOptionButton;
