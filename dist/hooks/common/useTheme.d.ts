import React from 'react';
type ThemeProps = {
    muiTheme?: any;
    primaryColor?: string;
    bgcolor?: string;
    textPrimary?: string;
    textSecondary?: string;
    borderRadius?: number;
    bodyFont?: string;
    headerFont?: string;
    offsetX?: number;
    deviceSize?: 'mobile' | 'tablet' | 'desktop';
};
declare const useTheme: (props: ThemeProps) => {
    theme: any;
    setTheme: React.Dispatch<any>;
};
export default useTheme;
