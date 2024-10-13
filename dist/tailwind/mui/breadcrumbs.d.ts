import React from 'react';
interface BreadcrumbsProps {
    children: React.ReactNode;
    separator?: React.ReactNode;
    maxItems?: number;
    itemsBeforeCollapse?: number;
    itemsAfterCollapse?: number;
    className?: string;
}
declare const Breadcrumbs: React.FC<BreadcrumbsProps>;
export { Breadcrumbs };
