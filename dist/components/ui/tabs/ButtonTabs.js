"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var tabs_1 = require("../../../shadcn/ui/tabs");
var components_1 = require("../../../components");
var utils_1 = require("../../../shadcn/lib/utils");
function ButtonTabs(_a) {
    var handleChange = _a.handleChange, options = _a.options, value = _a.value, className = _a.className, fullWidth = _a.fullWidth;
    return (react_1.default.createElement(tabs_1.Tabs, { value: value, onValueChange: handleChange },
        react_1.default.createElement(tabs_1.TabsList, { className: (0, utils_1.cn)(className, fullWidth && 'w-full') }, options.map(function (tab, i) {
            return (react_1.default.createElement(tabs_1.TabsTrigger, { key: i, value: tab.value, className: "w-full flex items-center justify-center space-x-2" },
                tab.icon && (react_1.default.createElement(components_1.Icon, { name: tab.icon, className: (0, utils_1.cn)(tab.label && 'mr-2') })),
                react_1.default.createElement("span", { className: "text-sm" }, tab === null || tab === void 0 ? void 0 : tab.label)));
        }))));
}
exports.default = ButtonTabs;
