import React from 'react';
import { TableHeaderType, SortOptionType, QueryParamsType } from '../../../types';
export type ResourceListItemsProps = {
    grid?: boolean;
    query?: QueryParamsType;
    resources: any[];
    headers?: TableHeaderType[];
    page: number;
    numPages: number;
    totalCount?: number;
    enableBorder?: boolean;
    enableEdit?: boolean;
    enableDelete?: boolean;
    handleClick?: (resource: any) => void;
    handleEdit?: (resource: any) => void;
    handleDelete?: (resource: any) => void;
    handleDrop?: (sorted: any[]) => void;
    handlePaginate: (page: number) => void;
    handleSort?: (field: SortOptionType) => void;
    handleReload?: () => void;
    renderItem: (resource: any, props: any) => React.ReactNode;
};
declare const ResourceListItems: React.FC<ResourceListItemsProps>;
export default ResourceListItems;
