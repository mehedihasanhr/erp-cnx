import { Icon } from '@/assets/Icon/Icon';
import { Input } from '@/components/ui/Input';
import { useChat } from '@/context/ChatProvider';
import Image from 'next/image';
import React from 'react';

export default function ChatSidebar() {
    const [searchText, setSearchText] = React.useState<string>('');
    const { setChatId } = useChat();
    return (
        <div className="border-l w-[360px] cnx__custom_height overflow-x-hidden overflow-y-scroll cnx__scrollbar_container">
            <div className="mx-2">
                {/* chat sidebar header  */}
                <div className="flex justify-between items-center my-3">
                    <h3 className="text-xl font-bold">Chats</h3>
                    <Icon icon="expand" className="h-6 w-6" />
                </div>

                {/* search bar here  */}
                <div>
                    <Input
                        className="w-full focus:border-[#bebebe]"
                        id="search"
                        type="text"
                        onChange={(e) => setSearchText(e.target.value)}
                        value={searchText}
                        placeholder="Search messages..."
                    />
                </div>

                {/* messages  */}
                <div className="mt-5">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((d) => (
                        <div
                            key={d}
                            className="flex justify-between items-center gap-2 py-2 cursor-pointer hover:bg-gray-200 rounded-md px-2"
                            onClick={() => setChatId(d)}
                        >
                            <div className="flex items-center gap-2">
                                <div>
                                    <Image
                                        className="w-[50px] h-[50px] rounded-full"
                                        src="/joy.jpg"
                                        alt="image"
                                        height={60}
                                        width={60}
                                    />
                                </div>
                                <div>
                                    <h4 className="font-medium">Md. Mehedi Hasan</h4>

                                    {/* last message with time  */}
                                    <p className="text-[13px] text-slate-500">
                                        <span>Laptop p off hoye gese.</span>
                                        <span className="ms-1">3 h</span>
                                    </p>
                                </div>
                            </div>
                            <div>
                                {/* show if seen  */}
                                <Image
                                    className="w-[15px] h-[15px] rounded-full"
                                    src="/joy.jpg"
                                    alt="image"
                                    height={30}
                                    width={30}
                                />

                                {/* show single tik if send */}
                                {/* show double tik if delivered */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
