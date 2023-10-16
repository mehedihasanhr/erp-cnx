'use client';
import { Icon } from '@/assets/Icon/Icon';
import { InputTypes } from '@/type';
import { useState } from 'react';

export const Input = ({ className, type, id, onChange, required, showIcon, value, placeholder }: InputTypes) => {
    const [isShown, setIsShown] = useState<boolean>(false);

    return (
        <div className="relative">
            <input
                onChange={(e) => onChange && onChange(e)}
                className={`border outline-none rounded px-3 py-2 ${className}`}
                type={isShown ? 'text' : type}
                name={id}
                id={id}
                required={required}
                value={value}
                placeholder={placeholder}
            />
            {showIcon && (
                <div className="absolute top-2.5 right-3 cursor-pointer" onClick={() => setIsShown(!isShown)}>
                    <Icon icon={isShown ? 'eye-crossed' : 'eye'} className="h-5 w-5 fill-gray-400" />
                </div>
            )}
        </div>
    );
};
