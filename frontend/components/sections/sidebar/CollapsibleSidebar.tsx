import { Icon } from '@/assets/Icon/Icon';
import { SearchWithOnChange } from '@/components/ui/SearchWithOnChange';
import { useCollapse } from '@/context/CollapseProvider';
import React from 'react';

export default function CollapsibleSidebar() {
    const { collapse, setCollapse } = useCollapse();
    const [isOpen, setIsOpen] = React.useState<boolean>(true);
    const [menuId, setMenuId] = React.useState<number | null>(null);
    const list = [
        {
            id: 1,
            icon: 'home',
            title: 'Dashboard',
            url: '/',
            subDropdown: [
                { icon: 'home', title: 'Dashboard', url: '/' },
                { icon: 'home', title: 'Dashboard', url: '/' },
                { icon: 'home', title: 'Dashboard', url: '/' },
                { icon: 'home', title: 'Dashboard', url: '/' },
                { icon: 'home', title: 'Dashboard', url: '/' },
                { icon: 'home', title: 'Dashboard', url: '/' },
            ],
        },
        { id: 2, icon: 'home', title: 'Home', url: '/' },
        { id: 3, icon: 'home', title: 'Dashboard', url: '/' },
        { id: 4, icon: 'home', title: 'Dashboard', url: '/' },
        { id: 5, icon: 'home', title: 'Dashboard', url: '/' },
        { id: 6, icon: 'home', title: 'Dashboard', url: '/' },
        { id: 7, icon: 'home', title: 'Dashboard', url: '/' },
        { id: 8, icon: 'home', title: 'Dashboard', url: '/' },
        { id: 9, icon: 'home', title: 'Dashboard', url: '/' },
        { id: 10, icon: 'home', title: 'Dashboard', url: '/' },
        { id: 11, icon: 'home', title: 'Dashboard', url: '/' },
    ];

    // handle sidebar closing
    const closeSidebar = () => {
        setCollapse({ ...collapse, isSidebarOpen: false });
        localStorage.setItem('isCollapsed', JSON.stringify({ ...collapse, isSidebarOpen: false }));
    };

    // search with onchange event
    const handleSearchOnChange = (searchText: string) => {};

    // handle clicking on side menu
    const handleMenuClick = (id: number): void => {
        if (id === menuId) {
            setIsOpen(false);
            setMenuId(null);
        } else {
            setIsOpen(true);
            setMenuId(id);
        }
    };

    return (
        <section
            className={`${
                collapse.isSidebarOpen ? 'w-[300px]' : 'w-0'
            } border-r transition-all cnx__custom_height relative group`}
        >
            {/* close icon to collapse sidebar start */}
            <div
                className={`border border-gray-200 opacity-0 invisible ${
                    collapse?.isSidebarOpen
                        ? 'group-hover:opacity-100  group-hover:visible transition-all absolute top-[50%] -right-[20px] p-1 cursor-pointer rounded-full bg-white shadow-lg'
                        : ''
                }`}
                onClick={closeSidebar}
            >
                <Icon
                    icon="arrow-right"
                    className={`h-7 w-7 fill-gray-500 ${collapse?.isSidebarOpen ? 'rotate-180' : 'rotate-0'}`}
                />
            </div>
            {/* close icon to collapse sidebar end */}

            {/* sidebar start */}
            <div
                className={`${
                    collapse?.isSidebarOpen
                        ? 'cnx__sidebar_scrollbar overflow-y-scroll overflow-x-hidden cnx__custom_height'
                        : 'hidden'
                }`}
            >
                {/* sidebar body */}
                <div className="mx-5">
                    <div className="">
                        {/* search button with onChange and sticky at top */}
                        <div className="pt-5 pb-2 sticky top-0 bg-white">
                            <SearchWithOnChange className="w-full" handleSearchOnChange={handleSearchOnChange} />
                        </div>
                        {/* sidebar pages list with sub list start */}
                        <div>
                            {list.map((item, index) => (
                                <div key={index}>
                                    <div
                                        className={`flex items-center justify-between px-3 py-1.5 rounded-md hover:bg-green-100 cursor-pointer ${
                                            item.id === menuId ? 'bg-green-100' : ''
                                        }`}
                                        onClick={() => handleMenuClick(item.id)}
                                    >
                                        <div className="flex items-center gap-2">
                                            <div>
                                                <Icon icon={item.icon} className="h-6 w-6 fill-gray-500" />
                                            </div>

                                            <div>
                                                <h4 className="text-gray-500 font-medium">{item.title}</h4>
                                            </div>
                                        </div>

                                        {/* show dropdown icon if contain sub menu */}
                                        {item?.subDropdown && (
                                            <div>
                                                <Icon icon="arrow-right" className="h-6 w-6 fill-gray-500" />
                                            </div>
                                        )}
                                    </div>
                                    {/* suv menu items start  */}
                                    {isOpen &&
                                        menuId === item.id &&
                                        item?.subDropdown &&
                                        item.subDropdown.map((d, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-between px-3 ms-5 py-1.5 rounded-md hover:bg-green-100 cursor-pointer"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <div>
                                                        <Icon icon={item.icon} className="h-6 w-6 fill-gray-500" />
                                                    </div>

                                                    <div>
                                                        <h4 className="text-gray-500 font-medium">{item.title}</h4>
                                                    </div>
                                                </div>

                                                {/* show dropdown icon if contain sub menu */}
                                                {/* {d && (
                                                    <div>
                                                        <Icon icon="arrow-right" className="h-6 w-6 fill-gray-500" />
                                                    </div>
                                                )} */}
                                            </div>
                                        ))}
                                    {/* suv menu items end  */}
                                </div>
                            ))}
                        </div>
                        {/* sidebar pages list with sub list end */}
                    </div>
                </div>
            </div>
            {/* sidebar end */}
        </section>
    );
}
