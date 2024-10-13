import React from 'react';
interface ModalProps {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
    disablePadding?: boolean;
}
declare const Modal: React.FC<ModalProps>;
export { Modal };
