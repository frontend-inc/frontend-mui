import React from 'react';
import { TypographyVariantsType } from '../../../types';
type HeadingProps = {
    label?: string;
    title?: string;
    description?: string;
    textAlign?: 'left' | 'center';
    textVariant?: TypographyVariantsType;
};
declare const Heading: React.FC<HeadingProps>;
export default Heading;
