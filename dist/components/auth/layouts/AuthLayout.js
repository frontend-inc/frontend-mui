"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var tailwind_1 = require("../../../tailwind");
var AuthLayout = function (props) {
    var children = props.children;
    return (react_1.default.createElement("div", { className: "h-screen flex flex-col justify-center items-center" },
        react_1.default.createElement(tailwind_1.Container, { maxWidth: "sm" }, children)));
};
exports.default = AuthLayout;
