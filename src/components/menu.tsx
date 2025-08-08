import { type LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface MenuProps {
	icon: LucideIcon;
	title: string;
	paragraphy: string;
	href: string;
	isActive: boolean;
}

export const Menu = ({
	icon: Icon,
	title,
	paragraphy,
	href,
	isActive,
}: MenuProps ) => {
	return (
		<Link
			href={href}
			prefetch={true}
			className={`group w-full h-12 rounded-[10px] flex items-center cursor-pointer ${
				isActive ? 'bg-[#153C8B] text-white shadow-md' : 'hover:bg-blue-100'
			}`}>
			<div className='p-3'>
				<Icon
					className={`w-4 h-4 ${isActive ? 'text-white' : 'text-black'} ${
						isActive ? '' : 'group-hover:text-blue-700'
					}`}
				/>
			</div>
			<div>
				<h1
					className={`text-[14px] font-bold ${
						isActive ? '' : 'group-hover:text-blue-700'
					}`}>
					{title}
				</h1>
				<p
					className={`text-[12px] ${
						isActive ? 'text-white' : 'text-gray-500'
					} font-medium`}>
					{paragraphy}
				</p>
			</div>
		</Link>
	);
};
