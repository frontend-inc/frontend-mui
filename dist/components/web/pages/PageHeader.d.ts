import React from 'react';
import { ActionType } from '../../../types';
export type PageHeaderProps = {
    label?: string;
    title?: string;
    description?: string;
    links: {
        label: string;
        path: string;
    }[];
    maxLinks?: number;
    actions: ActionType[];
    resource?: any;
    enableBorder?: boolean;
};
declare const PageHeader: React.FC<PageHeaderProps>;
export default PageHeader;
