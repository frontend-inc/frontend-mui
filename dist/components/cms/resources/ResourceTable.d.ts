import React from 'react';
import { TableHeaderType } from '../../../types';
import { ResourceListProps } from './ResourceList';
export type ResourceTableProps = ResourceListProps & {
    headers: TableHeaderType[];
    enableFilters?: boolean;
};
declare const ResourceTable: React.FC<ResourceTableProps>;
export default ResourceTable;
