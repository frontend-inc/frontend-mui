"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var TabsSwitchInput = function (props) {
    var name = props.name, value = props.value, handleChange = props.handleChange, label = props.label, _a = props.direction, direction = _a === void 0 ? 'row' : _a, _b = props.size, size = _b === void 0 ? 'small' : _b, _c = props.disableBorder, disableBorder = _c === void 0 ? false : _c, _d = props.disablePadding, disablePadding = _d === void 0 ? false : _d;
    return (react_1.default.createElement(components_1.TabsInput, { name: name, label: label, size: size, direction: direction, disableBorder: disableBorder, disablePadding: disablePadding, options: [
            { label: 'No', value: 0 },
            { label: 'Yes', value: 1 },
        ], value: value == true ? 1 : 0, handleChange: handleChange }));
};
exports.default = TabsSwitchInput;
