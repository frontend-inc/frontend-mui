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
var Favorites = function (props) {
    var _a = props || {}, _b = _a.editing, editing = _b === void 0 ? false : _b, _c = _a.layout, layout = _c === void 0 ? 'grid' : _c, _d = _a.title, title = _d === void 0 ? 'Favorites' : _d, productComponent = _a.productComponent, _e = _a.enableBorder, enableBorder = _e === void 0 ? false : _e, _f = _a.buttonText, buttonText = _f === void 0 ? 'Add to cart' : _f, enableAddToCart = _a.enableAddToCart, enableQuantity = _a.enableQuantity, enableQuickShop = _a.enableQuickShop, _g = _a.emptyIcon, emptyIcon = _g === void 0 ? 'Heart' : _g, _h = _a.emptyTitle, emptyTitle = _h === void 0 ? 'No favorites' : _h, _j = _a.emptyDescription, emptyDescription = _j === void 0 ? 'You have no favorites yet' : _j;
    var favorites = (0, frontend_shopify_1.useFavorites)().favorites;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        title && (react_1.default.createElement(material_1.Typography, { mb: 1, color: "textPrimary", variant: "h5" }, title)),
        layout == 'grid' && (react_1.default.createElement(__2.ProductGrid, { editing: editing, products: favorites, productComponent: productComponent, enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuantity: enableQuantity, enableQuickShop: enableQuickShop, buttonText: buttonText })),
        layout == 'carousel' && (react_1.default.createElement(__2.ProductCarousel, { editing: editing, products: favorites, productComponent: productComponent, enableBorder: enableBorder, buttonText: buttonText })),
        (favorites === null || favorites === void 0 ? void 0 : favorites.length) === 0 && (react_1.default.createElement(__1.Placeholder, { icon: react_1.default.createElement(__1.Icon, { name: emptyIcon }), title: emptyTitle, description: emptyDescription }))));
};
exports.default = Favorites;
var sx = {
    root: {
        width: '100%',
    },
};
