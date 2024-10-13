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
var Text = function (props) {
    var _a = props || {}, label = _a.label, title = _a.title, description = _a.description, textAlign = _a.textAlign, textVariant = _a.textVariant, _b = _a.html, html = _b === void 0 ? false : _b;
    return (react_1.default.createElement(tailwind_1.Container, { maxWidth: "lg" },
        react_1.default.createElement(tailwind_1.Stack, { spacing: 2, direction: "column" },
            react_1.default.createElement(__1.Heading, { label: label, title: title, textAlign: textAlign, textVariant: textVariant }),
            html ? (react_1.default.createElement(tailwind_1.Typography, { variant: "body1" },
                react_1.default.createElement("div", { dangerouslySetInnerHTML: { __html: description } }))) : (react_1.default.createElement(tailwind_1.Typography, { variant: "body1" }, description)))));
};
exports.default = Text;
