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
    var _a, _b;
    var actions = props.actions, resource = props.resource, _c = props.justifyContent, justifyContent = _c === void 0 ? 'center' : _c;
    return (react_1.default.createElement(material_1.Stack, { sx: __assign(__assign({}, sx.root), { justifyContent: justifyContent }), direction: "row", spacing: 1 },
        react_1.default.createElement(material_1.Stack, { sx: __assign(__assign({}, sx.buttons), { justifyContent: justifyContent }), direction: 'row', spacing: 1 }, (_a = actions === null || actions === void 0 ? void 0 : actions.slice(0, 2)) === null || _a === void 0 ? void 0 : _a.map(function (action, index) { return (react_1.default.createElement(ActionButton_1.default, { key: index, action: action, resource: resource })); })),
        (actions === null || actions === void 0 ? void 0 : actions.length) > 2 && (react_1.default.createElement(components_1.MenuButton, null, (_b = actions === null || actions === void 0 ? void 0 : actions.slice(2, actions.length)) === null || _b === void 0 ? void 0 : _b.map(function (action, index) { return (react_1.default.createElement(ActionMenuItem_1.default, { key: index, action: action, resource: resource })); })))));
};
exports.default = Actions;
var sx = {
    root: {
        width: '100%',
    },
    buttons: {
        width: '100%',
    },
};