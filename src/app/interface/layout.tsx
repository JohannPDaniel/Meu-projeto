'use client';

import { Download, Rocket, Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AppLayout } from '../../components/appLayout';

export default function Clientes({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();

	return (
		<AppLayout>
			{/* Cabeçalho fixo */}
			<div className='flex xss:flex-col xss:gap-4 md:flex-row md:gap-0 items-center justify-between'>
				<div className='w-full'>
					<h1 className='text-2xl xss:text-center md:text-start font-bold'>
						Interface dos Terminais
					</h1>
					<p className='text-sm xss:text-center md:text-start text-gray-500'>
						Configuração visual das telas dos terminais
					</p>
				</div>

				<div className='flex justify-end gap-4 w-full'>
					<button className='group flex items-center gap-4 border border-gray-300 py-2 px-4 rounded-xl text-[14px] font-bold cursor-pointer hover:bg-blue-100 hover:text-blue-900 hover:shadow-lg'>
						<Download
							className='w-5 h-5 group-hover:text-blue-900'
							strokeWidth={2}
						/>
						Exportar Configs
					</button>
					<button className='group flex items-center gap-4 py-2 px-4 rounded-xl text-[14px] font-bold cursor-pointer bg-blue-900 text-white transition-all duration-300 ease-in-out hover:-translate-y-1'>
						<Rocket
							className='w-5 h-5 text-white'
							strokeWidth={2}
						/>
						Publicar Alterações
					</button>
				</div>
			</div>

			{/* Abas/botões fixos */}
			<div className='flex gap-4'>
				<div className='flex flex-col gap-3 flex-2 border border-gray-300 p-6 rounded-2xl'>
					<div className='flex items-center gap-3'>
						<Settings
							className='w-5 h-5 text-blue-800'
							strokeWidth={2}
						/>
						<h1 className='text-2xl font-bold'>Configurações da Interface</h1>
					</div>

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

				<div className='flex-1 w-full border border-gray-300 p-6 rounded-2xl'></div>
			</div>

			{/* Só o miolo troca */}
		</AppLayout>
	);
}
