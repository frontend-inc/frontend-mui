import React from 'react';
type StackProps = {
    children: React.ReactNode;
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    spacing?: number;
    alignItems?: 'flex-start' | 'flex-end' | 'center';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    divider?: React.ReactNode;
    className?: string;
};
export default function Stack({ children, direction, spacing, alignItems, justifyContent, divider, className, }: StackProps): React.JSX.Element;
export { Stack };
