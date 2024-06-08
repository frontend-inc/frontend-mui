"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_js_1 = require("frontend-js");
var material_1 = require("@mui/material");
var __1 = require("..");
var AuthGuard = function (props) {
    var children = props.children, _a = props.requireAuth, requireAuth = _a === void 0 ? false : _a, _b = props.requireTeam, requireTeam = _b === void 0 ? false : _b, _c = props.requirePaid, requirePaid = _c === void 0 ? false : _c, _d = props.requireAdmin, requireAdmin = _d === void 0 ? false : _d;
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    if (requireAuth && !(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id)) {
        return react_1.default.createElement(__1.AuthWall, null);
    }
    if (requireTeam && !(currentUser === null || currentUser === void 0 ? void 0 : currentUser.team_id)) {
        return (react_1.default.createElement(material_1.Box, { sx: sx.center },
            react_1.default.createElement(__1.Heading, { title: "Team required", description: "You must be a member of a team." })));
    }
    if (requirePaid && !(currentUser === null || currentUser === void 0 ? void 0 : currentUser.paid)) {
        return react_1.default.createElement(__1.PayWall, null);
    }
    if (requireAdmin && (currentUser === null || currentUser === void 0 ? void 0 : currentUser.role) != 'admin') {
        return (react_1.default.createElement(material_1.Box, { sx: sx.center },
            react_1.default.createElement(__1.Heading, { title: "Admin Required", description: "You must be an admin to access this page." })));
    }
    return children;
};
exports.default = AuthGuard;
var sx = {
    center: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
};
