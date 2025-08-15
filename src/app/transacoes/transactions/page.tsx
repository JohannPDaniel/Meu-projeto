'use client';

import { Search } from 'lucide-react';
import StatusSelect from '../../../components/select';
import Calendar from '../../../components/transacoes/CalendarButton';
import { TbodyTransactions } from '../../../components/transacoes/tBodyTransaction';
import { titleTransaction } from '../../../components/transacoes/titleTransactions';

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
		<div>
			<div className='flex xss:flex-col lg:flex-row gap-2'>
				<form className='relative w-full flex-6'>
					<Search className='w-4 h-4 absolute left-3 top-3 text-gray-500' />
					<input
						type='text'
						placeholder='Buscar por terminal, cliente ou referência...'
						className='w-full border border-gray-300 py-2 pl-9 rounded-xl xss:text-[12px] xs:text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500'
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

			<div className='xss:hidden lg:block rounded-xl overflow-hidden border border-gray-300 mt-4'>
				<table className='w-full'>
					<thead>
						<tr className='hover:bg-gray-100'>
							{titleTransaction.map((tt, index) => (
								<th
									key={index}
									className='py-4 px-3 text-left text-[14px] text-gray-500'>
									{tt}
								</th>
							))}
						</tr>
					</thead>

					<TbodyTransactions />
				</table>
			</div>
		</div>
	);
}
