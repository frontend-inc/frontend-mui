import React from 'react';
type MobileButtonProps = {
    startIcon: React.ReactNode;
    onClick: () => void;
    variant?: 'text' | 'outlined' | 'contained';
    color?: 'primary' | 'secondary';
    children: React.ReactNode;
    sx?: any;
};
declare const MobileButton: React.FC<MobileButtonProps>;
export default MobileButton;
