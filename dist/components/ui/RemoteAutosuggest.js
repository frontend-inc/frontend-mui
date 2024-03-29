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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var frontend_js_1 = require("frontend-js");
var components_1 = require("../../components");
var components_2 = require("../../components");
var hooks_1 = require("../../hooks");
var RemoteAutosuggest = function (props) {
    var errors = props.errors, value = props.value, label = props.label, name = props.name, url = props.url, _a = props.displayField, displayField = _a === void 0 ? 'title' : _a, handleChange = props.handleChange, _b = props.valueParam, valueParam = _b === void 0 ? 'id' : _b, _c = props.placeholder, placeholder = _c === void 0 ? 'Search' : _c, _d = props.defaultQuery, defaultQuery = _d === void 0 ? {} : _d, _e = props.direction, direction = _e === void 0 ? 'column' : _e, _f = props.defaultOptions, defaultOptions = _f === void 0 ? [] : _f;
    var _g = (0, hooks_1.useError)({
        errors: errors,
        name: name,
    }), error = _g.error, clearError = _g.clearError;
    var _h = (0, frontend_js_1.useResource)({
        url: url,
        name: name,
    }), resources = _h.resources, findMany = _h.findMany;
    var _j = (0, react_1.useState)({}), option = _j[0], setOption = _j[1];
    var _k = (0, react_1.useState)([]), options = _k[0], setOptions = _k[1];
    var handleInputChange = function (newValue) {
        if (error)
            clearError();
        findOption(newValue);
    };
    var formatResources = function (resources) {
        return resources.map(function (resource) { return ({
            label: resource[displayField],
            value: resource[valueParam],
        }); });
    };
    var findOption = function (value) { return __awaiter(void 0, void 0, void 0, function () {
        var matchOption;
        return __generator(this, function (_a) {
            if (!value)
                return [2 /*return*/, null];
            if ((options === null || options === void 0 ? void 0 : options.length) > 0) {
                matchOption = options.find(function (option) { return option.value == value; });
                if (matchOption) {
                    setOption(matchOption);
                }
            }
            return [2 /*return*/];
        });
    }); };
    (0, react_1.useEffect)(function () {
        if (resources) {
            setOptions(__spreadArray(__spreadArray([], formatResources(resources), true), defaultOptions, true));
        }
    }, [resources]);
    (0, react_1.useEffect)(function () {
        if (value && resources && resources.length > 0) {
            findOption(value);
        }
    }, [value, resources, url]);
    (0, react_1.useEffect)(function () {
        if (url) {
            //@ts-ignore
            findMany(defaultQuery);
        }
    }, [url]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(components_1.Autosuggest, { direction: direction, label: label, name: name, value: option, options: options, placeholder: placeholder, handleChange: handleChange, handleInputChange: handleInputChange }),
        react_1.default.createElement(components_2.ErrorText, { error: error })));
};
exports.default = RemoteAutosuggest;
