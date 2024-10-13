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
var utils_1 = require("../../../shadcn/lib/utils");
var card_1 = require("../../../shadcn/ui/card");
var checkbox_1 = require("../../../shadcn/ui/checkbox");
var button_1 = require("../../../shadcn/ui/button");
var tailwind_1 = require("../../../tailwind");
var dropdown_menu_1 = require("../../../shadcn/ui/dropdown-menu");
var lucide_react_1 = require("lucide-react");
var image_1 = __importDefault(require("next/image"));
function ResourceGridItem(_a) {
    var selectable = _a.selectable, selected = _a.selected, primary = _a.primary, secondary = _a.secondary, avatar = _a.avatar, label = _a.label, image = _a.image, handleClick = _a.handleClick, handleEdit = _a.handleEdit, handleDelete = _a.handleDelete, handleSelect = _a.handleSelect, secondaryAction = _a.secondaryAction, menuActions = _a.menuActions, _b = _a.enableBorder, enableBorder = _b === void 0 ? false : _b, _c = _a.slots, slots = _c === void 0 ? {} : _c;
    return (react_1.default.createElement(card_1.Card, { className: (0, utils_1.cn)('overflow-hidden bg-background', 'border border-transparent', enableBorder &&
            'border-border hover:shadow-md transition-shadow duration-200', selected && 'border-primary') },
        react_1.default.createElement(card_1.CardHeader, { className: "h-[50px] p-2 flex justify-between items-center" },
            selectable && (react_1.default.createElement(checkbox_1.Checkbox, { checked: selected, onCheckedChange: handleSelect })),
            avatar,
            react_1.default.createElement("div", { className: "flex flex-row justify-between w-full space-x-1" },
                secondaryAction,
                (menuActions || handleEdit || handleDelete) && (react_1.default.createElement(dropdown_menu_1.DropdownMenu, null,
                    react_1.default.createElement(dropdown_menu_1.DropdownMenuTrigger, { asChild: true },
                        react_1.default.createElement(button_1.Button, { variant: "ghost", className: "h-8 w-8 p-0" },
                            react_1.default.createElement("span", { className: "sr-only" }, "Open menu"),
                            react_1.default.createElement(lucide_react_1.MoreVertical, { className: "h-4 w-4" }))),
                    react_1.default.createElement(dropdown_menu_1.DropdownMenuContent, { align: "end" },
                        menuActions,
                        handleEdit && (react_1.default.createElement(dropdown_menu_1.DropdownMenuItem, { onClick: function () { return handleEdit({}); } }, "Edit")),
                        handleDelete && (react_1.default.createElement(dropdown_menu_1.DropdownMenuItem, { onClick: function () { return handleDelete({}); } }, "Delete"))))))),
        react_1.default.createElement("div", { className: "overflow-hidden h-40 flex items-center justify-center cursor-pointer", onClick: handleClick }, image && (react_1.default.createElement(image_1.default, __assign({ src: image, alt: label || 'Resource image', width: 320, height: 160, className: "object-cover w-full h-full" }, slots.image)))),
        (primary || secondary) && (react_1.default.createElement(card_1.CardContent, { className: "p-4" },
            react_1.default.createElement(tailwind_1.Typography, { variant: "body1" }, primary),
            secondary && react_1.default.createElement(tailwind_1.Typography, { variant: "body2" }, secondary)))));
}
exports.default = ResourceGridItem;
