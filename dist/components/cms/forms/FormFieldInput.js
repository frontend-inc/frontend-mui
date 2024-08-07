"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var FormInput_1 = __importDefault(require("./FormInput"));
var FormFieldInput = function (props) {
    var resource = props.resource, field = props.field, errors = props.errors, value = props.value, handleChange = props.handleChange, handleRemove = props.handleRemove;
    var name = field.name, label = field.label, placeholder = field.placeholder, variant = field.variant, options = field.options, url = field.url, foreignUrl = field.foreignUrl, contentType = field.contentType, displayField = field.displayField, fields = field.fields;
    return (react_1.default.createElement(FormInput_1.default, { errors: errors, name: name, label: label, placeholder: placeholder, variant: variant, options: options, value: value, handleChange: handleChange, handleRemove: handleRemove, 
        // Reference props
        url: url, foreignUrl: foreignUrl, resource: resource, contentType: contentType, fields: fields, displayField: displayField }));
};
exports.default = FormFieldInput;
