import React from 'react';
type FeaturedProps = {
    title?: string;
    items: {
        icon?: string;
        title?: string;
        description?: string;
        image?: string;
        buttonText?: string;
        url?: string;
    }[];
    enableGradient?: boolean;
    enableOverlay?: boolean;
    enableBorder?: boolean;
};
declare const Featured: React.FC<FeaturedProps>;
export default Featured;
