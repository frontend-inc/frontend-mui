'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var context_1 = require("../../../context");
var tailwind_1 = require("../../../tailwind");
var separator_1 = require("../../../shadcn/ui/separator");
var AdminAuthButton_1 = __importDefault(require("./AdminAuthButton"));
var AdminTabIcon_1 = __importDefault(require("./AdminTabIcon"));
var image_1 = __importDefault(require("next/image"));
var navigation_1 = require("next/navigation");
function AdminTabIcons(_a) {
    var logo = _a.logo, menuItems = _a.menuItems, handleClick = _a.handleClick, secondaryAction = _a.secondaryAction;
    var activeTab = (0, react_1.useContext)(context_1.AdminContext).activeTab;
    var router = (0, navigation_1.useRouter)();
    var handleHomeClick = function () {
        router.push('/dashboard');
    };
    var handleMyAccountClick = function () {
        router.push('/my-account');
    };
    return (react_1.default.createElement("div", { className: "w-full h-full flex flex-col items-center justify-between border-r border-border" },
        react_1.default.createElement("div", { className: "w-full flex flex-col items-center justify-center space-y-3 pt-0" },
            react_1.default.createElement("div", { className: "h-[50px] w-full flex flex-col items-center justify-center border border-bottom" }, logo && (react_1.default.createElement(tailwind_1.IconButton, { className: "w-full rounded-none", onClick: handleHomeClick },
                react_1.default.createElement(image_1.default, { src: logo, height: 24, width: 24, alt: "logo" })))),
            Array.isArray(menuItems) &&
                (menuItems === null || menuItems === void 0 ? void 0 : menuItems.map(function (item, index) { return (react_1.default.createElement(AdminTabIcon_1.default, { key: index, selected: activeTab == item.id, icon: item.icon, handleClick: function () { return handleClick(item); } })); }))),
        react_1.default.createElement("div", { className: "flex flex-col space-y-3 pb-4 mb-2" },
            secondaryAction && (react_1.default.createElement(react_1.default.Fragment, null,
                secondaryAction,
                react_1.default.createElement(separator_1.Separator, { className: "my-2" }))),
            react_1.default.createElement(AdminAuthButton_1.default, { handleClick: handleMyAccountClick }))));
}
exports.default = AdminTabIcons;
