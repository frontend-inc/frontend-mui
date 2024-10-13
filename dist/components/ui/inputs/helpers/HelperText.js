'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var tailwind_1 = require("../../../../tailwind");
var HelperText = function (props) {
    var text = (props || {}).text;
    if (!text)
        return null;
    return react_1.default.createElement(tailwind_1.Typography, { variant: "caption" }, text);
};
exports.default = HelperText;
