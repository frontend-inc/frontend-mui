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
var utils_1 = require("../../../shadcn/lib/utils");
var button_1 = require("../../../shadcn/ui/button");
var popover_1 = require("../../../shadcn/ui/popover");
var lucide_react_1 = require("lucide-react");
var SortList_1 = __importDefault(require("./SortList"));
function SortButton(_a) {
    var sortOptions = _a.sortOptions, sortBy = _a.sortBy, sortDirection = _a.sortDirection, handleSortBy = _a.handleSortBy, handleSortDirection = _a.handleSortDirection;
    var _b = (0, react_1.useState)(false), isOpen = _b[0], setIsOpen = _b[1];
    var toggleOpen = function () { return setIsOpen(!isOpen); };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "hidden sm:block" },
            react_1.default.createElement(popover_1.Popover, { open: isOpen, onOpenChange: setIsOpen },
                react_1.default.createElement(popover_1.PopoverTrigger, { asChild: true },
                    react_1.default.createElement(button_1.Button, { variant: "secondary", className: (0, utils_1.cn)('w-full sm:w-auto border-r-0', 'hover:border-r-0'), onClick: toggleOpen },
                        "Sort",
                        sortDirection === 'asc' ? (react_1.default.createElement(lucide_react_1.ArrowUp, { className: "ml-2 h-4 w-4" })) : (react_1.default.createElement(lucide_react_1.ArrowDown, { className: "ml-2 h-4 w-4" })))),
                react_1.default.createElement(popover_1.PopoverContent, { className: "w-80 p-0" },
                    react_1.default.createElement(SortList_1.default, { sortOptions: sortOptions, sortBy: sortBy, sortDirection: sortDirection, handleSortBy: handleSortBy, handleSortDirection: handleSortDirection }))))));
}
exports.default = SortButton;
