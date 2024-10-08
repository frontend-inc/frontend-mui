import React from 'react';
type DateInputProps = {
    errors?: any;
    direction?: 'row' | 'column';
    required?: boolean;
    label?: string;
    name: string;
    value?: string;
    placeholder?: string;
    info?: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const DateInput: React.FC<DateInputProps>;
export default DateInput;
