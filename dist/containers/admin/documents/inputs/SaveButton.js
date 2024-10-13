'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var button_1 = require("../../../../shadcn/ui/button");
var dropdown_menu_1 = require("../../../../shadcn/ui/dropdown-menu");
var lucide_react_1 = require("lucide-react");
var utils_1 = require("../../../../shadcn/lib/utils");
var router_1 = require("next/router");
var hooks_1 = require("../../../../hooks");
var SaveButton = function (_a) {
    var loading = _a.loading, document = _a.document, handleSubmit = _a.handleSubmit, _b = _a.fullWidth, fullWidth = _b === void 0 ? false : _b;
    var clientUrl = (0, hooks_1.useAdmin)().clientUrl;
    var router = (0, router_1.useRouter)();
    var _c = router === null || router === void 0 ? void 0 : router.query, appId = _c.app_id, collectionId = _c.collection_id;
    var handleSave = function () {
        handleSubmit();
        router.push("".concat(clientUrl, "/collections/").concat(collectionId));
    };
    var handleSaveAndNew = function () {
        handleSubmit();
        router.push("".concat(clientUrl, "/collections/").concat(collectionId, "/documents/new"));
    };
    return (react_1.default.createElement("div", { className: (0, utils_1.cn)('flex', fullWidth ? 'w-full' : 'w-auto sm:w-auto') },
        react_1.default.createElement(button_1.Button, { variant: "default", className: (0, utils_1.cn)('w-full h-9 rounded-r-none bg-blue-500 hover:bg-blue-600 text-white', loading && 'opacity-70 cursor-not-allowed'), onClick: handleSubmit, disabled: loading },
            react_1.default.createElement("span", { className: "mr-2" }, (document === null || document === void 0 ? void 0 : document.id) ? 'Save' : 'Create'),
            loading && react_1.default.createElement(lucide_react_1.Loader2, { className: "w-4 h-4 animate-spin" })),
        react_1.default.createElement(dropdown_menu_1.DropdownMenu, null,
            react_1.default.createElement(dropdown_menu_1.DropdownMenuTrigger, { asChild: true },
                react_1.default.createElement(button_1.Button, { variant: "default", size: "sm", className: "h-9 px-2 rounded-l-none bg-blue-500 hover:bg-blue-600 text-white" },
                    react_1.default.createElement(lucide_react_1.ChevronDown, { className: "h-4 w-4" }))),
            react_1.default.createElement(dropdown_menu_1.DropdownMenuContent, null,
                react_1.default.createElement(dropdown_menu_1.DropdownMenuItem, { onClick: handleSave }, "Save and close"),
                react_1.default.createElement(dropdown_menu_1.DropdownMenuItem, { onClick: handleSaveAndNew }, "Save and create new")))));
};
exports.default = SaveButton;
