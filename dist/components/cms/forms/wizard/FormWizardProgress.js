"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var progress_1 = require("../../../../shadcn/ui/progress");
var badge_1 = require("../../../../shadcn/ui/badge");
function FormWizardProgress(_a) {
    var currentStep = _a.currentStep, totalSteps = _a.totalSteps;
    var progressValue = (currentStep / totalSteps) * 100;
    return (react_1.default.createElement("div", { className: "w-full" },
        react_1.default.createElement(progress_1.Progress, { value: progressValue, className: "w-full h-2.5 rounded-none" }),
        react_1.default.createElement("div", { className: "m-4" },
            react_1.default.createElement(badge_1.Badge, { className: "text-sm font-medium" },
                "Step ",
                currentStep,
                " of ",
                totalSteps))));
}
exports.default = FormWizardProgress;
