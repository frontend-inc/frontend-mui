import React from 'react';
type PopupProps = {
    open: boolean;
    handleClose: () => void;
    children: React.ReactNode;
};
export default function Popup({ open, handleClose, children }: PopupProps): React.JSX.Element;
export {};
