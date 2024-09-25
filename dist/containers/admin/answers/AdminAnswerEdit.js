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
var components_1 = require("../../../components");
var AdminAnswerEdit = function (props) {
    var resource = (props || {}).resource;
    var fields = [
        { label: 'Image', name: 'image', variant: 'media' },
        { label: 'Answer', name: 'title', variant: 'string' },
        { label: 'Value', name: 'value', variant: 'string' },
        { label: 'Points', name: 'points', variant: 'number' },
    ];
    return (react_1.default.createElement(components_1.ResourceForm, __assign({}, props, { resource: resource, fields: fields })));
};
exports.default = AdminAnswerEdit;
