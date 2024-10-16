'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var tailwind_1 = require("../../../tailwind");
var __1 = require("../..");
var HeroList = function (props) {
    var _a = props || {}, image = _a.image, label = _a.label, primary = _a.primary, secondary = _a.secondary, actions = _a.actions, secondaryAction = _a.secondaryAction, children = _a.children, _b = _a.slots, slots = _b === void 0 ? {
        image: {},
    } : _b;
    return (react_1.default.createElement(tailwind_1.Container, { maxWidth: "lg" },
        react_1.default.createElement(tailwind_1.Stack, { className: "w-full justify-start items-center space-y-6" },
            secondaryAction,
            react_1.default.createElement(tailwind_1.Typography, { color: "text.primary", variant: "h3" }, primary),
            react_1.default.createElement("div", { className: "w-full rounded py-10" },
                react_1.default.createElement(__1.Image, __assign({ src: image, alt: primary, height: 400, label: label }, slots.image))),
            actions,
            react_1.default.createElement("div", { className: "w-full max-w-[500px] sm:max-w-full" }, secondary),
            children)));
};
exports.default = HeroList;
