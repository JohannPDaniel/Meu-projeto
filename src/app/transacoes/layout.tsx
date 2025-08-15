'use client';

import {
	ChartColumn,
	CircleCheckBig,
	DollarSign,
	Download,
	Funnel,
	TrendingUp,
} from 'lucide-react';
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
				<div className='flex gap-3'>
					<button className='flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-xl text-[14px] font-bold hover:bg-blue-100 hover:text-blue-900 hover:shadow-lg cursor-pointer'>
						<Funnel className='w-4 h-4 hover:text-blue-900' />
						Filtros Avançados
					</button>
					<button className='flex items-center gap-2 px-4 py-2 rounded-xl text-[14px] font-bold cursor-pointer bg-blue-900 text-white transition-all duration-300 ease-in-out hover:-translate-y-1'>
						<Download className='w-4 h-4 text-white ' />
						Exportar Dados
					</button>
				</div>
			</div>

			<div className='grid grid-cols-4 gap-3'>
				<DashViews
					title='Total de Transações'
					number='4'
					icon={TrendingUp}
					paragraphy='+12% vs. ontem'
				/>
				<DashViews
					title='Transações Concluídas'
					number='2'
					icon={CircleCheckBig}
					paragraphy='50.0% taxa sucesso'
				/>
				<DashViews
					title='Terminais Ativos'
					number='R$ 173.45'
					icon={DollarSign}
					paragraphy='Hoje'
				/>
				<DashViews
					title='Volume Total'
					number='24'
					icon={ChartColumn}
					paragraphy='92% uptime'
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
