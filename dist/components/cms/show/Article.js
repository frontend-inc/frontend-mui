"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var moment_1 = __importDefault(require("moment"));
var Article = function (props) {
    var _a = props || {}, actions = _a.actions, resource = _a.resource;
    var _b = resource || {}, title = _b.title, image = _b.image, description = _b.description, data = _b.data;
    var published_at = (data || {}).published_at;
    return (react_1.default.createElement(material_1.Stack, { sx: sx.root, spacing: 7 },
        react_1.default.createElement(material_1.Stack, { spacing: 3, sx: sx.header },
            react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "h3" }, title),
            react_1.default.createElement(material_1.Typography, { color: "text.secondary", variant: "caption" }, (0, moment_1.default)(published_at).format('MMMM D, YYYY'))),
        react_1.default.createElement(components_1.Image, { src: image === null || image === void 0 ? void 0 : image.url, alt: title, height: 400 }),
        react_1.default.createElement(material_1.Box, { sx: sx.content },
            react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary", sx: sx.text }, description)),
        actions && (react_1.default.createElement(components_1.Actions, { actions: actions, resource: resource }))));
};
exports.default = Article;
var sx = {
    root: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    header: {
        maxWidth: 500,
        width: '100%',
        textAlign: 'center',
    },
    content: {
        width: '100%',
        maxWidth: {
            sm: 500,
            xs: '100%',
        },
    },
    text: {
        width: '100%',
        whiteSpace: 'pre-line',
    },
    caption: {
        color: 'text.secondary',
    },
};
