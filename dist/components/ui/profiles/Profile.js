'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var tailwind_1 = require("../../../tailwind");
var Profile = function (props) {
    var _a = props || {}, label = _a.label, title = _a.title, image = _a.image, description = _a.description, _b = _a.socialLinks, socialLinks = _b === void 0 ? [] : _b;
    return (react_1.default.createElement("div", { className: "w-full flex flex-col items-center justify-center rounded" },
        react_1.default.createElement("div", { className: "w-full max-w-[600px] flex flex-col sm:flex-row items-start sm:space-x-4 space-y-4 sm:space-y-0" },
            react_1.default.createElement("div", { className: "flex flex-col items-center space-y-1" },
                react_1.default.createElement("div", { className: "h-[200px] w-[200px]" },
                    react_1.default.createElement(__1.Image, { alt: title, src: image, aspectRatio: 1.0 })),
                react_1.default.createElement("div", { className: "flex flex-row" }, socialLinks === null || socialLinks === void 0 ? void 0 : socialLinks.map(function (link, index) { return (react_1.default.createElement("div", { className: "p-[2px]", key: index },
                    react_1.default.createElement(__1.SocialLink, { url: link.url, size: 28, provider: link.provider }))); }))),
            react_1.default.createElement("div", { className: "flex flex-col space-y-1 w-full sm:w-auto" },
                react_1.default.createElement(__1.Label, { label: label }),
                react_1.default.createElement(tailwind_1.Typography, { variant: "h5" }, title),
                description && react_1.default.createElement(__1.ExpandableText, { text: description })))));
};
exports.default = Profile;
