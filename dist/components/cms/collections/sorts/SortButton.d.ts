import React from 'react';
import { SortOptionType } from '../../../../types';
type SortButtonProps = {
    sortOptions: SortOptionType[];
    sortBy: string;
    sortDirection: 'asc' | 'desc';
    handleSortBy: (sortBy: string) => void;
    handleSortDirection: (sortDirection: 'asc' | 'desc') => void;
};
declare const SortButton: React.FC<SortButtonProps>;
export default SortButton;
