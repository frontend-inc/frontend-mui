'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var react_1 = __importDefault(require("react"));
var dialog_1 = require("../../shadcn/ui/dialog");
var utils_1 = require("../../shadcn/lib/utils");
var Modal = function (_a) {
    var children = _a.children, open = _a.open, onClose = _a.onClose, _b = _a.disablePadding, disablePadding = _b === void 0 ? false : _b;
    var contentClass = (0, utils_1.cn)({
        'p-6': !disablePadding,
        'p-0': disablePadding,
    });
    return (react_1.default.createElement(dialog_1.Dialog, { open: open, onOpenChange: onClose },
        react_1.default.createElement(dialog_1.DialogContent, { className: contentClass }, children)));
};
exports.Modal = Modal;
