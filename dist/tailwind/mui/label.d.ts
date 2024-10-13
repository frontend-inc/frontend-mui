import React from 'react';
interface LabelProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    variant?: 'default' | 'secondary' | 'outline' | 'destructive';
}
export declare function Label({ label, variant, className, ...props }: LabelProps): React.JSX.Element;
export {};
