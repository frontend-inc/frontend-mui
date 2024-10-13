"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardActions = exports.CardContent = exports.CardHeader = exports.Card = void 0;
var react_1 = __importDefault(require("react"));
var card_1 = require("../../shadcn/ui/card");
var utils_1 = require("../../shadcn/lib/utils");
var Card = function (_a) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    return (react_1.default.createElement(card_1.Card, __assign({ className: (0, utils_1.cn)('overflow-hidden', className) }, props), children));
};
exports.Card = Card;
var CardHeader = function (_a) {
    var title = _a.title, subheader = _a.subheader, avatar = _a.avatar, action = _a.action, className = _a.className, props = __rest(_a, ["title", "subheader", "avatar", "action", "className"]);
    return (react_1.default.createElement(card_1.CardHeader, __assign({ className: (0, utils_1.cn)('flex items-center', className) }, props),
        avatar && react_1.default.createElement("div", { className: "mr-4" }, avatar),
        react_1.default.createElement("div", { className: "flex-grow" },
            title && react_1.default.createElement("h3", { className: "text-lg font-semibold" }, title),
            subheader && (react_1.default.createElement("p", { className: "text-sm text-muted-foreground" }, subheader))),
        action && react_1.default.createElement("div", null, action)));
};
exports.CardHeader = CardHeader;
var CardContent = function (_a) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    return (react_1.default.createElement(card_1.CardContent, __assign({ className: (0, utils_1.cn)('p-4', className) }, props), children));
};
exports.CardContent = CardContent;
var CardActions = function (_a) {
    var children = _a.children, _b = _a.disableSpacing, disableSpacing = _b === void 0 ? false : _b, className = _a.className, props = __rest(_a, ["children", "disableSpacing", "className"]);
    return (react_1.default.createElement(card_1.CardFooter, __assign({ className: (0, utils_1.cn)('flex items-center', { 'justify-start space-x-2': !disableSpacing }, className) }, props), children));
};
exports.CardActions = CardActions;
