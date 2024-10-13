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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablePagination = exports.TableFooter = exports.TableHeaderCell = exports.TableCell = exports.TableRow = exports.TableBody = exports.TableHead = exports.Table = exports.TableContainer = void 0;
var react_1 = __importDefault(require("react"));
var table_1 = require("../../shadcn/ui/table");
var button_1 = require("../../shadcn/ui/button");
var select_1 = require("../../shadcn/ui/select");
var utils_1 = require("../../shadcn/lib/utils");
var lucide_react_1 = require("lucide-react");
// TableContainer
var TableContainer = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return react_1.default.createElement("div", __assign({ className: (0, utils_1.cn)('overflow-x-auto', className) }, props));
};
exports.TableContainer = TableContainer;
// Table
var Table = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return react_1.default.createElement(table_1.Table, __assign({ className: (0, utils_1.cn)('w-full', className) }, props));
};
exports.Table = Table;
// TableHead
var TableHead = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return react_1.default.createElement(table_1.TableHeader, __assign({ className: (0, utils_1.cn)('bg-muted/50', className) }, props));
};
exports.TableHead = TableHead;
// TableBody
var TableBody = function (props) {
    return react_1.default.createElement(table_1.TableBody, __assign({}, props));
};
exports.TableBody = TableBody;
// TableRow
var TableRow = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (react_1.default.createElement(table_1.TableRow, __assign({ className: (0, utils_1.cn)('hover:bg-muted/50', className) }, props)));
};
exports.TableRow = TableRow;
// TableCell
var TableCell = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return react_1.default.createElement(table_1.TableCell, __assign({ className: (0, utils_1.cn)('p-4', className) }, props));
};
exports.TableCell = TableCell;
// TableHeaderCell
var TableHeaderCell = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (react_1.default.createElement(table_1.TableHead, __assign({ className: (0, utils_1.cn)('p-4 font-bold', className) }, props)));
};
exports.TableHeaderCell = TableHeaderCell;
// TableFooter
var TableFooter = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (react_1.default.createElement(table_1.TableFooter, __assign({ className: (0, utils_1.cn)('bg-muted/50 font-medium', className) }, props)));
};
exports.TableFooter = TableFooter;
var TablePagination = function (_a) {
    var count = _a.count, page = _a.page, rowsPerPage = _a.rowsPerPage, onPageChange = _a.onPageChange, onRowsPerPageChange = _a.onRowsPerPageChange, _b = _a.rowsPerPageOptions, rowsPerPageOptions = _b === void 0 ? [5, 10, 25] : _b;
    var handleFirstPageButtonClick = function (event) {
        onPageChange(event, 0);
    };
    var handleBackButtonClick = function (event) {
        onPageChange(event, page - 1);
    };
    var handleNextButtonClick = function (event) {
        onPageChange(event, page + 1);
    };
    var handleLastPageButtonClick = function (event) {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
    return (react_1.default.createElement("div", { className: "flex items-center justify-between px-2 py-3" },
        react_1.default.createElement("div", { className: "flex items-center space-x-2" },
            react_1.default.createElement("span", { className: "text-sm text-muted-foreground" }, "Rows per page:"),
            react_1.default.createElement(select_1.Select, { value: rowsPerPage.toString(), onValueChange: function (value) {
                    return onRowsPerPageChange({ target: { value: value } });
                } },
                react_1.default.createElement(select_1.SelectTrigger, { className: "h-8 w-[70px]" },
                    react_1.default.createElement(select_1.SelectValue, null, rowsPerPage)),
                react_1.default.createElement(select_1.SelectContent, null, rowsPerPageOptions.map(function (option) { return (react_1.default.createElement(select_1.SelectItem, { key: option, value: option.toString() }, option)); })))),
        react_1.default.createElement("div", { className: "flex items-center space-x-6 lg:space-x-8" },
            react_1.default.createElement("div", { className: "flex w-[100px] items-center justify-center text-sm font-medium" },
                "Page ",
                page + 1,
                " of ",
                Math.ceil(count / rowsPerPage)),
            react_1.default.createElement("div", { className: "flex items-center space-x-2" },
                react_1.default.createElement(button_1.Button, { variant: "outline", className: "hidden h-8 w-8 p-0 lg:flex", onClick: handleFirstPageButtonClick, disabled: page === 0 },
                    react_1.default.createElement("span", { className: "sr-only" }, "Go to first page"),
                    react_1.default.createElement(lucide_react_1.ChevronsLeft, { className: "h-4 w-4" })),
                react_1.default.createElement(button_1.Button, { variant: "outline", className: "h-8 w-8 p-0", onClick: handleBackButtonClick, disabled: page === 0 },
                    react_1.default.createElement("span", { className: "sr-only" }, "Go to previous page"),
                    react_1.default.createElement(lucide_react_1.ChevronLeft, { className: "h-4 w-4" })),
                react_1.default.createElement(button_1.Button, { variant: "outline", className: "h-8 w-8 p-0", onClick: handleNextButtonClick, disabled: page >= Math.ceil(count / rowsPerPage) - 1 },
                    react_1.default.createElement("span", { className: "sr-only" }, "Go to next page"),
                    react_1.default.createElement(lucide_react_1.ChevronRight, { className: "h-4 w-4" })),
                react_1.default.createElement(button_1.Button, { variant: "outline", className: "hidden h-8 w-8 p-0 lg:flex", onClick: handleLastPageButtonClick, disabled: page >= Math.ceil(count / rowsPerPage) - 1 },
                    react_1.default.createElement("span", { className: "sr-only" }, "Go to last page"),
                    react_1.default.createElement(lucide_react_1.ChevronsRight, { className: "h-4 w-4" }))))));
};
exports.TablePagination = TablePagination;
