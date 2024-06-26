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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var context_1 = require("../../../context");
var frontend_js_1 = require("frontend-js");
var material_1 = require("@mui/material");
var HeroArticle_1 = __importDefault(require("./HeroArticle"));
var HeroProduct_1 = __importDefault(require("./HeroProduct"));
var HeroProfile_1 = __importDefault(require("./HeroProfile"));
var HeroDocument_1 = __importDefault(require("./HeroDocument"));
var HeroEvent_1 = __importDefault(require("./HeroEvent"));
var HeroPlace_1 = __importDefault(require("./HeroPlace"));
var HeroYouTube_1 = __importDefault(require("./HeroYouTube"));
var HeroVimeo_1 = __importDefault(require("./HeroVimeo"));
var __1 = require("../..");
var frontend_js_2 = require("frontend-js");
var Hero = function (props) {
    var handle = props.handle;
    if (handle == 'index')
        handle = undefined;
    var _a = props || {}, _b = _a.style, style = _b === void 0 ? 'article' : _b, _resource = _a.resource, _c = _a.fields, fields = _c === void 0 ? [] : _c, _d = _a.displayFields, displayFields = _d === void 0 ? [] : _d, fieldName = _a.fieldName, url = _a.url, actions = _a.actions, enableBorder = _a.enableBorder, enableOverlay = _a.enableOverlay, enableEdit = _a.enableEdit, enableFavorites = _a.enableFavorites, enableLikes = _a.enableLikes, enableSharing = _a.enableSharing, enableRatings = _a.enableRatings, enableBuyNow = _a.enableBuyNow, enableStripePaymentLink = _a.enableStripePaymentLink;
    var setAuthOpen = (0, react_1.useContext)(context_1.AppContext).setAuthOpen;
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    var _e = (0, frontend_js_2.useDocuments)({
        url: url,
    }), loading = _e.delayedLoading, errors = _e.errors, update = _e.update, create = _e.create, resource = _e.resource, setResource = _e.setResource, removeAttachment = _e.removeAttachment, handleDataChange = _e.handleDataChange;
    var handleRemove = function (name) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, removeAttachment(resource === null || resource === void 0 ? void 0 : resource.id, name)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var _f = (0, react_1.useState)(false), openModal = _f[0], setOpenModal = _f[1];
    var handleEdit = function () {
        if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))
            return setAuthOpen(true);
        setOpenModal(true);
    };
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resp, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))
                        return [2 /*return*/, setAuthOpen(true)];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    resp = void 0;
                    if (!(resource === null || resource === void 0 ? void 0 : resource.id)) return [3 /*break*/, 3];
                    return [4 /*yield*/, update(resource)];
                case 2:
                    resp = _a.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, create(resource)];
                case 4:
                    resp = _a.sent();
                    _a.label = 5;
                case 5:
                    if (resp === null || resp === void 0 ? void 0 : resp.id) {
                        setOpenModal(false);
                    }
                    return [3 /*break*/, 7];
                case 6:
                    e_1 = _a.sent();
                    console.error(e_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    var components = {
        article: HeroArticle_1.default,
        event: HeroEvent_1.default,
        product: HeroProduct_1.default,
        profile: HeroProfile_1.default,
        place: HeroPlace_1.default,
        document: HeroDocument_1.default,
        youtube: HeroYouTube_1.default,
        vimeo: HeroVimeo_1.default,
    };
    var Component = components[style];
    (0, react_1.useEffect)(function () {
        if (_resource === null || _resource === void 0 ? void 0 : _resource.id) {
            setResource(_resource);
        }
    }, [_resource]);
    return (react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 2, sx: sx.root },
        (resource === null || resource === void 0 ? void 0 : resource.id) && (react_1.default.createElement(Component, { fieldName: fieldName, resource: resource, actions: actions, displayFields: displayFields, enableBorder: enableBorder, enableOverlay: enableOverlay, enableEdit: enableEdit, handleEdit: handleEdit, enableFavorites: enableFavorites, enableLikes: enableLikes, enableSharing: enableSharing, enableRatings: enableRatings, enableBuyNow: enableBuyNow, enableStripePaymentLink: enableStripePaymentLink })),
        react_1.default.createElement(__1.Drawer, { open: openModal, handleClose: function () { return setOpenModal(false); }, title: (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Edit' : 'Add', actions: react_1.default.createElement(material_1.Button, { fullWidth: true, variant: "contained", color: "primary", onClick: handleSubmit, startIcon: react_1.default.createElement(__1.IconLoading, { loading: loading }) }, (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Update' : 'Save') },
            react_1.default.createElement(__1.Form, { loading: loading, errors: errors, fields: fields, resource: (0, frontend_js_2.flattenDocument)(resource), handleChange: handleDataChange, handleRemove: handleRemove }))));
};
exports.default = Hero;
var sx = {
    root: {
        width: '100%',
    },
    inlineForm: {
        border: '1px solid',
        borderColor: 'divider',
        p: 4,
        width: '100%',
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
    },
};
