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
var context_1 = require("../../../../context");
var material_1 = require("@mui/material");
var __1 = require("../../..");
var helpers_1 = require("../../../../helpers");
var router_1 = require("next/router");
var components_1 = require("../../../../components");
var CardGrid = function (props) {
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var _a = props || {}, ref = _a.ref, actions = _a.actions, resource = _a.resource, _b = _a.displayFields, displayFields = _b === void 0 ? [] : _b, href = _a.href, handleClick = _a.handleClick, _c = _a.objectFit, objectFit = _c === void 0 ? 'cover' : _c, _d = _a.height, height = _d === void 0 ? 240 : _d, _e = _a.enableUsers, enableUsers = _e === void 0 ? false : _e, _f = _a.enableBorder, enableBorder = _f === void 0 ? false : _f, _g = _a.enableGradient, enableGradient = _g === void 0 ? false : _g, _h = _a.enableOverlay, enableOverlay = _h === void 0 ? false : _h, _j = _a.enableFavorites, enableFavorites = _j === void 0 ? false : _j, _k = _a.enableRatings, enableRatings = _k === void 0 ? false : _k;
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
    return (react_1.default.createElement(material_1.Stack, { ref: ref, spacing: 1, sx: __assign(__assign(__assign({}, sx.root), (enableBorder && sx.rootBorder)), { width: '100%', minHeight: height + 80 }) },
        react_1.default.createElement(material_1.Box, { sx: sx.imageContainer },
            react_1.default.createElement(__1.Image, { src: image === null || image === void 0 ? void 0 : image.url, height: height, objectFit: objectFit, alt: title, label: label, enableGradient: enableGradient, disableBorderRadius: enableBorder, enableOverlay: enableOverlay, handleClick: handleItemClick })),
        react_1.default.createElement(material_1.Stack, { spacing: 0, sx: __assign(__assign({}, sx.content), (enableBorder && sx.contentBorder)) },
            react_1.default.createElement(material_1.Stack, { sx: sx.contentArea, direction: "row", spacing: 0 },
                react_1.default.createElement(material_1.Typography, { sx: sx.title, color: "textPrimary", variant: "subtitle2" }, (0, helpers_1.truncate)(title)),
                react_1.default.createElement(material_1.Stack, { direction: "row", justifyContent: "flex-end" },
                    enableFavorites && react_1.default.createElement(__1.FavoriteButton, { handle: resource === null || resource === void 0 ? void 0 : resource.handle }),
                    react_1.default.createElement(components_1.Actions, { numVisible: 0, actions: actions, resource: resource }))),
            enableRatings && (react_1.default.createElement(__1.AvgRating, { resource: resource, size: "small" })),
            (displayFields === null || displayFields === void 0 ? void 0 : displayFields.length) > 0 && (react_1.default.createElement(__1.DisplayFields, { fields: displayFields, resource: resource })),
            (resource === null || resource === void 0 ? void 0 : resource.user) && (react_1.default.createElement(__1.UserButton, { user: resource === null || resource === void 0 ? void 0 : resource.user })))));
};
exports.default = CardGrid;
var sx = {
    root: {
        borderRadius: 1,
        width: '100%',
        minWidth: 300,
        bgcolor: 'background.default'
    },
    rootBorder: {
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        overflow: 'hidden',
    },
    imageContainer: {
        width: '100%',
        position: 'relative',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    gradient: {
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '50%',
            background: 'linear-gradient(to top, rgb(0,0,0,0.5), transparent)',
        },
    },
    cardHeader: {
        height: 40,
        alignItems: 'center',
    },
    cardHeaderBorder: {
        px: 1
    },
    content: {
        width: '100%',
    },
    contentArea: {
        width: '100%',
    },
    contentBorder: {
        p: 1,
        pt: 0
    },
    title: {
        width: '100%',
    },
    description: {
        maxWidth: '320px',
    },
};
