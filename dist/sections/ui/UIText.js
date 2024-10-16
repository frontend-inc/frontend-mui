'use client';
"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../components");
var tailwind_1 = require("../../tailwind");
var UIText = function (props) {
    var bgColor = props.bgColor, mode = props.mode, py = props.py, px = props.px, maxWidth = props.maxWidth, requireAuth = props.requireAuth, requirePaid = props.requirePaid, text = props.text, rest = __rest(props, ["bgColor", "mode", "py", "px", "maxWidth", "requireAuth", "requirePaid", "text"]);
    return (react_1.default.createElement(components_1.Section, { requireAuth: requireAuth, requirePaid: requirePaid, bgColor: bgColor, mode: mode, py: py, px: px, maxWidth: maxWidth },
        react_1.default.createElement(tailwind_1.Typography, { variant: "body1" }, text)));
};
exports.default = UIText;
