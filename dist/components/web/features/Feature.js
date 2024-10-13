'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var tailwind_1 = require("../../../tailwind");
var Feature = function (props) {
    var _a = props || {}, icon = _a.icon, title = _a.title, description = _a.description;
    return (react_1.default.createElement(tailwind_1.Stack, { direction: "column", spacing: 2, alignItems: "center" },
        icon && (react_1.default.createElement(tailwind_1.Avatar, null,
            react_1.default.createElement(__1.Icon, { name: icon, color: "primary.main" }))),
        react_1.default.createElement(tailwind_1.Stack, { direction: "column", spacing: 1, alignItems: "center" },
            react_1.default.createElement(tailwind_1.Typography, { color: "text.primary", variant: "subtitle1" }, title),
            react_1.default.createElement(tailwind_1.Typography, { color: "text.secondary", variant: "body1" }, description))));
};
exports.default = Feature;
