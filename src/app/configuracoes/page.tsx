"use client";

import { useState } from "react";
import { AppLayout } from '../../components/appLayout';
import { Switch } from "../../components/configurações/switch";
import { VigenciaInput } from '../../components/configurações/vigencyInput';
import StatusSelect from '../../components/select';

const OPTIONS = [
	{ label: 'BRL', value: 'BRL' },
	{ label: 'USD', value: 'USD' },
];
const OPTIONS2 = [
	{ label: 'America/Sao_Paulo', value: 'America/Sao_Paulo' },
	{ label: 'UTC', value: 'UTC' },
];

export default function Configuracoes () {
	const [ativo, setAtivo] = useState(true);
	return (
		<AppLayout>
			<h1 className='text-2xl font-bold'>Configurações do Sistema</h1>

			<div className='grid xl:grid-cols-2 gap-4'>
				<div className='flex flex-col gap-4 border border-gray-300 rounded-xl p-6'>
					<h1 className='text-2xl font-bold'>Geral</h1>

					<StatusSelect
						name='defaultCurrency'
						label='Moeda padrão'
						options={OPTIONS}
						defaultValue='BRL'
					/>
					<StatusSelect
						name='timeZone'
						label='Fuso Horário'
						options={OPTIONS2}
						defaultValue='America/Sao_Paulo'
					/>

					<VigenciaInput
						text='Vigência padrão (dias)'
						valorExterno={30}
					/>

					<VigenciaInput
						text='Limite padrão de budget (R$)'
						valorExterno={50000}
					/>
				</div>

				<div className='flex flex-col gap-4 border border-gray-300 rounded-xl p-6'>
					<h1 className='text-2xl font-bold'>Integrações POS / BIN</h1>

					<div className='flex items-center justify-between'>
						<h3 className='text-[14px] font-bold'>Habilitar integração POS</h3>
						<Switch
							checked={ativo}
							onCheckedChange={setAtivo}
						/>
					</div>

					<label className='flex flex-col'>
						<span className='text-[14px] font-bold'>Endpoint de Webhook</span>
						<input
							type='text'
							placeholder='https://pos.suaempresa.com/webhooks/gopaid'
							className='border border-gray-300 rounded-xl p-2 pl-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500'
						/>
					</label>
					<label className='flex flex-col'>
						<span className='text-[14px] font-bold'>
							Template padrão de mensagens do terminal
						</span>
						<input
							type='text'
							placeholder='Parabéns! Você ganhou {{percent}}% de desconto.'
							className='border border-gray-300 rounded-lg p-2 pl-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500'
						/>
					</label>

					<div className='flex justify-end mt-3'>
						<button className='bg-[#113b94] text-white py-2 px-4 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-0.5'>
							Salvar
						</button>
					</div>
				</div>
			</div>
		</AppLayout>
	);
}
