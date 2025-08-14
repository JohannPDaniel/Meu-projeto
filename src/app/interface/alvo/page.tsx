import StatusSelect, { StatusOption } from '../../../components/select';

const OPTIONS: StatusOption[] = [
	{
		value: 'todos',
		label: 'Todos os Terminais',
		count: 26,
		dividerAfter: true,
	},
	{ value: 'paulista', label: 'Terminal Paulista 01', meta: 'Exevolt' },
	{ value: 'shopping', label: 'Terminal Shopping Center', meta: 'Exevolt' },
	{ value: 'aeroporto', label: 'Terminal Aeroporto', meta: 'TechPower' },
];
export default function Alvo() {
	return (
		<div className='flex flex-col gap-4 mt-2'>
			<StatusSelect
				name='config'
				label='Aplicar Configuração Para:'
				options={OPTIONS}
				defaultValue='todos'
			/>

			<div className='flex flex-col gap-2 bg-gray-50 p-6 rounded-lg'>
				<h3 className='text-[16px] font-bold'>Resumo da Aplicação:</h3>
				<ul
					className="
    list-none text-sm text-gray-700 space-y-1
    [&>li]:relative [&>li]:pl-6
    [&>li::before]:content-['✓'] [&>li::before]:absolute
    [&>li::before]:left-0 [&>li::before]:top-0
    [&>li::before]:font-medium
  ">
					<li>Configuração será aplicada a todos os 26 terminais</li>
					<li>As alterações entrarão em vigor após a publicação</li>
					<li>Os terminais serão atualizados automaticamente</li>
				</ul>{' '}
			</div>
		</div>
	);
}
