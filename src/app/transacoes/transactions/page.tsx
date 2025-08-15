'use client';

import {
	CircleCheckBig,
	Clock,
	CreditCard,
	Search,
	Smartphone,
	XCircle,
} from 'lucide-react';
import StatusSelect from '../../../components/select';
import Calendar from '../../../components/transacoes/CalendarButton';
import { TbodyTransactions } from '../../../components/transacoes/tBodyTransaction';
import {
	contentTbodyTransaction,
	titleTransaction,
} from '../../../components/transacoes/titleTransactions';

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
					className='flex-1 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500'
				/>
				<StatusSelect
					options={OPTIONS2}
					defaultValue='todosTipos'
					value='todosTipos'
					className='flex-1 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500'
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
			<>
				{contentTbodyTransaction.map((ctt, index) => {
					let statusColor = '';
					let StatusIcon = null;

					if (ctt.status === 'Concluida') {
						statusColor = 'bg-green-500 text-white';
						StatusIcon = CircleCheckBig;
					} else if (ctt.status === 'Falhada') {
						statusColor = 'bg-red-500 text-white';
						StatusIcon = XCircle;
					} else if (ctt.status === 'Pendente') {
						statusColor = 'bg-gray-200 text-gray-800';
						StatusIcon = Clock;
					}
					return (
						<div
							key={index}
							className='xss:flex xss:flex-col lg:hidden gap-2 border border-gray-300 rounded-2xl p-6 mt-4'>
							<div className='flex items-center justify-between'>
								<h2 className='text-[14px] font-bold'>ID</h2>
								<p className='text-[14px]'>{ctt.id}</p>
							</div>
							<div className='flex items-center justify-between'>
								<h2 className='text-[14px] font-bold'>Terminal</h2>
								<div className='flex flex-col items-end text-[14px]'>
									<h2 className='text-[14px] font-bold'>{ctt.terminal.nome}</h2>
									<p className='text-[12px]'>{ctt.terminal.codigo}</p>
								</div>
							</div>
							<div className='flex items-center justify-between'>
								<h2 className='text-[14px] font-bold'>Cliente</h2>
								<p className='text-[14px]'>{ctt.cliente}</p>
							</div>
							<div className='flex items-center justify-between'>
								<h2 className='text-[14px] font-bold'>Valor</h2>
								<p className='text-[14px]'>{ctt.valor}</p>
							</div>
							<div className='flex items-center justify-between'>
								<h2 className='text-[14px] font-bold'>Pagamento</h2>
								<p className='text-[14px] flex items-center gap-1'>
									{ctt.pagamento === 'PIX' ? (
										<Smartphone
											size={18}
											color='#1E40AF'
										/>
									) : ctt.pagamento === 'Credit' ? (
										<CreditCard
											size={18}
											color='#1E40AF'
										/>
									) : null}
									{ctt.pagamento}
								</p>
							</div>
							<div className='flex items-center justify-between'>
								<h2 className='text-[14px] font-bold'>Status</h2>
								<p
									className={`text-[14px] flex items-center gap-1 ${statusColor} rounded-xl text-black px-1 py-0`}>
									{StatusIcon && <StatusIcon size={14} />}
									{ctt.status}
								</p>
							</div>
							<div className='flex items-center justify-between'>
								<h2 className='text-[14px] font-bold'>Data/Hora</h2>
								<p className='text-[14px]'>{ctt.dataHora}</p>
							</div>
							<div className='flex items-center justify-between'>
								<h2 className='text-[14px] font-bold'>Referência</h2>
								<p className='text-[14px]'>{ctt.referencia}</p>
							</div>
						</div>
					);
				})}
			</>
		</div>
	);
}
