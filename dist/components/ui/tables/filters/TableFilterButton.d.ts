import React from 'react';
type TableFilterButtonProps = {
    loading: boolean;
    query: any;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    badgeCount: number;
    handleClearFilters: () => void;
};
export default function TableFilterButton(props: TableFilterButtonProps): React.JSX.Element;
export {};
