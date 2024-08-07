"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var NoSpaceInput = function (props) {
    var errors = props.errors, _a = props.joinChar, joinChar = _a === void 0 ? '_' : _a, _b = props.direction, direction = _b === void 0 ? 'column' : _b, value = props.value, name = props.name, label = props.label, info = props.info, placeholder = props.placeholder, handleChange = props.handleChange, disabled = props.disabled, disableLowerCase = props.disableLowerCase;
    var handleInputChange = function (ev) {
        var value = ev.target.value;
        value = value.replace(' ', joinChar);
        if (!disableLowerCase) {
            value = value.toLowerCase();
        }
        handleChange({
            target: {
                name: name,
                value: value,
            },
        });
    };
    return (react_1.default.createElement(components_1.TextInput, { disableDebounce: true, direction: direction, errors: errors, value: value, disabled: disabled, placeholder: placeholder, handleChange: handleInputChange, name: name, label: label, info: info }));
};
exports.default = NoSpaceInput;
var sx = {
    root: {},
};
