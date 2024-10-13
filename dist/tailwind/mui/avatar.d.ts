import React from 'react';
type AvatarVariant = 'rounded' | 'circular';
interface AvatarProps {
    children?: React.ReactNode;
    variant?: AvatarVariant;
    fallback?: string;
    src?: string;
    alt?: string;
    className?: string;
}
declare const Avatar: React.FC<AvatarProps>;
export { Avatar };
