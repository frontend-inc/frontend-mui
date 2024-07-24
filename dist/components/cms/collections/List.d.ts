import React from 'react';
import { ActionType, DisplayFieldType, FormFieldType, QueryParamsType, SearchFilterOptionType, SortOptionType } from '../../../types';
export type ListProps = {
    url: string;
    name: string;
    query?: QueryParamsType;
    style: 'avatar' | 'card' | 'list' | 'cover';
    resource?: any;
    fields: FormFieldType[];
    actions: ActionType[];
    displayFields: DisplayFieldType[];
    filterOptions: SearchFilterOptionType[];
    sortOptions: SortOptionType[];
    href?: string;
    enableSearch?: boolean;
    enableGeoSearch?: boolean;
    enableCreate?: boolean;
    enableEdit?: boolean;
    enableDelete?: boolean;
    enableFilters?: boolean;
    enableSorting?: boolean;
    enableLikes?: boolean;
    enableFavorites?: boolean;
    enableRatings?: boolean;
    enableComments?: boolean;
    enableUsers?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    filterUser?: boolean;
    filterTeam?: boolean;
    filterRelated?: boolean;
    filterSimilar?: boolean;
    filterGeo?: boolean;
    perPage?: number;
    list: React.FC<any>;
    header?: React.FC<any>;
    show?: React.FC<any>;
    edit?: React.FC<any>;
    destroy?: React.FC<any>;
};
declare const List: React.FC<ListProps>;
export default List;
