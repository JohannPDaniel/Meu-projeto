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
			<div className='flex items-center justify-between'>
				<div>
					<h1 className='text-2xl font-bold'>Gestão de Clientes</h1>
					<p className='text-sm text-gray-500'>
						Cadastro e gerenciamento de empresas/eletropostos
					</p>
				</div>
				<Link
					href='/clientes/novo'
					className='inline-flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-lg'>
					<Plus size={16} /> Novo Cliente
				</Link>
			</div>

			{/* Abas/botões fixos */}
			<div className='w-full bg-gray-100 flex justify-center py-1 rounded-lg mt-4'>
				<Link
					href='/clientes/lista'
					className={`w-full mx-1 py-1 rounded-lg font-bold text-[14px] text-center transition-colors
            ${
							pathname.includes('/lista')
								? 'bg-white text-black'
								: 'text-gray-500 bg-transparent'
						}`}>
					Lista de Clientes
				</Link>
				<Link
					href='/clientes/novo'
					className={`w-full mx-1 py-1 rounded-lg font-bold text-[14px] text-center transition-colors
            ${
							pathname.includes('/novo')
								? 'bg-white text-black'
								: 'text-gray-500 bg-transparent'
						}`}>
					Novo Cadastro
				</Link>
			</div>

			{/* Só o miolo troca */}
			<div>{children}</div>
		</AppLayout>
	);
}
