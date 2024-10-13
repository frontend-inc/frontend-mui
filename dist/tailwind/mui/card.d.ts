import React from 'react';
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
declare const Card: React.FC<CardProps>;
interface CardHeaderProps {
    title?: React.ReactNode;
    subheader?: React.ReactNode;
    avatar?: React.ReactNode;
    action?: React.ReactNode;
    className?: string;
}
declare const CardHeader: React.FC<CardHeaderProps>;
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
declare const CardContent: React.FC<CardContentProps>;
interface CardActionsProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    disableSpacing?: boolean;
}
declare const CardActions: React.FC<CardActionsProps>;
export { Card, CardHeader, CardContent, CardActions };
