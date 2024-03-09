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
var shopify_1 = require("../../shopify");
var context_1 = require("../../../context");
var index_1 = require("../../../constants/index");
var DesktopSideNav = function (props) {
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var editing = props.editing, logo = props.logo, menuItems = props.menuItems, _a = props.logoWidth, logoWidth = _a === void 0 ? index_1.HEADER_LOGO_WIDTH : _a, _b = props.logoHeight, logoHeight = _b === void 0 ? index_1.HEADER_LOGO_HEIGHT : _b, handleClick = props.handleClick, _c = props.enableAuth, enableAuth = _c === void 0 ? false : _c, _d = props.enableShopify, enableShopify = _d === void 0 ? false : _d, _e = props.enableNotifications, enableNotifications = _e === void 0 ? false : _e;
    return (react_1.default.createElement(material_1.Hidden, { smDown: true },
        react_1.default.createElement(material_1.Box, { sx: sx.sideNav },
            react_1.default.createElement(material_1.Stack, { sx: __assign(__assign(__assign(__assign({}, sx.desktopSideNav), (enableNotifications && sx.desktopSideNavNotifications)), (editing && sx.desktopSideNavEditor)), (editing && enableNotifications && sx.desktopSideNavEditorNotifications)), direction: "column", spacing: 2 },
                react_1.default.createElement(material_1.Stack, { sx: sx.desktopSideMenuItems, direction: "column", spacing: 2 },
                    react_1.default.createElement(material_1.Box, { sx: sx.centerMenu },
                        react_1.default.createElement(__1.Logo, { src: logo, width: logoWidth, height: logoHeight })), menuItems === null || menuItems === void 0 ? void 0 :
                    menuItems.map(function (menuItem, index) { return (react_1.default.createElement(material_1.Button, { sx: sx.menuButton, key: index, onClick: function () { return handleClick(menuItem.path); } }, menuItem.name)); }),
                    enableShopify && (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(shopify_1.SearchButton, { editing: editing }),
                        react_1.default.createElement(shopify_1.CartButton, { editing: editing })))),
                (enableAuth || enableShopify) && (react_1.default.createElement(material_1.Box, { sx: sx.divider },
                    enableShopify && (react_1.default.createElement(shopify_1.ShopifyAuth, null)),
                    enableAuth && (react_1.default.createElement(__1.AuthButton, { showLabel: true, editing: editing, myAccountUrl: "".concat(clientUrl, "/my-account") }))))))));
};
exports.default = DesktopSideNav;
var sx = {
    sideNav: {
        height: '100%',
        width: {
            sm: '280px',
            xs: '100%',
        },
        minWidth: {
            sm: '280px',
            xs: '100%',
        },
        position: 'relative',
        borderRight: '1px solid',
        borderColor: 'divider',
    },
    desktopSideNav: {
        justifyContent: 'space-between',
        width: '280px',
        p: 2,
        height: '100%',
    },
    desktopSideNavNotifications: {
        height: 'calc(100% - 40px)',
    },
    desktopSideNavEditor: {
        height: 'calc(100% - 140px)',
    },
    desktopSideNavEditorNotifications: {
        height: 'calc(100% - 180px)',
    },
    desktopSideMenuItems: {
        height: '100%',
    },
    centerMenu: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '60px',
    },
    menuButton: {
        justifyContent: 'flex-start',
        bgcolor: 'background.default',
        color: 'text.primary',
    },
    divider: {
        width: "100%",
        borderTop: '1px solid',
        borderColor: 'divider',
        pt: 1.5
    }
};