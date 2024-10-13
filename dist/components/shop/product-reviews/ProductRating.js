'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var tailwind_1 = require("../../../tailwind");
var ProductRating = function (props) {
    var _a = props || {}, resource = _a.resource, _b = _a.justifyContent, justifyContent = _b === void 0 ? 'flex-start' : _b, _c = _a.enableTotal, enableTotal = _c === void 0 ? false : _c;
    var _d = resource || {}, rating = _d.avg_rating, numReviews = _d.num_reviews;
    return (react_1.default.createElement(tailwind_1.Stack, { alignItems: "center", justifyContent: justifyContent, direction: "row", spacing: 1 },
        rating > 0 ? (react_1.default.createElement(tailwind_1.Rating, { value: rating, readOnly: true })) : (react_1.default.createElement(tailwind_1.Typography, { color: 'text.secondary', variant: "body2" }, "No reviews yet")),
        rating > 0 && (react_1.default.createElement(tailwind_1.Typography, { color: 'text.secondary', variant: "caption" },
            "(",
            rating,
            ")")),
        rating > 0 && enableTotal && (react_1.default.createElement(tailwind_1.Typography, { color: 'text.secondary', variant: "caption" },
            numReviews,
            " reviews"))));
};
exports.default = ProductRating;
