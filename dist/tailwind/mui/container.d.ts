import React from 'react';
type ContainerMaxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    maxWidth?: ContainerMaxWidth;
    disableGutters?: boolean;
    fixed?: boolean;
}
declare function Container({ maxWidth, disableGutters, fixed, className, children, ...props }: ContainerProps): React.JSX.Element;
export { Container };
