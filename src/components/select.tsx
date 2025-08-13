'use client';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Fragment, useId, useMemo, useState } from 'react';

type Option = { label: string; value: string };

type Props = {
	name?: string; // nome do campo (para enviar no form)
	label?: string;
	options: Option[];
	defaultValue?: string;
	placeholder?: string;
	className?: string;
};

export default function StatusSelect({
	name,
	label,
	options,
	defaultValue,
	placeholder = 'Selecione...',
	className = '',
}: Props) {
	const initial = useMemo(
		() => options.find((o) => o.value === defaultValue) ?? null,
		[options, defaultValue]
	);
	const [selected, setSelected] = useState<Option | null>(initial);
	const id = useId();

	return (
		<div className={`w-full ${className}`}>
			<label
				htmlFor={id}
				className='mb-1 block text-sm font-bold text-gray-800'>
				{label}
			</label>

			{/* hidden para o form */}
			<input
				type='hidden'
				name={ name }
				value={selected?.value ?? defaultValue}
			/>

			<Listbox
				value={selected}
				onChange={setSelected}>
				<div className='relative w-full'>
					{/* Botão (fechado) */}
					<Listbox.Button
						id={id}
						className='relative w-full cursor-default rounded-xl border border-gray-300 bg-white py-2 pl-3 pr-10 text-left text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500'>
						<span
							className={`block truncate ${!selected ? 'text-gray-400' : ''}`}>
							{selected?.label ?? placeholder}
						</span>
						<span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
							<ChevronUpDownIcon className='h-5 w-5 text-gray-500' />
						</span>
					</Listbox.Button>

					{/* Dropdown (aberto) */}
					<Transition
						as={Fragment}
						enter='transition ease-out duration-100'
						enterFrom='opacity-0 translate-y-1'
						enterTo='opacity-100 translate-y-0'
						leave='transition ease-in duration-75'
						leaveFrom='opacity-100 translate-y-0'
						leaveTo='opacity-0 translate-y-1'>
						<Listbox.Options className='absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-xl border border-gray-200 bg-white p-1 text-sm shadow-lg focus:outline-none'>
							{options.map((opt) => (
								<Listbox.Option
									key={opt.value}
									value={opt}
									className={({ active }) =>
										[
											'relative cursor-pointer select-none rounded-lg px-3 py-2',
											active ? 'bg-blue-50' : 'bg-white',
										].join(' ')
									}>
									{({ selected: isSelected }) => (
										<>
											<span
												className={[
													'block truncate',
													isSelected
														? 'font-medium text-blue-600'
														: 'font-normal text-gray-800',
												].join(' ')}>
												{opt.label}
											</span>
											{isSelected && (
												<span className='absolute inset-y-0 right-2 flex items-center'>
													<CheckIcon className='h-5 w-5 text-blue-600' />
												</span>
											)}
										</>
									)}
								</Listbox.Option>
							))}
							{options.length === 0 && (
								<div className='rounded-lg px-3 py-2 text-gray-500'>
									Nenhuma opção
								</div>
							)}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	);
}
