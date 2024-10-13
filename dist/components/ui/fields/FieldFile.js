"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var tailwind_1 = require("../../../tailwind");
var components_1 = require("../../../components");
var FieldFile = function (props) {
    var value = props.value, label = props.label, _a = props.color, color = _a === void 0 ? 'text.secondary' : _a, disableLabel = props.disableLabel;
    return (react_1.default.createElement(components_1.FieldWrapper, { label: label, color: color, disableLabel: disableLabel },
        react_1.default.createElement(tailwind_1.Stack, { direction: "row", spacing: 1 },
            react_1.default.createElement(components_1.Icon, { name: "File", color: "text.primary" }),
            (value === null || value === void 0 ? void 0 : value.content_type) && (react_1.default.createElement(tailwind_1.Link, { href: (value === null || value === void 0 ? void 0 : value.url) || '#' }, value === null || value === void 0 ? void 0 : value.content_type)))));
};
exports.default = FieldFile;
