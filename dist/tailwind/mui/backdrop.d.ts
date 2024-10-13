import React from 'react';
interface BackdropProps extends React.HTMLAttributes<HTMLDivElement> {
    open: boolean;
    onClick?: () => void;
    color?: string;
}
declare const Backdrop: ({ children, open, color, onClick, className, ...props }: BackdropProps) => React.JSX.Element;
export { Backdrop };
