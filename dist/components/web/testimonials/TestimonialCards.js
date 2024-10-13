"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var tailwind_1 = require("../../../tailwind");
var __1 = require("../..");
var TestimonialCards = function (props) {
    var _a = props.size, size = _a === void 0 ? 'small' : _a, _b = props.items, items = _b === void 0 ? [] : _b;
    return (react_1.default.createElement(tailwind_1.Container, { maxWidth: "lg" },
        react_1.default.createElement(tailwind_1.Grid, { container: true }, items === null || items === void 0 ? void 0 : items.map(function (testimonial, i) { return (react_1.default.createElement(tailwind_1.Grid, { item: true },
            react_1.default.createElement(__1.TestimonialCard, { key: i, size: size, image: testimonial.image, author: testimonial.title, rating: testimonial.rating, text: testimonial.description }))); }))));
};
exports.default = TestimonialCards;
