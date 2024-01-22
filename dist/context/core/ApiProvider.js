"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ApiContext_1 = __importDefault(require("./ApiContext"));
var rest_1 = require("../../api/rest");
var cookies_next_1 = require("cookies-next");
var ApiProvider = function (props) {
  var _a = props || {},
    baseUrl = _a.url,
    clientUrl = _a.clientUrl,
    _b = _a.authCookie,
    authCookie = _b === void 0 ? "authToken" : _b,
    apiKey = _a.apiKey,
    children = _a.children;
  var fetchAuthCookie = function () {
    return String((0, cookies_next_1.getCookie)(authCookie));
  };
  var api = (0, rest_1.createClient)(baseUrl, fetchAuthCookie, apiKey);
  var value = {
    api: api,
    apiKey: apiKey,
    baseUrl: baseUrl,
    clientUrl: clientUrl,
    authCookie: authCookie,
  };
  return react_1.default.createElement(
    ApiContext_1.default.Provider,
    { value: value },
    children
  );
};
exports.default = ApiProvider;
