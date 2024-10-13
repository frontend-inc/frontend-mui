import React from 'react';
interface PopperProps {
    anchorEl?: HTMLElement | null;
    children: React.ReactNode;
    open: boolean;
    placement?: 'top' | 'bottom' | 'left' | 'right';
    onClose?: () => void;
    className?: string;
}
declare const Popper: React.FC<PopperProps>;
export { Popper };
