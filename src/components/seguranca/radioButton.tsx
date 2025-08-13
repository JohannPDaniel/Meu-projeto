interface RadioButtonProps {
    title: string
}
export const RadioButton = ({ title }: RadioButtonProps) => {
	return (
		<label className='flex items-center gap-2 cursor-pointer select-none'>
			<input
				type='checkbox'
				className='peer sr-only'
			/>

			<span
				className='
      relative grid place-items-center w-4.5 h-4.5 rounded-full
      border border-blue-800 bg-white transition-colors
      peer-checked:bg-blue-800
      peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500
      peer-checked:[&>svg]:opacity-100   /* <- mostra o svg quando checado */
    '>
				<svg
					viewBox='0 0 24 24'
					className='w-4.5 h-4.5 text-white opacity-0 transition-opacity duration-150'
					aria-hidden='true'>
					<path
						d='M5 12l4 4L19 6' /* confira se está exatamente assim */
						fill='none'
						stroke='currentColor'
						strokeWidth='3'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</span>

			<span className='text-[14px] font-bold'>{title}</span>
		</label>
	);
};