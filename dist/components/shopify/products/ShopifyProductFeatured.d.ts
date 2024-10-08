import React from 'react';
export type ShopifyProductFeaturedProps = {
    handle: string;
    flexDirection?: 'row' | 'row-reverse';
    handleClick?: () => void;
    buttonText?: string;
    quickShopButtonText?: string;
    height?: number;
    width?: number;
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuantity?: boolean;
    enableQuickShop?: boolean;
};
declare const ShopifyProductFeatured: React.FC<ShopifyProductFeaturedProps>;
export default ShopifyProductFeatured;
