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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var context_1 = require("../../../context");
var MobileDrawer_1 = __importDefault(require("./MobileDrawer"));
var MobileTopNav_1 = __importDefault(require("./MobileTopNav"));
var DesktopTopNav_1 = __importDefault(require("./DesktopTopNav"));
var DesktopSideNav_1 = __importDefault(require("./DesktopSideNav"));
var Header = function (props) {
    var logo = (0, react_1.useContext)(context_1.AppContext).logo;
    var _a = props.sideNav, sideNav = _a === void 0 ? false : _a, _b = props.editing, editing = _b === void 0 ? false : _b, menuItems = props.menuItems, handleClick = props.handleClick, _c = props.enableAuth, enableAuth = _c === void 0 ? false : _c, _d = props.enableStripe, enableStripe = _d === void 0 ? false : _d, _e = props.enableShopify, enableShopify = _e === void 0 ? false : _e, _f = props.enableNotifications, enableNotifications = _f === void 0 ? false : _f;
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.root), (sideNav && sx.rootSideNav)) },
        !sideNav ? (react_1.default.createElement(DesktopTopNav_1.default, { editing: editing, logo: logo, enableAuth: enableAuth, enableStripe: enableStripe, enableShopify: enableShopify, enableNotifications: enableNotifications, menuItems: menuItems, handleClick: handleClick })) : (react_1.default.createElement(DesktopSideNav_1.default, { editing: editing, logo: logo, enableAuth: enableAuth, enableStripe: enableStripe, enableShopify: enableShopify, enableNotifications: enableNotifications, menuItems: menuItems, handleClick: handleClick })),
        react_1.default.createElement(MobileTopNav_1.default, { editing: editing, logo: logo, enableShopify: enableShopify, enableNotifications: enableNotifications, menuItems: menuItems, handleClick: handleClick }),
        react_1.default.createElement(MobileDrawer_1.default, { editing: editing, enableAuth: enableAuth, enableStripe: enableStripe, enableShopify: enableShopify, menuItems: menuItems, handleClick: handleClick })));
};
exports.default = Header;
var sx = {
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        bgcolor: 'background.default',
    },
    rootSideNav: {
        width: {
            md: '280px',
            xs: '100%',
        },
        minWidth: {
            md: '280px',
            xs: '100%',
        },
    },
};
