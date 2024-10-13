import React from 'react';
import { ButtonProps as ShadcnButtonProps } from '../../shadcn/ui/button';
type IconButtonColor = 'primary' | 'secondary' | 'ghost';
type IconButtonVariant = 'rounded' | 'circular';
interface IconButtonProps extends Omit<ShadcnButtonProps, 'size' | 'variant'> {
    color?: IconButtonColor;
    variant?: IconButtonVariant;
    children: React.ReactNode;
}
declare const IconButton: React.FC<IconButtonProps>;
export { IconButton };
