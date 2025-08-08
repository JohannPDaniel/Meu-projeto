import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface MenuMobileProps {
    icon: LucideIcon,
    href: string,
    isActive: boolean,
}
export const MenuMobile = ({ icon: Icon, href, isActive }: MenuMobileProps) => {
	return (
		<Link
			href={href}
			className={`${
				isActive ? 'bg-white' : 'bg-gray-700'
			} flex items-center justify-center h-10 p-2`}>
			<Icon className={`${isActive ? 'text-black' : 'text-white'} w-5 h-5 `} />
		</Link>
	);
};