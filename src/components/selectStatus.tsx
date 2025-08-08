import { useState } from 'react';

const options = [
	{ value: 'ativo', label: 'Ativo' },
	{ value: 'inativo', label: 'Inativo' },
];

export const SelectStatus = () => {
	const [selected, setSelected] = useState('ativo');
	const [open, setOpen] = useState(false);

	const handleSelect = (value: string) => {
		setSelected(value);
		setOpen(false);
	};

	return (
		<div className='relative w-full'>
			<label
				htmlFor='status'
				className='block text-sm font-bold text-gray-700 mb-1'>
				Status
			</label>

			{/* Select visível customizado */}
			<div
				onClick={() => setOpen(!open)}
				className='bg-white border border-gray-300 rounded-[14px] px-4 py-2 cursor-pointer flex justify-between items-center'>
				<span>{options.find((o) => o.value === selected)?.label}</span>
				<svg
					className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					viewBox='0 0 24 24'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M19 9l-7 7-7-7'
					/>
				</svg>
			</div>

			{/* Lista de opções personalizada */}
			{open && (
				<div className='absolute mt-1 w-full bg-white rounded-lg shadow-md z-10'>
					{options.map((option) => (
						<div
							key={option.value}
							onClick={() => handleSelect(option.value)}
							className={`px-4 py-2 cursor-pointer rounded-lg 
                hover:bg-blue-100 hover:text-blue-600 
                ${
									selected === option.value
										? 'text-blue-600 font-medium'
										: 'text-gray-900'
								}
              `}>
							{option.label}
						</div>
					))}
				</div>
			)}
		</div>
	);
};
