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
var context_1 = require("../../../context");
var material_1 = require("@mui/material");
var __1 = require("../..");
var helpers_1 = require("../../../helpers");
var router_1 = require("next/router");
var FeaturedCard = function (props) {
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var _a = props || {}, _b = _a.editing, editing = _b === void 0 ? false : _b, label = _a.label, title = _a.title, description = _a.description, _c = _a.image, image = _c === void 0 ? '' : _c, href = _a.href, buttonText = _a.buttonText, _d = _a.flexDirection, flexDirection = _d === void 0 ? 'row' : _d, handleClick = _a.handleClick, _e = _a.objectFit, objectFit = _e === void 0 ? 'cover' : _e, _f = _a.enableBorder, enableBorder = _f === void 0 ? false : _f, _g = _a.enableGradient, enableGradient = _g === void 0 ? false : _g;
    var _h = (0, react_1.useState)('center'), textAlign = _h[0], setTextAlign = _h[1];
    var _j = (0, react_1.useState)('center'), justifyContent = _j[0], setJustifyContent = _j[1];
    var _k = (0, react_1.useState)('row'), direction = _k[0], setDirection = _k[1];
    var router = (0, router_1.useRouter)();
    var handleItemClick = function () {
        if (handleClick) {
            return handleClick();
        }
        else if (href) {
            router.push("".concat(clientUrl).concat(href));
        }
    };
    (0, react_1.useEffect)(function () {
        if (flexDirection == 'row' || flexDirection == 'row-reverse') {
            setTextAlign('left');
            setDirection('row');
            setJustifyContent('center');
        }
        else {
            setTextAlign('center');
            setDirection('column');
            setJustifyContent('flex-start');
        }
    }, [flexDirection]);
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.root), (enableBorder && sx.rootBorder)) },
        react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.imageContainer), { flexDirection: {
                    sm: flexDirection,
                    xs: 'column',
                } }) },
            react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.image), { width: {
                        xs: '100%',
                        sm: direction == 'row' ? '50%' : '100%',
                    } }) },
                react_1.default.createElement(__1.TouchableOpacity, { handleClick: handleItemClick },
                    react_1.default.createElement(__1.Image, { src: image, height: 320, objectFit: objectFit, alt: title, enableGradient: enableGradient, disableBorderRadius: enableBorder }))),
            react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.content), { justifyContent: direction == 'row' ? 'flex-start' : 'center', width: {
                        sm: direction == 'row' ? '50%' : '100%',
                        xs: '100%',
                    } }) },
                react_1.default.createElement(material_1.Stack, { spacing: 0, sx: __assign(__assign({}, sx.textContent), { justifyContent: {
                            sm: justifyContent,
                            xs: 'center',
                        } }) },
                    react_1.default.createElement(material_1.Typography, { sx: __assign(__assign({}, sx.title), { textAlign: {
                                sm: textAlign,
                                xs: 'center',
                            } }), variant: 'h4' }, title),
                    react_1.default.createElement(material_1.Typography, { variant: "body2", sx: __assign(__assign({}, sx.description), { textAlign: {
                                sm: textAlign,
                                xs: 'center',
                            } }) }, (0, helpers_1.truncate)(description, 160)),
                    buttonText && (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.actions), { justifyContent: {
                                sm: direction == 'row' ? 'flex-start' : 'center',
                                xs: 'center',
                            } }) },
                        react_1.default.createElement(material_1.Button, { size: "large", variant: "contained", color: "primary", onClick: handleItemClick }, buttonText))))))));
};
exports.default = FeaturedCard;
var sx = {
    root: {
        width: '100%',
        display: 'flex',
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
    },
    imageContainer: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
        overflow: 'hidden',
    },
    rootBorder: {
        border: '1px solid',
        borderColor: 'divider',
    },
    image: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    actions: {
        mt: 2,
        display: 'flex',
        width: '100%',
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    textContent: {
        p: 2,
        display: 'flex',
        height: '100%',
        width: '100%',
    },
    title: {
        width: '100%',
        color: 'text.primary',
        my: 1,
    },
    description: {
        width: '100%',
        color: 'text.secondary',
    },
};