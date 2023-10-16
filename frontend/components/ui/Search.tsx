import { Icon } from '@/assets/Icon/Icon';
import { SearchTypes } from '@/type';

export const Search = ({ className, handleSubmit, searchText, setSearchText, ...props }: SearchTypes) => {
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e, searchText)}>
                <div className="relative mx-3">
                    <input
                        className={`border outline-none rounded text-gray-500 focus:border-gray-300 px-3 py-1.5 ${className}`}
                        type="text"
                        onChange={(e) => setSearchText(e.target.value)}
                        value={searchText}
                        placeholder="Search..."
                        {...props}
                    />

                    <label
                        htmlFor="search-btn"
                        className={`h-full px-3 absolute top-0 right-0 cursor-pointer flex justify-center items-center fill-gray-400 hover:fill-gray-500`}
                    >
                        <Icon icon="search" className="h-5 w-5" />
                    </label>

                    <input className="hidden" id="search-btn" type="submit" value="submit" />
                </div>
            </form>
        </div>
    );
};
