'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Login_1 = __importDefault(require("./login/Login"));
var components_1 = require("../../components");
var tailwind_1 = require("../../tailwind");
var AuthWall = function () {
    return (react_1.default.createElement(tailwind_1.Container, { maxWidth: "sm" },
        react_1.default.createElement("div", { className: "w-full h-full flex flex-row justify-center items-center pt-[20px] md:pt-[200px]" },
            react_1.default.createElement(components_1.AuthLayout, null,
                react_1.default.createElement(Login_1.default, null)))));
};
exports.default = AuthWall;
