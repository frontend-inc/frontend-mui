'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = void 0;
var react_1 = __importDefault(require("react"));
var avatar_1 = require("../../shadcn/ui/avatar");
var utils_1 = require("../../shadcn/lib/utils");
var Avatar = function (_a) {
    var children = _a.children, _b = _a.variant, variant = _b === void 0 ? 'rounded' : _b, fallback = _a.fallback, src = _a.src, alt = _a.alt, className = _a.className;
    return (react_1.default.createElement(avatar_1.Avatar, { className: (0, utils_1.cn)('bg-primary', {
            'rounded-md': variant === 'rounded',
            'rounded-full': variant === 'circular',
        }, className) },
        src && react_1.default.createElement(avatar_1.AvatarImage, { src: src, alt: alt }),
        react_1.default.createElement(avatar_1.AvatarFallback, { className: "bg-primary text-primary-foreground" }, fallback || children)));
};
exports.Avatar = Avatar;
