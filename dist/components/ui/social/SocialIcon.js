"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
//@ts-ignore
var react_social_icons_1 = require("react-social-icons");
var SocialIcon = function (props) {
    var _a = props || {}, provider = _a.provider, handleClick = _a.handleClick, color = _a.color, _b = _a.size, size = _b === void 0 ? 20 : _b;
    return (react_1.default.createElement(material_1.IconButton, { size: "small", onClick: handleClick },
        react_1.default.createElement(react_social_icons_1.SocialIcon
        /* @ts-ignore */
        , { 
            /* @ts-ignore */
            network: provider, style: {
                height: size,
                width: size,
            } })));
};
exports.default = SocialIcon;
