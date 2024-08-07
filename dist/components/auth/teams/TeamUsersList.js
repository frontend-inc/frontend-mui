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
var frontend_js_1 = require("frontend-js");
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var TeamUserForm_1 = __importDefault(require("./TeamUserForm"));
var TeamUsersList = function (props) {
    var _a;
    var handleAddUser = (props || {}).handleAddUser;
    var _b = (0, hooks_1.useTeamUsers)(), loading = _b.delayedLoading, errors = _b.errors, teamUser = _b.teamUser, setTeamUser = _b.setTeamUser, handleChange = _b.handleChange, updateTeamUser = _b.updateTeamUser, deleteTeamUser = _b.deleteTeamUser, teamUsers = _b.teamUsers, findTeamUsers = _b.findTeamUsers;
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    var _c = (0, react_1.useState)(false), isEditing = _c[0], setIsEditing = _c[1];
    var _d = (0, react_1.useState)(false), openDeleteModal = _d[0], setOpenDeleteModal = _d[1];
    var handleClick = function (teamUser) { };
    var handleEdit = function (teamUser) {
        setTeamUser(teamUser);
        setIsEditing(true);
    };
    var handleDeleteClick = function (teamUser) {
        setTeamUser(teamUser);
        setOpenDeleteModal(true);
    };
    var handleDelete = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, deleteTeamUser(teamUser === null || teamUser === void 0 ? void 0 : teamUser.id)];
                case 1:
                    resp = _a.sent();
                    if (!resp) return [3 /*break*/, 3];
                    return [4 /*yield*/, findTeamUsers()];
                case 2:
                    _a.sent();
                    setOpenDeleteModal(false);
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var updated;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, updateTeamUser(teamUser)];
                case 1:
                    updated = _a.sent();
                    if (updated === null || updated === void 0 ? void 0 : updated.id) {
                        findTeamUsers(currentUser === null || currentUser === void 0 ? void 0 : currentUser.team_id);
                        setIsEditing(false);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleLoadTeamUsers = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, findTeamUsers(currentUser === null || currentUser === void 0 ? void 0 : currentUser.team_id)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        if (currentUser === null || currentUser === void 0 ? void 0 : currentUser.team_id) {
            handleLoadTeamUsers();
        }
    }, [currentUser === null || currentUser === void 0 ? void 0 : currentUser.team_id]);
    return (react_1.default.createElement(react_1.default.Fragment, null, !isEditing ? (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.List, { dense: true },
            react_1.default.createElement(components_1.Loading, { loading: loading }),
            !loading &&
                (teamUsers === null || teamUsers === void 0 ? void 0 : teamUsers.map(function (teamUser) { return (react_1.default.createElement(components_1.MyAccountUserItem, { key: teamUser.id, isAdmin: (currentUser === null || currentUser === void 0 ? void 0 : currentUser.team_role) === 'admin', user: __assign(__assign({}, teamUser === null || teamUser === void 0 ? void 0 : teamUser.user), { role: teamUser === null || teamUser === void 0 ? void 0 : teamUser.role }), handleClick: 
                    // @ts-ignore
                    function () { return handleClick(teamUser); }, handleEdit: 
                    // @ts-ignore
                    function () { return handleEdit(teamUser); }, handleDelete: 
                    // @ts-ignore
                    function () { return handleDeleteClick(teamUser); } })); }))),
        !loading && (teamUsers === null || teamUsers === void 0 ? void 0 : teamUsers.length) == 0 && (react_1.default.createElement(components_1.Placeholder, { icon: "Users", title: "No Teams", description: "Add a team to get started" })),
        (currentUser === null || currentUser === void 0 ? void 0 : currentUser.team_id) && (react_1.default.createElement(material_1.Box, { sx: sx.buttons },
            react_1.default.createElement(material_1.Button, { onClick: handleAddUser, variant: "contained", color: "primary" }, "Add User"))),
        react_1.default.createElement(components_1.AlertModal, { loading: loading, open: openDeleteModal, title: "Remove User", description: "Are you sure you want to remove ".concat((_a = teamUser === null || teamUser === void 0 ? void 0 : teamUser.user) === null || _a === void 0 ? void 0 : _a.name, "?"), handleClose: function () { return setOpenDeleteModal(false); }, handleConfirm: handleDelete }))) : (react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1.5 },
        react_1.default.createElement(TeamUserForm_1.default
        //@ts-ignore
        , { 
            //@ts-ignore
            teamUser: teamUser, handleChange: handleChange, errors: errors }),
        react_1.default.createElement(material_1.Stack, { sx: sx.buttons, direction: "row", spacing: 1 },
            react_1.default.createElement(material_1.Button, { variant: "contained", color: "secondary", onClick: function () { return setIsEditing(false); } }, "Cancel"),
            react_1.default.createElement(material_1.Button, { variant: "contained", color: "primary", onClick: handleSubmit }, "Update"))))));
};
exports.default = TeamUsersList;
var sx = {
    buttons: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
    },
};
