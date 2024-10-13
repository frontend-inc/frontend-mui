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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var utils_1 = require("../../../shadcn/lib/utils");
var tailwind_1 = require("../../../tailwind");
var card_1 = require("../../../shadcn/ui/card");
var __1 = require("../..");
// @ts-ignore
var Card = react_1.default.forwardRef(function (props, ref) {
    var label = props.label, primary = props.primary, secondary = props.secondary, actions = props.actions, secondaryAction = props.secondaryAction, handleClick = props.handleClick, image = props.image, _a = props.size, size = _a === void 0 ? 240 : _a, _b = props.slots, slots = _b === void 0 ? {
        item: {},
        image: {},
    } : _b;
    return (react_1.default.createElement(card_1.Card, __assign({ ref: ref, className: (0, utils_1.cn)('w-full overflow-hidden transition-shadow duration-300 ') }, slots.item),
        react_1.default.createElement("div", { className: "w-full relative overflow-hidden" },
            react_1.default.createElement(__1.Image, __assign({ src: image, height: size, alt: primary, label: label, handleClick: handleClick, aspectRatio: 4 / 3, disableBorderRadius: true }, slots.image))),
        react_1.default.createElement(card_1.CardContent, { className: 'px-4 pt-3' },
            react_1.default.createElement(tailwind_1.Typography, { variant: "body1" }, primary),
            secondary && (react_1.default.createElement(tailwind_1.Typography, { variant: "body2", color: "text-muted-foreground" }, secondary))),
        react_1.default.createElement(card_1.CardFooter, { className: "flex justify-between" },
            actions,
            secondaryAction)));
});
Card.displayName = 'Card';
exports.default = Card;
