import {
	Building2,
	CircleCheckBig,
	MapPin,
	Phone,
	Search,
	SquarePen,
	Trash2,
	Users,
} from 'lucide-react';
import { ListaClientes } from "../../../components/clientes/listaClientes";

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

			<div className='grid grid-cols-3 gap-4'>
				<ListaClientes
					empresa='Exevolt'
					status='ativo'
					cnpj='12.345.678/0001-90'
					endereco='Av. Paulista, 1000 - São Paulo, SP'
					nome='Carlos Silva'
					phone='(11) 99999-1111'
					email='carlos@exevolt.com'
					numeroTerminais='15 terminais'
				/>
				<ListaClientes
					empresa='TechPower Solutions'
					status='ativo'
					cnpj='98.765.432/0001-10'
					endereco='Rua das Flores, 500 - Rio de Janeiro, RJ'
					nome='Pedro Lima'
					phone='(21) 88888-3333'
					email='pedro@techpower.com'
					numeroTerminais='8 terminais'
				/>
				<ListaClientes
					empresa='EcoCharging'
					status='inativo'
					cnpj='11.222.333/0001-44'
					endereco='Rua Verde, 200 - Belo Horizonte, MG'
					nome='João Oliveira'
					phone='(31) 77777-5555'
					email='joao@ecocharging.com'
					numeroTerminais='3 terminais'
				/>
			</div>
		</div>
	);
}
