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
var OnlineStatusBadge = function (props) {
    var children = props.children;
    return (react_1.default.createElement(material_1.Badge, __assign({}, props, { variant: "dot", sx: sx.badge, anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
        }, color: "success" }), children && children));
};
exports.default = OnlineStatusBadge;
var sx = {
    badge: {
        '& .MuiBadge-dot': {
            right: '5px',
            bottom: '5px',
            bgcolor: 'success.main',
        },
    },
};
