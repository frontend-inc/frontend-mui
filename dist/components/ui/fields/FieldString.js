'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var tailwind_1 = require("../../../tailwind");
var components_1 = require("../../../components");
var helpers_1 = require("../../../helpers");
var FieldString = function (props) {
    var value = props.value, label = props.label, _a = props.color, color = _a === void 0 ? 'text.primary' : _a, placeholder = props.placeholder, alignItems = props.alignItems, _b = props.disableLabel, disableLabel = _b === void 0 ? false : _b, className = props.className, rest = __rest(props, ["value", "label", "color", "placeholder", "alignItems", "disableLabel", "className"]);
    return (react_1.default.createElement(components_1.FieldWrapper, __assign({ alignItems: alignItems, label: label, color: color, disableLabel: disableLabel }, rest),
        react_1.default.createElement(tailwind_1.Typography, { variant: 'body1', color: 'text-foreground', className: className }, (0, helpers_1.truncate)(value || placeholder, 50))));
};
exports.default = FieldString;
