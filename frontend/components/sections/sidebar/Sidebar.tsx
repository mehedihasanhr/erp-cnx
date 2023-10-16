import { Icon } from '@/assets/Icon/Icon';
import { useCollapse } from '@/context/CollapseProvider';

export default function Sidebar() {
    const { collapse, setCollapse } = useCollapse();

    const list = [
        {
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
        { icon: 'home', title: 'Home', url: '/' },
        { icon: 'home', title: 'Work', url: '/' },
        { icon: 'home', title: 'Messages', url: '/' },
    ];

    const handleCollapse = (item: string) => {
        setCollapse({ selected: item, isSidebarOpen: true });
        localStorage.setItem('isCollapsed', JSON.stringify({ selected: item, isSidebarOpen: true }));
    };

    return (
        <section className={`transition-all cnx__custom_height relative group`}>
            {/* sidebar starts here   */}
            <div>
                {/* sidebar body */}
                <div className="">
                    <div className="px-5 py-5 cnx__custom_height">
                        <div className="">
                            {list.map((item, index) => (
                                <div
                                    key={index}
                                    className={`p-1.5 mb-2 cursor-pointer rounded hover:bg-green-100 ${
                                        collapse.selected === item.title ? 'bg-green-100' : 'bg-white'
                                    }`}
                                    onClick={() => handleCollapse(item.title)}
                                >
                                    <Icon icon={item.icon} className="h-7 w-7 fill-slate-500" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
