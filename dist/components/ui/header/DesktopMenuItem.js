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
var hooks_1 = require("../../../hooks");
var icons_material_1 = require("@mui/icons-material");
var DesktopSubmenuItem = function (props) {
    var menuItem = props.menuItem, handleClick = props.handleClick;
    return (react_1.default.createElement(material_1.MenuItem
    // @ts-ignore 
    , { 
        // @ts-ignore 
        onClick: function () { return handleClick(menuItem.path); } },
        react_1.default.createElement(material_1.Typography, { variant: "button", color: "text.primary" }, menuItem.name)));
};
var DesktopMenuItem = function (props) {
    var menuItem = props.menuItem, handleClick = props.handleClick;
    var children = menuItem.children;
    var _a = (0, hooks_1.useMenu)(), open = _a.open, openMenu = _a.openMenu, closeMenu = _a.closeMenu, anchorEl = _a.anchorEl;
    var handleMenuClick = function (ev) {
        if ((children === null || children === void 0 ? void 0 : children.length) > 0) {
            openMenu(ev);
        }
        else {
            //@ts-ignore
            handleClick(menuItem.path);
        }
    };
    var handleMouseLeave = function () {
        closeMenu();
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Button, { sx: sx.menuButton, onClick: handleMenuClick, endIcon: (children === null || children === void 0 ? void 0 : children.length) > 0 && (react_1.default.createElement(icons_material_1.ExpandMore, { sx: __assign(__assign({}, sx.icon), (open && sx.rotateIcon)) })) }, menuItem.name),
        react_1.default.createElement(material_1.Menu, { open: open, anchorEl: anchorEl, onClose: closeMenu, MenuListProps: {
                onMouseLeave: handleMouseLeave,
            } }, children === null || children === void 0 ? void 0 : children.map(function (child, index) { return (react_1.default.createElement(DesktopSubmenuItem, { key: index, menuItem: child, handleClick: handleClick })); }))));
};
exports.default = DesktopMenuItem;
var sx = {
    buttonGroup: {
        borderRight: 'none !important'
    },
    menuButton: {
        cursor: 'pointer',
        justifyContent: 'flex-start',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRight: 'none !important'
    },
    iconButton: {
        '&:hover': {
            bgcolor: 'transparent'
        }
    },
    icon: {
        transition: 'transform 0.2s ease-in-out',
    },
    rotateIcon: {
        transform: 'rotate(-180deg)',
    },
};
