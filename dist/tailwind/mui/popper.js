'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Popper = void 0;
var react_1 = __importStar(require("react"));
var popover_1 = require("../../shadcn/ui/popover");
var utils_1 = require("../../shadcn/lib/utils");
var Popper = function (_a) {
    var anchorEl = _a.anchorEl, children = _a.children, open = _a.open, _b = _a.placement, placement = _b === void 0 ? 'bottom' : _b, onClose = _a.onClose, className = _a.className;
    var _c = (0, react_1.useState)(null), triggerElement = _c[0], setTriggerElement = _c[1];
    var popoverRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (anchorEl) {
            setTriggerElement(anchorEl);
        }
    }, [anchorEl]);
    (0, react_1.useEffect)(function () {
        var handleClickOutside = function (event) {
            if (popoverRef.current &&
                !popoverRef.current.contains(event.target) &&
                onClose) {
                onClose();
            }
        };
        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return function () {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open, onClose]);
    return (react_1.default.createElement(popover_1.Popover, { open: open, onOpenChange: onClose },
        react_1.default.createElement(popover_1.PopoverContent, { ref: popoverRef, side: placement, align: "center", className: (0, utils_1.cn)('p-0 border-none shadow-lg', className) }, children)));
};
exports.Popper = Popper;
