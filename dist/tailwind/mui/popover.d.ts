import React from 'react';
interface PopoverProps {
    anchorEl: HTMLElement | null;
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    anchorOrigin?: {
        vertical: 'top' | 'center' | 'bottom';
        horizontal: 'left' | 'center' | 'right';
    };
    transformOrigin?: {
        vertical: 'top' | 'center' | 'bottom';
        horizontal: 'left' | 'center' | 'right';
    };
    className?: string;
}
export declare const Popover: React.FC<PopoverProps>;
export {};
