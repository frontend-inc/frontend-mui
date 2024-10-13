"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var table_1 = require("../../../shadcn/ui/table");
var utils_1 = require("../../../shadcn/lib/utils");
function CustomTableCell(_a) {
    var _b = _a.align, align = _b === void 0 ? 'left' : _b, children = _a.children, _c = _a.header, header = _c === void 0 ? false : _c, _d = _a.sticky, sticky = _d === void 0 ? false : _d, _e = _a.small, small = _e === void 0 ? false : _e, _f = _a.variant, variant = _f === void 0 ? 'body' : _f;
    var cellClasses = (0, utils_1.cn)('px-1 min-w-[100px] bg-background overflow-x-auto whitespace-nowrap max-w-[240px] scrollbar-hide', small && 'min-w-[40px] w-[40px]', sticky && 'sticky left-0 z-20', {
        'text-center': align === 'center',
        'text-right': align === 'right',
        'text-left': align === 'left',
    });
    if (variant === 'head' || header) {
        return react_1.default.createElement(table_1.TableHead, { className: cellClasses }, children);
    }
    return react_1.default.createElement(table_1.TableCell, { className: cellClasses }, children);
}
exports.default = CustomTableCell;
