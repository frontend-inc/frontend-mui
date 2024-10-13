import React from 'react';
type ChipVariant = 'filled' | 'outlined';
type ChipColor = 'default' | 'primary' | 'secondary' | 'destructive';
type ChipSize = 'small' | 'medium';
interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    variant?: ChipVariant;
    color?: ChipColor;
    size?: ChipSize;
    onDelete?: () => void;
    icon?: React.ReactNode;
    clickable?: boolean;
}
declare const Chip: React.FC<ChipProps>;
export { Chip };
