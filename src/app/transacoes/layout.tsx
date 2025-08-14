'use client';

import { Plus, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AppLayout } from '../../components/appLayout';
import { DashViews } from '../../components/transacoes/dashViews';

export default function Clientes({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();

	return (
		<AppLayout>
			{/* Cabeçalho fixo */}
			<div className='flex items-center justify-between'>
				<div>
					<h1 className='text-3xl font-bold'>Transações & Logs</h1>
					<p className='text-md text-gray-500'>
						Monitoramento de pagamentos e eventos do sistema
					</p>
				</div>
				<Link
					href='/clientes/novo'
					className='inline-flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-lg'>
					<Plus size={16} /> Novo Cliente
				</Link>
			</div>

			<div className="grid grid-cols-2 gap-3">
				<div className='flex flex-col gap-3 border border-gray-300 p-6 rounded-xl'>
					<h3 className='text-[14px] text-gray-600 font-bold'>
						Total de Transações
					</h3>

					<div className='flex flex-col'>
						<h1 className='text-2xl font-bold'>4</h1>
						<small className='flex items-center gap-2 text-[12px] text-green-500'>
							<TrendingUp
								size={14}
								strokeWidth={2}
								className='text-green-600'
							/>
							+12% vs. ontem
						</small>
					</div>
				</div>
				<DashViews
					title='Total de Transações'
					icon={TrendingUp}
					paragraphy='+12% vs. ontem'
				/>
			</div>

			{/* Abas/botões fixos */}
			<div className='w-full bg-gray-100 flex justify-center py-1 rounded-lg '>
				<Link
					href='/transacoes/transactions'
					className={`w-full mx-1 py-1 rounded-lg font-bold text-[14px] text-center transition-colors
            ${
							pathname.includes('/transactions')
								? 'bg-white text-black'
								: 'text-gray-500 bg-transparent'
						}`}>
					Transações
				</Link>
				<Link
					href='/transacoes/eventos'
					className={`w-full mx-1 py-1 rounded-lg font-bold text-[14px] text-center transition-colors
            ${
							pathname.includes('/eventos')
								? 'bg-white text-black'
								: 'text-gray-500 bg-transparent'
						}`}>
					Logs de Eventos
				</Link>
			</div>

			{/* Só o miolo troca */}
			<div>{children}</div>
		</AppLayout>
	);
}
