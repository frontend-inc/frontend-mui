import React from 'react';
type CoverImageCarouselProps = {
    url: string;
    fields?: any;
    editing?: boolean;
    height?: number;
    perPage?: number;
    query?: any;
    buttonText?: string;
    navigateUrl: any;
    autoPlay?: boolean;
    arrows?: boolean;
    showDots?: boolean;
    enableOverlay?: boolean;
    enableGradient?: boolean;
    enableBorder?: boolean;
    overlayColor?: string;
    opacity?: number;
    alignItems?: 'flex-start' | 'center' | 'flex-end';
};
declare const CoverImageCarousel: React.FC<CoverImageCarouselProps>;
export default CoverImageCarousel;
