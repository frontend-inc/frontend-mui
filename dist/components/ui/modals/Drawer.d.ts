import React from 'react';
type DrawerProps = {
    open: boolean;
    loading?: boolean;
    title?: string;
    anchor?: 'left' | 'right' | 'top' | 'bottom';
    handleClose: () => void;
    buttons?: React.ReactNode;
    children: React.ReactNode;
    disablePadding?: boolean;
    mode?: string;
    className?: string;
    fullWidth?: boolean;
};
declare const Drawer: React.FC<DrawerProps>;
export default Drawer;
