import React from 'react';
import { PriceOptionType, SearchFilterOptionType } from 'frontend-shopify';
export type ProductCollectionProps = {
    href: string;
    handle: string;
    options: SearchFilterOptionType[];
    priceOptions: PriceOptionType[];
    enableFilters?: boolean;
    enableSort?: boolean;
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuickShop?: boolean;
    enableQuantity?: boolean;
    enableOkendoStarRating?: boolean;
};
declare const ProductCollection: React.FC<ProductCollectionProps>;
export default ProductCollection;
