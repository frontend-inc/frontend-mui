import React from 'react';
import { FooterProps } from '../../components/ui/footer/Footer';
type LayoutFooterProps = FooterProps & {
    bgColor: string;
    mode: 'light' | 'dark';
};
declare const AppFooter: React.FC<LayoutFooterProps>;
export default AppFooter;
