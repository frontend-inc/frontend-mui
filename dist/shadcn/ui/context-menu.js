"use client";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextMenuRadioGroup = exports.ContextMenuSubTrigger = exports.ContextMenuSubContent = exports.ContextMenuSub = exports.ContextMenuPortal = exports.ContextMenuGroup = exports.ContextMenuShortcut = exports.ContextMenuSeparator = exports.ContextMenuLabel = exports.ContextMenuRadioItem = exports.ContextMenuCheckboxItem = exports.ContextMenuItem = exports.ContextMenuContent = exports.ContextMenuTrigger = exports.ContextMenu = void 0;
var React = __importStar(require("react"));
var ContextMenuPrimitive = __importStar(require("@radix-ui/react-context-menu"));
var react_icons_1 = require("@radix-ui/react-icons");
var utils_1 = require("../lib/utils");
var ContextMenu = ContextMenuPrimitive.Root;
exports.ContextMenu = ContextMenu;
var ContextMenuTrigger = ContextMenuPrimitive.Trigger;
exports.ContextMenuTrigger = ContextMenuTrigger;
var ContextMenuGroup = ContextMenuPrimitive.Group;
exports.ContextMenuGroup = ContextMenuGroup;
var ContextMenuPortal = ContextMenuPrimitive.Portal;
exports.ContextMenuPortal = ContextMenuPortal;
var ContextMenuSub = ContextMenuPrimitive.Sub;
exports.ContextMenuSub = ContextMenuSub;
var ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
exports.ContextMenuRadioGroup = ContextMenuRadioGroup;
var ContextMenuSubTrigger = React.forwardRef(function (_a, ref) {
    var className = _a.className, inset = _a.inset, children = _a.children, props = __rest(_a, ["className", "inset", "children"]);
    return (React.createElement(ContextMenuPrimitive.SubTrigger, __assign({ ref: ref, className: (0, utils_1.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", inset && "pl-8", className) }, props),
        children,
        React.createElement(react_icons_1.ChevronRightIcon, { className: "ml-auto h-4 w-4" })));
});
exports.ContextMenuSubTrigger = ContextMenuSubTrigger;
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;
var ContextMenuSubContent = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(ContextMenuPrimitive.SubContent, __assign({ ref: ref, className: (0, utils_1.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className) }, props)));
});
exports.ContextMenuSubContent = ContextMenuSubContent;
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;
var ContextMenuContent = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(ContextMenuPrimitive.Portal, null,
        React.createElement(ContextMenuPrimitive.Content, __assign({ ref: ref, className: (0, utils_1.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className) }, props))));
});
exports.ContextMenuContent = ContextMenuContent;
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;
var ContextMenuItem = React.forwardRef(function (_a, ref) {
    var className = _a.className, inset = _a.inset, props = __rest(_a, ["className", "inset"]);
    return (React.createElement(ContextMenuPrimitive.Item, __assign({ ref: ref, className: (0, utils_1.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", className) }, props)));
});
exports.ContextMenuItem = ContextMenuItem;
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;
var ContextMenuCheckboxItem = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, checked = _a.checked, props = __rest(_a, ["className", "children", "checked"]);
    return (React.createElement(ContextMenuPrimitive.CheckboxItem, __assign({ ref: ref, className: (0, utils_1.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), checked: checked }, props),
        React.createElement("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" },
            React.createElement(ContextMenuPrimitive.ItemIndicator, null,
                React.createElement(react_icons_1.CheckIcon, { className: "h-4 w-4" }))),
        children));
});
exports.ContextMenuCheckboxItem = ContextMenuCheckboxItem;
ContextMenuCheckboxItem.displayName =
    ContextMenuPrimitive.CheckboxItem.displayName;
var ContextMenuRadioItem = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (React.createElement(ContextMenuPrimitive.RadioItem, __assign({ ref: ref, className: (0, utils_1.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className) }, props),
        React.createElement("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" },
            React.createElement(ContextMenuPrimitive.ItemIndicator, null,
                React.createElement(react_icons_1.DotFilledIcon, { className: "h-4 w-4 fill-current" }))),
        children));
});
exports.ContextMenuRadioItem = ContextMenuRadioItem;
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;
var ContextMenuLabel = React.forwardRef(function (_a, ref) {
    var className = _a.className, inset = _a.inset, props = __rest(_a, ["className", "inset"]);
    return (React.createElement(ContextMenuPrimitive.Label, __assign({ ref: ref, className: (0, utils_1.cn)("px-2 py-1.5 text-sm font-semibold text-foreground", inset && "pl-8", className) }, props)));
});
exports.ContextMenuLabel = ContextMenuLabel;
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;
var ContextMenuSeparator = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(ContextMenuPrimitive.Separator, __assign({ ref: ref, className: (0, utils_1.cn)("-mx-1 my-1 h-px bg-border", className) }, props)));
});
exports.ContextMenuSeparator = ContextMenuSeparator;
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;
var ContextMenuShortcut = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement("span", __assign({ className: (0, utils_1.cn)("ml-auto text-xs tracking-widest text-muted-foreground", className) }, props)));
};
exports.ContextMenuShortcut = ContextMenuShortcut;
ContextMenuShortcut.displayName = "ContextMenuShortcut";
