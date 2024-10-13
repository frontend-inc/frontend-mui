import React from 'react';
type ModalProps = {
    open: boolean;
    loading?: boolean;
    handleClose: () => void;
    icon?: string;
    title?: string | React.ReactNode;
    description?: string;
    buttons?: React.ReactNode;
    children?: React.ReactNode;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    secondaryActions?: React.ReactNode;
    mode?: string;
};
declare const Modal: React.FC<ModalProps>;
export default Modal;
