'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var tailwind_1 = require("../../../tailwind");
var __1 = require("../..");
// Call To Action
var CallToAction = function (props) {
    var _a = props || {}, label = _a.label, title = _a.title, description = _a.description, buttons = _a.buttons;
    return (react_1.default.createElement("div", { className: "w-full" },
        react_1.default.createElement("div", { className: "flex flex-col items-center space-y-2" },
            label && (react_1.default.createElement(tailwind_1.Typography, { color: "text.secondary", variant: "caption" }, label)),
            title && (react_1.default.createElement(tailwind_1.Typography, { variant: 'h3', color: "text.primary" }, title)),
            description && (react_1.default.createElement(tailwind_1.Typography, { variant: "subtitle2", color: "text.secondary" }, description)),
            (buttons === null || buttons === void 0 ? void 0 : buttons.length) > 0 && (react_1.default.createElement("div", null,
                react_1.default.createElement(__1.ButtonActions, { buttons: buttons, size: "large", justifyContent: "center" }))))));
};
exports.default = CallToAction;
