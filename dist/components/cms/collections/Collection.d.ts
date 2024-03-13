import React from 'react';
type CollectionProps = {
    title?: string;
    url: string;
    layout: 'list' | 'grid';
    style: 'avatar' | 'card' | 'cover';
    fields?: any;
    editing?: boolean;
    enableInfiniteLoad?: boolean;
    enableLoadMore?: boolean;
    navigateUrl: any;
    perPage?: number;
    query?: any;
    enableSearch?: boolean;
    enableFilters?: boolean;
    enableSortTitle?: boolean;
    enableSortPrice?: boolean;
    secondaryActions?: React.ReactNode;
    buttonText?: string;
    enableBorder?: boolean;
    enableGradient?: boolean;
};
declare const Collection: React.FC<CollectionProps>;
export default Collection;