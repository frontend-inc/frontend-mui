'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var tailwind_1 = require("../../../tailwind");
var CellPublished = function (props) {
    var value = props.value;
    return react_1.default.createElement(tailwind_1.Label, { label: value == true ? 'published' : 'unpublished' });
};
exports.default = CellPublished;
