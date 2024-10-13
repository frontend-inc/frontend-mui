'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drawer = void 0;
var react_1 = __importDefault(require("react"));
var sheet_1 = require("../../shadcn/ui/sheet");
var utils_1 = require("../../shadcn/lib/utils");
var Drawer = function (_a) {
    var open = _a.open, onClose = _a.onClose, title = _a.title, description = _a.description, footer = _a.footer, children = _a.children, _b = _a.disablePadding, disablePadding = _b === void 0 ? false : _b, _c = _a.anchor, anchor = _c === void 0 ? 'right' : _c, _d = _a.mode, mode = _d === void 0 ? 'light' : _d, className = _a.className;
    var contentClass = (0, utils_1.cn)('flex flex-col', {
        'p-0': disablePadding,
        'p-6': !disablePadding,
    });
    var childrenClass = (0, utils_1.cn)('flex-grow', {
        'py-4': !disablePadding,
    });
    var modeClass = mode === 'dark' ? 'dark' : 'light';
    return (react_1.default.createElement(sheet_1.Sheet, { open: open, onOpenChange: onClose },
        react_1.default.createElement(sheet_1.SheetContent, { side: anchor, className: (0, utils_1.cn)(contentClass, modeClass, className), iconColor: mode === 'dark' ? 'white' : 'black' },
            (title || description) && (react_1.default.createElement(sheet_1.SheetHeader, null,
                title && react_1.default.createElement(sheet_1.SheetTitle, null, title),
                description && react_1.default.createElement(sheet_1.SheetDescription, null, description))),
            react_1.default.createElement("div", { className: childrenClass }, children),
            react_1.default.createElement(sheet_1.SheetFooter, null, footer))));
};
exports.Drawer = Drawer;
