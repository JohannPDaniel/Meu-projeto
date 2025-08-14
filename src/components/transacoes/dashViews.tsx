import { LucideIcon } from 'lucide-react';

interface DashViewsProsps {
	title: string;
	icon: LucideIcon;
	paragraphy: string;
}

export const DashViews = ({
	title,
	icon: Icon,
	paragraphy,
}: DashViewsProsps) => {
	return (
		<div className='flex flex-col gap-3 border border-gray-300 p-6 rounded-xl'>
			<h3 className='text-[14px] text-gray-600 font-bold'>{title}</h3>

			<div className='flex flex-col'>
				<h1 className='text-2xl font-bold'>4</h1>
				<small className='flex items-center gap-2 text-[12px] text-green-500'>
					<Icon
						size={14}
						strokeWidth={2}
						className='text-green-600'
					/>
					{paragraphy}
				</small>
			</div>
		</div>
	);
};
