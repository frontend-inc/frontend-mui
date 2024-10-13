"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var router_1 = require("next/router");
var tailwind_1 = require("../../../tailwind");
var card_1 = require("../../../shadcn/ui/card");
var button_1 = require("../../../shadcn/ui/button");
var hooks_1 = require("../../../hooks");
var helpers_1 = require("../../../helpers");
var components_1 = require("../../../components");
function ShopifyCollectionCard(_a) {
    var collection = _a.collection, href = _a.href, handleClick = _a.handleClick, buttonText = _a.buttonText, _b = _a.enableGradient, enableGradient = _b === void 0 ? false : _b, _c = _a.enableOverlay, enableOverlay = _c === void 0 ? false : _c;
    var clientUrl = (0, hooks_1.useApp)().clientUrl;
    var router = (0, router_1.useRouter)();
    var _d = collection || {}, label = _d.label, title = _d.title, image = _d.image;
    var handleItemClick = function () {
        if (handleClick) {
            handleClick();
        }
        else if (href) {
            router.push("".concat(clientUrl).concat(href));
        }
    };
    return (react_1.default.createElement(card_1.Card, { className: "relative w-full rounded-lg" },
        react_1.default.createElement("div", { className: "relative w-full h-full" },
            react_1.default.createElement(components_1.Image
            // @ts-ignore
            , { 
                // @ts-ignore
                src: image === null || image === void 0 ? void 0 : image.url, alt: title || 'Collection image', label: label, aspectRatio: 1.0, objectFit: "cover", enableGradient: enableGradient, enableOverlay: enableOverlay })),
        react_1.default.createElement("div", { className: "dark absolute bottom-0 left-0 w-full p-4 z-10" },
            react_1.default.createElement("div", { className: "flex items-center justify-between w-full" },
                react_1.default.createElement("div", { className: "flex flex-col items-start justify-center" },
                    react_1.default.createElement(tailwind_1.Typography, { variant: "body1", className: "font-bold" }, (0, helpers_1.truncate)(title || '', 60))),
                buttonText && (react_1.default.createElement(button_1.Button, { variant: "secondary", size: "sm", onClick: handleItemClick, className: "bg-white text-black hover:bg-white/90" }, "Browse"))))));
}
exports.default = ShopifyCollectionCard;
