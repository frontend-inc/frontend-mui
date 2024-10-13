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
var react_1 = __importStar(require("react"));
var tailwind_1 = require("../../../tailwind");
var navigation_1 = require("next/navigation");
var __1 = require("../..");
var context_1 = require("../../../context");
var PriceCard = function (props) {
    var router = (0, navigation_1.useRouter)();
    var setAuthOpen = (0, react_1.useContext)(context_1.AppContext).setAuthOpen;
    var label = props.label, title = props.title, description = props.description, features = props.features, buttonText = props.buttonText, price = props.price, url = props.url;
    var handleClick = function () {
        if (url) {
            router.push(url);
        }
    };
    return (react_1.default.createElement("div", { className: "w-full border border-divider rounded p-2 flex flex-col justify-between" },
        react_1.default.createElement(tailwind_1.Stack, { className: "min-h-[300px]", direction: "column", spacing: 1 },
            label && (react_1.default.createElement("div", null,
                react_1.default.createElement(__1.Label, { label: label }))),
            react_1.default.createElement(tailwind_1.Typography, { variant: "body1" }, title),
            react_1.default.createElement(tailwind_1.Typography, { variant: "h5" }, price),
            react_1.default.createElement(tailwind_1.Divider, null),
            react_1.default.createElement(tailwind_1.List, null, features === null || features === void 0 ? void 0 : features.map(function (feature, i) { return (react_1.default.createElement(tailwind_1.ListItem, { key: i },
                react_1.default.createElement(tailwind_1.ListItemText, { primary: feature }))); }))),
        buttonText && (react_1.default.createElement(tailwind_1.Button, { onClick: handleClick, variant: "contained" }, buttonText))));
};
exports.default = PriceCard;
