import React from 'react';
import { ActionType, FormFieldType, DisplayFieldType, UserType } from '../../../types';
import { SortOptionType, SearchFilterOptionType } from '../../../types';
export type CollectionListProps = {
    user?: UserType;
    variant: 'list' | 'grid';
    style: 'avatar' | 'card' | 'cover' | 'chip' | 'text' | 'image';
    layout?: 'drawer' | 'inline';
    editing?: boolean;
    url: string;
    enableInfiniteLoad?: boolean;
    enableLoadMore?: boolean;
    href: any;
    perPage?: number;
    query?: any;
    actions: ActionType[];
    fields?: FormFieldType[];
    displayFields: DisplayFieldType[];
    filterAnchor?: 'left' | 'top';
    filterOptions?: SearchFilterOptionType[];
    sortOptions?: SortOptionType[];
    enableSearch?: boolean;
    enableFilters?: boolean;
    enableSorting?: boolean;
    enableGoogleMaps?: boolean;
    buttonText?: string;
    handleClick?: (resource: any) => void;
    enableBorder?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    enableEdit?: boolean;
    enableCreate?: boolean;
    enableDelete?: boolean;
    enableFavorites?: boolean;
    enableRatings?: boolean;
    enableUsers?: boolean;
    filterUser?: boolean;
    filterTeam?: boolean;
    emptyIcon?: string;
    emptyTitle?: string;
    emptyDescription?: string;
};
declare const CollectionList: React.FC<CollectionListProps>;
export default CollectionList;
