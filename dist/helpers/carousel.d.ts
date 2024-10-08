export declare const getCarouselResponsive: (theme?: {
    breakpoints: {
        values: {
            xs: number;
            sm: number;
            md: number;
            lg: number;
            xl: number;
        };
    };
    components: {
        MuiAccordian: {
            styleOverrides: {
                root: {};
            };
        };
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    fontFamily: string;
                };
                deletable: {
                    '&:focus': {};
                };
            };
        };
        MuiButton: {
            defaultProps: {
                disableElevation: boolean;
                disableRipple: boolean;
            };
            styleOverrides: {
                root: {
                    whiteSpace: string;
                };
                sizeSmall: {
                    height: number;
                };
                sizeMedium: {
                    height: number;
                };
                sizeLarge: {
                    height: number;
                };
                outlined: {};
                contained: {};
            };
        };
        MuiButtonGroup: {
            defaultProps: {
                disableRipple: boolean;
                border: string;
            };
            styleOverrides: {
                root: {
                    whiteSpace: string;
                    boxShadow: string;
                };
                sizeSmall: {
                    boxShadow: string;
                };
                sizeLarge: {};
                outlined: {};
                contained: {};
            };
        };
        MuiCardActions: {
            styleOverrides: {
                root: {};
            };
        };
        MuiCardContent: {
            styleOverrides: {
                root: {};
            };
        };
        MuiCardHeader: {
            styleOverrides: {
                root: {};
            };
        };
        MuiChip: {
            styleOverrides: {
                root: {};
                deletable: {
                    '&:focus': {};
                };
            };
        };
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    fontFamily: string;
                    '& .MuiInputBase-root': {
                        fontFamily: string;
                    };
                };
            };
        };
        MuiDrawer: {
            styleOverrides: {
                root: {};
            };
        };
        MuiFormControlLabel: {
            styleOverrides: {
                root: {};
            };
        };
        MuiIconButton: {
            styleOverrides: {
                root: {};
            };
        };
        MuiInputBase: {
            styleOverrides: {
                root: {};
                input: {};
            };
        };
        MuiLinearProgress: {
            styleOverrides: {
                root: {};
                colorPrimary: {};
            };
        };
        MuiListItem: {
            styleOverrides: {
                button: {};
            };
        };
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    minWidth: string;
                };
            };
        };
        MuiOutlinedInput: {
            styleOverrides: {
                root: {};
                notchedOutline: {};
            };
        };
        MuiPaper: {
            styleOverrides: {
                root: {};
            };
        };
        MuiSkeleton: {
            styleOverrides: {
                root: {};
            };
        };
        MuiRadio: {
            styleOverrides: {
                root: {};
                input: {
                    '&::placeholder': {
                        color: "#212121";
                    };
                };
            };
        };
        MuiTableCell: {
            styleOverrides: {
                root: {
                    padding: string;
                    fontFamily: string;
                    textTransform: string;
                    fontWeight: number;
                    fontSize: number;
                    lineHeight: string;
                    '@media (max-width:600px)': {
                        fontSize: number;
                    };
                };
            };
        };
        MuiTableHead: {
            styleOverrides: {
                root: {
                    width: string;
                };
            };
        };
        MuiTableRow: {
            styleOverrides: {
                root: {};
            };
        };
        MuiToggleButton: {
            styleOverrides: {
                root: {};
            };
        };
        MuiTypography: {
            styleOverrides: {};
        };
    };
    palette: {
        editor: {
            dark: string;
            main: string;
            light: string;
        };
        primary: {
            main: "#212121";
        };
        secondary: {
            main: "#eeeeee";
            contrastText: "#424242";
        };
        accent: {
            main: "#212121";
            light: "#424242";
            contrastText: "#fafafa";
        };
        success: {
            main: "#4caf50";
        };
        error: {
            main: "#e91e63";
        };
        warning: {
            main: "#ff9800";
        };
        text: {
            primary: string;
            secondary: "#212121";
        };
        background: {
            default: string;
            paper: string;
            light: string;
            dark: string;
        };
        grey: {
            dark: string;
            main: string;
            light: string;
        };
        active: {
            hover: string;
            selected: string;
        };
        divider: "#e0e0e0";
    };
    typography: {
        h1: {
            fontFamily: string;
            fontWeight: number;
            fontSize: number;
            lineHeight: string;
            '@media (max-width:600px)': {
                fontSize: number;
            };
        };
        h2: {
            fontFamily: string;
            fontWeight: number;
            fontSize: number;
            '@media (max-width:600px)': {
                fontSize: number;
            };
        };
        h3: {
            fontFamily: string;
            fontWeight: number;
            textIndent: number;
            fontSize: number;
            '@media (max-width:600px)': {
                fontSize: number;
            };
            lineHeight: string;
        };
        h4: {
            fontFamily: string;
            fontSize: number;
            fontWeight: number;
            '@media (max-width:600px)': {
                fontSize: number;
            };
        };
        h5: {
            fontFamily: string;
            fontWeight: number;
            fontSize: number;
            '@media (max-width:600px)': {
                fontSize: number;
            };
        };
        h6: {
            fontFamily: string;
            fontWeight: number;
            fontSize: number;
            '@media (max-width:600px)': {
                fontSize: number;
            };
        };
        subtitle1: {
            fontFamily: string;
            fontSize: number;
            fontWeight: number;
            lineHeight: string;
            textTransform: string;
        };
        subtitle2: {
            fontFamily: string;
            fontWeight: number;
            fontSize: number;
            lineHeight: string;
        };
        body1: {
            fontFamily: string;
            textTransform: string;
            fontWeight: number;
            fontSize: number;
            lineHeight: string;
            '@media (max-width:600px)': {
                fontSize: number;
            };
        };
        body2: {
            fontFamily: string;
            textTransform: string;
            fontWeight: number;
            fontSize: number;
            lineHeight: string;
            '@media (max-width:600px)': {
                fontSize: number;
            };
        };
        button: {
            fontFamily: string;
            fontWeight: number;
            fontSize: number;
            letterSpacing: string;
            textTransform: string;
        };
        caption: {
            fontFamily: string;
            fontWeight: number;
            fontSize: number;
            '@media (max-width:600px)': {
                fontSize: number;
            };
        };
        overline: {
            fontFamily: string;
            fontWeight: number;
            textTransform: string;
            fontSize: number;
            lineHeight: string;
            letterSpacing: string;
            '@media (max-width:600px)': {
                fontSize: number;
            };
        };
    };
    shape: {
        borderRadius: number;
    };
    spacing: number;
}) => {
    superLargeDesktop: {
        breakpoint: {
            max: number;
            min: number;
        };
        items: number;
    };
    desktop: {
        breakpoint: {
            max: number;
            min: number;
        };
        items: number;
    };
    tablet: {
        breakpoint: {
            max: number;
            min: number;
        };
        items: number;
    };
    mobile: {
        breakpoint: {
            max: number;
            min: number;
        };
        items: number;
    };
};
