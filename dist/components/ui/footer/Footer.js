'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var tailwind_1 = require("../../../tailwind");
var button_1 = require("../../../shadcn/ui/button");
var __1 = require("../..");
var Logo_1 = __importDefault(require("../header/Logo"));
var hooks_1 = require("../../../hooks");
var Footer = function (props) {
    var _a;
    var logo = props.logo, handleClick = props.handleClick, _b = props.links, links = _b === void 0 ? [] : _b, _c = props.socialLinks, socialLinks = _c === void 0 ? [] : _c, _d = props.legalLinks, legalLinks = _d === void 0 ? [] : _d;
    var appLogo = (0, hooks_1.useApp)().logo;
    var handleLogoClick = function () {
        handleClick('/');
    };
    return (react_1.default.createElement(tailwind_1.Stack, { className: "py-2 w-full bg-background min-h-[80px]", spacing: 1, direction: "column" },
        react_1.default.createElement(tailwind_1.Stack, { spacing: 6, className: "w-full px-3 items-center justify-between border-b border-divider", direction: "row" },
            react_1.default.createElement(tailwind_1.Stack, { className: "py-6 w-full items-start", direction: "row", spacing: 3 },
                react_1.default.createElement("div", { className: "w-full sm:w-[160px] flex justify-start" },
                    react_1.default.createElement(Logo_1.default, { handleClick: handleLogoClick, src: logo || appLogo, width: 100, height: 50 })),
                react_1.default.createElement("div", { className: "w-full flex justify-start sm:justify-center sm:pl-3" },
                    react_1.default.createElement("div", { className: "flex flex-wrap flex-col sm:flex-row gap-4 sm:pl-3" }, links === null || links === void 0 ? void 0 : links.map(function (menuLink, i) { return (react_1.default.createElement(button_1.Button, { className: "text-foreground", variant: "ghost", key: i, onClick: function () { return handleClick(menuLink === null || menuLink === void 0 ? void 0 : menuLink.path); } }, menuLink === null || menuLink === void 0 ? void 0 : menuLink.label)); }))),
                react_1.default.createElement("div", { className: "w-[100px]" }))),
        react_1.default.createElement(tailwind_1.Stack, { direction: "column", className: "w-full py-1 px-3 items-center justify-between", spacing: 2 },
            react_1.default.createElement(tailwind_1.Stack, { direction: "row", spacing: 1 }, (_a = socialLinks === null || socialLinks === void 0 ? void 0 : socialLinks.sort(function (a, b) { return (a === null || a === void 0 ? void 0 : a.position) - (b === null || b === void 0 ? void 0 : b.position); })) === null || _a === void 0 ? void 0 : _a.map(function (link, i) { return (react_1.default.createElement(__1.SocialLink, { key: i, provider: link === null || link === void 0 ? void 0 : link.provider, url: link === null || link === void 0 ? void 0 : link.url, color: "common.black" })); })),
            react_1.default.createElement(tailwind_1.Stack, { direction: "row", spacing: 1, className: "w-full items-center" }, legalLinks === null || legalLinks === void 0 ? void 0 : legalLinks.map(function (menuLink, i) { return (react_1.default.createElement(button_1.Button, { variant: "link", key: i, className: "text-muted-foreground", onClick: function () { return handleClick(menuLink === null || menuLink === void 0 ? void 0 : menuLink.path); } }, menuLink === null || menuLink === void 0 ? void 0 : menuLink.label)); })))));
};
exports.default = Footer;
