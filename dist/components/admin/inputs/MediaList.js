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
var hooks_1 = require("../../../hooks");
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var MediaListItem_1 = __importDefault(require("./MediaListItem"));
var components_1 = require("../../../components");
var MediaList = function (props) {
    var selectedIds = props.selectedIds, handleSelect = props.handleSelect;
    var _a = (0, hooks_1.useMedia)(), loading = _a.loading, resources = _a.resources, findResources = _a.findResources, deleteResource = _a.deleteResource, reloadResources = _a.reloadResources, loadMore = _a.loadMore, page = _a.page, numPages = _a.numPages;
    var handleRemove = function (resource) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, deleteResource(resource.id)];
                case 1:
                    _a.sent();
                    reloadResources();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleLoadMore = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadMore()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        findResources({
            page: 1,
        });
    }, []);
    return (react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1, width: '100%' },
        react_1.default.createElement(material_1.Box, { sx: sx.list }, resources.map(function (item, idx) { return (react_1.default.createElement(MediaListItem_1.default, { key: item === null || item === void 0 ? void 0 : item.id, item: item, size: 164, selected: selectedIds.includes(item === null || item === void 0 ? void 0 : item.id), handleClick: function () { return handleSelect(item); }, handleRemove: function () { return handleRemove(item); } })); })),
        (resources === null || resources === void 0 ? void 0 : resources.length) == 0 && (react_1.default.createElement(components_1.Placeholder, { icon: 'Image', title: "No media", description: "Upload or import media." })),
        numPages > page && (react_1.default.createElement(material_1.Button, { fullWidth: true, color: "secondary", variant: "contained", onClick: handleLoadMore, endIcon: loading ? react_1.default.createElement(components_1.IconLoading, null) : react_1.default.createElement(icons_material_1.ExpandMore, null) }, "Load More"))));
};
exports.default = MediaList;
var sx = {
    list: {
        mt: 2,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(164px, 1fr))',
        gap: '10px',
    },
};
