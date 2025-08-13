'use client';
import { useEffect, useState } from 'react';

type Props = { valorExterno?: number, text: string }; // pode vir do servidor/props/store

export function VigenciaInput({ valorExterno, text }: Props) {
	const [valor, setValor] = useState<number | ''>('');

	// quando a fonte externa mudar, atualiza o input
	useEffect(() => {
		if (typeof valorExterno === 'number') setValor(valorExterno);
	}, [valorExterno]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const n = e.currentTarget.valueAsNumber;
		setValor(Number.isNaN(n) ? '' : Math.max(0, n)); // respeita min=0
	};

	return (
		<label className='flex flex-col'>
			<span className='text-[14px] font-bold'>{text}</span>
			<input
				type='number'
				min={0}
				value={valor} // mostra o número vindo de fora, mas editável
				onChange={handleChange}
				className='border border-gray-300 rounded-xl py-2 px-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500'
			/>
		</label>
	);
}
