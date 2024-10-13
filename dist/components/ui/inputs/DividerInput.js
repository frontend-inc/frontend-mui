"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var separator_1 = require("../../../shadcn/ui/separator");
var utils_1 = require("../../../shadcn/lib/utils");
function DividerInput(_a) {
    var label = _a.label, className = _a.className;
    return (react_1.default.createElement("div", { className: (0, utils_1.cn)('flex flex-col space-y-1.5', className) },
        react_1.default.createElement("h6", { className: "text-sm font-medium text-muted-foreground" }, label),
        react_1.default.createElement(separator_1.Separator, { className: "mt-2 mb-1" })));
}
exports.default = DividerInput;
