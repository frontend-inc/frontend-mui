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
var react_1 = __importStar(require("react"));
var context_1 = require("../../../../context");
var material_1 = require("@mui/material");
var UnsplashLogoDark = function (props) {
    var _a = props.width, width = _a === void 0 ? 100 : _a;
    return (react_1.default.createElement(material_1.SvgIcon, { sx: { width: width } },
        react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 457.19 104.19" },
            react_1.default.createElement("path", { d: "M59.88 38.66h27.53v48.75H0V38.66h27.53v24.37h32.35zm93 25c0 8.25-5.45 13.13-12.9 13.13-7.28 0-12.81-4.88-12.81-13.13V24.41h-12.22v39.13c0 15.45 11 25.21 25.06 25.21s25.15-9.76 25.15-25.21V24.41h-12.25zm43.7-21.13c-4.7 0-9.94 2-12.6 6.57v-5.41h-11.45v43.64h11.81v-25.1c0-5 3-9 8.16-9 5.68 0 8.08 3.82 8.08 8.7v25.4h11.8V59.82c.03-9.59-4.94-17.31-15.77-17.31zm43.31 18.37l-6.48-1.33c-2.47-.5-4-1.77-4-3.9 0-2.49 2.23-4.35 5.33-4.35 4.36 0 6.09 2.25 6.51 4.88h10.18c-.08-6-4.83-13.84-16.51-13.84-9.41 0-16.33 6.47-16.33 14.28 0 6.13 3.81 11.19 12.24 13l6.05 1.33c3.37.71 4.7 2.31 4.7 4.26 0 2.31-2.14 4.35-6 4.35-4.71 0-7.27-2.68-7.87-5.79h-10.5c.59 6.53 5.32 14.84 18.46 14.84 11.45 0 17.22-7.28 17.22-14.38-.01-6.36-4.36-11.59-12.97-13.37zm63.19 4.53c0 13.22-8.26 23-20.59 23-6 0-10.48-2.4-12.61-5.33v21.13h-11.8V43.67h11.45v5.41c2-3.37 6.83-6.39 13.4-6.39 12.81 0 20.18 9.76 20.18 22.72zm-11.63.09c0-7.72-4.79-12.25-10.83-12.25s-10.91 4.53-10.91 12.25 4.88 12.33 10.91 12.33 10.91-4.54 10.91-12.35zm68-21.83h11.45v43.64h-11.8v-5.31c-2 3.5-6.57 6.38-12.61 6.38-12.33 0-20.59-9.77-20.59-23 0-13 7.37-22.72 20.15-22.72 6.57 0 11.32 3.05 13.4 6.39zm-.18 21.83c0-7.72-4.88-12.25-10.91-12.25s-10.83 4.51-10.83 12.23 4.79 12.33 10.83 12.33 10.92-4.6 10.92-12.33zm-50.66 21.81h11.8V24.41h-11.8zm132.35-44.81c-4.17 0-9 1.41-11.81 4.78V24.41h-11.8v62.91h11.8V61.68c.27-4.8 3.2-8.52 8.17-8.52 5.68 0 8.08 3.83 8.07 8.71v25.47h11.81V59.82c-.01-9.59-5.15-17.3-16.24-17.3zm-42 18.36l-6.43-1.33c-2.47-.5-4-1.77-4-3.9 0-2.49 2.22-4.35 5.33-4.35 4.35 0 6.08 2.25 6.5 4.88h10.17c-.08-6-4.83-13.84-16.51-13.84-9.41 0-16.33 6.47-16.33 14.28 0 6.13 3.82 11.19 12.25 13l6 1.33c3.37.71 4.7 2.31 4.7 4.26 0 2.31-2.14 4.35-6 4.35-4.71 0-7.27-2.68-7.87-5.79h-10.49c.58 6.53 5.31 14.84 18.45 14.84 11.45 0 17.22-7.28 17.22-14.38 0-6.34-4.35-11.57-12.95-13.35zM59.88 0H27.53v24.37h32.35z" }))));
};
var UnsplashLogoLight = function (props) {
    var _a = props.width, width = _a === void 0 ? 100 : _a;
    return (react_1.default.createElement(material_1.SvgIcon, { sx: { width: width } },
        react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 457.2 104.2" },
            react_1.default.createElement("path", { d: "M59.9 38.7h27.5v48.8H0V38.7h27.5V63h32.3l.1-24.3zm93 25c0 8.3-5.4 13.1-12.9 13.1-7.3 0-12.8-4.9-12.8-13.1V24.4H115v39.1c0 15.4 11 25.2 25.1 25.2s25.1-9.8 25.1-25.2V24.4H153l-.1 39.3zm43.7-21.2c-4.7 0-9.9 2-12.6 6.6v-5.4h-11.4v43.6h11.8V62.2c0-5 3-9 8.2-9 5.7 0 8.1 3.8 8.1 8.7v25.4h11.8V59.8c-.1-9.6-5.1-17.3-15.9-17.3zm43.3 18.4l-6.5-1.3c-2.5-.5-4-1.8-4-3.9 0-2.5 2.2-4.3 5.3-4.3 4.4 0 6.1 2.2 6.5 4.9h10.2c-.1-6-4.8-13.8-16.5-13.8-9.4 0-16.3 6.5-16.3 14.3 0 6.1 3.8 11.2 12.2 13l6.1 1.3c3.4.7 4.7 2.3 4.7 4.3 0 2.3-2.1 4.3-6 4.3-4.7 0-7.3-2.7-7.9-5.8h-10.5c.6 6.5 5.3 14.8 18.5 14.8 11.4 0 17.2-7.3 17.2-14.4 0-6.4-4.4-11.6-13-13.4zm63.2 4.5c0 13.2-8.3 23-20.6 23-6 0-10.5-2.4-12.6-5.3v21.1h-11.8V43.7h11.5v5.4c2-3.4 6.8-6.4 13.4-6.4 12.7 0 20.1 9.7 20.1 22.7zm-11.7.1c0-7.7-4.8-12.2-10.8-12.2s-10.9 4.5-10.9 12.2 4.9 12.3 10.9 12.3 10.9-4.5 10.8-12.3zm68-21.8h11.5v43.6h-11.8V82c-2 3.5-6.6 6.4-12.6 6.4-12.3 0-20.6-9.8-20.6-23 0-13 7.4-22.7 20.1-22.7 6.6 0 11.3 3 13.4 6.4v-5.4zm-.1 21.8c0-7.7-4.9-12.2-10.9-12.2s-10.8 4.5-10.8 12.2 4.8 12.3 10.8 12.3 10.9-4.6 10.9-12.3zm-50.7 21.8h11.8V24.4h-11.8v62.9zM441 42.5c-4.2 0-9 1.4-11.8 4.8V24.4h-11.8v62.9h11.8V61.7c.3-4.8 3.2-8.5 8.2-8.5 5.7 0 8.1 3.8 8.1 8.7v25.5h11.8V59.8c-.1-9.6-5.2-17.3-16.3-17.3zm-42 18.4l-6.4-1.3c-2.5-.5-4-1.8-4-3.9 0-2.5 2.2-4.3 5.3-4.3 4.4 0 6.1 2.2 6.5 4.9h10.2c-.1-6-4.8-13.8-16.5-13.8-9.4 0-16.3 6.5-16.3 14.3 0 6.1 3.8 11.2 12.2 13l6 1.3c3.4.7 4.7 2.3 4.7 4.3 0 2.3-2.1 4.3-6 4.3-4.7 0-7.3-2.7-7.9-5.8h-10.5c.6 6.5 5.3 14.8 18.5 14.8 11.5 0 17.2-7.3 17.2-14.4 0-6.4-4.4-11.6-13-13.4zM59.9 0H27.5v24.4h32.3L59.9 0z", fill: "#fff" }))));
};
var UnsplashLogo = function (props) {
    var _a = props.width, width = _a === void 0 ? 80 : _a;
    var mode = (0, react_1.useContext)(context_1.ThemeContext).mode;
    return mode == 'light' ? (react_1.default.createElement(UnsplashLogoDark, { width: width })) : (react_1.default.createElement(UnsplashLogoLight, { width: width }));
};
exports.default = UnsplashLogo;
