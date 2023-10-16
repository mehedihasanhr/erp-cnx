import { SearchWithOnChangeTypes } from '@/type';
import React from 'react';

export const SearchWithOnChange = ({ className, handleSearchOnChange, ...props }: SearchWithOnChangeTypes) => {
    const [searchText, setSearchText] = React.useState<string>('');
    handleSearchOnChange(searchText);
    return (
        <div>
            <form>
                <div className="relative">
                    <input
                        className={`border outline-none rounded text-gray-500 focus:border-gray-300 px-3 py-1.5 ${className}`}
                        type="text"
                        onChange={(e) => setSearchText(e.target.value)}
                        value={searchText}
                        placeholder="Search..."
                        {...props}
                    />
                </div>
            </form>
        </div>
    );
};
