import * as React from 'react';
interface SwitchProps {
    name?: string;
    value?: string | number | readonly string[];
    handleChange?: (checked: boolean) => void;
    label?: string;
    id?: string;
    className?: string;
}
declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLButtonElement>>;
export { Switch };
