import React from 'react';
type UseFiltersProps = {
    query?: any;
};
declare const useFilters: (props: UseFiltersProps) => {
    filter: undefined;
    findFilter: (fieldName: any, filters: any) => any;
    showFilterModal: boolean;
    setShowFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
    handleOpenFilterModal: () => void;
    handleCloseFilterModal: () => void;
    handleAddFilter: (filter: any) => void;
    activeFilters: any[];
    setActiveFilters: React.Dispatch<React.SetStateAction<any[]>>;
    findDuplicateFilter: (filters: any, filter: any) => any;
    findDuplicateFilterIndex: (filters: any, filter: any) => any;
    buildQueryFilters: (activeFilters: any) => {};
};
export default useFilters;
