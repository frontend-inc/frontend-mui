'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var hooks_1 = require("../../../hooks");
var navigation_1 = require("next/navigation");
var CollectionListItem_1 = __importDefault(require("./CollectionListItem"));
var frontend_js_1 = require("frontend-js");
var utils_1 = require("../../../shadcn/lib/utils");
var CarouselListItems = function (props) {
    var router = (0, navigation_1.useRouter)();
    var clientUrl = (0, hooks_1.useApp)().clientUrl;
    var buttons = props.buttons, href = props.href, displayFields = props.displayFields, _a = props.enableAutoPlay, enableAutoPlay = _a === void 0 ? true : _a, _b = props.enableArrows, enableArrows = _b === void 0 ? false : _b, _c = props.enableDots, enableDots = _c === void 0 ? false : _c, _d = props.enableGradient, enableGradient = _d === void 0 ? false : _d, _e = props.enableOverlay, enableOverlay = _e === void 0 ? false : _e, _f = props.enableFavorites, enableFavorites = _f === void 0 ? false : _f, _g = props.enableLikes, enableLikes = _g === void 0 ? false : _g;
    var _h = (0, frontend_js_1.useResourceContext)(), setOpenShow = _h.setOpenShow, loading = _h.loading, resources = _h.resources, setResource = _h.setResource;
    var handleClick = function (resource) {
        if (href) {
            if (clientUrl && href && (resource === null || resource === void 0 ? void 0 : resource.handle)) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
                router.push("".concat(clientUrl).concat(href, "/").concat(resource === null || resource === void 0 ? void 0 : resource.handle));
            }
        }
        else {
            setResource(resource);
            setOpenShow(true);
        }
    };
    return (react_1.default.createElement("div", { className: (0, utils_1.cn)('grid grid-cols-1 md:grid-cols-3 gap-4', loading && 'opacity-50') },
        react_1.default.createElement(__1.Carousel, { enableDots: enableDots, enableAutoPlay: enableAutoPlay, enableArrows: enableArrows }, resources === null || resources === void 0 ? void 0 : resources.map(function (resource, index) { return (react_1.default.createElement("div", { className: (0, utils_1.cn)('p-1', enableArrows && 'pt-5', enableDots && 'pb-4'), key: index },
            react_1.default.createElement(CollectionListItem_1.default, { buttons: buttons, style: "card", resource: resource, displayFields: displayFields, handleClick: function () { return handleClick(resource); }, enableGradient: enableGradient, enableOverlay: enableOverlay, enableFavorites: enableFavorites, enableLikes: enableLikes }))); }))));
};
exports.default = CarouselListItems;
