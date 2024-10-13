'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = exports.ThemeProvider = exports.ThemeContext = void 0;
var react_1 = __importStar(require("react"));
exports.ThemeContext = (0, react_1.createContext)(undefined);
function ThemeProvider(_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)('light'), theme = _b[0], setTheme = _b[1];
    (0, react_1.useEffect)(function () {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);
    return (react_1.default.createElement(exports.ThemeContext.Provider, { value: { theme: theme, setTheme: setTheme } }, children));
}
exports.ThemeProvider = ThemeProvider;
function useTheme() {
    var context = (0, react_1.useContext)(exports.ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
exports.useTheme = useTheme;
