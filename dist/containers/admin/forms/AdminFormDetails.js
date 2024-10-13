'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var tailwind_1 = require("../../../tailwind");
var navigation_1 = require("next/navigation");
var card_1 = require("../../../shadcn/ui/card");
var button_1 = require("../../../shadcn/ui/button");
function AdminFormDetails(props) {
    var _a;
    var router = (0, navigation_1.useRouter)();
    var appId = (0, navigation_1.useParams)().app_id;
    var _b = props || {}, form = _b.form, handleEdit = _b.handleEdit;
    var handleResponses = function () {
        router.push("/dashboard/".concat(appId, "/users/forms/").concat(form.handle, "/responses"));
    };
    return (react_1.default.createElement(card_1.Card, { className: "p-4" },
        react_1.default.createElement("div", { className: "flex flex-row justify-between items-start w-full" },
            react_1.default.createElement("div", { className: "flex flex-row space-x-4" },
                react_1.default.createElement("div", { className: "w-24 h-24" },
                    react_1.default.createElement(components_1.Image, { src: (_a = form === null || form === void 0 ? void 0 : form.image) === null || _a === void 0 ? void 0 : _a.url, alt: form === null || form === void 0 ? void 0 : form.title, width: 96, height: 96, aspectRatio: 1.0 })),
                react_1.default.createElement("div", { className: "flex flex-col space-y-1" },
                    react_1.default.createElement(tailwind_1.Typography, { variant: "subtitle1", color: "text.primary" }, form === null || form === void 0 ? void 0 : form.title),
                    react_1.default.createElement(tailwind_1.Typography, { variant: "body2", color: "text.secondary" }, form === null || form === void 0 ? void 0 : form.description))),
            react_1.default.createElement("div", { className: "flex flex-row space-x-2" },
                react_1.default.createElement(button_1.Button, { variant: "outline", onClick: handleEdit }, "Edit"),
                react_1.default.createElement(button_1.Button, { onClick: handleResponses }, "View Responses")))));
}
exports.default = AdminFormDetails;
