import React from 'react';
interface LinearProgressProps {
    value?: number;
    variant?: 'determinate' | 'indeterminate';
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
    className?: string;
}
declare const LinearProgress: React.FC<LinearProgressProps>;
export { LinearProgress };
