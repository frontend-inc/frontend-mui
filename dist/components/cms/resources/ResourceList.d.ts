import React from 'react';
import { FormFieldType } from '../../../types';
import { SearchFilterOptionType } from '../../../types';
import { SortOptionType } from '../../../types';
export type ResourceListProps = {
    url: string;
    name: string;
    component?: React.FC<any>;
    layout?: 'list' | 'grid';
    dense?: boolean;
    handleClick?: (item: any) => void;
    enableInfiniteLoad?: boolean;
    enableLoadMore?: boolean;
    perPage?: number;
    query?: any;
    fields?: FormFieldType[];
    filterOptions?: SearchFilterOptionType[];
    sortOptions?: SortOptionType[];
    enableSearch?: boolean;
    enableFilters?: boolean;
    enableSorting?: boolean;
    buttonText?: string;
    enableBorder?: boolean;
    enableGradient?: boolean;
    enableEdit?: boolean;
    enableCreate?: boolean;
    enableDelete?: boolean;
    emptyIcon?: string;
    emptyTitle?: string;
    emptyDescription?: string;
    componentProps?: any;
};
declare const ResourceList: React.FC<ResourceListProps>;
export default ResourceList;
