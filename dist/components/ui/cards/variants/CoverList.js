"use strict";
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
var context_1 = require("../../../../context");
var material_1 = require("@mui/material");
var __1 = require("../../..");
var helpers_1 = require("../../../../helpers");
var router_1 = require("next/router");
var CoverList = function (props) {
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var _a = props || {}, resource = _a.resource, _b = _a.displayFields, displayFields = _b === void 0 ? [] : _b, actions = _a.actions, icon = _a.icon, href = _a.href, handleClick = _a.handleClick, _c = _a.textVariant, textVariant = _c === void 0 ? 'subtitle1' : _c, _d = _a.objectFit, objectFit = _d === void 0 ? 'cover' : _d, _e = _a.height, height = _e === void 0 ? 240 : _e, _f = _a.enableUsers, enableUsers = _f === void 0 ? false : _f, _g = _a.enableGradient, enableGradient = _g === void 0 ? false : _g, _h = _a.enableOverlay, enableOverlay = _h === void 0 ? false : _h, _j = _a.enableFavorites, enableFavorites = _j === void 0 ? false : _j, _k = _a.enableRatings, enableRatings = _k === void 0 ? false : _k;
    var _l = resource || {}, label = _l.label, title = _l.title, image = _l.image;
    var router = (0, router_1.useRouter)();
    var handleItemClick = function () {
        if (handleClick) {
            handleClick();
        }
        else if (href) {
            router.push("".concat(clientUrl).concat(href));
        }
    };
    var theme = (0, react_1.useContext)(context_1.ThemeContext).theme;
    return (react_1.default.createElement(context_1.ThemeProvider, { muiTheme: theme, textPrimary: '#FFFFFF', textSecondary: '#FFFFFF' },
        react_1.default.createElement(material_1.Stack, { sx: sx.root, spacing: 1 },
            react_1.default.createElement(__1.TouchableOpacity, { handleClick: handleItemClick },
                react_1.default.createElement(__1.Image, { label: label, src: image === null || image === void 0 ? void 0 : image.url, objectFit: objectFit, alt: title, height: height, enableGradient: enableGradient, enableOverlay: enableOverlay })),
            react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.cover },
                react_1.default.createElement(material_1.Stack, { spacing: 1, direction: 'row', alignItems: "center" },
                    icon && (react_1.default.createElement(material_1.Box, null,
                        react_1.default.createElement(__1.Icon, { size: 20, name: icon }))),
                    react_1.default.createElement(material_1.Box, { sx: sx.content },
                        react_1.default.createElement(material_1.Typography, { variant: textVariant }, (0, helpers_1.truncate)(title, 40)),
                        enableRatings && (react_1.default.createElement(__1.AvgRating, { resource: resource, size: "small" })),
                        react_1.default.createElement(__1.DisplayFields, { fields: displayFields, resource: resource }),
                        enableUsers && (react_1.default.createElement(__1.UserButton, { user: resource === null || resource === void 0 ? void 0 : resource.user }))))),
            react_1.default.createElement(material_1.Box, { sx: sx.actions },
                enableFavorites && react_1.default.createElement(__1.FavoriteButton, { handle: resource === null || resource === void 0 ? void 0 : resource.handle }),
                react_1.default.createElement(__1.Actions, { numVisible: 0, resource: resource, actions: actions })))));
};
exports.default = CoverList;
var sx = {
    root: {
        width: '100%',
        position: 'relative',
        flexDirection: 'column',
        overflow: 'hidden',
        borderRadius: 1,
    },
    cover: {
        p: 1,
        width: '100%',
        position: 'absolute',
        left: 0,
        bottom: 0,
        zIndex: 1,
    },
    button: {
        bgcolor: 'common.white',
        color: 'common.black',
        '&:hover': {
            color: 'common.black',
            bgcolor: 'common.white',
            opacity: 0.9,
        },
    },
    content: {
        p: 1,
        width: '100%',
        minHeight: '60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        right: 10,
    },
};
