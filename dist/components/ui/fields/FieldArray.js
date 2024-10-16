'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var tailwind_1 = require("../../../tailwind");
var components_1 = require("../../../components");
var FieldArray = function (props) {
    var values = props.value, disableLabel = props.disableLabel, label = props.label, direction = props.direction;
    return (react_1.default.createElement(components_1.FieldWrapper, { disableLabel: disableLabel, label: label, direction: direction },
        react_1.default.createElement("div", { className: "flex flex-row gap-2" }, Array.isArray(values) &&
            (values === null || values === void 0 ? void 0 : values.map(function (value, index) { return (react_1.default.createElement(tailwind_1.Chip, { key: index, label: value, size: "small" })); })))));
};
exports.default = FieldArray;
