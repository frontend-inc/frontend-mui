import React from 'react';
interface CardActionAreaProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
}
declare const CardActionArea: React.ForwardRefExoticComponent<CardActionAreaProps & React.RefAttributes<HTMLButtonElement>>;
export { CardActionArea };
