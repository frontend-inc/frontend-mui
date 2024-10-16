'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var utils_1 = require("../../../shadcn/lib/utils");
var avatar_1 = require("../../../shadcn/ui/avatar");
var checkbox_1 = require("../../../shadcn/ui/checkbox");
var button_1 = require("../../../shadcn/ui/button");
var dropdown_menu_1 = require("../../../shadcn/ui/dropdown-menu");
var lucide_react_1 = require("lucide-react");
var tailwind_1 = require("../../../tailwind");
var components_1 = require("../../../components");
function ResourceListItem(_a) {
    var icon = _a.icon, avatar = _a.avatar, color = _a.color, primary = _a.primary, secondary = _a.secondary, image = _a.image, handleClick = _a.handleClick, handleEdit = _a.handleEdit, handleDelete = _a.handleDelete, handleSelect = _a.handleSelect, secondaryAction = _a.secondaryAction, menuActions = _a.menuActions, sortable = _a.sortable, selectable = _a.selectable, selected = _a.selected, _b = _a.enableBorder, enableBorder = _b === void 0 ? true : _b;
    return (react_1.default.createElement("div", { className: (0, utils_1.cn)('bg-background border border-border hover:bg-white/10 p-1 rounded-lg overflow-hidden ', enableBorder &&
            'border-border hover:shadow-md mb-1 transition-shadow duration-200', selected && 'border-primary') },
        react_1.default.createElement("div", { className: "flex items-center p-1 rounded space-x-4" },
            sortable && (react_1.default.createElement(lucide_react_1.GripVertical, { className: "w-5 h-5 text-muted-foreground cursor-grab active:cursor-grabbing" })),
            selectable && (react_1.default.createElement(checkbox_1.Checkbox, { checked: selected, onCheckedChange: handleSelect })),
            avatar && react_1.default.createElement("div", { className: "mr-2" }, avatar),
            image && (react_1.default.createElement("div", { className: "mr-2 w-[72px] h-[72px]" },
                react_1.default.createElement("button", { className: "w-full h-full focus:outline-none focus:ring-2", onClick: handleClick },
                    react_1.default.createElement(components_1.Image, { src: image, aspectRatio: 1.0, alt: image })))),
            icon && (react_1.default.createElement("button", { className: "focus:outline-none focus:ring-2", onClick: handleClick },
                react_1.default.createElement(avatar_1.Avatar, { className: 'mr-2 rounded' },
                    react_1.default.createElement(avatar_1.AvatarFallback, { className: color },
                        react_1.default.createElement(components_1.Icon, { name: icon }))))),
            react_1.default.createElement("div", { className: "flex-grow cursor-pointer", onClick: handleClick },
                react_1.default.createElement(tailwind_1.Typography, { variant: "body1" }, primary),
                secondary && (react_1.default.createElement(tailwind_1.Typography, { variant: "body2", color: "text.secondary" }, secondary))),
            react_1.default.createElement("div", { className: "flex items-center space-x-1" },
                secondaryAction,
                (menuActions || handleEdit || handleDelete) && (react_1.default.createElement(dropdown_menu_1.DropdownMenu, null,
                    react_1.default.createElement(dropdown_menu_1.DropdownMenuTrigger, { asChild: true },
                        react_1.default.createElement(button_1.Button, { variant: "ghost", className: "h-8 w-8 p-0" },
                            react_1.default.createElement("span", { className: "sr-only" }, "Open menu"),
                            react_1.default.createElement(lucide_react_1.MoreVertical, { className: "h-4 w-4 text-foreground" }))),
                    react_1.default.createElement(dropdown_menu_1.DropdownMenuContent, { align: "end" },
                        menuActions,
                        handleEdit && (react_1.default.createElement(dropdown_menu_1.DropdownMenuItem, { onClick: function () { return handleEdit({}); } }, "Edit")),
                        handleDelete && (react_1.default.createElement(dropdown_menu_1.DropdownMenuItem, { onClick: function () { return handleDelete({}); } }, "Delete")))))))));
}
exports.default = ResourceListItem;
