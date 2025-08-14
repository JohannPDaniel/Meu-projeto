'use client';

import {
	AlertTriangle,
	Download,
	RefreshCcw,
	Rocket,
	Settings,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AppLayout } from '../../components/appLayout';
import { PreviewPane } from '../../components/interface/PreviewPane';
import { InterfaceConfigProvider } from './interface-config';

export default function Clientes({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();

	return (
		<InterfaceConfigProvider>
			<AppLayout>
				{/* Cabeçalho fixo */}
				<div className='flex xss:flex-col lg:flex-row xss:gap-4'>
					<div className='w-full'>
						<h1 className='text-2xl xss:text-center lg:text-start font-bold'>
							Interface dos Terminais
						</h1>
						<p className='text-sm xss:text-center lg:text-start text-gray-500'>
							Configuração visual das telas dos terminais
						</p>
					</div>

					<div className='flex xss:flex-col md:flex-row xss:items-center md:justify-center lg:justify-end gap-4 w-full'>
						<button className='group w-max flex items-center gap-4 border border-gray-300 py-2 px-4 rounded-xl text-[14px] font-bold cursor-pointer hover:bg-blue-100 hover:text-blue-900 hover:shadow-lg'>
							<Download
								className='w-5 h-5 group-hover:text-blue-900'
								strokeWidth={2}
							/>
							Exportar Configs
						</button>
						<button className='group w-max flex items-center gap-4 py-2 px-4 rounded-xl text-[14px] font-bold cursor-pointer bg-blue-900 text-white transition-all duration-300 ease-in-out hover:-translate-y-1'>
							<Rocket
								className='w-5 h-5 text-white'
								strokeWidth={2}
							/>
							Publicar Alterações
						</button>
					</div>
				</div>

				{/* Abas/botões fixos */}
				<div className='flex xss:flex-col xl:flex-row gap-4'>
					<div className='max-h-fit flex flex-col flex-2 gap-3 border border-gray-300 p-6 rounded-xl'>
						<div className='flex items-center gap-3'>
							<Settings
								className='w-5 h-5 text-blue-800'
								strokeWidth={2}
							/>
							<h1 className='text-2xl font-bold'>Configurações da Interface</h1>
						</div>

						{/* Menu */}
						<div className='bg-gray-100 flex justify-center py-1 rounded-lg'>
							<Link
								href='/interface/mensagem'
								className={`w-full mx-1 py-1 rounded-lg font-bold text-[14px] text-center transition-colors
            ${
							pathname.includes('/mensagem')
								? 'bg-white text-black'
								: 'text-gray-500 bg-transparent'
						}`}>
								Mensagem
							</Link>
							<Link
								href='/interface/estilo'
								className={`w-full mx-1 py-1 rounded-lg font-bold text-[14px] text-center transition-colors
            ${
							pathname.includes('/estilo')
								? 'bg-white text-black'
								: 'text-gray-500 bg-transparent'
						}`}>
								Estilo
							</Link>
							<Link
								href='/interface/midia'
								className={`w-full mx-1 py-1 rounded-lg font-bold text-[14px] text-center transition-colors
            ${
							pathname.includes('/midia')
								? 'bg-white text-black'
								: 'text-gray-500 bg-transparent'
						}`}>
								Mídia
							</Link>
							<Link
								href='/interface/alvo'
								className={`w-full mx-1 py-1 rounded-lg font-bold text-[14px] text-center transition-colors
            ${
							pathname.includes('/alvo')
								? 'bg-white text-black'
								: 'text-gray-500 bg-transparent'
						}`}>
								Alvo
							</Link>
						</div>

						<div>{children}</div>
					</div>

					<div className='flex flex-col flex-1 gap-4'>

						<PreviewPane />

						<div className='flex flex-col gap-3 border border-gray-300 p-6 rounded-xl'>
							<div className='flex items-center gap-3'>
								<Rocket
									size={22}
									strokeWidth={2}
									className='text-blue-800'
								/>
								<h1 className='text-2xl font-semibold'>Publicação</h1>
							</div>

							<div className='flex items-center gap-2 border border-yellow-400 bg-[#fbf1e8] rounded-sm p-4'>
								<AlertTriangle
									size={20}
									className='text-amber-500'
									fill='currentColor' // preenche o triângulo
									stroke='black' // deixa o ! branco
									strokeWidth={1}
								/>
								<p className='text-[14px]'>
									As alterações só serão aplicadas após a publicação
								</p>
							</div>

							<div className='flex flex-col gap-2'>
								<button className='w-full flex items-center justify-center gap-2 bg-blue-900 text-white font-bold text-[14px] py-2.5 rounded-xl'>
									<Rocket
										size={18}
										strokeWidth={2}
										className='text-white'
									/>
									Publicar Configurações
								</button>
								<button className='w-full flex items-center justify-center gap-2 font-bold text-[14px] py-2.5 border border-gray-300 rounded-xl'>
									<RefreshCcw
										size={18}
										strokeWidth={2}
										className='text-gray-800'
									/>
									Resetar para Padrão
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Só o miolo troca */}
			</AppLayout>
		</InterfaceConfigProvider>
	);
}
