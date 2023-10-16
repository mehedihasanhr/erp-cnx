import { Icon } from '@/assets/Icon/Icon';
import Link from 'next/link';

export default function UserModal() {
    return (
        <div className="w-[200px] mt-1 rounded-md border bg-white">
            <div className="mx-3 my-3">
                <Link href="/">
                    <div className="flex items-center cursor-pointer rounded-md py-1.5 px-3 gap-3 hover:bg-[#009965] fill-gray-500 stroke-gray-500 text-gray-500 text-lg font-medium hover:fill-white hover:stroke-white hover:text-white transition-all ease-in-out">
                        <Icon icon="user" className="h-[18px] w-[18px] " />
                        <h3 className="">Account</h3>
                    </div>
                </Link>
                <Link href="/">
                    <div className="flex items-center cursor-pointer rounded-md py-1.5 px-3 gap-3 hover:bg-[#009965] fill-gray-500 stroke-gray-500 text-gray-500 text-lg font-medium hover:fill-white hover:stroke-white hover:text-white transition-all ease-in-out">
                        <Icon icon="bell" className="h-[18px] w-[18px] " />
                        <h3 className="">Notification</h3>
                    </div>
                </Link>
                <Link href="/">
                    <div className="flex items-center cursor-pointer rounded-md py-1.5 px-3 gap-3 hover:bg-[#009965] fill-gray-500 stroke-gray-500 text-gray-500 text-lg font-medium hover:fill-white hover:stroke-white hover:text-white transition-all ease-in-out">
                        <Icon icon="message" className="h-[18px] w-[18px] " />
                        <h3 className="">Message</h3>
                    </div>
                </Link>
                <Link href="/">
                    <div className="flex items-center cursor-pointer rounded-md py-1.5 px-3 gap-3 hover:bg-[#009965] fill-gray-500 stroke-gray-500 text-gray-500 text-lg font-medium hover:fill-white hover:stroke-white hover:text-white transition-all ease-in-out">
                        <Icon icon="setting" className="h-[18px] w-[18px] " />
                        <h3 className="">Setting</h3>
                    </div>
                </Link>
            </div>
        </div>
    );
}
