'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputAdornment = void 0;
var react_1 = __importDefault(require("react"));
var utils_1 = require("../../shadcn/lib/utils");
var InputAdornment = function (_a) {
    var children = _a.children, _b = _a.position, position = _b === void 0 ? 'start' : _b, className = _a.className;
    return (react_1.default.createElement("div", { className: (0, utils_1.cn)('flex items-center', position === 'start' ? 'mr-2' : 'ml-2', className) }, children));
};
exports.InputAdornment = InputAdornment;
