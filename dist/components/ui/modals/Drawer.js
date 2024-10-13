'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var utils_1 = require("../../../shadcn/lib/utils");
var sheet_1 = require("../../../shadcn/ui/sheet");
var Drawer = function (_a) {
    var open = _a.open, title = _a.title, _b = _a.anchor, anchor = _b === void 0 ? 'right' : _b, handleClose = _a.handleClose, children = _a.children, buttons = _a.buttons, _c = _a.disablePadding, disablePadding = _c === void 0 ? false : _c, _d = _a.fullWidth, fullWidth = _d === void 0 ? false : _d, _e = _a.mode, mode = _e === void 0 ? 'light' : _e, className = _a.className;
    var side = anchor === 'left' || anchor === 'right' ? anchor : 'right';
    return (react_1.default.createElement(sheet_1.Sheet, { open: open, onOpenChange: handleClose },
        react_1.default.createElement(sheet_1.SheetContent, { side: side, className: (0, utils_1.cn)(mode, disablePadding && 'px-0', 'flex flex-col', fullWidth ? 'w-screen max-w-full' : 'w-full max-w-xs', className) },
            react_1.default.createElement(sheet_1.SheetHeader, { className: (0, utils_1.cn)(disablePadding && 'px-4') },
                react_1.default.createElement(sheet_1.SheetTitle, null, title)),
            react_1.default.createElement("div", { className: (0, utils_1.cn)('flex-grow overflow-y-auto') }, children),
            buttons && (react_1.default.createElement(sheet_1.SheetFooter, { className: (0, utils_1.cn)(disablePadding && 'px-4') }, buttons)))));
};
exports.default = Drawer;
