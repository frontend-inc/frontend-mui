import React from 'react';
type AdminHeaderProps = {
    title?: string | React.ReactNode;
    buttons?: React.ReactNode;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
    primaryActions?: React.ReactNode;
    secondaryActions?: React.ReactNode;
    disableBorder?: boolean;
    enableExpandLeftPanel?: boolean;
    enableExpandRightPanel?: boolean;
};
export default function AdminHeader({ title, buttons, primaryActions, secondaryActions, enableExpandLeftPanel, enableExpandRightPanel, disableBorder, }: AdminHeaderProps): React.JSX.Element;
export {};
