"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var button_1 = require("../../../../shadcn/ui/button");
var badge_1 = require("../../../../shadcn/ui/badge");
var components_1 = require("../../../../components");
var lucide_react_1 = require("lucide-react");
function TableFilterButton(props) {
    var _a;
    var loading = props.loading, _b = props.query, query = _b === void 0 ? {} : _b, handleClick = props.handleClick, badgeCount = props.badgeCount, handleClearFilters = props.handleClearFilters;
    var keywords = query.keywords, _c = query.filters, filters = _c === void 0 ? {} : _c;
    var hasFilters = keywords || ((_a = Object.keys(filters)) === null || _a === void 0 ? void 0 : _a.length) > 0;
    return (react_1.default.createElement("div", { className: "relative inline-flex" },
        react_1.default.createElement(badge_1.Badge, { className: "absolute -top-2 -right-2 z-10" }, badgeCount),
        react_1.default.createElement("div", { className: "inline-flex rounded-md shadow-sm", role: "group" },
            react_1.default.createElement(button_1.Button, { variant: "secondary", className: "rounded-r-none", onClick: handleClick },
                loading ? (react_1.default.createElement(components_1.IconLoading, { className: "mr-2 h-4 w-4" })) : (react_1.default.createElement(components_1.Icon, { name: "ListFilter", className: "mr-2 h-4 w-4" })),
                "Filters"),
            hasFilters && (react_1.default.createElement(button_1.Button, { variant: "secondary", className: "rounded-l-none px-2 w-9", onClick: handleClearFilters },
                react_1.default.createElement(lucide_react_1.X, { className: "h-4 w-4" }))))));
}
exports.default = TableFilterButton;
