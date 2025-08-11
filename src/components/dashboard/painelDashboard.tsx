import { LucideIcon } from 'lucide-react';

interface PainelDashboardProps {
    icon: LucideIcon;
    colorIcon: string;
    title: string;
    number: string;
	paragraphy1: string;
	paragraphy2: string;
}

export const PainelDashboard = ({
    icon: Icon,
    colorIcon,
    title,
    number,
	paragraphy1,
	paragraphy2,
}: PainelDashboardProps) => {
	return (
		<div className='w-full border border-gray-300 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-75'>
			<div className='flex items-center justify-between'>
				<h3 className='text-[12px] text-gray-500 font-black'>{title}</h3>
				<Icon
					className='w-5 h-5'
					style={{ color: colorIcon }}
				/>
			</div>
			<div>
				<h1 className='text-[25px] font-bold'>{number}</h1>
			</div>
			<div className='flex items-center justify-between'>
				<p className='text-gray-400 text-[11px]'>{paragraphy1}</p>
				<p
					className={`text-[12px] bg-[#21c45d] hover:bg-[#2752af] text-white font-bold px-3 py-0.5 rounded-full`}>
					{paragraphy2}
				</p>
			</div>
		</div>
	);
};
