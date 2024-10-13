import React from 'react';
type ButtonTabsProps = {
    handleChange: (value: string) => void;
    options: {
        icon?: string;
        label?: string;
        value: string;
    }[];
    className?: string;
    fullWidth?: boolean;
    value: string;
};
export default function ButtonTabs({ handleChange, options, value, className, fullWidth, }: ButtonTabsProps): React.JSX.Element;
export {};
