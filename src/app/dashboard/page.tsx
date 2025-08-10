import { Target } from 'lucide-react';
import { AppLayout } from '../../components/appLayout';
import { infoDashboard } from '../../components/dashboard/infoDashboard';
import { PainelDashboard } from '../../components/dashboard/painelDashboard';

export default function Dashboard() {
	return (
		<AppLayout>
			<div className='flex items-center justify-between'>
				<div>
					<h1 className='text-3xl font-bold'>Dashboard</h1>
					<p className='text-gray-500'>
						Visão geral das suas campanhas e métricas de performance
					</p>
				</div>
				<div>
					<button className='w-full flex items-center gap-2 px-3 py-2 rounded-[10px] text-white text-[14px] font-medium bg-gradient-to-r from-blue-800 to-green-400 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg'>
						<Target className='w-4 h-4 text-white' />
						Nova Campanha
					</button>
				</div>
			</div>

			<div className='mt-6 w-full h-auto flex gap-4'>
				{infoDashboard.map((ID, index) => (
					<PainelDashboard
						key={index}
						icon={ID.icon}
						colorIcon={ID.colorIcon}
						title={ID.title}
						number={ID.number}
						paragraphy1={ID.paragraphy1}
						paragraphy2={ID.paragraphy2}
					/>
				))}
				{/* <PainelDashboard
					icon={DollarSign}
					colorIcon='#0c3a97'
					title='Descontos Concedidos'
					number='R$ 1,2M'
					paragraphy1='Total no mês atual'
					paragraphy2='+15% vs mês anterior'
				/>
				<PainelDashboard
					icon={Activity}
					colorIcon='#0c3a97'
					title='Transações com Promoção'
					number='8.4k'
					paragraphy1='Nos últimos 30 dias'
					paragraphy2='+12% vs período anterior'
				/>
				<PainelDashboard
					icon={TrendingUp}
					colorIcon='#21c45d'
					title='Taxa de Conversão'
					number='67%'
					paragraphy1='Campanhas aproveitadas'
					paragraphy2='+3% vs semana anterior'
				/> */}
			</div>
		</AppLayout>
	);
}
