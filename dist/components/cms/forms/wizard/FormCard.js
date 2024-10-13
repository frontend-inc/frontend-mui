"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var button_1 = require("../../../../shadcn/ui/button");
var avatar_1 = require("../../../../shadcn/ui/avatar");
var components_1 = require("../../../../components");
var FormCard = function (props) {
    var title = props.title, description = props.description, image = props.image, checkMark = props.checkMark, handleClick = props.handleClick, _a = props.buttonText, buttonText = _a === void 0 ? 'Continue' : _a;
    return (react_1.default.createElement("div", { className: "flex flex-col items-center space-y-4" },
        checkMark && (react_1.default.createElement(avatar_1.Avatar, { className: "h-12 w-12 bg-primary text-primary-foreground" },
            react_1.default.createElement(components_1.Icon, { name: "Check", className: "h-6 w-6" }))),
        image && (react_1.default.createElement(components_1.Image, { src: image, height: 320, alt: title || 'Form image', className: "w-full object-cover" })),
        react_1.default.createElement(components_1.Heading, { title: title, description: description, textAlign: "center" }),
        react_1.default.createElement("div", null,
            react_1.default.createElement(button_1.Button, { onClick: handleClick, variant: "default" }, buttonText))));
};
exports.default = FormCard;
