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
exports.Popover = void 0;
var react_1 = __importStar(require("react"));
var react_dom_1 = require("react-dom");
var utils_1 = require("../../shadcn/lib/utils");
var Popover = function (_a) {
    var anchorEl = _a.anchorEl, open = _a.open, onClose = _a.onClose, children = _a.children, _b = _a.anchorOrigin, anchorOrigin = _b === void 0 ? { vertical: 'bottom', horizontal: 'left' } : _b, _c = _a.transformOrigin, transformOrigin = _c === void 0 ? { vertical: 'top', horizontal: 'left' } : _c, className = _a.className;
    var _d = (0, react_1.useState)({}), popoverStyle = _d[0], setPopoverStyle = _d[1];
    var popoverRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var _a;
        if (anchorEl && open) {
            var anchorRect = anchorEl.getBoundingClientRect();
            var popoverRect = (_a = popoverRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
            if (popoverRect) {
                var top_1 = 0;
                var left = 0;
                // Vertical positioning
                if (anchorOrigin.vertical === 'top') {
                    top_1 = anchorRect.top;
                }
                else if (anchorOrigin.vertical === 'center') {
                    top_1 = anchorRect.top + anchorRect.height / 2;
                }
                else {
                    top_1 = anchorRect.bottom;
                }
                if (transformOrigin.vertical === 'center') {
                    top_1 -= popoverRect.height / 2;
                }
                else if (transformOrigin.vertical === 'bottom') {
                    top_1 -= popoverRect.height;
                }
                // Horizontal positioning
                if (anchorOrigin.horizontal === 'left') {
                    left = anchorRect.left;
                }
                else if (anchorOrigin.horizontal === 'center') {
                    left = anchorRect.left + anchorRect.width / 2;
                }
                else {
                    left = anchorRect.right;
                }
                if (transformOrigin.horizontal === 'center') {
                    left -= popoverRect.width / 2;
                }
                else if (transformOrigin.horizontal === 'right') {
                    left -= popoverRect.width;
                }
                setPopoverStyle({
                    position: 'fixed',
                    top: "".concat(top_1, "px"),
                    left: "".concat(left, "px"),
                });
            }
        }
    }, [anchorEl, open, anchorOrigin, transformOrigin]);
    (0, react_1.useEffect)(function () {
        var handleClickOutside = function (event) {
            if (popoverRef.current &&
                !popoverRef.current.contains(event.target)) {
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
    if (!open)
        return null;
    return (0, react_dom_1.createPortal)(react_1.default.createElement("div", { ref: popoverRef, style: popoverStyle, className: (0, utils_1.cn)('bg-background border border-border rounded-md shadow-md z-50 transition-opacity duration-200', open ? 'opacity-100' : 'opacity-0 pointer-events-none', className) }, children), document.body);
};
exports.Popover = Popover;
