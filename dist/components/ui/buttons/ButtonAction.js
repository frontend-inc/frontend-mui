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
var __1 = require("../..");
var navigation_1 = require("next/navigation");
var ButtonAction = function (props) {
    var children = props.children, icon = props.icon, url = props.url, path = props.path, _a = props.color, color = _a === void 0 ? 'secondary' : _a, _b = props.size, size = _b === void 0 ? 'medium' : _b, rest = __rest(props, ["children", "icon", "url", "path", "color", "size"]);
    var router = (0, navigation_1.useRouter)();
    var handleClick = function () {
        if (url) {
            window.open(url, '_blank');
        }
        else if (path) {
            router.push(path);
        }
    };
    return (react_1.default.createElement(tailwind_1.Button, __assign({ fullWidth: true, size: size, startIcon: icon && (react_1.default.createElement(__1.Icon, { name: icon, color: color == 'primary'
                ? 'primary.contrastText'
                : 'secondary.contrastText' })), onClick: handleClick, color: color }, rest), children));
};
exports.default = ButtonAction;
