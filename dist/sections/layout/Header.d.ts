import React from 'react';
import { HeaderProps } from '../../components/ui/header/Header';
type LayoutHeaderProps = HeaderProps & {
    bgColor: string;
    mode: 'light' | 'dark';
};
declare const AppHeader: React.FC<LayoutHeaderProps>;
export default AppHeader;
