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
exports.AccordionWrapper = exports.AccordionDetails = exports.AccordionSummary = exports.Accordion = void 0;
var react_1 = __importDefault(require("react"));
var accordion_1 = require("../../shadcn/ui/accordion");
var utils_1 = require("../../shadcn/lib/utils");
// MUI to shadcn Accordion conversion
var Accordion = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return react_1.default.createElement(accordion_1.Accordion, __assign({}, props), children);
};
exports.Accordion = Accordion;
// MUI to shadcn AccordionSummary conversion
var AccordionSummary = function (_a) {
    var children = _a.children, expandIcon = _a.expandIcon, className = _a.className, props = __rest(_a, ["children", "expandIcon", "className"]);
    return (react_1.default.createElement(accordion_1.AccordionTrigger, __assign({ className: (0, utils_1.cn)('flex items-center justify-between', className) }, props),
        react_1.default.createElement("div", null, children),
        expandIcon && react_1.default.createElement("div", { className: "shrink-0" }, expandIcon)));
};
exports.AccordionSummary = AccordionSummary;
// MUI to shadcn AccordionDetails conversion
var AccordionDetails = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return react_1.default.createElement(accordion_1.AccordionContent, __assign({}, props), children);
};
exports.AccordionDetails = AccordionDetails;
// Wrapper component to provide MUI-like structure
var AccordionWrapper = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return react_1.default.createElement(accordion_1.AccordionItem, __assign({}, props), children);
};
exports.AccordionWrapper = AccordionWrapper;
