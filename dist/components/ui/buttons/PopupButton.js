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
var icons_material_1 = require("@mui/icons-material");
var PopupButton = function (props) {
    var _a = props || {}, label = _a.label, children = _a.children, _b = _a.anchorVertical, anchorVertical = _b === void 0 ? 'bottom' : _b, _c = _a.anchorHorizontal, anchorHorizontal = _c === void 0 ? 'left' : _c;
    var _d = (0, react_1.useState)(null), anchorEl = _d[0], setAnchorEl = _d[1];
    var open = Boolean(anchorEl);
    var handleButtonClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    return (react_1.default.createElement(material_1.Box, null,
        react_1.default.createElement(material_1.Button, { variant: "text", color: "secondary", onClick: handleButtonClick, endIcon: open ? react_1.default.createElement(icons_material_1.ExpandLess, null) : react_1.default.createElement(icons_material_1.ExpandMore, null) }, label),
        react_1.default.createElement(material_1.Popover, { id: "ProductFilter-menu", anchorEl: anchorEl, open: open, onClose: handleClose, anchorOrigin: {
                vertical: anchorVertical,
                horizontal: anchorHorizontal,
            }, 
            //@ts-ignore
            slots: { paper: { sx: sx.paper } }, sx: sx.popover }, children)));
};
exports.default = PopupButton;
var sx = {
    paper: {},
    popover: {
        '& .MuiPopover-paper': {
            minWidth: '180px',
        },
    },
};
