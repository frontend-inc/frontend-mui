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
var material_1 = require("@mui/material");
var __1 = require("../../..");
var frontend_shopify_1 = require("frontend-shopify");
var ShopifyProductImageCarousel = function () {
    var _a = (0, frontend_shopify_1.useProductContext)(), images = _a.images, handleImageClick = _a.handleImageClick;
    return (react_1.default.createElement(__1.CarouselImage, null, images === null || images === void 0 ? void 0 : images.map(function (image) {
        var _a;
        return (react_1.default.createElement(material_1.Box, { sx: sx.image, key: image.id },
            react_1.default.createElement(__1.TouchableOpacity, { handleClick: function () { return handleImageClick(image); } },
                react_1.default.createElement(material_1.Box, { component: "img", src: (_a = image === null || image === void 0 ? void 0 : image.url) === null || _a === void 0 ? void 0 : _a.url, sx: __assign(__assign({}, sx.image), { height: '512px' }), alt: image === null || image === void 0 ? void 0 : image.altText }))));
    })));
};
exports.default = ShopifyProductImageCarousel;
var sx = {
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        pb: 1,
    },
};
