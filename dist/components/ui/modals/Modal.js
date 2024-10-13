'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var utils_1 = require("../../../shadcn/lib/utils");
var dialog_1 = require("../../../shadcn/ui/dialog");
var scroll_area_1 = require("../../../shadcn/ui/scroll-area");
var components_1 = require("../../../components");
var Modal = function (_a) {
    var open = _a.open, _b = _a.loading, loading = _b === void 0 ? false : _b, handleClose = _a.handleClose, title = _a.title, buttons = _a.buttons, children = _a.children, description = _a.description, mode = _a.mode;
    return (react_1.default.createElement(dialog_1.Dialog, { open: open, onOpenChange: handleClose },
        react_1.default.createElement(dialog_1.DialogContent, { className: (0, utils_1.cn)(mode, 'bg-background rounded-md overflow-hidden max-h-[600px] overflow-y-scroll') },
            react_1.default.createElement(dialog_1.DialogHeader, { className: "flex-shrink-0" },
                react_1.default.createElement(dialog_1.DialogTitle, { className: "text-foreground" }, title),
                description && react_1.default.createElement(dialog_1.DialogDescription, null, description)),
            react_1.default.createElement(scroll_area_1.ScrollArea, { className: "max-h-[465px]" },
                react_1.default.createElement("div", { className: "space-y-4 px-4" },
                    react_1.default.createElement(components_1.Loader, { loading: loading }),
                    !loading && react_1.default.createElement("div", { className: "h-full w-full" }, children))),
            !loading && buttons && react_1.default.createElement(dialog_1.DialogFooter, null, buttons))));
};
exports.default = Modal;
