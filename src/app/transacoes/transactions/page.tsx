'use client';

import { Search } from 'lucide-react';
import StatusSelect from '../../../components/select';
import DatePickerPopover from '../../../components/transacoes/CalendarButton';
import Calendar from "../../../components/transacoes/CalendarButton";

const OPTIONS = [
	{ label: 'Todos os Status', value: 'todosStatus' },
	{ label: 'Concluida', value: 'concluida' },
	{ label: 'Pendente', value: 'pendente' },
	{ label: 'Falhada', value: 'falhada' },
];
const OPTIONS2 = [
	{ label: 'Todos os Tipos', value: 'todosTipos' },
	{ label: 'PIX', value: 'pix' },
	{ label: 'Crédito', value: 'credito' },
	{ label: 'Débito', value: 'debito' },
];

export default function Transaction() {
	return (
		<div className='flex gap-2'>
			<form className='relative w-full flex-6'>
				<Search className='w-4 h-4 absolute left-3 top-3 text-gray-500' />
				<input
					type='text'
					placeholder='Buscar por terminal, cliente ou referência...'
					className='w-full absolute border border-gray-300 py-2 pl-9 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500'
				/>
			</form>
			<StatusSelect
				options={OPTIONS}
				name='Todos os Status'
				defaultValue='todosStatus'
				value='todosStatus'
				className='flex-1'
			/>
			<StatusSelect
				options={OPTIONS2}
				defaultValue='todosTipos'
				value='todosTipos'
				className='flex-1'
			/>

			<Calendar />
		</div>
	);
}
