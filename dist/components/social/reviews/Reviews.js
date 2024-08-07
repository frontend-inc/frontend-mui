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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var components_1 = require("../../../components");
var material_1 = require("@mui/material");
var hooks_1 = require("../../../hooks");
var frontend_js_1 = require("frontend-js");
var context_1 = require("../../../context");
var hooks_2 = require("../../../hooks");
var Reviews = function (props) {
    var url = props.url, handle = props.handle;
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    var _a = (0, react_1.useState)(null), activeReview = _a[0], setActiveReview = _a[1];
    var _b = (0, react_1.useState)(false), openReview = _b[0], setOpenReview = _b[1];
    var _c = (0, react_1.useState)(false), openDelete = _c[0], setOpenDelete = _c[1];
    var _d = (0, react_1.useState)(false), reply = _d[0], setReply = _d[1];
    var _e = (0, hooks_1.useReviews)({
        url: url,
        handle: handle,
    }), loading = _e.loading, errors = _e.errors, query = _e.query, review = _e.review, reviews = _e.reviews, setReview = _e.setReview, findReviews = _e.findReviews, handleChange = _e.handleChange, createReview = _e.createReview, deleteReview = _e.deleteReview, totalCount = _e.totalCount, page = _e.page, numPages = _e.numPages, loadMore = _e.loadMore;
    var perPage = 20;
    var filterOptions = [
        {
            label: 'Rating',
            field: 'rating',
            variant: 'ratings_scale',
        },
    ];
    var sortOptions = [
        {
            label: 'Date',
            name: 'created_at',
        },
        {
            label: 'Rating',
            name: 'rating',
        },
    ];
    var setAuthOpen = (0, react_1.useContext)(context_1.AppContext).setAuthOpen;
    var handleToggleClick = function () {
        if (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id) {
            setReview({});
            setReply(!reply);
            setOpenReview(!openReview);
        }
        else {
            setAuthOpen(true);
        }
    };
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createReview(review)];
                case 1:
                    _a.sent();
                    setOpenReview(false);
                    findReviews(__assign(__assign({}, query), { page: 1 }));
                    setReply(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleDeleteReview = function (review) {
        setActiveReview(review);
        setOpenDelete(true);
    };
    var handleDelete = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, deleteReview(activeReview === null || activeReview === void 0 ? void 0 : activeReview.id)];
                case 1:
                    _a.sent();
                    setOpenDelete(false);
                    findReviews(__assign(__assign({}, query), { page: 1 }));
                    return [2 /*return*/];
            }
        });
    }); };
    var _f = (0, react_1.useState)(''), keywords = _f[0], setKeywords = _f[1];
    var handleKeywordChange = function (ev) {
        setKeywords(ev.target.value);
    };
    var handleSearch = function (keywords) {
        findReviews(__assign(__assign({}, query), { keywords: keywords, page: 1, per_page: perPage }));
    };
    var handleSort = function (field) {
        findReviews(__assign(__assign({}, query), { sort_by: field.field }));
    };
    var handleSortDirection = function (sortDirection) {
        findReviews(__assign(__assign({}, query), { sort_direction: sortDirection }));
    };
    var _g = (0, hooks_2.useFilters)({
        query: query,
    }), activeFilters = _g.activeFilters, setActiveFilters = _g.setActiveFilters, handleAddFilter = _g.handleAddFilter, buildQueryFilters = _g.buildQueryFilters;
    // Filter methods
    var handleClearFilters = function () {
        setActiveFilters([]);
        findReviews({
            sort_by: 'id',
            sort_direction: 'desc',
            keywords: '',
            page: 1,
            per_page: perPage,
        });
    };
    var handleFilter = function (filter) {
        handleAddFilter(filter);
    };
    (0, react_1.useEffect)(function () {
        if (activeFilters) {
            findReviews(__assign(__assign({}, query), { filters: buildQueryFilters(activeFilters) }));
        }
    }, [activeFilters === null || activeFilters === void 0 ? void 0 : activeFilters.length]);
    (0, react_1.useEffect)(function () {
        if (url && handle) {
            findReviews({
                per_page: 20,
            });
        }
    }, [url, handle]);
    return (react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.root },
        react_1.default.createElement(material_1.Stack, { direction: "row", sx: sx.reviewHeader },
            react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "subtitle1" },
                "Reviews (",
                totalCount,
                ")")),
        react_1.default.createElement(material_1.Stack, { direction: { xs: 'column', sm: 'row' }, justifyContent: "space-between", spacing: 1 },
            react_1.default.createElement(material_1.Stack, { direction: { xs: 'column', sm: 'row' }, spacing: 1, alignItems: "center" },
                react_1.default.createElement(components_1.SearchInput, { value: keywords, handleChange: handleKeywordChange, handleSearch: handleSearch }),
                react_1.default.createElement(material_1.Box, null,
                    react_1.default.createElement(components_1.FilterButton, { filters: activeFilters, handleFilter: handleFilter, handleClear: handleClearFilters, filterOptions: filterOptions })),
                react_1.default.createElement(material_1.Box, null,
                    react_1.default.createElement(components_1.SortButton, { sortBy: (query === null || query === void 0 ? void 0 : query.sort_by) || 'id', sortDirection: (query === null || query === void 0 ? void 0 : query.sort_direction) || 'desc', sortOptions: sortOptions, handleSortBy: handleSort, handleSortDirection: handleSortDirection }))),
            react_1.default.createElement(material_1.Box, null,
                react_1.default.createElement(components_1.ReviewButton, { handleClick: handleToggleClick }))),
        react_1.default.createElement(material_1.Collapse, { in: openReview },
            react_1.default.createElement(components_1.ReviewForm, { errors: errors, loading: loading, review: review, handleChange: handleChange, handleSubmit: handleSubmit })),
        react_1.default.createElement(material_1.List, { dense: true, disablePadding: true }, reviews === null || reviews === void 0 ? void 0 : reviews.map(function (review, i) { return (react_1.default.createElement(components_1.Review, { key: i, review: review, handleDelete: handleDeleteReview })); })),
        !loading && !openReview && (reviews === null || reviews === void 0 ? void 0 : reviews.length) == 0 && (react_1.default.createElement(components_1.Placeholder, { icon: "Star", title: "There are no reviews.", description: "Be the first to leave a review." })),
        react_1.default.createElement(components_1.LoadMore, { loadMore: loadMore, page: page, numPages: numPages }),
        react_1.default.createElement(components_1.AlertModal, { loading: loading, open: openDelete, handleClose: function () { return setOpenDelete(false); }, handleConfirm: handleDelete })));
};
exports.default = Reviews;
var sx = {
    root: {
        py: 2,
        pb: 1.5,
        borderColor: 'divider',
    },
    reviewHeader: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
};
