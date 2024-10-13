'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var utils_1 = require("../../../shadcn/lib/utils");
var router_1 = require("next/router");
var hooks_1 = require("../../../hooks");
var hooks_2 = require("../../../hooks");
function Notification(_a) {
    var notification = _a.notification;
    var router = (0, router_1.useRouter)();
    var clientUrl = (0, hooks_2.useApp)().clientUrl;
    var _b = notification || {}, text = _b.text, path = _b.path, url = _b.url, notification_type = _b.notification_type;
    var handleClick = function () {
        switch (notification_type) {
            case 'url':
                window.open(url, '_blank');
                break;
            case 'page':
            case 'document':
                router.push("".concat(clientUrl).concat(path));
                break;
        }
    };
    var _c = (0, hooks_1.useClickOrDrag)({
        onClick: handleClick,
    }), onMouseDown = _c.onMouseDown, onMouseUp = _c.onMouseUp;
    return (react_1.default.createElement("li", { className: "p-0 h-[50px] w-full flex justify-center items-center bg-primary overflow-x-auto scrollbar-hide" },
        react_1.default.createElement("button", { className: (0, utils_1.cn)('w-full text-primary-foreground text-sm py-2 px-4', 'hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-light', 'transition-colors duration-200 ease-in-out'), onMouseDown: onMouseDown, onMouseUp: onMouseUp },
            react_1.default.createElement("span", { className: "block whitespace-nowrap text-center overflow-x-auto scrollbar-hide" }, text))));
}
exports.default = Notification;
