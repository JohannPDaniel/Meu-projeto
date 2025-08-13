import { AppLayout } from '../../components/appLayout';
import StatusSelect from '../../components/select';

const OPTIONS = [
	{ label: 'BRL', value: 'BRL' },
	{ label: 'USD', value: 'USD' },
];
const OPTIONS2 = [
	{ label: 'America/Sao_Paulo', value: 'America/Sao_Paulo' },
	{ label: 'UTC', value: 'UTC' },
];

export default function configuracoes() {
	return (
		<AppLayout>
			<h1 className='text-2xl font-bold'>Configurações do Sistema</h1>

			<div className='grid'>
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

					<label className='flex flex-col'>
						<span className='text-[14px] font-bold'>
							Vigência padrão (dias)
						</span>
						<input
							type='number'
							min={0}
							className='border border-gray-300 rounded-xl py-1.8 px-5 focus:outline-none focus:ring-2 focus:ring-blue-500'
						/>
					</label>
				</div>
			</div>
		</AppLayout>
	);
}
