'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var tailwind_1 = require("../../../tailwind");
var components_1 = require("../../../components");
var TestimonialCard = function (props) {
    var _a = props || {}, author = _a.author, text = _a.text, _b = _a.image, image = _b === void 0 ? '' : _b;
    return (react_1.default.createElement("div", { className: 'p-4 h-[320px] border border-zinc-200 p-4 rounded-lg' },
        react_1.default.createElement(tailwind_1.Stack, { justifyContent: "space-between", className: 'h-full' },
            react_1.default.createElement("div", null, text && (react_1.default.createElement(components_1.ExpandableText, { variant: "subtitle1", color: "text.secondary", text: "\"".concat(text, "\"") }))),
            react_1.default.createElement(tailwind_1.Stack, { direction: "row", spacing: 2 },
                react_1.default.createElement(tailwind_1.Avatar, { src: image }),
                react_1.default.createElement(tailwind_1.Typography, { variant: "body2", color: "text.secondary" },
                    "\u2014 ",
                    author)))));
};
exports.default = TestimonialCard;
