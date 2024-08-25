import React from 'react';
import { ButtonType, DisplayFieldType } from '../../../types';
type CardStyleTypes = 'list' | 'card' | 'avatar' | 'cover' | 'table' | 'text';
type CollectionListItemProps = {
    buttons: ButtonType[];
    style: CardStyleTypes;
    displayFields: DisplayFieldType[];
    resource: any & {
        label?: string;
        title?: string;
        subtitle?: string;
        image?: string;
        video?: string;
        description: string;
    };
    buttonText?: string;
    href?: string;
    handleClick: () => void;
    handleEdit?: (item: any) => void;
    handleDelete?: (item: any) => void;
    enableBorder?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    enableEdit?: boolean;
    enableDelete?: boolean;
    enableUsers?: boolean;
    enableComments?: boolean;
    enableFavorites?: boolean;
    enableAddReference?: boolean;
    enableLikes?: boolean;
    enableRatings?: boolean;
};
declare const CollectionListItem: React.FC<CollectionListItemProps>;
export default CollectionListItem;
