import React from 'react';
import { CollectionListProps } from './CollectionList';
export type CollectContainerProps = CollectionListProps & {
    resource?: any;
    searchUrl: string;
    component?: React.FC<any>;
    rest?: any;
};
declare const CollectionContainer: React.FC<CollectContainerProps>;
export default CollectionContainer;
