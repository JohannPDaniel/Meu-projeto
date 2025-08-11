import { Building2, CircleCheckBig, MapPin, Phone, Search, SquarePen, Trash2, Users } from 'lucide-react';

export default function ListaPage() {
	return (
		<div className='flex flex-col gap-6'>
			<div className='relative'>
				<Search className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4' />
				<input
					type='text'
					placeholder='Buscar por nome da empresa ou CNPJ'
					className='text-[14px] border border-gray-300 w-full left-3 pl-10 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500'
				/>
			</div>

			<div className='w-full p-5 border border-gray-300'>
				<div className='flex items-center justify-between gap-3'>
					<div className='flex items-center gap-3'>
						<Building2 className='w-4 h-4 text-blue-900' />
						<h1 className='text-2xl font-bold'>Exevolt</h1>
					</div>
					<div className='text-[12px] font-bold flex items-center gap-1 text-white bg-blue-800 px-2 py-0.5 rounded-2xl'>
						<CircleCheckBig className='w-4 h-4' />
						Ativo
					</div>
				</div>
				<div>
					<p className='text-sm text-gray-500'>12.345.678/0001-90</p>
				</div>

				<div className='mt-3'>
					<p className='text-[13px] text-gray-500 flex items-center gap-3 '>
						<MapPin className='w-4 h-4 text-gray-500' />
						Av. Paulista, 1000 - São Paulo, SP
					</p>
				</div>

				<hr className='mt-3 border-gray-300' />

				<div className='flex items-center gap-3 mt-3'>
					<Phone className='w-3 h-3 text-gray-500' />
					<h3 className='text-[12px] font-bold'>Carlos Silva</h3>
				</div>

				<div className='flex items-center gap-4'>
					<p className='text-[12px] text-gray-500'>(11) 99999-1111</p>
					<li className='list-disc text-[12px] text-gray-500'>
						carlos@exevolt.com
					</li>
				</div>

				<div className='flex items-center gap-3 p-2 bg-gray-100 mt-3'>
					<Users className='w-4 h-4 text-blue-600' />
					<h3 className='text-[14px] font-bold'>15 terminais</h3>
				</div>

				<div className='mt-3 flex items-center gap-2'>
					<button className='group flex items-center justify-center gap-3 w-full border border-gray-200 hover:bg-blue-100 hover:text-blue-600 px-2 py-1 rounded-lg cursor-pointer hover:shadow-md'>
						<SquarePen className='w-4 h-4 text-black group-hover:text-blue-700' />
						Editar
					</button>
					<button className='group p-2 border border-gray-300 rounded-lg hover:bg-red-100 cursor-pointer hover:shadow-md'>
						<Trash2 className='w-4 h-4 group-hover:text-red-700' />
					</button>
				</div>
			</div>
		</div>
	);
}
