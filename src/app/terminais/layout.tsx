'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AppLayout } from '../../components/appLayout';
import { Plus } from 'lucide-react';

export default function Clientes({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();

	return (
		<AppLayout>
			{/* Cabeçalho fixo */}
			<div className='flex xss:flex-col xss:gap-4 md:flex-row md:gap-0 items-center justify-between'>
				<div className='w-full'>
					<h1 className='text-2xl xss:text-center md:text-start font-bold'>
						Gestão de Terminais
					</h1>
					<p className='text-sm xss:text-center md:text-start text-gray-500'>
						Cadastro, pareamento e controle de terminais
					</p>
				</div>
				<Link
					href='/terminais/cadastrados'
					className='inline-flex items-center gap-2 bg-blue-900 text-white md:w-55 lg:w-50 xl:w-45 px-4 py-2 rounded-lg'>
					<Plus size={16} /> Novo Terminal
				</Link>
			</div>

			{/* Abas/botões fixos */}
			<div className='w-full bg-gray-100 flex justify-center py-1 rounded-lg'>
				<Link
					href='/terminais/cadastrados'
					className={`w-full mx-1 py-1 rounded-lg font-bold text-[14px] text-center transition-colors
            ${
							pathname.includes('/cadastrados')
								? 'bg-white text-black'
								: 'text-gray-500 bg-transparent'
						}`}>
					Terminais Cadastrados
				</Link>
				<Link
					href='/terminais/pareamento'
					className={`w-full mx-1 py-1 rounded-lg font-bold text-[14px] text-center transition-colors
            ${
							pathname.includes('/pareamento')
								? 'bg-white text-black'
								: 'text-gray-500 bg-transparent'
						}`}>
					Pareamento
				</Link>
			</div>

			{/* Só o miolo troca */}
			<div>{children}</div>
		</AppLayout>
	);
}
