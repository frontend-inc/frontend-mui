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
var icons_material_1 = require("@mui/icons-material");
var MenuList = function (props) {
    var label = props.label, _a = props.defaultClosed, defaultClosed = _a === void 0 ? false : _a, children = props.children, _b = props.enableBorder, enableBorder = _b === void 0 ? false : _b, _c = props.disablePadding, disablePadding = _c === void 0 ? false : _c;
    var _d = (0, react_1.useState)(!defaultClosed), open = _d[0], setOpen = _d[1];
    var handleToggleClick = function () {
        setOpen(!open);
    };
    return (react_1.default.createElement(material_1.List, { disablePadding: true, sx: __assign(__assign({}, sx.root), (enableBorder && sx.border)) },
        label && (react_1.default.createElement(material_1.ListItem, { sx: sx.listItem, disablePadding: true, disableGutters: true, secondaryAction: react_1.default.createElement(material_1.IconButton, { onClick: handleToggleClick },
                react_1.default.createElement(icons_material_1.ChevronRight, { sx: __assign(__assign({}, sx.icon), (open && sx.expandMore)) })) },
            react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton, disableRipple: true, onClick: handleToggleClick },
                react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { sx: sx.label, variant: 'overline' }, label) })))),
        react_1.default.createElement(material_1.Collapse, { in: open },
            react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.content), (disablePadding && sx.contentDisablePadding)) }, children))));
};
exports.default = MenuList;
var sx = {
    root: {
        width: '100%',
        minWidth: 200,
        my: 0,
    },
    listItem: {},
    listItemButton: {
        py: 0,
        height: '40px',
    },
    listItemIcon: {
        minWidth: '40px',
        width: '40px',
    },
    label: {
        py: 0,
        color: 'text.secondary',
        lineHeight: '1em',
    },
    icon: {
        transition: 'transform 0.3s ease-in-out',
        color: 'text.secondary',
    },
    expandMore: {
        transform: 'rotate(90deg)',
    },
    border: {
        borderTop: '1px solid',
        borderColor: 'divider',
    },
    content: {
        pb: 2,
        px: 2,
    },
    contentDisablePadding: {
        p: 0,
    },
};
