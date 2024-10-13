import React from 'react';
type Direction = 'up' | 'down' | 'left' | 'right';
interface SlideProps {
    children: React.ReactNode;
    in?: boolean;
    direction?: Direction;
    duration?: number;
    className?: string;
}
export declare const Slide: React.FC<SlideProps>;
export {};
