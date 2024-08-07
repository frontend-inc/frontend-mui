import React from 'react';
import { FormFieldType, SyntheticEventType } from '../../../types';
type FormInputProps = {
    variant: any;
    name: string;
    label?: string;
    errors?: any;
    value?: any | any[];
    options: any;
    placeholder?: string;
    handleChange: (e: SyntheticEventType) => void;
    handleRemove: (name: string) => void;
    resource?: any;
    url?: string;
    foreignUrl?: string;
    contentType?: string;
    query?: any;
    displayField?: string;
    fields?: FormFieldType[];
};
declare const FormInput: React.FC<FormInputProps>;
export default FormInput;
