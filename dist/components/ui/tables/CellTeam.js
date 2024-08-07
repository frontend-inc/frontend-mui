"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var CellTeam = function (props) {
    var team = props.value, handleClick = props.handleClick;
    if (!(team === null || team === void 0 ? void 0 : team.id))
        return null;
    return (react_1.default.createElement(material_1.Box, { sx: sx.cell },
        react_1.default.createElement(material_1.Button, { sx: sx.button, size: "small", color: "secondary", variant: "contained", onClick: handleClick, startIcon: react_1.default.createElement(components_1.TeamAvatar, { size: 28, team: team }) },
            react_1.default.createElement(material_1.Typography, { variant: "caption" }, team === null || team === void 0 ? void 0 : team.name))));
};
exports.default = CellTeam;
var sx = {
    cell: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
    },
    button: {
        borderRadius: 1,
        bgcolor: 'transparent',
    },
};
