import React from 'react';
type TableProps = {
    loading: boolean;
    fields: Array<any>;
    rows: Array<any>;
    enableBorder?: boolean;
    enableSearch?: boolean;
    enableFilters?: boolean;
    enableSelect?: boolean;
    enableEdit?: boolean;
    enableDelete?: boolean;
    handleClick?: (item: any) => void;
    handleEdit?: (row: any) => void;
    handleEditSelected?: (items: any[]) => void;
    handleDelete?: (items: any[]) => void;
    handlePublish?: (items: any[]) => void;
    handleUnpublish?: (items: any[]) => void;
    secondaryActions?: React.ReactNode;
    page?: number;
    perPage?: number;
    numPages?: number;
    totalCount?: number;
    query: any;
    handleQueryChange?: (e: any) => void;
    handleKeywordChange?: (e: any) => void;
    handleClearQuery?: () => void;
    handlePaginate?: (e: any, page: number) => void;
    handleSearch?: (keywords: any) => void;
    handleKeywordSearch?: (keywords: string) => void;
    handleSort?: (e: any) => void;
    styles?: any;
};
declare const Table: React.FC<TableProps>;
export default Table;
