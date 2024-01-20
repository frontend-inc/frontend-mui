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
var material_1 = require("@mui/material");
var shopify_1 = require("../../../components/shopify");
var webstudio_shopify_1 = require("webstudio-shopify");
var ProductDetailPage = function (props) {
    var handle = props.handle, buttonText = props.buttonText, _a = props.enableQuantity, enableQuantity = _a === void 0 ? true : _a, _b = props.enableSubscription, enableSubscription = _b === void 0 ? true : _b, enableFavorites = props.enableFavorites, enableOkendoStarRating = props.enableOkendoStarRating;
    var _c = (0, webstudio_shopify_1.useProducts)(), product = _c.product, setProduct = _c.setProduct, fetchProduct = _c.fetchProduct;
    (0, react_1.useEffect)(function () {
        setProduct(null);
        if (handle) {
            fetchProduct(handle);
        }
    }, [handle]);
    return (react_1.default.createElement(shopify_1.ShopifyProduct, { handle: handle },
        react_1.default.createElement(material_1.Stack, { spacing: 0, direction: "row", sx: sx.container },
            react_1.default.createElement(material_1.Box, { sx: sx.left },
                react_1.default.createElement(shopify_1.ProductImages, { product: product })),
            react_1.default.createElement(material_1.Box, { sx: sx.right },
                react_1.default.createElement(material_1.Stack, { spacing: 2 },
                    react_1.default.createElement(shopify_1.ProductInfo, { product: product, enableOkendoStarRating: enableOkendoStarRating }),
                    react_1.default.createElement(shopify_1.ProductVariantSelector, null),
                    react_1.default.createElement(shopify_1.AddToCartButton, { product: product, variant: variant, enableQuantity: enableQuantity, enableSubscription: enableSubscription, enableFavorites: enableFavorites, label: buttonText }),
                    react_1.default.createElement(shopify_1.TrackRecentlyViewed, { product: product }))))));
};
exports.default = ProductDetailPage;
var sx = {
    container: {
        display: 'flex',
        flexDirection: {
            xs: 'column',
            sm: 'row',
        },
    },
    left: {
        p: {
            sm: 1,
            xs: 0
        },
        width: {
            xs: '100%',
            sm: '50%',
        },
    },
    right: {
        p: {
            sm: 1,
            xs: 0
        },
        width: {
            xs: '100%',
            sm: '50%',
        },
    },
    root: {
        px: 0,
    },
    actions: {
        alignItems: 'flex-end'
    }
};
