"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var context_1 = require("../../context");
var hooks_1 = require("../../hooks");
var cookies_next_1 = require("cookies-next");
var useAuth = function () {
    var _a = (0, react_1.useContext)(context_1.ApiContext), api = _a.api, authCookie = _a.authCookie;
    var serverPath = (0, react_1.useContext)(context_1.AuthContext).serverPath;
    var showLoading = function () { return setLoading(true); };
    var hideLoading = function () { return setLoading(false); };
    var _b = (0, react_1.useContext)(context_1.AuthContext), authenticated = _b.authenticated, setAuthenticated = _b.setAuthenticated, currentUser = _b.currentUser, setCurrentUser = _b.setCurrentUser, setToken = _b.setToken;
    var _c = (0, hooks_1.useResource)({
        url: serverPath,
        name: 'user',
    }), errors = _c.errors, setErrors = _c.setErrors, loading = _c.loading, setLoading = _c.setLoading, user = _c.resource, setUser = _c.setResource, handleChange = _c.handleChange, handleErrors = _c.handleErrors;
    var updateMe = function (user) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () { return api.url(serverPath).updateMe(user); })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var fetchMe = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () { return api.url(serverPath).fetchMe(); })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var login = function (user) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () { return api.url(serverPath).login(user); })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var signup = function (user) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () { return api.url(serverPath).signup(user); })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var sendPin = function (user) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () { return api.url(serverPath).sendPin(user); })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var verifyPin = function (email, pin) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () { return api.url(serverPath).verifyPin(email, pin); })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var changePassword = function (currentPassword, password, passwordConfirmation) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () {
                        return api
                            .url(serverPath)
                            .changePassword(currentPassword, password, passwordConfirmation);
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var sendOneTimePassword = function (user) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () {
                        return api.url(serverPath).sendOneTimePassword(user);
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var verifyOneTimePassword = function (otp) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () {
                        return api.url(serverPath).verifyOneTimePassword(otp);
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var forgotPassword = function (user) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () { return api.url(serverPath).forgotPassword(user); })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var resetPassword = function (email, password, passwordConfirmation, changePasswordToken) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () {
                        return api
                            .url(serverPath)
                            .resetPassword(email, password, passwordConfirmation, changePasswordToken);
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var logout = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            (0, cookies_next_1.deleteCookie)(authCookie);
            setCurrentUser({});
            setAuthenticated(false);
            return [2 /*return*/];
        });
    }); };
    var googleLogin = function (user) { return __awaiter(void 0, void 0, void 0, function () {
        var url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = serverPath + '/google/login';
                    return [4 /*yield*/, loadingWrapper(function () { return api.post(url, { user: user }); })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var deleteAvatar = function () { return __awaiter(void 0, void 0, void 0, function () {
        var url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = serverPath + '/delete_avatar';
                    return [4 /*yield*/, loadingWrapper(function () { return api.post(url); })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var authenticateFromToken = function (token) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setToken(token);
            setAuthenticated(true);
            return [2 /*return*/];
        });
    }); };
    var loadingWrapper = function (apiMethod) { return __awaiter(void 0, void 0, void 0, function () {
        var resp, e_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, 3, 4]);
                    showLoading();
                    setErrors(null);
                    return [4 /*yield*/, apiMethod()];
                case 1:
                    resp = _b.sent();
                    if ((_a = resp === null || resp === void 0 ? void 0 : resp.data) === null || _a === void 0 ? void 0 : _a.id) {
                        setUser(resp.data);
                        setCurrentUser(resp.data);
                        setAuthenticated(true);
                        setToken(resp.data.jwt_token);
                        (0, cookies_next_1.setCookie)(authCookie, resp.data.jwt_token);
                    }
                    else if (resp === null || resp === void 0 ? void 0 : resp.error) {
                        handleErrors(resp === null || resp === void 0 ? void 0 : resp.error);
                    }
                    return [2 /*return*/, resp === null || resp === void 0 ? void 0 : resp.data];
                case 2:
                    e_1 = _b.sent();
                    handleErrors(e_1);
                    return [3 /*break*/, 4];
                case 3:
                    hideLoading();
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        if (currentUser && !authenticated) {
            setToken(currentUser === null || currentUser === void 0 ? void 0 : currentUser.token);
            setAuthenticated(true);
        }
        if (!currentUser && !authenticated) {
            var jwtToken = (0, cookies_next_1.getCookie)(authCookie);
            if (jwtToken) {
                authenticateFromToken(String(jwtToken));
            }
        }
    }, [currentUser]);
    return {
        loading: loading,
        errors: errors,
        authCookie: authCookie,
        user: user,
        setUser: setUser,
        currentUser: currentUser,
        setCurrentUser: setCurrentUser,
        fetchMe: fetchMe,
        updateMe: updateMe,
        forgotPassword: forgotPassword,
        handleChange: handleChange,
        authenticateFromToken: authenticateFromToken,
        login: login,
        logout: logout,
        signup: signup,
        changePassword: changePassword,
        resetPassword: resetPassword,
        sendPin: sendPin,
        verifyPin: verifyPin,
        sendOneTimePassword: sendOneTimePassword,
        verifyOneTimePassword: verifyOneTimePassword,
        googleLogin: googleLogin,
        deleteAvatar: deleteAvatar,
        loadingWrapper: loadingWrapper,
    };
};
exports.default = useAuth;
