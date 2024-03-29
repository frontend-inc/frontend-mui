import React from 'react';
import { OptionType, QueryParamsType, SyntheticEventType } from '../../types';
type RemoteAutosuggestProps = {
    errors?: any;
    value?: any;
    label?: string;
    name: string;
    url: string;
    displayField?: string;
    handleChange: (event: SyntheticEventType) => void;
    valueParam?: string;
    placeholder?: string;
    imageField?: string;
    direction?: 'row' | 'column';
    defaultQuery?: QueryParamsType;
    defaultOptions?: OptionType[];
};
declare const RemoteAutosuggest: React.FC<RemoteAutosuggestProps>;
export default RemoteAutosuggest;
