'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var checkbox_1 = require("../../../shadcn/ui/checkbox");
var tailwind_1 = require("../../../tailwind");
var CheckboxRatingsFilterItem = function (props) {
    var _a = props.values, values = _a === void 0 ? [] : _a, option = props.option, handleClick = props.handleClick;
    return (react_1.default.createElement("li", { className: "list-none" },
        react_1.default.createElement("button", { className: "flex items-center w-full px-0 py-2 hover:bg-accent hover:text-accent-foreground", onClick: handleClick },
            react_1.default.createElement("div", { className: "mr-2" },
                react_1.default.createElement(checkbox_1.Checkbox, { checked: values === null || values === void 0 ? void 0 : values.includes(option.value), onCheckedChange: handleClick })),
            react_1.default.createElement(tailwind_1.Rating, { readOnly: true, value: Number(option === null || option === void 0 ? void 0 : option.value) }))));
};
exports.default = CheckboxRatingsFilterItem;
