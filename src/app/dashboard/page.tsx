import { Target } from 'lucide-react';
import { AppLayout } from '../../components/appLayout';
import { infoDashboard } from '../../components/dashboard/infoDashboard';
import { PainelDashboard } from '../../components/dashboard/painelDashboard';

export default function Dashboard() {
	return (
		<AppLayout>
			<div className='flex xss:flex-col md:flex-row xss:gap-4 items-center justify-between'>
				<div className="xss:text-center md:text-start">
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

			<div className="grid xl:grid-cols-2 border border-gray-300">
				<div></div>
				<div></div>
			</div>
		</AppLayout>
	);
}
