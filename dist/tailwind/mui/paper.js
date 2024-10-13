'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var utils_1 = require("../../shadcn/lib/utils");
var Paper = function (_a) {
    var borderRadius = _a.borderRadius, children = _a.children;
    return (react_1.default.createElement("div", { className: (0, utils_1.cn)('bg-primary text-primary p-4', borderRadius === 0 ? 'rounded-none' : 'rounded-lg') }, children));
};
exports.default = Paper;
