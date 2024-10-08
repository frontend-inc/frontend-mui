"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var CommentForm = function (props) {
    var _a = props || {}, loading = _a.loading, errors = _a.errors, comment = _a.comment, handleChange = _a.handleChange, handleSubmit = _a.handleSubmit;
    return (react_1.default.createElement(components_1.AuthGuard, null,
        react_1.default.createElement(material_1.ListItem, { sx: {
                pl: 0,
            } },
            react_1.default.createElement(material_1.Stack, { sx: sx.form, direction: "column", spacing: 1 },
                react_1.default.createElement(components_1.TextInput, { errors: errors, multiline: true, rows: 4, name: "body", value: comment === null || comment === void 0 ? void 0 : comment.body, handleChange: handleChange, placeholder: "Leave a comment..." }),
                react_1.default.createElement(material_1.Button, { variant: "contained", onClick: handleSubmit, disabled: loading, startIcon: loading && react_1.default.createElement(components_1.IconLoading, null) }, "Submit")))));
};
exports.default = CommentForm;
var sx = {
    root: {
        alignItems: 'flex-start',
    },
    form: {
        p: 0,
        px: 0,
        width: '100%',
        alignItems: 'flex-start',
    },
};
