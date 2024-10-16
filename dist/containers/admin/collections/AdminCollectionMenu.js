'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var components_1 = require("../../../components");
var tailwind_1 = require("../../../tailwind");
var components_2 = require("../../../components");
var hooks_1 = require("../../../hooks");
var AdminCollectionEdit_1 = __importDefault(require("./AdminCollectionEdit"));
var AdminViewEdit_1 = __importDefault(require("../views/AdminViewEdit"));
var frontend_js_1 = require("frontend-js");
var navigation_1 = require("next/navigation");
var lucide_react_1 = require("lucide-react");
var AdminCollectionMenu = function () {
    var router = (0, navigation_1.useRouter)();
    var _a = (0, navigation_1.useParams)(), appId = _a.app_id, viewId = _a.view_id, collectionId = _a.collection_id;
    var apiQuery = new frontend_js_1.ApiQuery();
    var _b = (0, react_1.useState)(false), showDeleteModal = _b[0], setShowDeleteModal = _b[1];
    var _c = (0, react_1.useState)(false), showViewModal = _c[0], setShowViewModal = _c[1];
    var _d = (0, react_1.useState)(false), showDeleteViewModal = _d[0], setShowDeleteViewModal = _d[1];
    var _e = (0, hooks_1.useCollections)(), loading = _e.loading, errors = _e.errors, collection = _e.collection, collections = _e.collections, deleteCollection = _e.deleteCollection, findCollections = _e.findCollections, setCollection = _e.setCollection, setCollections = _e.setCollections, handleChange = _e.handleChange, updateCollection = _e.updateCollection, createCollection = _e.createCollection, reloadCollections = _e.reloadCollections;
    var _f = (0, hooks_1.useViews)(), viewLoading = _f.loading, viewErrors = _f.errors, view = _f.view, views = _f.views, findViews = _f.findViews, updateView = _f.updateView, deleteView = _f.deleteView, handleChangeView = _f.handleChange, setView = _f.setView;
    (0, react_1.useEffect)(function () {
        if (collectionId == 'index' && collections.length > 0) {
            handleClick(collections[0]);
        }
    }, [collectionId, collections]);
    var _g = (0, react_1.useState)(null), activeCollection = _g[0], setActiveCollection = _g[1];
    var _h = (0, react_1.useState)(false), showModal = _h[0], setShowModal = _h[1];
    var handleClick = function (collection) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            router.push("/dashboard/".concat(appId, "/collections/").concat(collection === null || collection === void 0 ? void 0 : collection.name));
            return [2 /*return*/];
        });
    }); };
    var handleEditCollectionClick = function (collection) {
        setCollection(collection);
        setShowModal(true);
    };
    var handleCreateCollectionClick = function () {
        setCollection({});
        setShowModal(true);
    };
    var handleSubmitCollection = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(collection === null || collection === void 0 ? void 0 : collection.id)) return [3 /*break*/, 2];
                    return [4 /*yield*/, updateCollection(collection)];
                case 1:
                    resp = _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, createCollection(collection)];
                case 3:
                    resp = _a.sent();
                    _a.label = 4;
                case 4:
                    if (resp === null || resp === void 0 ? void 0 : resp.id) {
                        reloadCollections();
                        router.push("/dashboard/".concat(appId, "/collections/").concat(resp === null || resp === void 0 ? void 0 : resp.name));
                        setCollection({});
                        setShowModal(false);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleDeleteCollectionClick = function (collection) {
        setActiveCollection(collection);
        setShowDeleteModal(true);
    };
    var handleDeleteCollection = function () { return __awaiter(void 0, void 0, void 0, function () {
        var nextCollection, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    setCollection({});
                    return [4 /*yield*/, deleteCollection(activeCollection.id)];
                case 1:
                    _a.sent();
                    setCollections(collections.filter(function (c) { return c.id !== activeCollection.id; }));
                    if (collectionId == activeCollection.name) {
                        nextCollection = collections.filter(function (c) { return c.name !== activeCollection.name; })[0];
                        router.push("/dashboard/".concat(appId, "/collections/").concat(nextCollection === null || nextCollection === void 0 ? void 0 : nextCollection.name));
                    }
                    setShowDeleteModal(false);
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    console.log(e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleTemplateClick = function (template) {
        setCollection(__assign(__assign({}, collection), { name: collection.name || template.name, label: collection.label || template.label, template: template }));
    };
    var handleViewClick = function (view) { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            apiQuery.where(view === null || view === void 0 ? void 0 : view.query);
            router.push("/dashboard/".concat(appId, "/collections/").concat((_a = view === null || view === void 0 ? void 0 : view.collection) === null || _a === void 0 ? void 0 : _a.name, "?").concat(apiQuery.url(), "&view_id=").concat(view === null || view === void 0 ? void 0 : view.id));
            return [2 /*return*/];
        });
    }); };
    var handleEditView = function (view) {
        setView(view);
        setShowViewModal(true);
    };
    var handleUpdateView = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resp, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, updateView(view)];
                case 1:
                    resp = _a.sent();
                    if (resp === null || resp === void 0 ? void 0 : resp.id) {
                        setShowViewModal(false);
                        findViews();
                        setView({});
                    }
                    return [3 /*break*/, 3];
                case 2:
                    e_2 = _a.sent();
                    console.log(e_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleDeleteViewClick = function (view) {
        setView(view);
        setShowDeleteViewModal(true);
    };
    var handleDeleteView = function () { return __awaiter(void 0, void 0, void 0, function () {
        var e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, deleteView(view.id)];
                case 1:
                    _a.sent();
                    setShowDeleteViewModal(false);
                    setView({});
                    findViews();
                    return [3 /*break*/, 3];
                case 2:
                    e_3 = _a.sent();
                    console.log(e_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        if (appId) {
            findCollections();
            findViews();
        }
    }, [appId]);
    (0, react_1.useEffect)(function () {
        // Reload views after creating a new view
        if (viewId) {
            findViews();
        }
    }, [viewId]);
    return (react_1.default.createElement("div", { className: "flex flex-col" },
        react_1.default.createElement(components_1.MenuList, { label: 'Collections' }, collections.map(function (collection) { return (react_1.default.createElement(components_2.MenuListItem, { key: collection.id, title: collection === null || collection === void 0 ? void 0 : collection.label, selected: !viewId && collectionId == (collection === null || collection === void 0 ? void 0 : collection.name), handleClick: function () { return handleClick(collection); }, handleEdit: function () { return handleEditCollectionClick(collection); }, handleDelete: function () { return handleDeleteCollectionClick(collection); } })); })),
        react_1.default.createElement("div", { className: "w-full mx-2 mb-2" },
            react_1.default.createElement(tailwind_1.Button, { color: "secondary", onClick: handleCreateCollectionClick, startIcon: react_1.default.createElement(lucide_react_1.Plus, { className: "w-4 h-4 text-secondary-foreground" }) }, "Collection")),
        views.length > 0 && (react_1.default.createElement(components_1.MenuList, { label: "Views", enableBorder: true }, views === null || views === void 0 ? void 0 : views.map(function (view) { return (react_1.default.createElement(components_2.MenuListItem, { key: view.id, title: view === null || view === void 0 ? void 0 : view.name, selected: viewId == (view === null || view === void 0 ? void 0 : view.id), icon: "Search", handleClick: function () { return handleViewClick(view); }, handleDelete: function () { return handleDeleteViewClick(view); }, handleEdit: function () { return handleEditView(view); } })); }))),
        react_1.default.createElement(AdminCollectionEdit_1.default, { errors: errors, loading: loading, open: showModal, collection: collection, handleClose: function () { return setShowModal(false); }, handleChange: handleChange, handleSubmit: handleSubmitCollection, handleTemplateClick: handleTemplateClick }),
        react_1.default.createElement(AdminViewEdit_1.default, { loading: viewLoading, errors: viewErrors, open: showViewModal, handleClose: function () { return setShowViewModal(false); }, view: view, handleSubmit: handleUpdateView, handleChange: handleChangeView }),
        react_1.default.createElement(components_1.AlertModal, { loading: viewLoading, open: showDeleteViewModal, title: "Delete view", description: "Are you sure you want to delete this view?", handleClose: function () { return setShowDeleteViewModal(false); }, handleConfirm: handleDeleteView }),
        react_1.default.createElement(components_1.AlertModal, { loading: loading, open: showDeleteModal, handleClose: function () { return setShowDeleteModal(false); }, handleConfirm: handleDeleteCollection })));
};
exports.default = AdminCollectionMenu;
