'use client';

import { useState } from "react";
import StatusSelect from '../../../components/select';

const OPTIONS = [
	{ label: 'Arial', value: 'arial' },
	{ label: 'Helvetica', value: 'helvetica' },
	{ label: 'Roboto', value: 'roboto' },
	{ label: 'Open Sans', value: 'open sans' },
];

const OPTIONS2 = [
	{ label: 'Pequeno (14px)', value: 'pequeno' },
	{ label: 'Médio (16px)', value: 'medio' },
	{ label: 'Grande (20px)', value: 'grande' },
	{ label: 'Extra Grande (24px)', value: 'extraGrande' },
];

export default function Estilo () {
  const [color, setColor] = useState("#1E40AF")
	return (
		<div className='flex flex-col gap-3'>
			<div className='flex gap-4 mt-3'>
				<StatusSelect
					name='fonte'
					label='Fonte'
					options={OPTIONS}
					defaultValue='arial'
				/>
				<StatusSelect
					name='tamanhoDaFonte'
					label='Tamanho da Fonte'
					options={OPTIONS2}
					defaultValue='pequeno'
				/>
			</div>

			<label className='flex flex-col gap-2'>
				<span className='text-[14px] font-bold'>Cor do Texto</span>
				<div className='flex items-center gap-3'>
					<input
						type='color'
						value={color}
						onChange={(e) => setColor(e.target.value)}
						className='w-12 h-10 border border-gray-300 p-1 rounded-lg'
					/>
					<input
						type='text'
						value={color}
						onChange={(e) => setColor(e.target.value)}
						className='w-full text-[14px] border border-gray-300 py-2 pl-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500'
					/>
				</div>
			</label>
		</div>
	);
}
