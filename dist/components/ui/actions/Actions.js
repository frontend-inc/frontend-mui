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
var ActionButton_1 = __importDefault(require("./ActionButton"));
var ActionMenuItem_1 = __importDefault(require("./ActionMenuItem"));
var components_1 = require("../../../components");
var Actions = function (props) {
    var _a, _b, _c;
    var color = props.color, actions = props.actions, resource = props.resource, _d = props.numVisible, numVisible = _d === void 0 ? 2 : _d, justifyContent = props.justifyContent;
    return (react_1.default.createElement(material_1.Stack, { sx: __assign(__assign({}, sx.root), { justifyContent: justifyContent }), direction: "row", spacing: 0 },
        ((_a = actions === null || actions === void 0 ? void 0 : actions.slice(0, numVisible)) === null || _a === void 0 ? void 0 : _a.length) > 0 && (react_1.default.createElement(material_1.Stack, { sx: __assign(__assign({}, sx.buttons), { justifyContent: justifyContent }), direction: { sm: 'row', xs: 'column' }, spacing: 1 }, (_b = actions === null || actions === void 0 ? void 0 : actions.slice(0, numVisible)) === null || _b === void 0 ? void 0 : _b.map(function (action, index) { return (react_1.default.createElement(ActionButton_1.default, { key: index, action: action, resource: resource })); }))),
        (actions === null || actions === void 0 ? void 0 : actions.length) > numVisible && (react_1.default.createElement(components_1.MenuButton, { color: color }, (_c = actions === null || actions === void 0 ? void 0 : actions.slice(numVisible, actions.length)) === null || _c === void 0 ? void 0 : _c.map(function (action, index) { return (react_1.default.createElement(ActionMenuItem_1.default, { key: index, action: action, resource: resource })); })))));
};
exports.default = Actions;
var sx = {
    root: {
        justifyContent: 'space-between',
    },
    buttons: {
        width: '100%',
        justifyContent: 'flex-start',
    },
};
