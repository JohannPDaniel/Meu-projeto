import {
	Building2,
	MapPin,
	Phone,
	SquarePen,
	Trash2,
	Users,
	CheckCircle2,
	AlertCircle,
} from 'lucide-react';

interface ListaClientesProps {
	empresa: string;
	status: string;
	cnpj: string;
	endereco: string;
	nome: string;
	phone: string;
	email: string;
	numeroTerminais: string;
}

export const ListaClientes = ({
	empresa,
	status,
	cnpj,
	endereco,
	nome,
	phone,
	email,
	numeroTerminais,
}: ListaClientesProps) => {
	// Definindo cor e ícone de acordo com o status
	const isAtivo = status.toLowerCase() === 'ativo';
	const StatusIcon = isAtivo ? CheckCircle2 : AlertCircle;
	const statusClasses = isAtivo
		? 'text-white bg-blue-800'
		: 'text-gray-700 bg-gray-200';

	return (
		<div className='min-w-full max-w-full p-5 border border-gray-300 rounded-2xl hover:shadow-xl'>
			<div className='flex items-center justify-between gap-3'>
				<div className='flex items-center gap-3'>
					<Building2 className='w-4 h-4 text-blue-900' />
					<h1 className='text-xl font-semibold'>{empresa}</h1>
				</div>

				<div
					className={`text-[12px] font-bold flex items-center gap-1 px-2 py-0.5 rounded-2xl ${statusClasses}`}>
					<StatusIcon className='w-4 h-4' />
					{status}
				</div>
			</div>

			<p className='text-sm text-gray-500'>{cnpj}</p>

			<div className='mt-3'>
				<p className='text-[13px] xss:text-[12px] text-gray-500 flex items-center gap-3 '>
					<MapPin className='w-4 h-4 text-gray-500' />
					{endereco}
				</p>
			</div>

			<hr className='mt-3 border-gray-300' />

			<div className='flex items-center xss:justify-center xs:justify-start gap-3 mt-3'>
				<Phone className='w-3 h-3 text-gray-500' />
				<h3 className='text-[12px] font-bold'>{nome}</h3>
			</div>

			<div className='flex xss:flex-col xs:flex-row xss:gap-0 items-center gap-4'>
				<p className='text-[12px] text-gray-500'>{phone}</p>
				<li className='list-disc text-[12px] text-gray-500'>{email}</li>
			</div>

			<div className='flex items-center gap-3 p-2 bg-gray-100 mt-3'>
				<Users className='w-4 h-4 text-blue-600' />
				<h3 className='text-[14px] font-bold'>{numeroTerminais}</h3>
			</div>

			<div className='mt-3 flex items-center gap-2'>
				<button className='group flex items-center justify-center gap-3 w-full border border-gray-200 hover:bg-blue-100 hover:text-blue-600 px-2 py-1 rounded-lg cursor-pointer hover:shadow-md'>
					<SquarePen className='w-4 h-4 text-black group-hover:text-blue-700' />
					Editar
				</button>
				<button className='group p-2 border border-gray-300 rounded-lg hover:bg-red-100 cursor-pointer hover:shadow-m'>
					<Trash2 className='w-4 h-4 group-hover:text-red-700' />
				</button>
			</div>
		</div>
	);
};
