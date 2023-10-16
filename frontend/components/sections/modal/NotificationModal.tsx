import { Icon } from '@/assets/Icon/Icon';
import Toggle from '@/components/ui/Switch';

import Image from 'next/image';
import React from 'react';

export default function NotificationModal() {
    const [enabled, setEnabled] = React.useState<boolean>(false);
    return (
        <div className="w-[600px] mt-1 rounded-md border bg-white">
            <div className="mx-5 my-5">
                {/* notification header  */}
                <div className="flex justify-between items-center border-b pb-5 mb-2">
                    <div>
                        <h3 className="text-xl font-bold">Notifications</h3>
                    </div>
                    <div className="flex items-center">
                        <span className="me-2 text-sm">Only show unread</span>

                        <div className="me-5 mt-1">
                            <Toggle enabled={enabled} setEnabled={setEnabled} />
                        </div>

                        <span className="cursor-pointer">
                            <Icon icon="expand" className="h-6 w-6 fill-slate-500" />
                        </span>
                    </div>
                </div>

                {/* latest and mark all as read */}
                <div className="flex justify-between items-center">
                    <h4 className="text-sm">Latest</h4>
                    <h4 className="text-sm cursor-pointer">Mark all as read</h4>
                </div>

                <div className="max-h-[600px] cnx__scrollbar_container overflow-auto pe-3">
                    {/* today's notification start */}
                    <div>
                        <div className="mt-3 mb-2">
                            <h3 className="text-lg font-semibold">Today</h3>
                        </div>
                        {/* single notifications */}
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <div className="h-[70px] w-[70px] mt-0.5 relative">
                                    <Image className="rounded-[17px]" src="/joy.jpg" alt="img" width={60} height={60} />
                                    <span className="absolute -top-0.5 -left-0.5 h-3 w-3 border-2 border-white bg-red-600 rounded-full"></span>
                                </div>
                                <div>
                                    <p className="text-sm">
                                        <span className="font-semibold me-1">John Doe</span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius mollitia, commodi
                                        illo nam veniam soluta?
                                    </p>
                                </div>
                            </div>
                            <div className="w-40 text-end">
                                <p className="text-sm">9.40 am</p>
                            </div>
                        </div>
                        {/* single notifications */}
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <div className="h-[70px] w-[70px] mt-0.5 relative">
                                    <Image className="rounded-[17px]" src="/joy.jpg" alt="img" width={60} height={60} />
                                    <span className="absolute -top-0.5 -left-0.5 h-3 w-3 border-2 border-white bg-red-600 rounded-full"></span>
                                </div>
                                <div>
                                    <p className="text-sm">
                                        <span className="font-semibold me-1">John Doe</span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius mollitia, commodi
                                        illo nam veniam soluta?
                                    </p>
                                </div>
                            </div>
                            <div className="w-40 text-end">
                                <p className="text-sm">9.40 am</p>
                            </div>
                        </div>
                        {/* single notifications */}
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <div className="h-[70px] w-[70px] mt-0.5 relative">
                                    <Image className="rounded-[17px]" src="/joy.jpg" alt="img" width={60} height={60} />
                                    <span className="absolute -top-0.5 -left-0.5 h-3 w-3 border-2 border-white bg-red-600 rounded-full"></span>
                                </div>
                                <div>
                                    <p className="text-sm">
                                        <span className="font-semibold me-1">John Doe</span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius mollitia, commodi
                                        illo nam veniam soluta?
                                    </p>
                                </div>
                            </div>
                            <div className="w-40 text-end">
                                <p className="text-sm">9.40 am</p>
                            </div>
                        </div>
                        {/* single notifications */}
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <div className="h-[70px] w-[70px] mt-0.5 relative">
                                    <Image className="rounded-[17px]" src="/joy.jpg" alt="img" width={60} height={60} />
                                    <span className="absolute -top-0.5 -left-0.5 h-3 w-3 border-2 border-white bg-red-600 rounded-full"></span>
                                </div>
                                <div>
                                    <p className="text-sm">
                                        <span className="font-semibold me-1">John Doe</span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius mollitia, commodi
                                        illo nam veniam soluta?
                                    </p>
                                </div>
                            </div>
                            <div className="w-40 text-end">
                                <p className="text-sm">9.40 am</p>
                            </div>
                        </div>
                    </div>
                    {/* today's notification end */}

                    {/* yesterday's notification start */}
                    <div>
                        <div className="mt-3 mb-2">
                            <h3 className="text-lg font-semibold">Yesterday</h3>
                        </div>
                        {/* single notifications */}
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <div className="h-[70px] w-[70px] mt-0.5 relative">
                                    <Image className="rounded-[17px]" src="/joy.jpg" alt="img" width={60} height={60} />
                                    <span className="absolute -top-0.5 -left-0.5 h-3 w-3 border-2 border-white bg-red-600 rounded-full"></span>
                                </div>
                                <div>
                                    <p className="text-sm">
                                        <span className="font-semibold me-1">John Doe</span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius mollitia, commodi
                                        illo nam veniam soluta?
                                    </p>
                                </div>
                            </div>
                            <div className="w-40 text-end">
                                <p className="text-sm">9.40 am</p>
                            </div>
                        </div>
                        {/* single notifications */}
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <div className="h-[70px] w-[70px] mt-0.5 relative">
                                    <Image className="rounded-[17px]" src="/joy.jpg" alt="img" width={60} height={60} />
                                    <span className="absolute -top-0.5 -left-0.5 h-3 w-3 border-2 border-white bg-red-600 rounded-full"></span>
                                </div>
                                <div>
                                    <p className="text-sm">
                                        <span className="font-semibold me-1">John Doe</span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius mollitia, commodi
                                        illo nam veniam soluta?
                                    </p>
                                </div>
                            </div>
                            <div className="w-40 text-end">
                                <p className="text-sm">9.40 am</p>
                            </div>
                        </div>
                        {/* single notifications */}
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <div className="h-[70px] w-[70px] mt-0.5 relative">
                                    <Image className="rounded-[17px]" src="/joy.jpg" alt="img" width={60} height={60} />
                                    <span className="absolute -top-0.5 -left-0.5 h-3 w-3 border-2 border-white bg-red-600 rounded-full"></span>
                                </div>
                                <div>
                                    <p className="text-sm">
                                        <span className="font-semibold me-1">John Doe</span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius mollitia, commodi
                                        illo nam veniam soluta?
                                    </p>
                                </div>
                            </div>
                            <div className="w-40 text-end">
                                <p className="text-sm">9.40 am</p>
                            </div>
                        </div>
                        {/* single notifications */}
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <div className="h-[70px] w-[70px] mt-0.5 relative">
                                    <Image className="rounded-[17px]" src="/joy.jpg" alt="img" width={60} height={60} />
                                    <span className="absolute -top-0.5 -left-0.5 h-3 w-3 border-2 border-white bg-red-600 rounded-full"></span>
                                </div>
                                <div>
                                    <p className="text-sm">
                                        <span className="font-semibold me-1">John Doe</span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius mollitia, commodi
                                        illo nam veniam soluta?
                                    </p>
                                </div>
                            </div>
                            <div className="w-40 text-end">
                                <p className="text-sm">9.40 am</p>
                            </div>
                        </div>
                    </div>
                    {/* yesterday's notification end */}

                    {/* today's notification start */}
                    <div>
                        <div className="mt-3 mb-2">
                            <h3 className="text-lg font-semibold">7 October, 2023</h3>
                        </div>
                        {/* single notifications */}
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <div className="h-[70px] w-[70px] mt-0.5 relative">
                                    <Image className="rounded-[17px]" src="/joy.jpg" alt="img" width={60} height={60} />
                                    <span className="absolute -top-0.5 -left-0.5 h-3 w-3 border-2 border-white bg-red-600 rounded-full"></span>
                                </div>
                                <div>
                                    <p className="text-sm">
                                        <span className="font-semibold me-1">John Doe</span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius mollitia, commodi
                                        illo nam veniam soluta?
                                    </p>
                                </div>
                            </div>
                            <div className="w-40 text-end">
                                <p className="text-sm">9.40 am</p>
                            </div>
                        </div>
                        {/* single notifications */}
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <div className="h-[70px] w-[70px] mt-0.5 relative">
                                    <Image className="rounded-[17px]" src="/joy.jpg" alt="img" width={60} height={60} />
                                    <span className="absolute -top-0.5 -left-0.5 h-3 w-3 border-2 border-white bg-red-600 rounded-full"></span>
                                </div>
                                <div>
                                    <p className="text-sm">
                                        <span className="font-semibold me-1">John Doe</span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius mollitia, commodi
                                        illo nam veniam soluta?
                                    </p>
                                </div>
                            </div>
                            <div className="w-40 text-end">
                                <p className="text-sm">9.40 am</p>
                            </div>
                        </div>
                        {/* single notifications */}
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <div className="h-[70px] w-[70px] mt-0.5 relative">
                                    <Image className="rounded-[17px]" src="/joy.jpg" alt="img" width={60} height={60} />
                                    <span className="absolute -top-0.5 -left-0.5 h-3 w-3 border-2 border-white bg-red-600 rounded-full"></span>
                                </div>
                                <div>
                                    <p className="text-sm">
                                        <span className="font-semibold me-1">John Doe</span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius mollitia, commodi
                                        illo nam veniam soluta?
                                    </p>
                                </div>
                            </div>
                            <div className="w-40 text-end">
                                <p className="text-sm">9.40 am</p>
                            </div>
                        </div>
                        {/* single notifications */}
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <div className="h-[70px] w-[70px] mt-0.5 relative">
                                    <Image className="rounded-[17px]" src="/joy.jpg" alt="img" width={60} height={60} />
                                    <span className="absolute -top-0.5 -left-0.5 h-3 w-3 border-2 border-white bg-red-600 rounded-full"></span>
                                </div>
                                <div>
                                    <p className="text-sm">
                                        <span className="font-semibold me-1">John Doe</span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius mollitia, commodi
                                        illo nam veniam soluta?
                                    </p>
                                </div>
                            </div>
                            <div className="w-40 text-end">
                                <p className="text-sm">9.40 am</p>
                            </div>
                        </div>
                    </div>
                    {/* today's notification end */}

                    {/* today's notification start */}
                    <div>
                        <div className="mt-3 mb-2">
                            <h3 className="text-lg font-semibold">6 October, 2023</h3>
                        </div>
                        {/* single notifications */}
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <div className="h-[70px] w-[70px] mt-0.5 relative">
                                    <Image className="rounded-[17px]" src="/joy.jpg" alt="img" width={60} height={60} />
                                    <span className="absolute -top-0.5 -left-0.5 h-3 w-3 border-2 border-white bg-red-600 rounded-full"></span>
                                </div>
                                <div>
                                    <p className="text-sm">
                                        <span className="font-semibold me-1">John Doe</span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius mollitia, commodi
                                        illo nam veniam soluta?
                                    </p>
                                </div>
                            </div>
                            <div className="w-40 text-end">
                                <p className="text-sm">9.40 am</p>
                            </div>
                        </div>
                        {/* single notifications */}
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <div className="h-[70px] w-[70px] mt-0.5 relative">
                                    <Image className="rounded-[17px]" src="/joy.jpg" alt="img" width={60} height={60} />
                                    <span className="absolute -top-0.5 -left-0.5 h-3 w-3 border-2 border-white bg-red-600 rounded-full"></span>
                                </div>
                                <div>
                                    <p className="text-sm">
                                        <span className="font-semibold me-1">John Doe</span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius mollitia, commodi
                                        illo nam veniam soluta?
                                    </p>
                                </div>
                            </div>
                            <div className="w-40 text-end">
                                <p className="text-sm">9.40 am</p>
                            </div>
                        </div>
                        {/* single notifications */}
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <div className="h-[70px] w-[70px] mt-0.5 relative">
                                    <Image className="rounded-[17px]" src="/joy.jpg" alt="img" width={60} height={60} />
                                    <span className="absolute -top-0.5 -left-0.5 h-3 w-3 border-2 border-white bg-red-600 rounded-full"></span>
                                </div>
                                <div>
                                    <p className="text-sm">
                                        <span className="font-semibold me-1">John Doe</span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius mollitia, commodi
                                        illo nam veniam soluta?
                                    </p>
                                </div>
                            </div>
                            <div className="w-40 text-end">
                                <p className="text-sm">9.40 am</p>
                            </div>
                        </div>
                        {/* single notifications */}
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <div className="h-[70px] w-[70px] mt-0.5 relative">
                                    <Image className="rounded-[17px]" src="/joy.jpg" alt="img" width={60} height={60} />
                                    <span className="absolute -top-0.5 -left-0.5 h-3 w-3 border-2 border-white bg-red-600 rounded-full"></span>
                                </div>
                                <div>
                                    <p className="text-sm">
                                        <span className="font-semibold me-1">John Doe</span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius mollitia, commodi
                                        illo nam veniam soluta?
                                    </p>
                                </div>
                            </div>
                            <div className="w-40 text-end">
                                <p className="text-sm">9.40 am</p>
                            </div>
                        </div>
                    </div>
                    {/* today's notification end */}
                </div>
            </div>
        </div>
    );
}
