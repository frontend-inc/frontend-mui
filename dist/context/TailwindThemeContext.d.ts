import React from 'react';
type Theme = 'light' | 'dark';
interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}
export declare const ThemeContext: React.Context<ThemeContextType>;
export declare function ThemeProvider({ children }: {
    children: React.ReactNode;
}): React.JSX.Element;
export declare function useTheme(): ThemeContextType;
export {};
