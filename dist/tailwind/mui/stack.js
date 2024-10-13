'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var react_1 = __importDefault(require("react"));
var utils_1 = require("../../shadcn/lib/utils");
var directionClasses = {
    row: 'flex-col sm:flex-row',
    'row-reverse': 'flex-col sm:flex-row-reverse',
    column: 'flex-col',
    'column-reverse': 'flex-col-reverse',
};
var alignItemsClasses = {
    'flex-start': 'items-start',
    'flex-end': 'items-end',
    center: 'items-center',
    stretch: 'items-stretch',
    baseline: 'items-baseline',
};
var justifyContentClasses = {
    'flex-start': 'justify-start',
    'flex-end': 'justify-end',
    center: 'justify-center',
    'space-between': 'justify-between',
    'space-around': 'justify-around',
    'space-evenly': 'justify-evenly',
};
function Stack(_a) {
    var children = _a.children, _b = _a.direction, direction = _b === void 0 ? 'column' : _b, _c = _a.spacing, spacing = _c === void 0 ? 4 : _c, _d = _a.alignItems, alignItems = _d === void 0 ? 'flex-start' : _d, _e = _a.justifyContent, justifyContent = _e === void 0 ? 'flex-start' : _e, divider = _a.divider, className = _a.className;
    var getSpacingClass = function () {
        if (spacing === 0)
            return '';
        if (direction == 'row' || direction == 'row-reverse') {
            return "space-y-".concat(spacing, " space-x-").concat(spacing);
        }
        else {
            return "space-y-".concat(spacing);
        }
    };
    var stackClasses = (0, utils_1.cn)('flex w-full', directionClasses[direction], getSpacingClass(), alignItemsClasses[alignItems], justifyContentClasses[justifyContent], className);
    var childrenArray = react_1.default.Children.toArray(children);
    return (react_1.default.createElement("div", { className: stackClasses }, childrenArray.map(function (child, index) { return (react_1.default.createElement(react_1.default.Fragment, { key: index },
        child,
        divider && index < childrenArray.length - 1 && (react_1.default.createElement("div", { className: (0, utils_1.cn)(direction.includes('row')
                ? "my-".concat(spacing, " sm:my-0 sm:mx-").concat(spacing)
                : "my-".concat(spacing), direction === 'row-reverse' ? 'sm:rotate-180' : '') }, divider)))); })));
}
exports.default = Stack;
exports.Stack = Stack;
