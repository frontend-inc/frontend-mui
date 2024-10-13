"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var button_1 = require("../../../../shadcn/ui/button");
var components_1 = require("../../../../components");
var ResourceToolbarButtons = function (props) {
    var _a = props || {}, selected = _a.selected, buttons = _a.buttons;
    return (react_1.default.createElement("div", { className: "flex flex-row space-x-2" }, buttons === null || buttons === void 0 ? void 0 : buttons.map(function (button, index) { return (react_1.default.createElement(button_1.Button, { key: index, variant: (button === null || button === void 0 ? void 0 : button.variant) || 'default', onClick: selected && (button === null || button === void 0 ? void 0 : button.onClick)
            ? function () { return button === null || button === void 0 ? void 0 : button.onClick(selected); }
            : undefined, className: "".concat((button === null || button === void 0 ? void 0 : button.color) === 'secondary'
            ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
            : '') },
        (button === null || button === void 0 ? void 0 : button.icon) && (react_1.default.createElement(components_1.Icon, { name: button === null || button === void 0 ? void 0 : button.icon, className: "mr-2 h-4 w-4" })), button === null || button === void 0 ? void 0 :
        button.label)); })));
};
exports.default = ResourceToolbarButtons;
