'use client';
"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var __1 = require("../..");
var FilterList_1 = __importDefault(require("./FilterList"));
var tailwind_1 = require("../../../tailwind");
var button_1 = require("../../../shadcn/ui/button");
var badge_1 = require("../../../shadcn/ui/badge");
var popover_1 = require("../../../shadcn/ui/popover");
var FilterButton = function (props) {
    var _a = props || {}, _b = _a.loading, loading = _b === void 0 ? false : _b, _c = _a.filters, filters = _c === void 0 ? [] : _c, _d = _a.filterOptions, filterOptions = _d === void 0 ? [] : _d, handleFilter = _a.handleFilter, _e = _a.disableFilterCount, disableFilterCount = _e === void 0 ? false : _e;
    var _f = (0, react_1.useState)(false), open = _f[0], setOpen = _f[1];
    return (react_1.default.createElement("div", { className: "w-full sm:w-auto" },
        react_1.default.createElement(popover_1.Popover, null,
            react_1.default.createElement(popover_1.PopoverTrigger, { asChild: true },
                react_1.default.createElement(button_1.Button, { variant: "secondary", className: "relative w-full sm:w-auto ".concat((filters === null || filters === void 0 ? void 0 : filters.length) > 0 ? 'border-r-0' : '') },
                    loading ? (react_1.default.createElement(__1.IconLoading, { className: "mr-2" })) : (react_1.default.createElement(__1.Icon, { name: "SlidersHorizontal", className: "mr-2 text-secondary-foreground" })),
                    "Filters",
                    !disableFilterCount && (filters === null || filters === void 0 ? void 0 : filters.length) > 0 && (react_1.default.createElement(badge_1.Badge, { className: "absolute -top-1 -right-1", color: "primary" }, filters.length)))),
            react_1.default.createElement(popover_1.PopoverContent, { className: "w-80 p-0" },
                react_1.default.createElement(FilterList_1.default, { filters: filters, filterOptions: filterOptions, handleFilter: handleFilter }))),
        react_1.default.createElement(tailwind_1.Hidden, { smUp: true },
            react_1.default.createElement(__1.Drawer, { open: open, handleClose: function () { return setOpen(false); }, title: "Search", disablePadding: true },
                react_1.default.createElement(FilterList_1.default, { filters: filters, filterOptions: filterOptions, handleFilter: handleFilter })))));
};
exports.default = FilterButton;
