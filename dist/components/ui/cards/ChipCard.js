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
var __1 = require("../..");
var ChipCard = function (props) {
    var primary = props.primary, secondary = props.secondary, secondaryAction = props.secondaryAction, handleClick = props.handleClick, image = props.image, _a = props.slots, slots = _a === void 0 ? {
        item: {},
        image: {},
    } : _a;
    return (react_1.default.createElement(material_1.List, __assign({ dense: true, disablePadding: true, sx: sx.root }, slots.item),
        react_1.default.createElement(material_1.ListItem, { disablePadding: true, disableGutters: true, secondaryAction: secondaryAction },
            react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton, onClick: handleClick && handleClick },
                react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon },
                    react_1.default.createElement(__1.AvatarImage, __assign({ image: image, alt: primary, height: 44 }, slots.image))),
                react_1.default.createElement(material_1.ListItemText, { primary: primary, secondary: secondary })))));
};
exports.default = ChipCard;
var sx = {
    root: {
        my: 0,
        p: 0,
        borderBottom: '1px solid',
        borderColor: 'divider',
    },
    listItemButton: {
        p: 1,
        minHeight: 48,
        '&:hover': {
            bgcolor: 'transparent',
        },
    },
    gradient: {
        '&::after': {
            content: '""',
            borderRadius: '50%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to top, rgb(0,0,0,0.5), transparent)',
        },
    },
    overlay: {
        '&::after': {
            content: '""',
            borderRadius: '50%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgb(0,0,0,0.5)',
        },
    },
    rootBorder: {
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
    },
    avatar: {
        height: '48px',
        width: '48px',
        backgroundImage: 'linear-gradient(45deg, #999999,#DDDDDD,#FAFAFA)',
    },
    listItemIcon: {
        mr: 2,
        height: '48px',
        width: '48px',
    },
    buttons: {
        px: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
};
