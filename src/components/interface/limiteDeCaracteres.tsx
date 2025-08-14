'use client';

import { useMemo } from 'react';

interface LimiteDeCaracteresProps {
	value: number;
	onChange: (v: number) => void;
	min?: number;
	max?: number;
	step?: number;
}

export function LimiteDeCaracteres({
	value,
	onChange,
	min = 0,
	max = 200,
	step = 10,
}: LimiteDeCaracteresProps) {
	const pct = useMemo(
		() => ((value - min) / (max - min)) * 100,
		[value, min, max]
	);

	return (
		<label className='flex flex-col gap-2'>
			<span className='text-[14px] font-bold'>Limite de Caracteres</span>

			<input
				type='range'
				min={min}
				max={max}
				step={step}
				value={value}
				onChange={(e) => onChange(e.currentTarget.valueAsNumber)}
				aria-valuemin={min}
				aria-valuemax={max}
				aria-valuenow={value}
				className='
          w-full h-2 rounded-full appearance-none bg-slate-100
          /* Chrome/Edge/Safari thumb */
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
				style={{
					// preenchido azul até o valor atual; depois cinza
					background: `linear-gradient(to right, #1e3a8a 0%, #1e3a8a ${pct}%, #f1f5f9 ${pct}%, #f1f5f9 100%)`,
				}}
			/>

			<span className='text-xs text-gray-500'>
				Limite atual: {value} caracteres
			</span>
		</label>
	);
}
