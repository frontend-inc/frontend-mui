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
var helpers_1 = require("../../../helpers");
var FULL_WIDTH_VARIANTS = ['text', 'image'];
var Details = function (props) {
    var resource = props.resource, fields = props.fields, _a = props.enableBorder, enableBorder = _a === void 0 ? false : _a;
    var _b = (0, react_1.useState)(), document = _b[0], setDocument = _b[1];
    (0, react_1.useEffect)(function () {
        if (resource) {
            setDocument((0, helpers_1.flattenDocument)(resource));
        }
    }, [resource]);
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Grid, { container: true, spacing: 1 }, document &&
            fields.map(function (field, i) { return (react_1.default.createElement(material_1.Grid, { key: i, item: true, xs: 12, sm: FULL_WIDTH_VARIANTS.includes(field === null || field === void 0 ? void 0 : field.variant) ? 12 : 4 },
                react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.item), (enableBorder && sx.itemBorder)) },
                    react_1.default.createElement(__1.Field, { field: field, document: document })))); }))));
};
exports.default = Details;
var sx = {
    root: {
        width: '100%',
    },
    item: {
        p: 2,
        width: '100%',
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
        minHeight: 110,
    },
    itemBorder: {
        border: '1px solid',
        borderColor: 'divider',
    },
    itemFullWidth: {
        gridColumn: 'span 3',
    },
};
