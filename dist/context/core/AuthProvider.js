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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var context_1 = require("context");
var AuthProvider = function (props) {
    var _a = props || {}, children = _a.children, serverPath = _a.serverPath;
    var _b = (0, react_1.useState)(), authenticated = _b[0], setAuthenticated = _b[1];
    var _c = (0, react_1.useState)(), currentUser = _c[0], setCurrentUser = _c[1];
    var _d = (0, react_1.useState)(), token = _d[0], setToken = _d[1];
    var value = {
        serverPath: serverPath,
        authenticated: authenticated,
        setAuthenticated: setAuthenticated,
        currentUser: currentUser,
        setCurrentUser: setCurrentUser,
        token: token,
        setToken: setToken,
    };
    return react_1.default.createElement(context_1.AuthContext.Provider, { value: value }, children);
};
exports.default = AuthProvider;
