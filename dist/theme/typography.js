"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typography = void 0;
exports.typography = {
    h1: {
        fontFamily: 'Instrument Sans',
        fontWeight: 500,
        fontSize: 64,
        lineHeight: '1.1em',
        '@media (max-width:600px)': {
            fontSize: 40,
        },
    },
    h2: {
        fontFamily: 'Instrument Sans',
        fontWeight: 500,
        fontSize: 48,
        '@media (max-width:600px)': {
            fontSize: 34,
        },
    },
    h3: {
        fontFamily: 'Instrument Sans',
        fontWeight: 500,
        textIndent: 0,
        fontSize: 40,
        '@media (max-width:600px)': {
            fontSize: 34,
        },
        lineHeight: '1.3em',
    },
    h4: {
        fontFamily: 'Instrument Sans',
        fontSize: 28,
        fontWeight: 500,
        '@media (max-width:600px)': {
            fontSize: 20,
        },
    },
    h5: {
        fontFamily: 'Instrument Sans',
        fontWeight: 500,
        fontSize: 26,
    },
    h6: {
        fontFamily: 'Instrument Sans',
        fontWeight: 500,
        fontSize: 24,
    },
    subtitle1: {
        fontFamily: 'Inter',
        fontSize: 20,
        fontWeight: 500,
        lineHeight: '1.5em',
        textTransform: 'none',
    },
    subtitle2: {
        fontFamily: 'Inter',
        fontWeight: 500,
        fontSize: 17,
        lineHeight: '1.5em',
    },
    body1: {
        fontFamily: 'Inter',
        textTransform: 'none',
        fontWeight: 400,
        fontSize: 15,
        '@media (max-width:600px)': {
            fontSize: 15,
        },
    },
    body2: {
        fontFamily: 'Inter',
        textTransform: 'none',
        fontWeight: 400,
        fontSize: 15,
        '@media (max-width:600px)': {
            fontSize: 16,
        },
    },
    button: {
        fontFamily: 'Inter',
        textTransform: 'none',
        fontWeight: 600,
        fontSize: 15,
    },
    caption: {
        fontFamily: 'Inter',
        fontWeight: 500,
        fontSize: 15,
        letterSpacing: 'auto',
    },
    overline: {
        fontFamily: 'Inter',
        textTransform: 'none',
        fontWeight: 600,
        fontSize: 14,
        letterSpacing: 'auto',
    },
};
