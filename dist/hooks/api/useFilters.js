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
var react_1 = require("react");
var useFilters = function (props) {
    var _a;
    var query = (props || {}).query;
    var _b = (0, react_1.useState)(false), showFilterModal = _b[0], setShowFilterModal = _b[1];
    var _c = (0, react_1.useState)(), filter = _c[0], setFilter = _c[1];
    var _d = (0, react_1.useState)({}), queryFilters = _d[0], setQueryFilters = _d[1];
    var _e = (0, react_1.useState)([]), activeFilters = _e[0], setActiveFilters = _e[1];
    var handleOpenFilterModal = function () {
        setShowFilterModal(true);
    };
    var handleCloseFilterModal = function () {
        setShowFilterModal(false);
    };
    var findFilter = function (fieldName, filters) {
        var foundFilter = filters.find(function (f) { return f.field == fieldName; });
        setFilter(foundFilter);
        return foundFilter;
    };
    var compareValues = function (a, b) {
        if (Array.isArray(a) && Array.isArray(b)) {
            return a.sort().join(',') === b.sort().join(',');
        }
        return a === b;
    };
    var findDuplicateFilterIndex = function (filters, filter) {
        return filters.findIndex(function (f) {
            return f.field === filter.field &&
                f.operator === filter.operator &&
                f.where === filter.where &&
                compareValues(f.value, filter.value);
        });
    };
    var findDuplicateFilter = function (filters, filter) {
        return filters.find(function (f) {
            return f.field === filter.field &&
                f.operator === filter.operator &&
                f.where === filter.where &&
                compareValues(f.value, filter.value);
        });
    };
    var handleAddFilter = function (filter) {
        var updatedFilters = __spreadArray([], activeFilters, true);
        var duplicateIndex = findDuplicateFilterIndex(activeFilters, filter);
        if (duplicateIndex > -1) {
            updatedFilters = updatedFilters === null || updatedFilters === void 0 ? void 0 : updatedFilters.filter(function (f, index) { return index !== duplicateIndex; });
        }
        else {
            //@ts-ignore
            updatedFilters = __spreadArray(__spreadArray([], updatedFilters, true), [filter], false);
        }
        setActiveFilters(updatedFilters);
    };
    var isBlank = function (value) {
        return (value === '' ||
            value == undefined ||
            value == null ||
            (Array.isArray(value) && value.length === 0));
    };
    var mergeFilters = function (filters, newFilters) {
        if (!filters)
            return newFilters;
        if (!newFilters)
            return filters;
        var mergedFilters = {
            AND: __spreadArray(__spreadArray([], ((filters === null || filters === void 0 ? void 0 : filters.AND) || []), true), ((newFilters === null || newFilters === void 0 ? void 0 : newFilters.AND) || []), true),
            OR: __spreadArray(__spreadArray([], (filters.OR || []), true), (newFilters.OR || []), true),
        };
        return mergedFilters;
    };
    var mergeAllFilters = function (filters) {
        if (filters.length === 0) {
            return {};
        }
        return filters.reduce(function (mergedFilter, currentFilter) {
            return mergeFilters(mergedFilter, currentFilter);
        }, {});
    };
    var buildQueryFilters = function (activeFilters) {
        var filters = {};
        activeFilters
            .filter(function (filter) { return !isBlank(filter === null || filter === void 0 ? void 0 : filter.value); })
            .forEach(function (filter) {
            var _a, _b, _c;
            var where = filter.where, field = filter.field, operator = filter.operator, value = filter.value;
            if (!filters[where]) {
                filters[where] = [];
            }
            filters = __assign(__assign({}, filters), (_a = {}, _a[where] = __spreadArray(__spreadArray([], filters[where], true), [
                (_b = {},
                    _b[field] = (_c = {},
                        _c[operator] = value,
                        _c),
                    _b),
            ], false), _a));
        });
        return filters;
    };
    (0, react_1.useEffect)(function () {
        setQueryFilters(buildQueryFilters(activeFilters));
    }, [activeFilters]);
    // Convert the query object into an array of filter options
    var formatFilterArray = function (filters) {
        var formattedFilters = [];
        if (typeof filters === 'object') {
            Object.keys(filters).forEach(function (where) {
                filters[where].forEach(function (filter) {
                    var field = Object.keys(filter)[0];
                    var operator = Object.keys(filter[field])[0];
                    var value = filter[field][operator];
                    //@ts-ignore
                    formattedFilters.push({
                        where: where,
                        field: field,
                        operator: operator,
                        value: value,
                    });
                });
            });
            setActiveFilters(formattedFilters);
        }
        return formattedFilters;
    };
    var buildUserFilters = function (currentUser, filterUser, filterTeam) {
        return {
            AND: __spreadArray(__spreadArray([], (filterUser && (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id)
                ? [{ user_id: { eq: currentUser === null || currentUser === void 0 ? void 0 : currentUser.id } }]
                : []), true), (filterTeam && (currentUser === null || currentUser === void 0 ? void 0 : currentUser.team_id)
                ? [{ team_id: { eq: currentUser === null || currentUser === void 0 ? void 0 : currentUser.team_id } }]
                : []), true),
        };
    };
    (0, react_1.useEffect)(function () {
        var _a;
        if (((_a = query === null || query === void 0 ? void 0 : query.filters) === null || _a === void 0 ? void 0 : _a.length) >= 0) {
            formatFilterArray(query === null || query === void 0 ? void 0 : query.filters);
        }
    }, [(_a = query === null || query === void 0 ? void 0 : query.filters) === null || _a === void 0 ? void 0 : _a.length]);
    return {
        filter: filter,
        findFilter: findFilter,
        showFilterModal: showFilterModal,
        setShowFilterModal: setShowFilterModal,
        handleOpenFilterModal: handleOpenFilterModal,
        handleCloseFilterModal: handleCloseFilterModal,
        handleAddFilter: handleAddFilter,
        queryFilters: queryFilters,
        activeFilters: activeFilters,
        setActiveFilters: setActiveFilters,
        findDuplicateFilter: findDuplicateFilter,
        findDuplicateFilterIndex: findDuplicateFilterIndex,
        mergeFilters: mergeFilters,
        mergeAllFilters: mergeAllFilters,
        buildUserFilters: buildUserFilters,
        buildQueryFilters: buildQueryFilters,
    };
};
exports.default = useFilters;
