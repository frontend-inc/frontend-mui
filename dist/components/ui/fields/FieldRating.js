'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var tailwind_1 = require("../../../tailwind");
var components_1 = require("../../../components");
var FieldRating = function (props) {
    var value = props.value, label = props.label, _a = props.size, size = _a === void 0 ? 'md' : _a, color = props.color, disableLabel = props.disableLabel;
    return (react_1.default.createElement(components_1.FieldWrapper, { label: label, color: color, disableLabel: disableLabel },
        react_1.default.createElement(tailwind_1.Rating, { size: size, readOnly: true, value: value })));
};
exports.default = FieldRating;
