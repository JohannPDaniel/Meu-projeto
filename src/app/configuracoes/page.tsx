import { AppLayout } from '../../components/appLayout';
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

					<VigenciaInput
						text='Vigência padrão (dias)'
						valorExterno={30}
					/>

					<VigenciaInput
						text='Limite padrão de budget (R$)'
						valorExterno={50000}
					/>
				</div>
			</div>
		</AppLayout>
	);
}
