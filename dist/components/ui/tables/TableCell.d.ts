import React from 'react';
type TableCellProps = {
    align?: 'center' | 'left' | 'right';
    children?: React.ReactNode;
    header?: boolean;
    sticky?: boolean;
    small?: boolean;
    variant?: 'head' | 'body';
};
export default function CustomTableCell({ align, children, header, sticky, small, variant, }: TableCellProps): React.JSX.Element;
export {};
