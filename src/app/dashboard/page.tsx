import { AlertCircle, BarChart, CheckCircle, Clock3, Target, TrendingUp, Users } from 'lucide-react';
import { AppLayout } from '../../components/appLayout';
import { infoDashboard } from '../../components/dashboard/infoDashboard';
import { PainelDashboard } from '../../components/dashboard/painelDashboard';
import { Campanhas } from "../../components/dashboard/campanhas";
import { RapidAction } from "../../components/dashboard/RapidAction";

export default function Dashboard() {
	return (
		<AppLayout>
			<div className='flex xss:flex-col md:flex-row xss:gap-4 items-center justify-between'>
				<div className='xss:text-center md:text-start'>
					<h1 className='text-3xl font-bold'>Dashboard</h1>
					<p className='text-gray-500 md:text-[14px]'>
						Visão geral das suas campanhas e métricas de performance
					</p>
				</div>
				<div>
					<button className='w-full flex items-center gap-2 px-3 py-2 rounded-[10px] text-white text-[14px] font-medium bg-gradient-to-r from-blue-800 to-green-400 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg'>
						<Target className='md:w-8 lg:w-4 md:h-8 lg:h-4 text-white' />
						Nova Campanha
					</button>
				</div>
			</div>

			<div className='grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4'>
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
			</div>

			<div className='grid md:grid-cols-1 lg:grid-cols-2 gap-4 '>
				<div className='flex flex-col gap-4 border border-gray-300 p-6 rounded-xl'>
					<div className='flex items-center gap-3 '>
						<BarChart className='w-5 h-5 text-blue-600' />
						<div className='text-2xl font-[600]'>Campanhas Recentes</div>
					</div>

					<Campanhas
						icon={CheckCircle}
						title='Black Friday Shopping'
						paragraphy='Desconto: 25%'
						status='Ativa'
					/>

					<Campanhas
						icon={Clock3}
						title='Natal Gourmet'
						paragraphy='Desconto: 15%'
						status='Pendente'
					/>

					<Campanhas
						icon={CheckCircle}
						title='Cyber Monday Tech'
						paragraphy='Desconto: R$ 100'
						status='Ativa'
					/>
				</div>

				<div className='flex flex-col gap-3 border border-gray-300 p-6 rounded-xl'>
					<div className='flex items-center gap-3 '>
						<Users className='w-5 h-5 text-green-500' />
						<div className='text-2xl font-[600]'>Ações Rápidas</div>
					</div>

					<RapidAction
						icon={Target}
						text='Criar Nova Campanha'
					/>
					<RapidAction
						icon={CheckCircle}
						text='Revisar aprovações pendentes (3)'
					/>
					<RapidAction
						icon={BarChart}
						text='Gerar relatório mensal'
					/>
					<RapidAction
						icon={AlertCircle}
						text='Ver logs de auditoria'
					/>
				</div>
			</div>

			<div className='grid gap-4 border border-gray-300 p-6 rounded-[12px]'>
				<div className='flex items-center gap-3 '>
					<TrendingUp className='w-5 h-5 text-green-500' />
					<h1 className='text-[22px] font-bold'>Performance das Campanhas</h1>
				</div>

				<div className='w-full h-auto flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-45'>
					<BarChart className='w-15 h-15 text-gray-400' />
					<h3 className='font-bold text-gray-500'>Gráfico de Performance</h3>
					<p className='text-[14px] text-gray-400'>
						Visualização detalhada das métricas em tempo real
					</p>
				</div>
			</div>
		</AppLayout>
	);
}
