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
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterDocumentLinks = exports.flattenDocument = exports.getDocumentValue = void 0;
var index_1 = require("../constants/index");
var lodash_1 = require("lodash");
var getDocumentValue = function (document, field) {
    var _a, _b, _c;
    if (index_1.ATTACHMENT_FIELDS.includes(field === null || field === void 0 ? void 0 : field.variant)) {
        return (_a = (0, lodash_1.get)(document, field === null || field === void 0 ? void 0 : field.name)) === null || _a === void 0 ? void 0 : _a.url;
    }
    else if (index_1.REFERENCE_FIELDS.includes(field === null || field === void 0 ? void 0 : field.variant)) {
        var documents = (_c = (_b = document === null || document === void 0 ? void 0 : document.document_links) === null || _b === void 0 ? void 0 : _b.filter(function (d) { var _a; return ((_a = d === null || d === void 0 ? void 0 : d.target) === null || _a === void 0 ? void 0 : _a.content_type) === (field === null || field === void 0 ? void 0 : field.foreign_content_type); })) === null || _c === void 0 ? void 0 : _c.map(function (d) { return d.target; });
        return documents;
    }
    else if (index_1.SYSTEM_FIELDS.includes(field === null || field === void 0 ? void 0 : field.name)) {
        return (0, lodash_1.get)(document, field === null || field === void 0 ? void 0 : field.name);
    }
    else {
        return (0, lodash_1.get)(document, "data.".concat(field === null || field === void 0 ? void 0 : field.name));
    }
};
exports.getDocumentValue = getDocumentValue;
var flattenDocument = function (resource) {
    var _a = resource || {}, data = _a.data, rest = __rest(_a, ["data"]);
    return __assign(__assign({}, rest), data);
};
exports.flattenDocument = flattenDocument;
var filterDocumentLinks = function (document, contentType) {
    var _a, _b;
    var documents = (_b = (_a = document === null || document === void 0 ? void 0 : document.document_links) === null || _a === void 0 ? void 0 : _a.filter(function (d) { var _a; return ((_a = d === null || d === void 0 ? void 0 : d.target) === null || _a === void 0 ? void 0 : _a.content_type) === contentType; })) === null || _b === void 0 ? void 0 : _b.map(function (d) { return d.target; });
    return documents;
};
exports.filterDocumentLinks = filterDocumentLinks;
