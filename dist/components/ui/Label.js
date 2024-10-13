'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var badge_1 = require("../../shadcn/ui/badge");
var Label = function (props) {
    var label = props.label, variant = props.variant, className = props.className;
    if (!label)
        return null;
    return (react_1.default.createElement(badge_1.Badge, { variant: variant, className: className }, label));
};
exports.default = Label;
