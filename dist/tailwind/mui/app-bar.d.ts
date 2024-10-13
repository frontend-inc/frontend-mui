import React from 'react';
interface AppBarProps extends React.HTMLAttributes<HTMLElement> {
    position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';
    color?: 'default' | 'primary' | 'secondary' | 'transparent';
    elevation?: 0 | 1 | 2 | 3 | 4;
}
declare const AppBar: React.FC<AppBarProps>;
export { AppBar };
