"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var popover_1 = require("../../../shadcn/ui/popover");
function Popup(_a) {
    var open = _a.open, handleClose = _a.handleClose, children = _a.children;
    return (react_1.default.createElement(popover_1.Popover, { open: open, onOpenChange: function (isOpen) { return !isOpen && handleClose(); } },
        react_1.default.createElement(popover_1.PopoverContent, null, children)));
}
exports.default = Popup;
