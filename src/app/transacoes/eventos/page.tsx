import { Search } from 'lucide-react';
import StatusSelect from '../../../components/select';
import {
	contentTbodyEventos,
	tableEventos,
} from '../../../components/transacoes/titleTransactions';

const OPTIONS = [
	{ label: 'Todas', value: 'todas' },
	{ label: 'Sucesso', value: 'sucesso' },
	{ label: 'Erro', value: 'erro' },
	{ label: 'Aviso', value: 'aviso' },
	{ label: 'Info', value: 'info' },
];

export default function Eventos() {
	return (
		<div>
			<div className='flex gap-4'>
				<form className='relative w-full flex-6'>
					<Search className='w-4 h-4 absolute left-3 top-3 text-gray-500' />
					<input
						type='text'
						placeholder='Buscar por terminal, cliente ou referência...'
						className='w-full flex-2 border border-gray-300 py-2 pl-9 rounded-xl xss:text-[12px] xs:text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500'
					/>
				</form>
				<StatusSelect
					options={OPTIONS}
					name='todas'
					defaultValue='todas'
					value='todas'
					className='flex-1 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500'
				/>
			</div>

			<div className='xss:hidden lg:block rounded-xl overflow-hidden border border-gray-300 mt-4'>
				<table className='w-full'>
					<thead className='hover:bg-gray-50'>
						{tableEventos.map((tt, index) => (
							<th
								key={index}
								className='py-4 px-3 text-left text-[14px] text-gray-500 '>
								{tt}
							</th>
						))}
					</thead>

					<tbody>
						{contentTbodyEventos.map((cte, index) => {
							let statusColor = '';
							let statusBorder = '';

							if (cte.severidade === 'Sucesso') {
								statusColor = 'bg-green-500 text-white';
								statusBorder = 'border-green-500';
							} else if (cte.severidade === 'Erro') {
								statusColor = 'bg-red-500 text-white';
								statusBorder = 'border-red-500';
							} else if (cte.severidade === 'Info') {
								statusColor = 'bg-gray-200 text-gray-800';
								statusBorder = 'border-gray-300';
							}
							return (
								<tr
									key={index}
									className='hover:bg-gray-50'>
									<td className='text-[12px] py-5 pl-3 border-t border-gray-300'>
										{cte.timestamp}
									</td>
									<td className='text-[12px] py-5 pl-3 border-t border-gray-300'>
										{cte.terminal}
									</td>
									<td className='text-[12px] py-5 pl-3 border-t border-gray-300'>
										{cte.evento}
									</td>
									<td className='text-[12px] py-5 pl-3 border-t border-gray-300'>
										{cte.descricao}
									</td>
									<td className='py-5 pl-3 border-t border-gray-300'>
										<small
											className={`text-[14px] font-bold border ${statusBorder} rounded-2xl px-2 py-0.5 ${statusColor}`}>
											{cte.severidade}
										</small>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}
