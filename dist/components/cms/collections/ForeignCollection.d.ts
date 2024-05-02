import React from 'react';
import { FieldType } from '../../../types';
export type ForeignCollectionProps = {
    variant?: 'list' | 'grid';
    style?: 'card' | 'avatar' | 'cover';
    field: any;
    fields: FieldType[];
    resource: any;
    url: string;
    layout?: 'drawer' | 'inline';
    handle: string;
    foreignContentType?: string;
    navigateUrl?: any;
    foreignUrl?: string;
    perPage?: number;
    query?: any;
    buttonText?: string;
    enableEdit?: boolean;
    enableCreate?: boolean;
    enableDelete?: boolean;
    enableBorder?: boolean;
    enableGradient?: boolean;
    enableLoadMore?: boolean;
};
declare const ForeignCollection: React.FC<ForeignCollectionProps>;
export default ForeignCollection;
