"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var tailwind_1 = require("../../../tailwind");
var components_1 = require("../../../components");
var CellButton = function (props) {
    var children = props.children, icon = props.icon, handleClick = props.handleClick;
    return (react_1.default.createElement(tailwind_1.Button, { fullWidth: true, size: "small", color: "secondary", variant: "contained", startIcon: react_1.default.createElement(components_1.Icon, { name: icon }), onClick: handleClick && handleClick }, children));
};
exports.default = CellButton;
