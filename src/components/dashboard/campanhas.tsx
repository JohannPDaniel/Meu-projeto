import { LucideIcon } from 'lucide-react';

interface CampanhasProps {
	icon: LucideIcon;
	title: string;
	paragraphy: string;
	status: 'Ativa' | 'Pendente';
}

export const Campanhas = ({
	icon: Icon,
	title,
	paragraphy,
	status,
}: CampanhasProps) => {
	// Mapeando estilos por status
	const statusStyles: Record<typeof status, string> = {
		Ativa: 'text-white bg-green-500',
		Pendente: 'text-orange-500 border border-orange-500 bg-transparent',
	};

	return (
		<div className='flex items-center justify-between border border-gray-300 rounded-xl p-4'>
			<div className='flex items-center gap-3'>
				<div>
					<Icon
						className={`w-5 h-5 ${
							status === 'Ativa' ? 'text-green-500' : 'text-orange-500'
						}`}
					/>
				</div>

				<div>
					<h3 className='text-[12px] font-bold'>{title}</h3>
					<p className='text-[12px] text-gray-400'>{paragraphy}</p>
				</div>
			</div>
			<div>
				<p
					className={`text-[13px] font-bold px-2 py-0 rounded-xl ${statusStyles[status]}`}>
					{status}
				</p>
			</div>
		</div>
	);
};
