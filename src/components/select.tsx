'use client';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Fragment, useEffect, useId, useMemo, useState } from 'react';

export type StatusOption = {
	label: string;
	value: string;
	count?: number;
	meta?: string;
	dividerAfter?: boolean;
};

type Props = {
	name?: string;
	label?: string;
	options: StatusOption[];
	defaultValue?: string;
	value?: string;
	onChangeValueAction?: (value: string, option: StatusOption) => void; // <<— nome mudado
	placeholder?: string;
	className?: string;
};

export default function StatusSelect({
	name,
	label,
	options,
	defaultValue,
	value,
	onChangeValueAction,
	placeholder = 'Selecione...',
	className = '',
}: Props) {
	const id = useId();

	const selectedFromValue = useMemo(
		() => (value ? options.find((o) => o.value === value) ?? null : null),
		[value, options]
	);
	const initial = useMemo(
		() => options.find((o) => o.value === defaultValue) ?? null,
		[options, defaultValue]
	);
	const [selected, setSelected] = useState<StatusOption | null>(
		selectedFromValue ?? initial
	);

	useEffect(() => {
		if (selectedFromValue) setSelected(selectedFromValue);
	}, [selectedFromValue]);

	const handleChange = (opt: StatusOption) => {
		setSelected(opt); // para modo não-controlado
		onChangeValueAction?.(opt.value, opt); // avisa o pai (client)
	};

	const hiddenValue = selected?.value ?? value ?? defaultValue ?? '';

	return (
		<div className={`w-full ${className}`}>
			{label && (
				<label
					htmlFor={id}
					className='mb-1 block text-sm font-bold text-gray-800'>
					{label}
				</label>
			)}
			<input
				type='hidden'
				name={name}
				value={hiddenValue}
			/>
			<Listbox
				value={selected}
				onChange={handleChange}>
				<div className='relative w-full'>
					<Listbox.Button
						id={id}
						className={`'relative w-full cursor-default ${className} border border-gray-300 bg-white py-2 pl-3 pr-10 text-left text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500'`}>
						{selected ? (
							<span className='flex min-w-0 items-center gap-2'>
								<span className='truncate'>{selected.label}</span>
								{selected.meta && (
									<span className='shrink-0 text-gray-400'>
										&bull;{' '}
										<span className='text-gray-500'>{selected.meta}</span>
									</span>
								)}
								{typeof selected.count === 'number' && (
									<span className='shrink-0 inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-[12px] font-semibold text-gray-700'>
										{selected.count}
									</span>
								)}
							</span>
						) : (
							<span className='block truncate text-gray-400'>
								{placeholder}
							</span>
						)}
						<span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
							<ChevronUpDownIcon className='h-5 w-5 text-gray-500' />
						</span>
					</Listbox.Button>

					<Transition
						as={Fragment}
						enter='transition ease-out duration-100'
						enterFrom='opacity-0 translate-y-1'
						enterTo='opacity-100 translate-y-0'
						leave='transition ease-in duration-75'
						leaveFrom='opacity-100 translate-y-0'
						leaveTo='opacity-0 translate-y-1'>
						<Listbox.Options className='absolute z-50 mt-2 max-h-72 w-full overflow-auto rounded-xl border border-gray-200 bg-white p-1 text-sm shadow-lg focus:outline-none'>
							{options.map((opt) => (
								<Fragment key={opt.value}>
									<Listbox.Option
										value={opt}
										className={({ active }) =>
											[
												'relative cursor-pointer select-none rounded-lg px-3 py-2 pl-8',
												active ? 'bg-blue-50' : 'bg-white',
											].join(' ')
										}>
										{({ selected: isSelected }) => (
											<div className='flex items-center justify-between gap-2'>
												<span
													className={[
														'min-w-0 flex-1 truncate',
														isSelected
															? 'font-medium text-blue-600'
															: 'font-normal text-gray-800',
													].join(' ')}>
													<span className='truncate'>{opt.label}</span>
													{opt.meta && (
														<span className='text-gray-400'>
															{' '}
															&bull;{' '}
															<span className='text-gray-500'>{opt.meta}</span>
														</span>
													)}
												</span>
												{typeof opt.count === 'number' && (
													<span className='inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-[12px] font-semibold text-gray-700'>
														{opt.count}
													</span>
												)}
												{isSelected && (
													<span className='absolute inset-y-0 left-2 flex items-center'>
														<CheckIcon className='h-5 w-5 text-blue-600' />
													</span>
												)}
											</div>
										)}
									</Listbox.Option>
									{opt.dividerAfter && (
										<div className='my-1 mx-2 h-px bg-gray-200' />
									)}
								</Fragment>
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
