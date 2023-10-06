// global types declare here...

import { ChangeEvent } from 'react';

export interface InputTypes {
    className: string;
    id: string;
    type: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean | false;
    showIcon?: boolean | false;
    value?: string | number;
}

export interface LabelTypes {
    htmlFor: string;
    children: string;
    className?: string;
    required?: boolean;
}

export interface IconTypes {
    className?: string;
    icon: string;
}
