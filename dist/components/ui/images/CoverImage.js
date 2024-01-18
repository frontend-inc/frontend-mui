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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var router_1 = require("next/router");
var context_1 = require("../../../context");
var CoverImage = function (props) {
    var router = (0, router_1.useRouter)();
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var _a = props.editing, editing = _a === void 0 ? false : _a, title = props.title, _b = props.textVariant, textVariant = _b === void 0 ? 'h1' : _b, description = props.description, buttonText = props.buttonText, handleClick = props.handleClick, _c = props.image, image = _c === void 0 ? null : _c, _d = props.height, height = _d === void 0 ? 400 : _d, _e = props.objectFit, objectFit = _e === void 0 ? 'cover' : _e, _f = props.alt, alt = _f === void 0 ? 'image' : _f, _g = props.enableGradient, enableGradient = _g === void 0 ? false : _g, _h = props.enableOverlay, enableOverlay = _h === void 0 ? false : _h, _j = props.opacity, opacity = _j === void 0 ? 0.5 : _j, _k = props.alignItems, alignItems = _k === void 0 ? 'center' : _k, _l = props.bgcolor, bgcolor = _l === void 0 ? '#FFFFFF' : _l, href = props.href;
    var handleItemClick = function () {
        if (handleClick) {
            return handleClick();
        }
        else if (href) {
            router.push("".concat(clientUrl).concat(href));
        }
    };
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(components_1.Image, { src: image, alt: alt, height: height, objectFit: objectFit, disableBorderRadius: true, bgcolor: bgcolor, enableGradient: enableGradient, enableOverlay: enableOverlay, opacity: opacity }),
        react_1.default.createElement(material_1.Stack, { sx: __assign(__assign({}, sx.stack), { height: "".concat(height, "px") }) },
            react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 2, alignItems: alignItems, sx: sx.content },
                title && (react_1.default.createElement(material_1.Typography, { variant: textVariant, color: "text.primary", sx: {
                        textAlign: alignItems === 'center' ? 'center' : 'left',
                    } }, title)),
                description && (react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary", sx: {
                        textAlign: alignItems === 'center' ? 'center' : 'left',
                    } }, description)),
                buttonText && (react_1.default.createElement(material_1.Box, null,
                    react_1.default.createElement(material_1.Button, { size: "large", onClick: handleItemClick, variant: "contained" }, buttonText)))))));
};
exports.default = CoverImage;
var sx = {
    root: {
        position: 'relative',
    },
    stack: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        p: 1,
        maxWidth: '540px',
    },
};