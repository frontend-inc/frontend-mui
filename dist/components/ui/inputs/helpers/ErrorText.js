'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var tailwind_1 = require("../../../../tailwind");
var ErrorText = function (props) {
    var error = props.error;
    if (!error)
        return null;
    return (react_1.default.createElement(tailwind_1.Typography, { variant: "overline", className: "text-destructive" }, error));
};
exports.default = ErrorText;
