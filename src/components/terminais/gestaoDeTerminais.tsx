import {
	Building2,
	CircleCheckBig,
	CircleX,
	Laptop2,
	LucideIcon,
	MapPin,
	Pause,
	Trash2,
	Wifi,
} from 'lucide-react';

type TiposDePagamento = 'PIX' | 'Crédito' | 'Débito';
type Status = 'Ativo' | 'Pausado' | 'Offline';

interface gestaoDeTerminaisProps {
	nameTerminal: string;
	status: Status;
	idTerminal: string;
	nameEmpresa: string;
	endereco: string;
	ultimaConexao: string;
	tiposDePagamento: TiposDePagamento;
	tiposDePagamento2?: TiposDePagamento;
	tiposDePagamento3?: TiposDePagamento;
	firmware: string;
	icon: LucideIcon;
	titleButton: string;
}


export const GestaoDeTerminais = ({
	nameTerminal,
	status,
	idTerminal,
	nameEmpresa,
	endereco,
	ultimaConexao,
	tiposDePagamento,
	tiposDePagamento2,
	tiposDePagamento3,
	firmware,
	icon: Icon,
	titleButton,
}: gestaoDeTerminaisProps) => {
	const getStatusIcon = (status: string): LucideIcon => {
		switch (status.toLowerCase()) {
			case 'ativo':
				return CircleCheckBig;
			case 'pausado':
				return Pause;
			case 'offline':
				return CircleX;
			default:
				return Pause; // ícone padrão se não bater nenhum
		}
	};

	const StatusIcon = getStatusIcon(status);

	const statusClasses = (() => {
		switch (status.toLowerCase()) {
			case 'ativo':
				return 'text-white bg-green-500';
			case 'pausado':
				return 'text-gray-700 bg-gray-100';
			case 'offline':
				return 'text-white bg-red-500';
			default:
				return 'text-gray-700 bg-gray-200';
		}
    } )();
    
    const pagamentos = [
			tiposDePagamento,
			tiposDePagamento2,
			tiposDePagamento3,
		].filter(Boolean) as TiposDePagamento[];

	return (
		<div className='border border-gray-300 rounded-xl p-6 hover:shadow-xl'>
			<div className='flex items-center justify-between gap-3'>
				<div className='flex items-center gap-3'>
					<Laptop2 className='w-4 h-4 text-blue-900' />
					<h1 className='text-xl font-semibold'>{nameTerminal}</h1>
				</div>

				<div
					className={`text-[12px] font-bold flex bg-gray items-center gap-1 px-2 py-0.5 rounded-2xl ${statusClasses}`}>
					<StatusIcon size={15} />
					{status}
				</div>
			</div>

			<p className='text-[13px] text-gray-500'>{idTerminal}</p>

			<div className='flex items-center gap-3 mt-3'>
				<Building2
					size={16}
					className='text-gray-500'
				/>
				<p className='text-[14px] font-bold'>{nameEmpresa}</p>
			</div>

			<div className='flex items-center gap-3 mt-3'>
				<MapPin
					size={16}
					className='text-gray-500'
				/>
				<p className='text-[14px] text-gray-400'>{endereco}</p>
			</div>

			<div className='flex items-center gap-3 mt-3'>
				<Wifi
					size={16}
					className='text-gray-500'
				/>
				<p className='text-[14px] text-gray-400'>{ultimaConexao}</p>
			</div>

			<hr className='text-gray-400 mt-3' />

			<h3 className='text-[14px] text-gray-400 mt-3'>TIPOS DE PAGAMENTO</h3>

			<div className='flex gap-2 mt-1'>
				{pagamentos.map((p, i) => (
					<p
						key={`${p}-${i}`}
						className='text-[13px] px-2 py-0 border border-gray-300 rounded-2xl'>
						{p}
					</p>
				))}
			</div>

			<p className='text-[12px] text-gray-500 mt-3'>{firmware}</p>

			<div className='mt-3 flex items-center gap-2'>
				<button className='group text-[14px] flex items-center justify-center gap-3 w-full border border-gray-200 hover:bg-blue-100 hover:text-blue-600 px-2 py-1 rounded-lg cursor-pointer hover:shadow-md'>
					<Icon className='w-4 h-4 text-black group-hover:text-blue-700' />
					{titleButton}
				</button>
				<button className='group p-2 border border-gray-300 rounded-lg hover:bg-red-100 cursor-pointer hover:shadow-m'>
					<Trash2 className='w-4 h-4 group-hover:text-red-700' />
				</button>
			</div>
		</div>
	);
};
