'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var tailwind_1 = require("../../../tailwind");
var DesktopLink = function (props) {
    var menuItem = props.menuItem, handleClick = props.handleClick;
    var handleMenuClick = function () {
        if ((menuItem === null || menuItem === void 0 ? void 0 : menuItem.link_type) == 'url') {
            window.open(menuItem.url, '_blank');
        }
        else {
            handleClick(menuItem.path);
        }
    };
    return (react_1.default.createElement(tailwind_1.Button, { variant: "text", onClick: handleMenuClick }, menuItem.label));
};
exports.default = DesktopLink;
