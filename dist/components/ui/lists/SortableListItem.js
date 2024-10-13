'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var tailwind_1 = require("../../../tailwind");
var utils_1 = require("../../../shadcn/lib/utils");
var lucide_react_1 = require("lucide-react");
function SortableListItem(_a) {
    var primary = _a.primary, secondary = _a.secondary, isDragging = _a.isDragging;
    return (react_1.default.createElement("div", { className: (0, utils_1.cn)('flex items-center p-4 transition-colors duration-200', isDragging && 'bg-secondary') },
        react_1.default.createElement("div", { className: "mr-4 cursor-grab active:cursor-grabbing" },
            react_1.default.createElement(lucide_react_1.GripVertical, { className: "h-5 w-5 text-muted-foreground" })),
        react_1.default.createElement("div", { className: "flex-grow" },
            react_1.default.createElement(tailwind_1.Typography, { variant: "body1" }, primary),
            secondary && react_1.default.createElement(tailwind_1.Typography, { variant: "body2" }, secondary))));
}
exports.default = SortableListItem;
