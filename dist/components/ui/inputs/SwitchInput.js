'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var switch_1 = require("../../../shadcn/ui/switch");
var label_1 = require("../../../shadcn/ui/label");
var utils_1 = require("../../../shadcn/lib/utils");
function SwitchInput(_a) {
    var name = _a.name, value = _a.value, _b = _a.disableBorder, disableBorder = _b === void 0 ? false : _b, label = _a.label, placeholder = _a.placeholder, handleChange = _a.handleChange, info = _a.info;
    var onCheckedChange = function (checked) {
        handleChange({
            target: {
                name: name,
                value: checked,
            },
        });
    };
    return (react_1.default.createElement("div", { className: "w-full" },
        react_1.default.createElement(components_1.InputLabel, { label: label, info: info }),
        react_1.default.createElement("div", { className: (0, utils_1.cn)('w-full flex flex-col rounded-md py-1 text-sm', !disableBorder && 'focus-within:border-primary') },
            react_1.default.createElement("div", { className: "flex items-center space-x-2" },
                react_1.default.createElement(switch_1.Switch, { id: name, checked: value, onCheckedChange: onCheckedChange }),
                react_1.default.createElement(label_1.Label, { htmlFor: name, className: "text-base text-muted-foreground" }, placeholder)))));
}
exports.default = SwitchInput;
