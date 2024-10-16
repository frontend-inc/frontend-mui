'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var tailwind_1 = require("../../../tailwind");
var components_1 = require("../../../components");
var table_1 = require("../../../shadcn/ui/table");
var utils_1 = require("../../../shadcn/lib/utils");
var TableList = function (props) {
    var title = props.title, toolbar = props.toolbar, loading = props.loading, headers = props.headers, resources = props.resources, disableBorderRadius = props.disableBorderRadius, _a = props.enableSelect, enableSelect = _a === void 0 ? false : _a, _b = props.enableEdit, enableEdit = _b === void 0 ? false : _b, _c = props.enableDelete, enableDelete = _c === void 0 ? false : _c, _d = props.enableShow, enableShow = _d === void 0 ? false : _d, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete, handleShow = props.handleShow, query = props.query, selected = props.selected, selectedIds = props.selectedIds, handleSelect = props.handleSelect, handleSelectAll = props.handleSelectAll, handleSort = props.handleSort, handlePaginate = props.handlePaginate, page = props.page, perPage = props.perPage, numPages = props.numPages, totalCount = props.totalCount, _e = props.emptyIcon, emptyIcon = _e === void 0 ? 'Search' : _e, _f = props.emptyTitle, emptyTitle = _f === void 0 ? 'No results found' : _f, _g = props.emptyDescription, emptyDescription = _g === void 0 ? 'Try adjusting your search or filters' : _g;
    return (react_1.default.createElement("div", { className: (0, utils_1.cn)('w-full', !disableBorderRadius && 'rounded-lg overflow-hidden') },
        (title || toolbar) && (react_1.default.createElement("div", { className: "p-2 min-h-[40px] w-full" },
            title && (react_1.default.createElement(tailwind_1.Typography, { variant: "subtitle1", color: "text.primary" }, title)),
            toolbar && toolbar)),
        react_1.default.createElement(table_1.Table, { className: "scrollbar-hide" },
            react_1.default.createElement(table_1.TableHeader, null,
                react_1.default.createElement(components_1.TableHeaders, { enableEdit: enableEdit, enableSelect: enableSelect, enableDelete: enableDelete, enableShow: enableShow, fields: headers, sortBy: query === null || query === void 0 ? void 0 : query.sort_by, sortDirection: query === null || query === void 0 ? void 0 : query.sort_direction, checked: (selected === null || selected === void 0 ? void 0 : selected.length) > 0 && (selected === null || selected === void 0 ? void 0 : selected.length) === (resources === null || resources === void 0 ? void 0 : resources.length), handleSort: handleSort, handleSelectAll: handleSelectAll })),
            react_1.default.createElement(table_1.TableBody, null, resources === null || resources === void 0 ? void 0 : resources.map(function (row) { return (react_1.default.createElement(components_1.TableRow, { key: row === null || row === void 0 ? void 0 : row.id, row: row, fields: headers, selectedIds: selectedIds, enableSelect: enableSelect, enableEdit: enableEdit, enableDelete: enableDelete, enableShow: enableShow, handleClick: handleClick, handleEdit: handleEdit, handleDelete: handleDelete, handleShow: handleShow, handleSelect: handleSelect })); }))),
        !loading && (resources === null || resources === void 0 ? void 0 : resources.length) == 0 && (react_1.default.createElement("div", { className: "py-12 px-4 w-full h-full flex flex-row items-center justify-center" },
            react_1.default.createElement(components_1.Placeholder, { icon: emptyIcon, title: emptyTitle, description: emptyDescription }))),
        react_1.default.createElement(components_1.Pagination, { loading: loading, page: page, perPage: perPage, numPages: numPages, totalCount: totalCount, handlePaginate: handlePaginate })));
};
exports.default = TableList;
