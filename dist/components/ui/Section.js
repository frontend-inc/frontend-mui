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
var theme_1 = require("../../theme");
var components_1 = require("../../components");
var context_1 = require("../../context");
var Section = function (props) {
    var _a = props.enableTransitions, enableTransitions = _a === void 0 ? false : _a, _b = props.requireAuth, requireAuth = _b === void 0 ? false : _b, _c = props.requirePaid, requirePaid = _c === void 0 ? false : _c, children = props.children, _d = props.bgColor, bgColor = _d === void 0 ? '#ffffff' : _d, maxWidth = props.maxWidth, _e = props.py, py = _e === void 0 ? 6 : _e, _f = props.px, px = _f === void 0 ? 3 : _f;
    var _g = (0, react_1.useState)(theme_1.muiTheme.breakpoints.values.md), width = _g[0], setWidth = _g[1];
    // Since breakpoints are modified to
    // to compensate for the extra width of the Editor
    // we need to adjust the width of the Section component manually
    (0, react_1.useEffect)(function () {
        switch (maxWidth) {
            case 'sm':
                setWidth(theme_1.muiTheme.breakpoints.values.sm);
                break;
            case 'md':
                setWidth(theme_1.muiTheme.breakpoints.values.md);
                break;
            default:
                setWidth('100%');
                break;
        }
    }, [maxWidth]);
    return (react_1.default.createElement(context_1.ThemeProvider, { muiTheme: theme_1.muiTheme, bgcolor: bgColor },
        react_1.default.createElement(material_1.Fade, { in: true, timeout: 1000 },
            react_1.default.createElement(material_1.Box, { sx: sx.root },
                react_1.default.createElement(material_1.Box, { sx: __assign(__assign(__assign({}, sx.container), (enableTransitions && sx.containerTransitions)), { py: py, px: px, maxWidth: width }) },
                    react_1.default.createElement(components_1.AuthGuard, { requireAuth: requireAuth, requirePaid: requirePaid }, children))))));
};
exports.default = Section;
var sx = {
    root: {
        width: '100%',
        minHeight: '60px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'background.default',
    },
    container: {
        width: '100%',
        overflowX: 'hidden',
    },
    containerTransitions: {
        transition: 'all 0.3s ease-in-out',
    },
    title: {
        width: '100%',
    },
};
