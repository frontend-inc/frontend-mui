'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var card_1 = require("../../../shadcn/ui/card");
var tailwind_1 = require("../../../tailwind");
function AuthScreen(_a) {
    var title = _a.title, subtitle = _a.subtitle, children = _a.children;
    return (react_1.default.createElement("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 max-w-md" },
        react_1.default.createElement(card_1.Card, { className: "w-full p-4 sm:p-6 border border-border rounded-lg bg-background" },
            react_1.default.createElement(card_1.CardContent, { className: "space-y-4" },
                react_1.default.createElement("div", { className: "space-y-2" },
                    react_1.default.createElement(tailwind_1.Typography, { variant: "h4", className: "text-center font-bold" }, title),
                    subtitle && (react_1.default.createElement(tailwind_1.Typography, { variant: "body2", color: "text.secondary", className: "text-center" }, subtitle))),
                children))));
}
exports.default = AuthScreen;
