"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var __2 = require("..");
var material_1 = require("@mui/material");
var frontend_shopify_1 = require("frontend-shopify");
var ProductFavorites = function (props) {
    var _a = props || {}, href = _a.href, _b = _a.enableBorder, enableBorder = _b === void 0 ? false : _b, _c = _a.buttonText, buttonText = _c === void 0 ? 'Add to cart' : _c, enableAddToCart = _a.enableAddToCart, enableQuantity = _a.enableQuantity, enableQuickShop = _a.enableQuickShop;
    var favorites = (0, frontend_shopify_1.useFavorites)().favorites;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(__2.ProductGrid, { href: href, products: favorites, enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuantity: enableQuantity, enableQuickShop: enableQuickShop, buttonText: buttonText }),
        (favorites === null || favorites === void 0 ? void 0 : favorites.length) === 0 && (react_1.default.createElement(__1.Placeholder, { icon: 'Heart', title: 'No favorites', description: 'You have no favorites yet.' }))));
};
exports.default = ProductFavorites;
var sx = {
    root: {
        width: '100%',
    },
};
