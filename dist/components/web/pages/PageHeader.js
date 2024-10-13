"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var tailwind_1 = require("../../../tailwind");
var components_1 = require("../../../components");
var PageHeader = function (props) {
    var label = props.label, title = props.title, description = props.description, links = props.links, _a = props.maxLinks, maxLinks = _a === void 0 ? 3 : _a, buttons = props.buttons, resource = props.resource;
    return (react_1.default.createElement(tailwind_1.Stack, { className: "w-full flex flex-col space-y-1" },
        react_1.default.createElement(components_1.Breadcrumbs, { maxLinks: maxLinks, links: links }),
        react_1.default.createElement(tailwind_1.Stack, { direction: 'row', className: "flex justify-between w-full border-b border-divider pb-1 space-y-1 sm:space-y-0" },
            react_1.default.createElement(components_1.Heading, { label: label, title: title, description: description, textAlign: "left" }),
            (buttons === null || buttons === void 0 ? void 0 : buttons.length) > 0 && (react_1.default.createElement("div", { className: "flex items-start justify-end sm:pb-0 xs:pb-1" },
                react_1.default.createElement(components_1.ButtonActions, { buttons: buttons }))))));
};
exports.default = PageHeader;
