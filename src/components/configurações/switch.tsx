type SwitchProps = {
	checked: boolean;
	onCheckedChange: (checked: boolean) => void;
	disabled?: boolean;
};

export function Switch({ checked, onCheckedChange, disabled }: SwitchProps) {
	return (
		<label
			className={`relative inline-flex items-center ${
				disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'
			}`}>
			{/* input acessível */}
			<input
				type='checkbox'
				className='peer sr-only'
				checked={checked}
				onChange={(e) => onCheckedChange(e.target.checked)}
				disabled={disabled}
				aria-label='Ativar/desativar'
			/>

			{/* trilho */}
			<span
				className='
          block w-12 h-6 rounded-full
          bg-gray-300 peer-checked:bg-blue-800
          transition-colors
          peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500
        '
			/>

			{/* bolinha */}
			<span
				className='
          pointer-events-none absolute left-0.5 top-0.5
          w-5 h-5 rounded-full bg-white shadow
          transition-transform peer-checked:translate-x-6
        '
			/>
		</label>
	);
}
