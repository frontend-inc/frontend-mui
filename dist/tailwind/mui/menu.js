'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItem = exports.Menu = void 0;
var react_1 = __importDefault(require("react"));
var dropdown_menu_1 = require("../../shadcn/ui/dropdown-menu");
var utils_1 = require("../../shadcn/lib/utils");
var Menu = function (_a) {
    var children = _a.children, trigger = _a.trigger, className = _a.className;
    return (react_1.default.createElement(dropdown_menu_1.DropdownMenu, null,
        react_1.default.createElement(dropdown_menu_1.DropdownMenuTrigger, { asChild: true }, trigger),
        react_1.default.createElement(dropdown_menu_1.DropdownMenuContent, { className: (0, utils_1.cn)('min-w-[200px]', className) }, children)));
};
exports.Menu = Menu;
var MenuItem = function (_a) {
    var children = _a.children, onClick = _a.onClick, disabled = _a.disabled, className = _a.className;
    return (react_1.default.createElement(dropdown_menu_1.DropdownMenuItem, { onClick: onClick, disabled: disabled, className: (0, utils_1.cn)('cursor-pointer', className) }, children));
};
exports.MenuItem = MenuItem;
