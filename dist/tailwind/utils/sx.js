"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sxTw = void 0;
var utils_1 = require("../../shadcn/lib/utils");
var sxTw = function (sx) {
    var tailwindClasses = [];
    var convertColor = function (color) {
        var colorMap = {
            'primary.main': 'primary',
            'text.primary': 'primary',
            'text.secondary': 'muted-foreground',
            divider: 'border-divider',
        };
        return colorMap[color] || color;
    };
    var convertSize = function (size) {
        if (typeof size === 'number') {
            return "".concat(size);
        }
        var sizeMap = {
            small: '2',
            medium: '4',
            large: '6',
        };
        return sizeMap[size] || size;
    };
    var convertFlexAlign = function (value) {
        var alignMap = {
            'flex-start': 'start',
            'flex-end': 'end',
            'space-between': 'between',
            'space-around': 'around',
            'space-evenly': 'evenly',
        };
        return alignMap[value] || value;
    };
    var convertResponsiveValue = function (key, value) {
        if (typeof value === 'object' && value !== null) {
            return Object.entries(value).map(function (_a) {
                var breakpoint = _a[0], val = _a[1];
                var prefix = breakpoint === 'xs' ? '' : "".concat(breakpoint, ":");
                return "".concat(prefix).concat(convertSingleValue(key, val));
            });
        }
        return [convertSingleValue(key, value)];
    };
    var convertSingleValue = function (key, value) {
        switch (key) {
            case 'bgcolor':
            case 'backgroundColor':
                return "bg-".concat(convertColor(value));
            case 'color':
                return "text-".concat(convertColor(value));
            case 'p':
            case 'padding':
                return "p-".concat(convertSize(value));
            case 'px':
            case 'paddingX':
                return "px-".concat(convertSize(value));
            case 'py':
            case 'paddingY':
                return "py-".concat(convertSize(value));
            case 'pt':
                return "pt-".concat(convertSize(value));
            case 'pb':
                return "pb-".concat(convertSize(value));
            case 'pr':
                return "pr-".concat(convertSize(value));
            case 'pl':
                return "pl-".concat(convertSize(value));
            case 'm':
            case 'margin':
                return "m-".concat(convertSize(value));
            case 'mx':
            case 'marginX':
                return "mx-".concat(convertSize(value));
            case 'my':
            case 'marginY':
                return "my-".concat(convertSize(value));
            case 'width':
                return "w-".concat(convertSize(value));
            case 'maxWidth':
                return "max-w-".concat(convertSize(value));
            case 'minWidth':
                return "min-w-".concat(convertSize(value));
            case 'height':
                return "h-".concat(convertSize(value));
            case 'maxHeight':
                return "max-h-".concat(convertSize(value));
            case 'minHeight':
                return "min-h-".concat(convertSize(value));
            case 'display':
                return value;
            case 'flexDirection':
                return "flex-".concat(value);
            case 'flexWrap':
                return "flex-".concat(value);
            case 'justifyContent':
                return "justify-".concat(convertFlexAlign(value));
            case 'alignItems':
                return "items-".concat(convertFlexAlign(value));
            case 'alignContent':
                return "content-".concat(convertFlexAlign(value));
            case 'alignSelf':
                return "self-".concat(convertFlexAlign(value));
            case 'flex':
                return value === 1 ? 'flex-1' : "flex-".concat(value);
            case 'flexGrow':
                return "flex-grow-".concat(value);
            case 'flexShrink':
                return "flex-shrink-".concat(value);
            case 'gridTemplateColumns':
                return "grid-cols-".concat(value);
            case 'gap':
                return "gap-".concat(convertSize(value));
            case 'border':
                return typeof value === 'number' ? "border-".concat(value) : 'border';
            case 'borderColor':
                return "border-".concat(convertColor(value));
            case 'borderRadius':
                return "rounded-".concat(convertSize(value));
            case 'borderRight':
                return "border-r-".concat(convertSize(value));
            case 'borderLeft':
                return "border-l-".concat(convertSize(value));
            case 'borderTop':
                return "border-t-".concat(convertSize(value));
            case 'borderBottom':
                return "border-b-".concat(convertSize(value));
            case 'zIndex':
                return "z-".concat(value);
            case 'overflow':
                return "overflow-".concat(value);
            default:
                return '';
        }
    };
    var processNestedSx = function (nestedSx) {
        for (var _i = 0, _a = Object.entries(nestedSx); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (typeof value === 'object' &&
                value !== null &&
                !Array.isArray(value)) {
                processNestedSx(value);
            }
            else {
                tailwindClasses.push.apply(tailwindClasses, convertResponsiveValue(key, value));
            }
        }
    };
    processNestedSx(sx);
    return utils_1.cn.apply(void 0, tailwindClasses);
};
exports.sxTw = sxTw;
