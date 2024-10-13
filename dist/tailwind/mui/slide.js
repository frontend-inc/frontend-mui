"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slide = void 0;
var react_1 = __importDefault(require("react"));
var framer_motion_1 = require("framer-motion");
var utils_1 = require("../../shadcn/lib/utils");
var slideVariants = {
    up: {
        initial: { y: '100%' },
        animate: { y: 0 },
        exit: { y: '100%' },
    },
    down: {
        initial: { y: '-100%' },
        animate: { y: 0 },
        exit: { y: '-100%' },
    },
    left: {
        initial: { x: '100%' },
        animate: { x: 0 },
        exit: { x: '100%' },
    },
    right: {
        initial: { x: '-100%' },
        animate: { x: 0 },
        exit: { x: '-100%' },
    },
};
var Slide = function (_a) {
    var children = _a.children, _b = _a.in, inProp = _b === void 0 ? false : _b, _c = _a.direction, direction = _c === void 0 ? 'down' : _c, _d = _a.duration, duration = _d === void 0 ? 0.3 : _d, className = _a.className;
    return (react_1.default.createElement(framer_motion_1.AnimatePresence, null, inProp && (react_1.default.createElement(framer_motion_1.motion.div, { initial: slideVariants[direction].initial, animate: slideVariants[direction].animate, exit: slideVariants[direction].exit, transition: { duration: duration, ease: 'easeInOut' }, className: (0, utils_1.cn)('overflow-hidden', className) }, children))));
};
exports.Slide = Slide;
