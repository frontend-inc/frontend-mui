import React from 'react';
import { LinkProps } from 'next/link';
import { ReactNode, MouseEvent } from 'react';
interface LinkButtonProps {
    href: LinkProps['href'];
    children: ReactNode;
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}
declare function Link({ href, children, onClick, ...props }: LinkButtonProps): React.JSX.Element;
export { Link };
