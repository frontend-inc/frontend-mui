'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var tailwind_1 = require("../../../../tailwind");
var components_1 = require("../../../../components");
var InputLabel = function (props) {
    var label = props.label, info = props.info;
    return (react_1.default.createElement("div", { className: "min-w-[100px] flex flex-row gap-2" },
        label && (react_1.default.createElement("label", { className: "text-sm text-bold text-foreground" }, label)),
        info && (react_1.default.createElement(tailwind_1.Tooltip, { title: info },
            react_1.default.createElement(tailwind_1.IconButton, null,
                react_1.default.createElement(components_1.Icon, { name: "Info", size: 16, color: "text.secondary" }))))));
};
exports.default = InputLabel;
