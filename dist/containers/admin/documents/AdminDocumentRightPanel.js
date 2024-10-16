'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var tailwind_1 = require("../../../tailwind");
var PublishButton_1 = __importDefault(require("./inputs/PublishButton"));
var SaveButton_1 = __importDefault(require("./inputs/SaveButton"));
var components_1 = require("../../../components");
var separator_1 = require("../../../shadcn/ui/separator");
var AdminDocumentRightPanel = function (props) {
    var loading = props.loading, publishLoading = props.publishLoading, errors = props.errors, document = props.document, handleChange = props.handleChange, handleSubmit = props.handleSubmit, handleTogglePublish = props.handleTogglePublish;
    return (react_1.default.createElement("div", { className: "bg-background h-full p-3 flex flex-col space-y-6" },
        react_1.default.createElement("div", { className: "flex flex-col space-y-3" },
            react_1.default.createElement(tailwind_1.Typography, { variant: "caption", color: "text.secondary" }, "Publish"),
            react_1.default.createElement(PublishButton_1.default, { loading: publishLoading, document: document, handleTogglePublish: handleTogglePublish })),
        react_1.default.createElement("div", { className: "flex flex-col space-y-3" },
            react_1.default.createElement(tailwind_1.Typography, { variant: "caption", color: "text.secondary" },
                "Last saved ", document === null || document === void 0 ? void 0 :
                document.last_saved_at),
            react_1.default.createElement(SaveButton_1.default, { fullWidth: true, loading: loading, document: document, handleSubmit: handleSubmit })),
        react_1.default.createElement(separator_1.Separator, null),
        react_1.default.createElement(components_1.UserAutosuggest, { direction: "row", label: "User", errors: errors, name: "user_id", value: document === null || document === void 0 ? void 0 : document.user_id, handleChange: handleChange })));
};
exports.default = AdminDocumentRightPanel;
