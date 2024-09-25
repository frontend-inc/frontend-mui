import React from 'react';
export type ResourceListItemProps = {
    selectable?: boolean;
    selected?: boolean;
    primary: React.ReactNode;
    secondary?: React.ReactNode;
    avatar?: React.ReactNode;
    icon?: string;
    color?: string;
    layout?: 'list' | 'grid';
    title?: string | React.ReactNode;
    description?: string;
    image?: string;
    handleClick?: (resource: any) => void;
    handleEdit?: (resource: any) => void;
    handleDelete?: (resource: any) => void;
    handleSelect?: () => void;
    handleReload?: () => void;
    secondaryAction?: React.ReactNode;
    menuActions?: any;
    sortable?: boolean;
    isDragging?: boolean;
    enableBorder?: boolean;
    slots?: {
        image?: any;
    };
};
declare const ResourceListItem: React.FC<ResourceListItemProps>;
export default ResourceListItem;
