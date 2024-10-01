"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../../components");
var AiPromptForm = function (props) {
    var _a = props.label, label = _a === void 0 ? 'Prompt' : _a, _b = props.placeholder, placeholder = _b === void 0 ? 'Enter a prompt' : _b, value = props.value, handleChange = props.handleChange;
    return (react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1 },
        react_1.default.createElement(components_1.TextInput, { multiline: true, label: label, name: "prompt", placeholder: placeholder, value: value, handleChange: handleChange })));
};
exports.default = AiPromptForm;