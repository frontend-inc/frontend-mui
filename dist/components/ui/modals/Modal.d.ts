import React from 'react';
type ModalProps = {
    open: boolean;
    loading?: boolean;
    handleClose: () => void;
    title?: string;
    subtitle?: string;
    buttons?: any;
    children?: any;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    secondaryActions?: any;
    disablePadding?: boolean;
    fullScreen?: boolean;
    enableCancel?: boolean;
    hideBackdrop?: boolean;
    disableClose?: boolean;
    disableHeader?: boolean;
};
declare const Modal: React.FC<ModalProps>;
export default Modal;
