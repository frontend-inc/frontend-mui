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
var DataLayout = function (props) {
    var loading = props.loading, _a = props.grid, grid = _a === void 0 ? false : _a, children = props.children;
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign(__assign({}, sx.root), (grid ? sx.grid : sx.list)), (loading && sx.loading)) }, children));
};
exports.default = DataLayout;
var sx = {
    root: {
        width: '100%',
        overflowX: 'scroll',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    },
    listDense: {
        gap: '8px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '16px',
        pb: 1,
    },
    loading: {
        opacity: 0.5,
    },
};
