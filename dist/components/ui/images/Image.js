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
var components_1 = require("../../../components");
var material_1 = require("@mui/material");
var helpers_1 = require("../../../helpers");
var image_1 = __importDefault(require("next/image"));
var Image = function (props) {
    var _a = props.src, src = _a === void 0 ? null : _a, height = props.height, width = props.width, _b = props.objectFit, objectFit = _b === void 0 ? 'cover' : _b, _c = props.alt, alt = _c === void 0 ? 'image' : _c, label = props.label, _d = props.bgcolor, bgcolor = _d === void 0 ? '#000000' : _d, _e = props.opacity, opacity = _e === void 0 ? 0.5 : _e, _f = props.enableOverlay, enableOverlay = _f === void 0 ? false : _f, _g = props.enableGradient, enableGradient = _g === void 0 ? false : _g, _h = props.disableBorder, disableBorder = _h === void 0 ? false : _h, _j = props.disableBorderRadius, disableBorderRadius = _j === void 0 ? false : _j, _k = props.enableDelete, enableDelete = _k === void 0 ? false : _k, handleClick = props.handleClick, handleDelete = props.handleDelete;
    var theme = (0, material_1.useTheme)();
    return (react_1.default.createElement(material_1.Fade, { in: true, timeout: 350 },
        react_1.default.createElement(material_1.Box, { sx: {
                position: 'relative',
                width: "100%",
                maxWidth: {
                    sm: width ? "".concat(width, "px") : '100%',
                    xs: '100%'
                },
                height: objectFit == 'cover' ? "".concat(height, "px") : 'auto',
            } },
            react_1.default.createElement(components_1.TouchableOpacity, { disableBorderRadius: disableBorderRadius, handleClick: handleClick ? handleClick : undefined },
                react_1.default.createElement(material_1.Box, { sx: __assign(__assign(__assign(__assign({}, sx.root), { height: objectFit == 'cover' ? "".concat(height, "px") : 'auto', minWidth: width ? "".concat(width, "px") : '100%' }), (!disableBorderRadius && sx.borderRadius)), { '&::after': __assign(__assign(__assign(__assign(__assign(__assign({}, sx.afterBase), (enableOverlay && sx.overlay)), (!enableOverlay && enableGradient && sx.gradient)), (!disableBorderRadius && sx.borderRadius)), (!enableOverlay &&
                            !disableBorderRadius &&
                            enableGradient &&
                            sx.borderRadius)), { bgcolor: bgcolor, opacity: opacity }) }) }, src ? (react_1.default.createElement(image_1.default, { src: src, alt: alt, height: 1200, width: 1200, layout: "responsive", style: {
                        height: objectFit == 'cover' ? "".concat(height, "px") : 'auto',
                        minHeight: objectFit == 'cover' ? "".concat(height, "px") : 'auto',
                        width: width ? "min(".concat(width, "px, 100vw)") : '100%',
                        objectFit: objectFit,
                        borderRadius: !disableBorderRadius
                            ? "".concat(theme.shape.borderRadius, "px")
                            : '0px',
                    } })) : (react_1.default.createElement(components_1.NoImage, { height: height, width: width, disableBorder: disableBorder, disableBorderRadius: disableBorderRadius })))),
            label && (react_1.default.createElement(material_1.Box, { sx: sx.label },
                react_1.default.createElement(components_1.Label, { darkMode: true, label: (0, helpers_1.truncate)(label, 22) }))),
            enableDelete && (react_1.default.createElement(material_1.IconButton, { size: "small", onClick: handleDelete, sx: sx.deleteButton },
                react_1.default.createElement(components_1.Icon, { name: "X" }))))));
};
exports.default = Image;
var sx = {
    root: {
        cursor: 'pointer',
        position: 'relative',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    label: {
        position: 'absolute',
        left: 15,
        top: 15,
    },
    labelBottom: {
        position: 'absolute',
        left: 15,
        bottom: 15,
    },
    borderRadius: {
        borderRadius: 1,
    },
    afterBase: {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        bgcolor: 'transparent',
        opacity: 0,
    },
    overlay: {
        height: '100%',
    },
    gradient: {
        height: '100%',
        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',
    },
    secondaryActions: {
        position: 'absolute',
        right: 15,
        top: 10,
    },
    deleteButton: {
        position: 'absolute',
        top: 2,
        right: 2,
        bgcolor: 'background.default',
        opacity: 0.5,
        '&:hover': {
            bgcolor: 'background.default',
            opacity: 1,
        },
    },
};
