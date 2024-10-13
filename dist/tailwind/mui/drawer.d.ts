import React from 'react';
type AnchorPosition = 'left' | 'right' | 'top' | 'bottom';
interface DrawerProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
    disablePadding?: boolean;
    anchor?: AnchorPosition;
    mode?: 'dark' | 'light';
    className?: string;
}
declare const Drawer: React.FC<DrawerProps>;
export { Drawer };
