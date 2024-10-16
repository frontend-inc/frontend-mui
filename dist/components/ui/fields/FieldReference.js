'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var tailwind_1 = require("../../../tailwind");
var components_1 = require("../../../components");
var lucide_react_1 = require("lucide-react");
var FieldReference = function (props) {
    var value = props.value, label = props.label, color = props.color, handleClick = props.handleClick, disableLabel = props.disableLabel;
    return (react_1.default.createElement(components_1.FieldWrapper, { label: label, color: color, disableLabel: disableLabel },
        react_1.default.createElement(tailwind_1.Button, { color: "primary", variant: "outlined", endIcon: react_1.default.createElement(lucide_react_1.Repeat2, { className: "w-5 h-5" }), onClick: handleClick }, value)));
};
exports.default = FieldReference;
