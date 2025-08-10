'use client';

import { useState } from 'react';
import { AppLayout } from '../../components/appLayout';
import StatusSelect from '../../components/select';

const OPTIONS = [
	{ label: 'Ativo', value: 'ativo' },
	{ label: 'Inativo', value: 'inativo' },
];

export default function Usuarios() {
	const [phone, setPhone] = useState('');

	const formatPhone = (value: string) => {
		const digits = value.replace(/\D/g, '');

		if (digits.length === 0) return '';
		if (digits.length <= 2) return `(${digits}`;
		if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
		if (digits.length <= 10)
			return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
		return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(
			7,
			11
		)}`;
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setPhone(formatPhone(value));
	};

	return (
		<AppLayout>
			<div className='grid grid-cols-1 pb-6'>
				<h1 className='text-2xl font-bold'>Cadastro de Usuário</h1>
			</div>
			<div className='w-full h-auto flex xss:flex-col xl:flex-row gap-6 '>
				<div className='xss:w-full flex flex-col gap-4 border border-gray-300 w-200 h-auto rounded-[12px] p-6'>
					<h1 className='text-2xl font-semibold'>Novo Usuário</h1>
					<form className='flex flex-col gap-4'>
						<label className='flex flex-col'>
							<span className='text-[14px] font-bold'>Nome Completo</span>
							<input
								type='text'
								name='name'
								placeholder='Maria Silva'
								className='border border-gray-300 h-10 text-[14px] rounded-[12px] pl-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
						</label>
						<label className='flex flex-col'>
							<span className='text-[14px] font-bold'>E-mail</span>
							<input
								type='email'
								name='email'
								placeholder='maria@gopaid.com'
								className='border border-gray-300 h-10 text-[14px] rounded-[12px] pl-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
						</label>
						<div className='flex xss:flex-col lg:flex-row items-end justify-center gap-4'>
							<label className='flex flex-col w-full'>
								<span className='text-[14px] font-bold'>Telefone</span>
								<input
									type='text'
									name='phone'
									placeholder='(11) 99999-0000'
									className='border border-gray-300 h-10 text-[14px] rounded-[12px] pl-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
									value={phone}
									onChange={handleChange}
									maxLength={15}
								/>
							</label>
							<StatusSelect
								name='status'
								label='Status'
								options={OPTIONS}
								defaultValue='ativo'
							/>
						</div>
						<div className='flex xss:flex-col lg:flex-row gap-4'>
							<label className='w-full flex flex-col'>
								<span className='text-[14px] font-bold'>Senha</span>
								<input
									type='password'
									name='password'
									placeholder='********'
									className='flex items-center border border-gray-300 h-10 rounded-[14px] pl-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
								/>
							</label>
							<label className='w-full flex flex-col'>
								<span className='text-[14px] font-bold'>Confirmar senha</span>
								<input
									type='password'
									name='confirmPassword'
									placeholder='********'
									className='border border-gray-300 h-10 rounded-[14px] pl-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
								/>
							</label>
						</div>
						<div className='flex justify-end'>
							<button
								type='submit'
								className='bg-[#113b94] cursor-pointer text-white px-4 py-2 rounded-[12px]'>
								Cadastrar
							</button>
						</div>
					</form>
				</div>

				<div className='xss:w-full h-112 flex flex-col gap-4 border border-gray-300 rounded-[12px] p-6'>
					<h1 className='text-2xl font-semibold'>Perfis de Acesso (RBAC)</h1>

					<ul className='list-disc marker:text-[16px] pl-4 text-[14px] text-gray-500'>
						<li>
							Administrador: total acesso, gestão de usuários e configurações.
						</li>
						<li>
							Gerente de Campanhas: cria/edita, submete, visualiza relatórios de
							campanhas.
						</li>
						<li>Aprovador: revisa, aprova/rejeita, solicita ajustes.</li>
						<li>Auditor: leitura de relatórios e logs.</li>
					</ul>

					<div className='flex justify-end'>
						<button
							type='button'
							className='cursor-pointer px-4 py-3 text-[14px] font-semibold rounded-[11px] bg-gray-100 hover:shadow-[0_2px_2px_rgba(0,0,0,0.1)]'>
							Gerenciar Perfis
						</button>
					</div>
				</div>
			</div>
		</AppLayout>
	);
}
