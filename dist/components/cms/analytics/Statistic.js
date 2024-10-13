'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Statistic = void 0;
var react_1 = __importDefault(require("react"));
var tailwind_1 = require("../../../tailwind");
var components_1 = require("../../../components");
var card_1 = require("../../../shadcn/ui/card");
var Statistic = function (props) {
    var value = props.value, label = props.label, icon = props.icon;
    return (react_1.default.createElement(card_1.Card, null,
        react_1.default.createElement("div", { className: "flex flex-row space-x-2 justify-start items-center" },
            react_1.default.createElement("div", { className: "mr-2" },
                react_1.default.createElement(components_1.Icon, { name: icon, size: 24 })),
            react_1.default.createElement("div", { className: "flex flex-col space-y-1" },
                react_1.default.createElement(tailwind_1.Typography, { variant: "subtitle1", className: "font-bold tracking-tight" }, value),
                react_1.default.createElement(tailwind_1.Typography, { variant: "body2", color: "text.secondary" }, label)))));
};
exports.Statistic = Statistic;
exports.default = exports.Statistic;
