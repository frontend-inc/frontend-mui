"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var utils_1 = require("../../../shadcn/lib/utils");
var button_1 = require("../../../shadcn/ui/button");
var tailwind_1 = require("../../../tailwind");
var dropdown_menu_1 = require("../../../shadcn/ui/dropdown-menu");
var lucide_react_1 = require("lucide-react");
var components_1 = require("../../../components");
function SidebarMenuItem(_a) {
    var _b = _a.selected, selected = _b === void 0 ? false : _b, title = _a.title, _c = _a.color, color = _c === void 0 ? 'bg-transparent' : _c, icon = _a.icon, secondaryActions = _a.secondaryActions, handleClick = _a.handleClick, handleEdit = _a.handleEdit, handleDelete = _a.handleDelete;
    return (react_1.default.createElement("div", { className: (0, utils_1.cn)('flex items-center justify-between py-2 pl-4 px-2 hover:bg-white/10 rounded-md group', selected && 'bg-white/10 text-foreground') },
        react_1.default.createElement("button", { onClick: handleClick, className: "w-full flex gap-2 items-center focus:outline-none" },
            icon && (react_1.default.createElement("div", { className: (0, utils_1.cn)(color, 'h-8 w-8 rounded-md flex items-center justify-center') },
                react_1.default.createElement(components_1.Icon, { name: icon, className: "w-5 h-5 text-foreground" }))),
            react_1.default.createElement(tailwind_1.Typography, { variant: "body2" }, title)),
        (handleEdit || handleDelete) && (react_1.default.createElement(dropdown_menu_1.DropdownMenu, null,
            react_1.default.createElement(dropdown_menu_1.DropdownMenuTrigger, { asChild: true },
                react_1.default.createElement(button_1.Button, { variant: "ghost", className: "h-8 w-8 p-0" },
                    react_1.default.createElement("span", { className: "sr-only" }, "Open menu"),
                    react_1.default.createElement(lucide_react_1.MoreVertical, { className: "h-4 w-4 text-foreground" }))),
            react_1.default.createElement(dropdown_menu_1.DropdownMenuContent, { align: "end", className: "w-[160px]" },
                secondaryActions,
                handleEdit && (react_1.default.createElement(dropdown_menu_1.DropdownMenuItem, { onClick: handleEdit },
                    react_1.default.createElement(lucide_react_1.Pencil, { className: "mr-2 h-4 w-4" }),
                    react_1.default.createElement("span", null, "Edit"))),
                handleDelete && (react_1.default.createElement(dropdown_menu_1.DropdownMenuItem, { onClick: handleDelete },
                    react_1.default.createElement(lucide_react_1.Trash, { className: "mr-2 h-4 w-4" }),
                    react_1.default.createElement("span", null, "Delete"))))))));
}
exports.default = SidebarMenuItem;
