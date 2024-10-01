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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var CollectionProductsCarousel = function (props) {
    var _a = props.query, query = _a === void 0 ? {} : _a, productCollectionId = props.productCollectionId, enableArrows = props.enableArrows, enableAutoplay = props.enableAutoplay, rest = __rest(props, ["query", "productCollectionId", "enableArrows", "enableAutoplay"]);
    query = __assign(__assign({}, query), { method: 'collection_products', product_collection_id: productCollectionId });
    var slots = {
        list: {
            enableArrows: enableArrows,
            enableAutoplay: enableAutoplay
        }
    };
    return react_1.default.createElement(__1.ProductList, __assign({}, rest, { query: query, list: __1.ProductCarouselListItems, slots: slots }));
};
exports.default = CollectionProductsCarousel;