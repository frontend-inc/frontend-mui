import React from 'react';
type CoverImageProps = {
    editing?: boolean;
    title?: string;
    description?: string;
    buttonText?: string;
    image?: string;
    height?: number;
    width?: number;
    objectFit?: 'cover' | 'contain';
    alignItems?: 'flex-start' | 'center' | 'flex-end';
    alt?: string;
    handleClick?: () => void;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    opacity?: number;
    overlayColor?: string;
    href?: string;
};
declare const CoverImage: React.FC<CoverImageProps>;
export default CoverImage;
