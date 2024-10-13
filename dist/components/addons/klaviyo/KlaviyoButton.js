"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var tailwind_1 = require("../../../tailwind");
var KlaviyoButton = function (props) {
    var _a = props || {}, formId = _a.formId, _b = _a.justifyContent, justifyContent = _b === void 0 ? 'center' : _b, _c = _a.variant, variant = _c === void 0 ? 'contained' : _c, _d = _a.buttonText, buttonText = _d === void 0 ? 'Subscribe' : _d;
    var handleClick = function () {
        // @ts-ignore
        window._klOnsite = window._klOnsite || [];
        // @ts-ignore
        window._klOnsite.push(['openForm', 'Tpqv7M']);
    };
    if (!formId)
        return null;
    return (react_1.default.createElement("div", { className: "flex flex-row justify-center" },
        react_1.default.createElement(tailwind_1.Button, { variant: variant, onClick: handleClick }, buttonText)));
};
exports.default = KlaviyoButton;
