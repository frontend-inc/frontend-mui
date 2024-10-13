'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var lucide_react_1 = require("lucide-react");
var utils_1 = require("../../../shadcn/lib/utils");
var button_1 = require("../../../shadcn/ui/button");
var card_1 = require("../../../shadcn/ui/card");
var badge_1 = require("../../../shadcn/ui/badge");
var tailwind_1 = require("../../../tailwind");
function SubscriptionTableCard(_a) {
    var _b;
    var _c = _a.buttonText, buttonText = _c === void 0 ? 'Subscribe' : _c, selected = _a.selected, handleClick = _a.handleClick, subscription = _a.subscription;
    return (react_1.default.createElement(card_1.Card, { className: (0, utils_1.cn)('w-full max-w-sm', 'transition-all duration-300 ease-in-out', 'hover:shadow-lg') },
        react_1.default.createElement(card_1.CardHeader, null,
            react_1.default.createElement("div", { className: "flex justify-between items-center" }, (subscription === null || subscription === void 0 ? void 0 : subscription.label) && (react_1.default.createElement(badge_1.Badge, { variant: "secondary" }, subscription.label))),
            react_1.default.createElement(tailwind_1.Typography, { color: "text.secondary", variant: "subtitle1" }, subscription === null || subscription === void 0 ? void 0 : subscription.name),
            react_1.default.createElement(tailwind_1.Typography, { variant: "h4" }, subscription.display_price)),
        react_1.default.createElement(card_1.CardContent, null,
            react_1.default.createElement("div", { className: "mt-2 space-y-4  min-h-[150px]" }, (_b = subscription === null || subscription === void 0 ? void 0 : subscription.features) === null || _b === void 0 ? void 0 : _b.map(function (feature, i) { return (react_1.default.createElement("div", { key: i, className: "flex items-start" },
                react_1.default.createElement(lucide_react_1.Check, { className: "w-5 h-5 mx-2 text-primary" }),
                react_1.default.createElement("span", { className: "text-sm" }, feature))); }))),
        react_1.default.createElement(card_1.CardFooter, null,
            react_1.default.createElement(button_1.Button, { onClick: handleClick, className: "w-full" }, buttonText))));
}
exports.default = SubscriptionTableCard;
