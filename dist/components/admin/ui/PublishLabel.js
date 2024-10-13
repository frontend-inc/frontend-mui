'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var badge_1 = require("../../../shadcn/ui/badge");
var utils_1 = require("../../../shadcn/lib/utils");
function PublishedLabel(_a) {
    var _b = _a.published, published = _b === void 0 ? false : _b;
    return (react_1.default.createElement(badge_1.Badge, { variant: "outline", className: (0, utils_1.cn)('px-2 py-1 text-xs font-semibold', published
            ? 'bg-green-100 text-green-800 border-green-200'
            : 'bg-blue-100 text-blue-800 border-blue-200') }, published ? 'Published' : 'Draft'));
}
exports.default = PublishedLabel;
