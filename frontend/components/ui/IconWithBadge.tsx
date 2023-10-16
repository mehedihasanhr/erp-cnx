import { Icon } from '@/assets/Icon/Icon';

export default function IconWithBadge({
    icon,
    className,
    count,
    onClick,
}: {
    icon: string;
    className: string;
    count: number;
    onClick?: () => void;
}) {
    return (
        <div className="relative">
            <Icon icon={icon} className={className} />
            {count > 20 && (
                <span className="absolute animate-ping -right-2 -top-2 bg-red-400 h-[20px] w-[20px] rounded-full"></span>
            )}
            <span className="absolute -right-2 -top-2 bg-red-600 h-[20px] w-[20px] rounded-full flex justify-center items-center text-white text-[12px]">
                {count > 20 ? <span className="text-[10px]">20+</span> : count}
            </span>
            <span onClick={onClick} className="h-full w-full absolute top-0 left-0 cursor-pointer"></span>
        </div>
    );
}
