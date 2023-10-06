import { LabelTypes } from '@/type';

export default function Label({ children, htmlFor, required = false, className }: LabelTypes) {
    return (
        <label
            className={`text-sm block ${className}  ${
                required ? 'after:content-["*"] after:text-red-600 after:ms-1' : ''
            }`}
            htmlFor={htmlFor}
        >
            {children}
        </label>
    );
}
