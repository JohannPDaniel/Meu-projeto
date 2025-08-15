import {
	CircleCheckBig,
	Clock,
	CreditCard,
	Smartphone,
	XCircle,
} from 'lucide-react';
import { contentTbodyTransaction } from './titleTransactions';

export const TbodyTransactions = () => {
	return (
		<tbody>
			{contentTbodyTransaction.map((ctt, index) => {
				// Configurações de status
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
					<tr
						key={index}
						className='hover:bg-gray-100'>
						<td className='py-4 pl-3 text-left border-t border-gray-300 text-[12px]'>
							{ctt.id}
						</td>

						<td className='py-4 pl-3 text-left border-t border-gray-300 align-middle'>
							<div className='flex flex-col'>
								<span className='text-[14px] font-bold'>
									{ctt.terminal.nome}
								</span>
								<span className='text-[12px] text-gray-500 font-light'>
									{ctt.terminal.codigo}
								</span>
							</div>
						</td>

						<td className='py-4 pl-3 text-left border-t border-gray-300 text-[14px]'>
							{ctt.cliente}
						</td>

						<td className='py-4 pl-3 text-left border-t border-gray-300 text-[14px]'>
							{ctt.valor}
						</td>

						{/* Pagamento */}
						<td className='py-4 pl-3 text-left border-t border-gray-300 text-[14px]'>
							<div className='flex items-center gap-2'>
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
							</div>
						</td>

						{/* Status */}
						<td className='py-4 pl-3 text-left border-t border-gray-300 text-[14px]'>
							<div
								className={`flex items-center gap-1 px-2 py-1 text-[14px] rounded-full w-fit ${statusColor}`}>
								{StatusIcon && <StatusIcon size={16} />}
								{ctt.status}
							</div>
						</td>

						<td className='py-4 pl-3 text-left border-t border-gray-300 text-[14px]'>
							{ctt.dataHora}
						</td>

						<td className='py-4  text-left border-t border-gray-300 text-[14px]'>
							{ctt.referencia}
						</td>
					</tr>
				);
			})}
		</tbody>
	);
};
