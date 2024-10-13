import React from 'react';
import { ButtonProps as ShadcnButtonProps } from '../../shadcn/ui/button';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonColor = 'primary' | 'secondary';
type ButtonVariant = 'contained' | 'outlined' | 'text';
interface ButtonProps extends Omit<ShadcnButtonProps, 'size' | 'variant'> {
    size?: ButtonSize;
    color?: ButtonColor;
    fullWidth?: boolean;
    variant?: ButtonVariant;
    children: React.ReactNode;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    loading?: boolean;
}
declare const Button: React.FC<ButtonProps>;
export { Button };
