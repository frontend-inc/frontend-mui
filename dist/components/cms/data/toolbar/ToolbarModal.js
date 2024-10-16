'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var tailwind_1 = require("../../../../tailwind");
var __1 = require("../../..");
var frontend_js_1 = require("frontend-js");
var ToolbarModal = function (props) {
    var _a = (0, frontend_js_1.useResourceContext)(), _b = _a.selected, selected = _b === void 0 ? [] : _b, handleClear = _a.handleClear;
    var children = (props || {}).children;
    var open = selected.length > 0;
    var handleClose = function () {
        handleClear();
    };
    return (react_1.default.createElement(tailwind_1.Collapse, { in: open },
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", { className: "flex flex-row justify-between items-center w-full" },
                react_1.default.createElement("div", { className: "flex flex-row space-x-1 items-center" },
                    react_1.default.createElement(tailwind_1.IconButton, { onClick: handleClose },
                        react_1.default.createElement(__1.Icon, { name: "X" })),
                    children)))));
};
exports.default = ToolbarModal;
