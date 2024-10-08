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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var IconLoading = function (props) {
    var _a = props.size, size = _a === void 0 ? 20 : _a, _b = props.color, color = _b === void 0 ? 'primary.contrastText' : _b;
    return (react_1.default.createElement(material_1.CircularProgress, { disableShrink: true, sx: __assign(__assign({}, sx.loader), { color: color }), size: size }));
};
exports.default = IconLoading;
var sx = {
    loader: {
        color: 'primary.contrastText',
    },
};
