import React from 'react';
import { ButtonType, FormFieldType, DisplayFieldType } from '../../../types';
export type ShowModalProps = {
    handle?: string;
    enableBorder?: boolean;
    enableOverlay?: boolean;
    buttons: ButtonType[];
    displayFields: DisplayFieldType[];
    fields?: FormFieldType[];
    fieldName?: string;
    enableEdit?: boolean;
    enableCreate?: boolean;
    enableFavorites?: boolean;
    enableLikes?: boolean;
    enableSharing?: boolean;
    enableRatings?: boolean;
    enableUsers?: boolean;
    enablePayments?: boolean;
    handleEdit?: () => void;
    enableComments?: boolean;
};
declare const ShowModal: React.FC<ShowModalProps>;
export default ShowModal;
