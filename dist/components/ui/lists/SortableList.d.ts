import React from 'react';
type SortableListProps = {
    items: any[];
    droppableId?: string;
    renderItem: (item: any, index: number, props: any) => React.ReactNode;
    handleDrop: (items: any[]) => void;
};
declare const SortableList: React.FC<SortableListProps>;
export default SortableList;
