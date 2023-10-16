import IconWithBadge from '@/components/ui/IconWithBadge';
import Image from 'next/image';
import React from 'react';
import ModalProvider from '../modal/ModalProvider';
import NotificationModal from '../modal/NotificationModal';
import UserModal from '../modal/UserModal';
import ChatSidebar from '../sidebar/ChatSidebar';

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const sidebarRef = React.useRef<HTMLDivElement | null>(null);

    // detect the outside click and close the side chat bar
    React.useEffect(() => {
        // add event listener to document to detect clicks outside of navbar
        const handleOutsideClick = (event: any): any => {
            if (sidebarRef.current && !sidebarRef.current.contains(event?.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [sidebarRef]);

    return (
        <nav className="sticky top-0 left-0">
            <div className="relative bg-white">
                <div className="flex justify-between items-center py-3 border-b px-8">
                    <div>klasjdflk</div>
                    <div className="flex items-center">
                        <div className="flex items-center py-1 me-5 border-e border-[#009965] pe-5 gap-5">
                            <div>
                                <IconWithBadge
                                    onClick={() => !isOpen && setIsOpen(true)}
                                    icon="message"
                                    className="h-6 w-6 cursor-pointer fill-gray-500"
                                    count={25}
                                />
                            </div>
                            <div className="cnx__user_icon_div relative">
                                <IconWithBadge
                                    icon="bell"
                                    className="h-6 w-6 cursor-pointer fill-gray-500"
                                    count={17}
                                />
                                <ModalProvider>
                                    <NotificationModal />
                                </ModalProvider>
                            </div>
                        </div>
                        <div className="flex items-center cursor-pointer gap-2 relative cnx__user_icon_div">
                            <div>
                                <Image
                                    src="/celebration.png"
                                    className="h-10 w-10 rounded-full border border-[#009965]"
                                    alt="img"
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium">Joy Debnath</h3>
                                <h5 className="text-sm text-slate-600">Frontend Developer</h5>
                            </div>
                            <ModalProvider>
                                <UserModal />
                            </ModalProvider>
                        </div>
                    </div>
                </div>

                {/* side chat bar start here  */}
                <div
                    ref={sidebarRef}
                    className={`absolute top-full transition-all ease-in-out duration-500 pe-2 ${
                        isOpen ? 'right-0' : '-right-[400px]'
                    }`}
                >
                    <ChatSidebar />
                </div>
            </div>
        </nav>
    );
}
