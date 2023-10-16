// global types declare here...

import { ChangeEvent, FormEvent } from 'react';

export interface InputTypes {
    className: string;
    id: string;
    type: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean | false;
    showIcon?: boolean | false;
    value?: string | number;
    placeholder?: string;
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

export interface SearchTypes {
    className?: string;
    searchText: string;
    setSearchText: (searchText: string) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>, searchText: string) => void;
}
export interface SearchWithOnChangeTypes {
    className?: string;
    handleSearchOnChange: (searchText: string) => void;
}
