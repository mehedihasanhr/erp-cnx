import { useCollapse } from '@/context/CollapseProvider';
import Image from 'next/image';
import CollapsibleSidebar from './CollapsibleSidebar';
import Sidebar from './Sidebar';

export default function SidebarContainer() {
    const { collapse } = useCollapse();
    return (
        <div className="flex flex-col">
            <div className={`${collapse.isSidebarOpen ? 'w-[380px]' : 'w-[81px]'} transition-all border-r`}>
                {/* sidebar header  */}
                <div className="py-1.5 border-b">
                    <Image className="h-[60px] w-80 object-fill" src="/Logo-6.svg" alt="img" height={80} width={80} />
                </div>
            </div>
            <div className="flex">
                <Sidebar />
                <CollapsibleSidebar />
            </div>
        </div>
    );
}
