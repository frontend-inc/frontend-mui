'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var tailwind_1 = require("../../../tailwind");
var utils_1 = require("../../../shadcn/lib/utils");
var TabItem = function (_a) {
    var title = _a.title, description = _a.description, image = _a.image, _b = _a.active, active = _b === void 0 ? false : _b;
    if (!active)
        return null;
    return (react_1.default.createElement("div", { className: (0, utils_1.cn)('flex flex-col-reverse sm:flex-row gap-8 px-4', 'items-start sm:items-center') },
        image && (react_1.default.createElement("div", { className: "w-64 h-64 overflow-hidden" },
            react_1.default.createElement("img", { alt: title, src: image, height: 256, width: 256, className: "w-full h-full object-contain" }))),
        react_1.default.createElement("div", { className: "flex flex-col gap-4 w-full" },
            react_1.default.createElement(tailwind_1.Typography, { variant: "subtitle1", color: "text.primary" }, title),
            react_1.default.createElement(tailwind_1.Typography, { variant: "body1", color: "text.secondary" }, description))));
};
exports.default = TabItem;
