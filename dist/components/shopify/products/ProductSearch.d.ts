import React from 'react';
import { PriceOptionType, SearchFilterOptionType } from 'frontend-shopify';
export type ProductSearchProps = {
    href: string;
    handle: string;
    options?: SearchFilterOptionType[];
    priceOptions?: PriceOptionType[];
    inStockFilter?: boolean;
    enableFilters?: boolean;
    enableSorting?: boolean;
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuickShop?: boolean;
    enableQuantity?: boolean;
    enableOkendoStarRating?: boolean;
};
declare const ProductSearch: React.FC<ProductSearchProps>;
export default ProductSearch;
