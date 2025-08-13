"use client";

import { useState } from 'react';

export function LimiteDeCaracteres() {
	const min = 0;
	const max = 200;
	const step = 10;

	const [valor, setValor] = useState(30);
	const pct = ((valor - min) / (max - min)) * 100;

	return (
		<label className='flex flex-col gap-2'>
			<span className='text-[14px] font-bold'>Limite de Caracteres</span>

			<input
				type='range'
				min={min}
				max={max}
				step={step}
				value={valor}
				onChange={(e) => setValor(e.currentTarget.valueAsNumber)}
				aria-valuemin={min}
				aria-valuemax={max}
				aria-valuenow={valor}
				className='
          w-full h-2 rounded-full appearance-none
          focus:outline-none focus:ring-2 focus:ring-blue-500
          bg-slate-100
          /* thumb (Chrome/Edge/Safari) */
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-white
          [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-blue-700
          [&::-webkit-slider-thumb]:shadow
          /* Firefox */
          [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4
          [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:bg-white
          [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-blue-700
          [&::-moz-range-track]:h-2 [&::-moz-range-track]:bg-transparent
        '
				/* azul até o valor atual; cinza depois */
				style={{
					background: `linear-gradient(to right, #1e3a8a 0%, #1e3a8a ${pct}%, #f1f5f9 ${pct}%, #f1f5f9 100%)`,
				}}
			/>

			<span className='text-xs text-gray-500'>
				Limite atual: {valor} caracteres
			</span>
		</label>
	);
}
