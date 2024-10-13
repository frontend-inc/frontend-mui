import React from 'react';
interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    container?: boolean;
    item?: boolean;
    children: React.ReactNode;
}
declare const Grid: React.FC<GridProps>;
export { Grid };
