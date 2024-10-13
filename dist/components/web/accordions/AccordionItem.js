"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var accordion_1 = require("../../../shadcn/ui/accordion");
var tailwind_1 = require("../../../tailwind");
var AccordionItemComponent = function (props) {
    var primary = props.primary, secondary = props.secondary;
    return (react_1.default.createElement(accordion_1.Accordion, { type: "single", collapsible: true, className: "w-full" },
        react_1.default.createElement(accordion_1.AccordionItem, { value: "item" },
            react_1.default.createElement(accordion_1.AccordionTrigger, { className: "hover:no-underline" },
                react_1.default.createElement(tailwind_1.Typography, { variant: "body1" }, primary)),
            react_1.default.createElement(accordion_1.AccordionContent, null,
                react_1.default.createElement(tailwind_1.Typography, { variant: "body2", className: "text-muted-foreground" }, secondary)))));
};
exports.default = AccordionItemComponent;
