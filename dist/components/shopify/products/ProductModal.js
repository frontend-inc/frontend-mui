"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var shopify_1 = require("../../../components/shopify");
var frontend_shopify_1 = require("frontend-shopify");
var ProductModal = function (props) {
    var shopifyProduct = props.shopifyProduct, enableQuantity = props.enableQuantity, _a = props.open, open = _a === void 0 ? false : _a, handleClose = props.handleClose, buttonText = props.buttonText;
    return (react_1.default.createElement(components_1.Modal, { open: open, handleClose: handleClose, maxWidth: 'md' },
        react_1.default.createElement(frontend_shopify_1.ProductProvider, null,
            react_1.default.createElement(shopify_1.ProductDetails, { shopifyProduct: shopifyProduct, enableQuantity: enableQuantity, buttonText: buttonText }))));
};
exports.default = ProductModal;
