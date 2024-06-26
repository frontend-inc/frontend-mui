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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var core_1 = require("@dnd-kit/core");
var sortable_1 = require("@dnd-kit/sortable");
var material_1 = require("@mui/material");
var Droppable_1 = __importDefault(require("./Droppable"));
var components_1 = require("../../../components");
var Sortable = function (props) {
    var _a = props.actions, actions = _a === void 0 ? [] : _a, _b = props.headers, headers = _b === void 0 ? [] : _b, handleDrop = props.handleDrop, _c = props.displayFields, displayFields = _c === void 0 ? [] : _c, _d = props.columns, initialColumns = _d === void 0 ? {} : _d, handleClick = props.handleClick, enableFavorites = props.enableFavorites, enableRatings = props.enableRatings, enableEdit = props.enableEdit, enableDelete = props.enableDelete, handleEdit = props.handleEdit, handleDelete = props.handleDelete;
    var _e = (0, react_1.useState)(null), activeId = _e[0], setActiveId = _e[1];
    var _f = (0, react_1.useState)(initialColumns), columns = _f[0], setColumns = _f[1];
    var sensors = (0, core_1.useSensors)((0, core_1.useSensor)(core_1.PointerSensor), (0, core_1.useSensor)(core_1.KeyboardSensor, {
        coordinateGetter: sortable_1.sortableKeyboardCoordinates,
    }));
    var activeResource = activeId ? findResourceById(activeId) : null;
    if (headers.length === 0)
        return null;
    return (react_1.default.createElement(core_1.DndContext, { sensors: sensors, collisionDetection: core_1.closestCenter, onDragStart: handleDragStart, onDragEnd: handleDragEnd },
        react_1.default.createElement(material_1.Stack, { sx: sx.container, direction: "row", spacing: 1 }, headers === null || headers === void 0 ? void 0 : headers.map(function (header) {
            var _a, _b;
            return (react_1.default.createElement(material_1.Stack, { sx: sx.column, key: header.value, direction: "column", spacing: 1 },
                react_1.default.createElement(material_1.Typography, { variant: "subtitle2", color: 'text.primary' }, header.label),
                react_1.default.createElement(sortable_1.SortableContext, { key: header.value, items: (_a = columns[header.value]) === null || _a === void 0 ? void 0 : _a.map(function (res) { return res.id; }), strategy: sortable_1.verticalListSortingStrategy },
                    react_1.default.createElement(material_1.List, { disablePadding: true }, columns[header.value].length > 0 ?
                        (_b = columns[header.value]) === null || _b === void 0 ? void 0 : _b.map(function (res) { return (react_1.default.createElement(components_1.KanBanCard, { key: res === null || res === void 0 ? void 0 : res.id, id: res === null || res === void 0 ? void 0 : res.id, resource: res, actions: actions, displayFields: displayFields, handleClick: function () { return handleClick(res); }, enableFavorites: enableFavorites, enableRatings: enableRatings, enableEdit: enableEdit, enableDelete: enableDelete, handleEdit: handleEdit, handleDelete: handleDelete })); }) : (react_1.default.createElement(Droppable_1.default, { id: header.value }))))));
        })),
        react_1.default.createElement(core_1.DragOverlay, null, activeResource ? (react_1.default.createElement(components_1.KanBanCard, { enableDragging: true, id: activeResource === null || activeResource === void 0 ? void 0 : activeResource.id, resource: activeResource, displayFields: displayFields, actions: [] })) :
            null)));
    function handleDragStart(event) {
        var active = event.active;
        setActiveId(active.id);
    }
    function handleDragEnd(event) {
        var _a, _b;
        var active = event.active, over = event.over;
        if (over) {
            var activeContainer = findContainer(active.id);
            var overContainer = findContainer(over.id) || over.id; // Check for column id if over.id is not an item
            if (activeContainer && overContainer) {
                var newColumns = void 0;
                var movedItem = void 0;
                if (activeContainer === overContainer) {
                    var items = columns[activeContainer];
                    var oldIndex = items.findIndex(function (item) { return item.id === active.id; });
                    var newIndex = items.findIndex(function (item) { return item.id === over.id; });
                    newColumns = __assign(__assign({}, columns), (_a = {}, _a[activeContainer] = (0, sortable_1.arrayMove)(items, oldIndex, newIndex), _a));
                    movedItem = items[oldIndex];
                }
                else {
                    var activeItems = columns[activeContainer];
                    var overItems = columns[overContainer] || []; // Handle empty columns
                    var activeIndex = activeItems.findIndex(function (item) { return item.id === active.id; });
                    var newActiveItems = __spreadArray([], activeItems, true);
                    var newOverItems = __spreadArray([], overItems, true);
                    movedItem = newActiveItems.splice(activeIndex, 1)[0];
                    var insertIndex = 0;
                    if (!String(over.id).startsWith('placeholder')) {
                        var overIndex = overItems.findIndex(function (item) { return item.id === over.id; });
                        insertIndex = overIndex;
                    }
                    newOverItems.splice(insertIndex, 0, movedItem); // Insert at the dropped position
                    newColumns = __assign(__assign({}, columns), (_b = {}, _b[activeContainer] = newActiveItems, _b[overContainer] = newOverItems, _b));
                }
                setColumns(newColumns);
                handleDrop(movedItem, overContainer, newColumns);
            }
        }
        setActiveId(null);
    }
    function findResourceById(id) {
        for (var column in columns) {
            var resource = columns[column].find(function (item) { return item.id === id; });
            if (resource) {
                return resource;
            }
        }
        return null;
    }
    function findContainer(id) {
        return Object.keys(columns).find(function (key) { return columns[key].some(function (item) { return item.id === id; }); });
    }
};
exports.default = Sortable;
var sx = {
    container: {
        px: 1,
        py: 2,
        width: '100%',
        overflowX: 'scroll'
    },
    column: {
        p: 1,
        borderRadius: 1,
        boxShadow: 2
    }
};
