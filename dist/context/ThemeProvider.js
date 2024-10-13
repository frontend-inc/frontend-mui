"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ThemeContext_1 = __importDefault(require("./ThemeContext"));
var ThemeProvider = function (props) {
    var _a = props || {}, primaryColor = _a.primaryColor, bgcolor = _a.bgcolor, textPrimary = _a.textPrimary, textSecondary = _a.textSecondary, headerFont = _a.headerFont, bodyFont = _a.bodyFont, borderRadius = _a.borderRadius, children = _a.children;
    var value = {
        primaryColor: primaryColor,
        bgcolor: bgcolor,
        textPrimary: textPrimary,
        textSecondary: textSecondary,
        headerFont: headerFont,
        bodyFont: bodyFont,
        borderRadius: borderRadius,
    };
    return react_1.default.createElement(ThemeContext_1.default.Provider, { value: value }, children);
};
exports.default = ThemeProvider;
