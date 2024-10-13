'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var scroll_area_1 = require("../../../shadcn/ui/scroll-area");
var AdminLayoutScroll = function (props) {
    var children = (props || {}).children;
    return react_1.default.createElement(scroll_area_1.ScrollArea, null, children);
};
exports.default = AdminLayoutScroll;
