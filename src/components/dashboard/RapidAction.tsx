import { LucideIcon } from 'lucide-react';

interface RapidActionProps {
	icon: LucideIcon;
	text: string;
}
export const RapidAction = ({ icon: Icon, text }: RapidActionProps) => {
	return (
		<div className="flex items-center gap-2 border border-gray-200 px-3 py-2 rounded-xl cursor-pointer hover:bg-blue-100 hover:text-blue-900 hover:shadow-md">
            <Icon className='w-4 h-4' />
            <p className="text-[12px] font-bold">{text}</p>
		</div>
	);
};
