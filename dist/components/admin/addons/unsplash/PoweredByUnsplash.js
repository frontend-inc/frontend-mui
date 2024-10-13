"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var tailwind_1 = require("../../../../tailwind");
var UnsplashLogo_1 = __importDefault(require("./UnsplashLogo"));
var PoweredByUnsplash = function () {
    return (react_1.default.createElement("div", { className: "flex flex-row space-x-2 w-full justify-center items-center" },
        react_1.default.createElement(tailwind_1.Typography, { variant: "body2", color: "text.secondary" }, "Powered by"),
        react_1.default.createElement(UnsplashLogo_1.default, null)));
};
exports.default = PoweredByUnsplash;
