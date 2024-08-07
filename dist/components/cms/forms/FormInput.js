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
var components_1 = require("../../../components");
var FormInput = function (props) {
    var variant = props.variant, name = props.name, label = props.label, errors = props.errors, value = props.value, options = props.options, placeholder = props.placeholder, handleChange = props.handleChange, handleRemove = props.handleRemove, resource = props.resource, url = props.url, foreignUrl = props.foreignUrl, fields = props.fields, contentType = props.contentType, _a = props.query, query = _a === void 0 ? {} : _a, displayField = props.displayField;
    var componentMapper = {
        autosuggest: components_1.RemoteAutosuggest,
        array: components_1.ArrayInput,
        string: components_1.TextInput,
        file: components_1.AttachmentInput,
        email: components_1.EmailInput,
        phone: components_1.PhoneInput,
        url: components_1.URLInput,
        text: components_1.TextInput,
        nospace: components_1.NoSpaceInput,
        location: components_1.LocationInput,
        number: components_1.TextInput,
        price: components_1.TextInput,
        date: components_1.DateInput,
        datetime: components_1.DateInput,
        boolean: components_1.SwitchInput,
        select: components_1.Autosuggest,
        rating: components_1.RatingInput,
        image: components_1.ImageInput,
        json: components_1.JSONInput,
        shopify: components_1.ShopifyProductInput,
        habtm: components_1.ReferenceInput,
    };
    var inputProps = {
        autosuggest: {
            url: url,
            displayField: displayField,
            defaultQuery: query,
        },
        text: {
            multiline: true,
            rows: 6,
        },
        select: {
            // Handle both array of strings and array of objects
            options: options === null || options === void 0 ? void 0 : options.map(function (option) { return ({
                label: option.label || option,
                value: option.value || option,
            }); }),
        },
        number: {
            type: 'number',
        },
        boolean: {
            label: null,
            placeholder: label,
        },
        price: {
            type: 'number',
        },
        image: {
            handleRemove: handleRemove,
        },
        video: {
            handleRemove: handleRemove,
        },
        audio: {
            handleRemove: handleRemove,
        },
        file: {
            handleRemove: handleRemove,
        },
        habtm: {
            resource: resource,
            url: url,
            foreignUrl: foreignUrl,
            contentType: contentType,
            fields: fields,
        },
    };
    var InputComponent = componentMapper[variant] || components_1.TextInput;
    return (react_1.default.createElement(InputComponent, __assign({ errors: errors, label: label, name: name, value: value || '', handleChange: handleChange, placeholder: placeholder }, inputProps[variant])));
};
exports.default = FormInput;
