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
var SubscriptionTableCard = function (props) {
    var _a;
    var _b = props.buttonText, buttonText = _b === void 0 ? 'Subscribe' : _b, selected = props.selected, handleClick = props.handleClick, subscription = props.subscription;
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.root), (selected && sx.selected)) },
        react_1.default.createElement(material_1.Stack, { sx: sx.content, direction: "column", spacing: 1 },
            (subscription === null || subscription === void 0 ? void 0 : subscription.label) && (react_1.default.createElement(material_1.Box, null,
                react_1.default.createElement(__1.Label, { label: subscription.label }))),
            react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.secondary" }, subscription.name),
            react_1.default.createElement(material_1.Typography, { variant: "h5", color: "text.primary" }, subscription.display_price),
            react_1.default.createElement(material_1.Divider, null),
            react_1.default.createElement(material_1.List, { dense: true, disablePadding: true }, (_a = subscription === null || subscription === void 0 ? void 0 : subscription.features) === null || _a === void 0 ? void 0 : _a.map(function (feature, i) { return (react_1.default.createElement(material_1.ListItem, { key: i },
                react_1.default.createElement(material_1.ListItemIcon, null,
                    react_1.default.createElement(__1.Icon, { name: "Check", color: "text.secondary" })),
                react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary" }, feature) }))); }))),
        react_1.default.createElement(material_1.Button, { onClick: handleClick, variant: "contained", color: "primary", fullWidth: true }, buttonText)));
};
exports.default = SubscriptionTableCard;
var sx = {
    root: {
        width: '100%',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        maxWidth: 400,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            boxShadow: 6,
        },
    },
    content: {
        minHeight: 300,
    },
    features: {
        whiteSpace: 'pre-line',
        color: 'text.primary',
        mb: 0,
    },
    selected: {
        border: '3px solid',
        borderColor: 'primary.main',
        transform: 'scale(1.05)',
    },
};
