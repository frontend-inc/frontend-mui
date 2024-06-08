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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var frontend_shopify_1 = require("frontend-shopify");
var material_1 = require("@mui/material");
var material_2 = require("@mui/material");
var frontend_shopify_2 = require("frontend-shopify");
var components_1 = require("../../../components");
var router_1 = require("next/router");
var TopNavShopifyAuthButton = function (props) {
    var handleClick = props.handleClick, icon = props.icon;
    return (react_1.default.createElement(material_1.IconButton, { onClick: handleClick },
        react_1.default.createElement(components_1.Icon, { name: icon, size: 24 })));
};
var SideNavShopifyAuthButton = function (props) {
    var handleClick = props.handleClick, icon = props.icon;
    return (react_1.default.createElement(material_2.ListItem, { disablePadding: true, disableGutters: true },
        react_1.default.createElement(material_2.ListItemButton, { sx: sx.listItemButton, onClick: handleClick },
            react_1.default.createElement(material_2.ListItemIcon, null,
                react_1.default.createElement(components_1.Icon, { name: icon })),
            react_1.default.createElement(material_2.ListItemText, { primary: react_1.default.createElement(material_2.Typography, { variant: "button", color: "text.primary" }, "Orders") }))));
};
var ShopifyAuth = function (props) {
    var router = (0, router_1.useRouter)();
    var _a = props || {}, _b = _a.icon, icon = _b === void 0 ? 'ReceiptText' : _b, _c = _a.variant, variant = _c === void 0 ? 'topNav' : _c;
    var customerPortalUrl = (0, react_1.useContext)(frontend_shopify_1.ShopifyContext).customerPortalUrl;
    var findShop = (0, frontend_shopify_2.useShop)().findShop;
    var getLastPathOfUrl = function (urlString) {
        var url = new URL(urlString);
        var pathname = url.pathname;
        var pathSegments = pathname
            .split('/')
            .filter(function (segment) { return segment.length > 0; });
        return pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : '';
    };
    var handleClick = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (customerPortalUrl) {
                router.push(customerPortalUrl);
            }
            return [2 /*return*/];
        });
    }); };
    var fetchCustomerPortalUrl = function () { return __awaiter(void 0, void 0, void 0, function () {
        var shop, shopId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, findShop()];
                case 1:
                    shop = _a.sent();
                    shopId = getLastPathOfUrl(shop === null || shop === void 0 ? void 0 : shop.id);
                    return [2 /*return*/, "https://shopify.com/".concat(shopId, "/account")];
            }
        });
    }); };
    if (!customerPortalUrl)
        return null;
    return variant == 'topNav' ? (react_1.default.createElement(TopNavShopifyAuthButton, { icon: icon, handleClick: handleClick })) : (react_1.default.createElement(SideNavShopifyAuthButton, { icon: icon, handleClick: handleClick }));
};
exports.default = ShopifyAuth;
var sx = {
    listItemButton: {
        px: 1,
    },
};
