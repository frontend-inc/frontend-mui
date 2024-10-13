import React from 'react';
type UserAvatarProps = {
    src?: string;
    variant?: 'circular' | 'rounded';
    label?: string;
    size?: number;
    color?: string;
    className?: string;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
export default function UserAvatar({ src, label, variant, size, className, }: UserAvatarProps): React.JSX.Element;
export {};
