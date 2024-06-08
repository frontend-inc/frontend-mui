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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var context_1 = require("../../../../context");
var material_1 = require("@mui/material");
var components_1 = require("../../../../components");
var helpers_1 = require("../../../../helpers");
var router_1 = require("next/router");
var index_1 = require("../../../../constants/index");
var AvatarGrid = function (props) {
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var _a = props || {}, actions = _a.actions, resource = _a.resource, _b = _a.displayFields, displayFields = _b === void 0 ? [] : _b, href = _a.href, handleClick = _a.handleClick, _c = _a.height, height = _c === void 0 ? index_1.AVATAR_VERT_HEIGHT : _c, _d = _a.width, width = _d === void 0 ? index_1.AVATAR_VERT_WIDTH : _d, _e = _a.enableBorder, enableBorder = _e === void 0 ? false : _e, _f = _a.enableGradient, enableGradient = _f === void 0 ? false : _f, _g = _a.enableOverlay, enableOverlay = _g === void 0 ? false : _g, _h = _a.enableFavorites, enableFavorites = _h === void 0 ? false : _h;
    var _j = resource || {}, title = _j.title, image = _j.image;
    var router = (0, router_1.useRouter)();
    var handleItemClick = function () {
        if (handleClick) {
            handleClick();
        }
        else if (href) {
            router.push("".concat(clientUrl).concat(href));
        }
    };
    return (react_1.default.createElement(material_1.Stack, { alignItems: 'center', spacing: 1, sx: __assign(__assign(__assign({}, sx.root), (enableBorder && sx.rootBorder)), { minHeight: height }) },
        react_1.default.createElement(material_1.Box, { sx: __assign({}, sx.avatarContainer) },
            react_1.default.createElement(components_1.TouchableOpacity, { handleClick: handleItemClick },
                react_1.default.createElement(material_1.Avatar, { src: image === null || image === void 0 ? void 0 : image.url, sx: __assign(__assign(__assign(__assign({}, sx.avatar), (enableGradient && sx.gradient)), (enableOverlay && sx.overlay)), { height: height, width: width }) },
                    react_1.default.createElement(material_1.Box, null)))),
        react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.contentArea },
            react_1.default.createElement(material_1.Stack, { direction: "row", sx: sx.contentArea, spacing: 0 },
                react_1.default.createElement(material_1.Typography, { sx: sx.title, color: "textPrimary", variant: 'subtitle2' }, (0, helpers_1.truncate)(title)),
                react_1.default.createElement(material_1.Box, { sx: sx.actions },
                    enableFavorites && react_1.default.createElement(components_1.FavoriteButton, { handle: resource === null || resource === void 0 ? void 0 : resource.handle }),
                    react_1.default.createElement(components_1.Actions, { numVisible: 0, actions: actions, resource: resource })))),
        react_1.default.createElement(components_1.DisplayFields, { fields: displayFields, resource: resource })));
};
exports.default = AvatarGrid;
var sx = {
    root: {
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        backgroundImage: 'linear-gradient(45deg, #888888, #222222,#000000)',
    },
    gradient: {
        '&::after': {
            content: '""',
            borderRadius: '50%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to top, rgb(0,0,0,0.5), transparent)',
        },
    },
    overlay: {
        '&::after': {
            content: '""',
            borderRadius: '50%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgb(0,0,0,0.5)',
        },
    },
    rootBorder: {
        border: '1px solid',
        borderColor: 'divider',
        p: 1,
        borderRadius: 1,
    },
    title: {
        width: '100%',
        textAlign: 'left',
    },
    label: {
        textAlign: 'center',
    },
    content: {
        width: '100%',
        alignItems: 'center',
    },
    contentArea: {
        width: '100%',
    },
    avatarContainer: {
        height: '100%',
        width: '100%',
        position: 'relative',
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
};
