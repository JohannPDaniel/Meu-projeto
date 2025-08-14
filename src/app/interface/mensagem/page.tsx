'use client';

import { useEffect, useMemo, useState } from 'react';
import { LimiteDeCaracteres } from '../../../components/interface/limiteDeCaracteres';

export default function Mensagem() {
	const [limit, setLimit] = useState(10); // controlado pelo range
	const [message, setMessage] = useState(''); // texto digitado

	// Corta o texto se o limite diminuir
	useEffect(() => {
		setMessage((prev) => (prev.length > limit ? prev.slice(0, limit) : prev));
	}, [limit]);

	const count = useMemo(() => message.length, [message]);

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const next = e.currentTarget.value;
		// Corta imediatamente caso ultrapasse
		setMessage(next.length > limit ? next.slice(0, limit) : next);
	};

	return (
		<div className='space-y-3'>
			<label className='flex flex-col gap-2'>
				<span className='text-[14px] font-bold'>Mensagem Principal</span>

				<textarea
					name='message'
					placeholder='Digite a mensagem que aparecerá no terminal'
					rows={3}
					maxLength={limit} // ainda deixo o nativo ativado
					value={message}
					onChange={handleChange} // garante o corte no ato
					className={`
            border p-3 rounded-lg resize-none text-[14px] text-black focus:outline-none
            ${
							count >= limit
								? 'border-red-600 focus:ring-red-600'
								: 'border-gray-300 focus:ring-blue-500'
						}
          `}
				/>
			</label>

			<div className='flex justify-between'>
				<small
					className={`text-[12px] ${
						count >= limit ? 'text-red-600' : 'text-gray-500'
					}`}>
					{count} caracteres
				</small>
				<small className='text-[12px] text-gray-500'>
					Máximo: {limit} caracteres
				</small>
			</div>

			<LimiteDeCaracteres
				value={limit}
				onChange={setLimit}
				min={0}
				max={200}
				step={10}
			/>
		</div>
	);
}
