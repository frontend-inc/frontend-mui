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
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var helpers_1 = require("../../../helpers");
var HeroProfile = function (props) {
    var _a = props || {}, actions = _a.actions, resource = _a.resource, _b = _a.displayFields, displayFields = _b === void 0 ? [] : _b, enableBorder = _a.enableBorder, enableEdit = _a.enableEdit, handleEdit = _a.handleEdit, enableFavorites = _a.enableFavorites, enableLikes = _a.enableLikes, enableSharing = _a.enableSharing, enableRatings = _a.enableRatings, enableBuyNow = _a.enableBuyNow, enableStripePaymentLink = _a.enableStripePaymentLink;
    var data = (resource || {}).data;
    var _c = resource || {}, label = _c.label, title = _c.title, image = _c.image, description = _c.description;
    var _d = (0, react_1.useState)(false), open = _d[0], setOpen = _d[1];
    return (react_1.default.createElement(material_1.Stack, { spacing: 3, direction: "column", justifyContent: "center" },
        react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.root), (enableBorder && sx.rootBorder)) },
            react_1.default.createElement(material_1.Stack, { sx: sx.container, direction: { sm: 'row', xs: 'column' }, spacing: 4 },
                react_1.default.createElement(material_1.Stack, { sx: __assign(__assign({}, sx.leftPanel), (enableBorder &&
                        (enableFavorites || enableSharing || enableLikes) &&
                        sx.leftPanelBorder)), spacing: 2, direction: "column" },
                    react_1.default.createElement(material_1.Box, { sx: sx.imageContainer },
                        react_1.default.createElement(__1.Image, { label: label, height: 240, src: image === null || image === void 0 ? void 0 : image.url, alt: title, disableBorderRadius: enableBorder })),
                    react_1.default.createElement(__1.SocialButtons, { handle: resource === null || resource === void 0 ? void 0 : resource.handle, enableLikes: enableLikes, enableFavorites: enableFavorites, enableSharing: enableSharing })),
                react_1.default.createElement(material_1.Stack, { spacing: 1, sx: __assign(__assign({}, sx.content), (enableBorder && sx.contentBorder)) },
                    react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "h4" }, title),
                    enableRatings && (react_1.default.createElement(__1.AvgRating, { resource: resource, enableTotal: true })),
                    react_1.default.createElement(__1.DisplayFields, { fields: displayFields, resource: resource }),
                    enableBuyNow && (react_1.default.createElement(__1.BuyNowButton, { resource: resource, buttonText: "Buy Now" })),
                    enableStripePaymentLink && (react_1.default.createElement(__1.StripePaymentLink, { resource: resource, buttonText: "Checkout" })),
                    react_1.default.createElement(__1.ExpandableText, { text: description })),
                (actions || enableEdit) && (react_1.default.createElement(material_1.Stack, { sx: sx.actions, direction: { sm: 'row', xs: 'column' }, spacing: 1, p: enableBorder ? 1 : 0 },
                    react_1.default.createElement(__1.Actions, { actions: (0, helpers_1.buildActions)({
                            enableEdit: enableEdit,
                            handleEdit: handleEdit,
                            actions: actions,
                        }), resource: (0, frontend_js_1.flattenDocument)(resource), justifyContent: "flex-end" })))))));
};
exports.default = HeroProfile;
var sx = {
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
    },
    rootBorder: {
        overflow: 'hidden',
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
        border: '1px solid',
        borderColor: 'divider',
    },
    container: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: {
            sm: 'flex-start',
            xs: 'center',
        },
    },
    leftPanel: {
        width: '100%',
    },
    leftPanelBorder: {
        pb: 2,
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        maxHeight: {
            sm: 240,
            xs: 240,
        },
        borderRadius: 1,
    },
    header: {
        width: '100%',
        textAlign: 'center',
    },
    content: {
        width: '100%',
    },
    contentBorder: {
        p: 2,
    },
    text: {
        width: '100%',
        whiteSpace: 'pre-line',
    },
    caption: {
        color: 'text.secondary',
    },
    link: {
        cursor: 'pointer',
        color: 'text.secondary',
    },
    socialUrls: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    actions: {
        width: '100%',
        justifyContent: {
            sm: 'flex-end',
            xs: 'center',
        },
    },
};
