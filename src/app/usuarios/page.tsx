'use client';

import { useState } from 'react';
import { AppLayout } from '../../components/appLayout';
import { SelectStatus } from "../../components/selectStatus";

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
			<div className='w-full h-auto flex gap-6 '>
				<div className='flex flex-col gap-4 border border-gray-300 w-200 h-auto rounded-[12px] p-6'>
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
						<div className='flex items-end justify-center gap-4'>
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
							<SelectStatus />
						</div>
						<div className='flex gap-4'>
							<label className='w-full flex flex-col'>
								<span className='text-[14px] font-bold'>Senha</span>
								<input
									type='password'
									placeholder='********'
									className='border border-gray-300 h-10 rounded-[14px] pl-3'
								/>
							</label>
							<label className='w-full flex flex-col'>
								<span className='text-[14px] font-bold'>Senha</span>
								<input
									type='password'
									placeholder='********'
									className='border border-gray-300 h-10 rounded-[14px] pl-3'
								/>
							</label>
						</div>
						<div className="flex justify-end">
							<button
								type='submit'
								className='bg-[#113b94] text-white px-4 py-2 rounded-[12px]'>
								Cadastrar
							</button>
						</div>
					</form>
				</div>

				<div className='border border-gray-300 w-200 h-40 rounded-[12px]'></div>
			</div>
		</AppLayout>
	);
}
