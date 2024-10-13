import React from 'react';
type ThemeProviderProps = {
    children: React.ReactNode;
    primaryColor?: string;
    bgcolor?: string;
    headerFont?: string;
    bodyFont?: string;
    borderRadius?: number;
    textPrimary?: string;
    textSecondary?: string;
};
declare const ThemeProvider: (props: ThemeProviderProps) => React.JSX.Element;
export default ThemeProvider;
