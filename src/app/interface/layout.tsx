'use client';

import { Download, Eye, Rocket, Settings } from 'lucide-react';
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
				<div className='max-h-fit flex flex-col flex-2 gap-3 border border-gray-300 p-6 rounded-xl'>
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

				<div className="flex flex-col flex-1 gap-4">
					<div className='flex flex-col gap-4 border border-gray-300 p-6 rounded-xl'>
						<div className='flex items-center gap-4'>
							<Eye
								size={22}
								strokeWidth={2}
								className='text-blue-900'
							/>
							<h1 className='text-2xl font-bold'>Preview do Terminal</h1>
						</div>

						<div className='flex flex-col gap-4 bg-[#1d2739] px-5 py-8 rounded-lg'>
							<div className='flex flex-col items-center gap-3 bg-[#334154] p-5 rounded-lg'>
								<div className='w-full bg-[#475568] py-3 rounded-sm'></div>
								<div className='w-80 bg-[#475568] py-2 rounded-sm'></div>
							</div>
							<div className='flex flex-col gap-1 items-center bg-white py-5 rounded-xl'>
								<h1 className='text-xl text-blue-800 font-bold'>
									Bem-vindo ao Terminal de Pagamento
								</h1>
								<p className='text-[14px] text-gray-600'>
									Insira ou aproxime seu cartão
								</p>
							</div>

							<div className='flex gap-3'>
								<div className='w-full bg-[#334154] py-4 rounded-sm'></div>
								<div className='w-full bg-[#334154] py-4 rounded-sm'></div>
								<div className='w-full bg-[#334154] py-4 rounded-sm'></div>
							</div>
						</div>

						<hr className='border-gray-200' />
						<div className='flex flex-col gap-2'>
							<div className='flex justify-between'>
								<p className='text-[14px] text-gray-500'>Fonte:</p>
								<p className='text-[14px]'>Arial</p>
							</div>
							<div className='flex justify-between'>
								<p className='text-[14px] text-gray-500'>Tamanho:</p>
								<p className='text-[14px]'>16px</p>
							</div>
							<div className='flex justify-between'>
								<p className='text-[14px] text-gray-500'>Cor:</p>
								<p className='text-[14px]'>#1E40AF</p>
							</div>
							<div className='flex justify-between'>
								<p className='text-[14px] text-gray-500'>Caracteres:</p>
								<p className='text-[14px]'>0/50</p>
							</div>
						</div>
					</div>

					<div className='border border-gray-300 p-6 rounded-xl'></div>
				</div>
			</div>

			{/* Só o miolo troca */}
		</AppLayout>
	);
}
