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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var helpers_1 = require("../../../helpers");
var components_2 = require("../../../components");
var sortable_1 = require("@dnd-kit/sortable");
var helpers_2 = require("../../../helpers");
var KanBanCard = function (props) {
    var _a = props || {}, id = _a.id, loading = _a.loading, buttons = _a.buttons, resource = _a.resource, _b = _a.displayFields, displayFields = _b === void 0 ? [] : _b, _c = _a.height, height = _c === void 0 ? 200 : _c, handleClick = _a.handleClick, _d = _a.enableDragging, enableDragging = _d === void 0 ? false : _d, _e = _a.enableGradient, enableGradient = _e === void 0 ? false : _e, _f = _a.enableOverlay, enableOverlay = _f === void 0 ? false : _f, enableComments = _a.enableComments, enableLikes = _a.enableLikes, enableFavorites = _a.enableFavorites, enableRatings = _a.enableRatings, enableEdit = _a.enableEdit, enableDelete = _a.enableDelete, handleEdit = _a.handleEdit, handleDelete = _a.handleDelete, enableUsers = _a.enableUsers;
    var _g = (0, sortable_1.useSortable)({
        id: id,
    }), attributes = _g.attributes, listeners = _g.listeners, setNodeRef = _g.setNodeRef;
    var _h = resource || {}, title = _h.title, image = _h.image;
    return (react_1.default.createElement(material_1.Stack, { direction: "column", sx: __assign(__assign(__assign({}, sx.root), (enableDragging && sx.rootDragging)), (loading && sx.rootLoading)) },
        react_1.default.createElement(material_1.Stack, __assign({ direction: "column", ref: setNodeRef }, attributes, listeners),
            (image === null || image === void 0 ? void 0 : image.url) && (react_1.default.createElement(material_1.Box, { sx: sx.image },
                react_1.default.createElement(components_1.Image, { src: image === null || image === void 0 ? void 0 : image.url, height: height, alt: title, disableBorderRadius: true, handleClick: handleClick, enableGradient: enableGradient, enableOverlay: enableOverlay }))),
            react_1.default.createElement(material_1.Stack, { direction: "row", alignItems: "flex-start" },
                react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 0.5, sx: sx.content },
                    react_1.default.createElement(material_1.Typography, { sx: sx.title, color: "text.primary", variant: "subtitle2" }, (0, helpers_1.truncate)(title)),
                    enableRatings == true && (react_1.default.createElement(components_1.AvgRating, { resource: resource, size: "small" })),
                    react_1.default.createElement(components_1.DisplayFields, { fields: displayFields, resource: resource }),
                    enableUsers && react_1.default.createElement(components_1.UserChip, { user: resource === null || resource === void 0 ? void 0 : resource.user })))),
        react_1.default.createElement(material_1.Box, { sx: sx.footer },
            react_1.default.createElement(material_1.Button, { onClick: handleClick, size: "small", variant: "contained", color: "secondary", sx: sx.button }, "Details"),
            react_1.default.createElement(material_1.Stack, { direction: "row", alignItems: "flex-end" },
                react_1.default.createElement(components_1.SocialActions, { resource: resource, enableLikes: enableLikes, enableFavorites: enableFavorites, enableComments: enableComments }),
                react_1.default.createElement(components_2.Actions, { numVisible: 0, buttons: (0, helpers_2.buildActions)({
                        enableEdit: enableEdit,
                        enableDelete: enableDelete,
                        handleEdit: handleEdit,
                        handleDelete: handleDelete,
                        buttons: buttons,
                    }), resource: resource })))));
};
exports.default = KanBanCard;
var sx = {
    root: {
        p: 0,
        my: 1,
        width: 260,
        cursor: 'pointer',
        borderRadius: 1,
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.default',
        transition: 'box-shadow 0.3s',
        overflow: 'hidden',
        '&:hover': {
            boxShadow: 2,
        },
    },
    rootDragging: {
        boxShadow: 2,
        transform: 'rotate(3deg)',
    },
    rootLoading: {
        opacity: 0.5,
    },
    dragHandle: {
        width: 32,
        minWidth: 32,
        height: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        py: 1,
        cursor: 'grab',
        '&:active': {
            cursor: 'grabbing',
        },
    },
    button: {
        textTransform: 'uppercase',
    },
    image: {
        overflow: 'hidden',
        borderRadius: function (theme) { return "".concat(theme.spacing(1), "px ").concat(theme.spacing(1), "px 0 0"); },
        width: '100%',
    },
    content: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: '100%',
        p: 1,
    },
    header: {
        ml: 1,
        borderBottom: '1px solid',
        borderColor: 'divider',
    },
    title: {
        width: '100%',
    },
    description: {
        maxWidth: '240px',
    },
    footer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        px: 1,
        pb: 1,
    },
};
