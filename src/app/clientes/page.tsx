'use client';

import { Plus } from 'lucide-react';
import { useState } from 'react';
import { AppLayout } from '../../components/appLayout';

export default function Clientes() {
	const [active, setActive] = useState<'lista' | 'novo'>('lista');
	return (
		<AppLayout>
			<div className='flex items-center justify-between'>
				<div>
					<h1 className='text-3xl font-bold'>Gestão de Clientes</h1>
					<p className='text-gray-500'>
						Cadastro e gerenciamento de empresas/eletropostos
					</p>
				</div>
				<button className='flex items-center bg-blue-900 text-white px-4 py-2.5 rounded-xl cursor-pointer'>
					<Plus
						className='mr-3 font-black'
						color='var(--color-gray-300)'
						size={17}
						strokeWidth={2}
					/>
					<span className='text-[14px] font-bold'>Novo Cliente</span>
				</button>
			</div>

			<div className='w-full bg-gray-100 flex justify-center py-1 rounded-lg'>
				<button
					onClick={() => setActive('lista')}
					className={`w-full mx-1 py-1 rounded-lg font-bold text-[14px] cursor-pointer transition-colors 
          ${
						active === 'lista'
							? 'bg-white text-black'
							: 'text-gray-500 bg-transparent'
					}`}>
					Lista de Clientes
				</button>

				<button
					onClick={() => setActive('novo')}
					className={`w-full mx-1 py-1 rounded-lg font-bold text-[14px] cursor-pointer transition-colors
          ${
						active === 'novo'
							? 'bg-white text-black'
							: 'text-gray-500 bg-transparent'
					}`}>
					Novo Cadastro
				</button>
			</div>
		</AppLayout>
	);
}
