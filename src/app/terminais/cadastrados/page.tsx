import { Pause, Play, Search } from 'lucide-react';
import { GestaoDeTerminais } from '../../../components/terminais/gestaoDeTerminais';

export default function terminaisCadastrados() {
	return (
		<div className='flex flex-col gap-6'>
			<div className='relative'>
				<Search className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4' />
				<input
					type='text'
					placeholder='Buscar por nome da empresa ou CNPJ'
					className='xss:text-[11.5px] md:text-[14px]  border border-gray-300 w-full left-3 pl-10 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500'
				/>
			</div>

			<div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-4'>
				<GestaoDeTerminais
					nameTerminal='Terminal Paulista 01'
					status='Ativo'
					idTerminal='ID: TRM001'
					nameEmpresa='Exevolt'
					endereco='Av. Paulista, 1000 - São Paulo, SP'
					ultimaConexao='Última conexão: 2024-01-15 14:30'
					tiposDePagamento='PIX'
					tiposDePagamento2='Crédito'
					firmware='Firmware: v2.1.4'
					icon={Pause}
					titleButton='Editar'
				/>
				<GestaoDeTerminais
					nameTerminal='Terminal Shopping Center'
					status='Pausado'
					idTerminal='ID: TRM002'
					nameEmpresa='Exevolt'
					endereco='Shopping Center Norte - São Paulo, SP'
					ultimaConexao='Última conexão: 2024-01-14 18:20'
					tiposDePagamento='PIX'
					tiposDePagamento2='Crédito'
					tiposDePagamento3='Débito'
					firmware='Firmware: v2.1.3'
					icon={Play}
					titleButton='Ativar'
				/>
				<GestaoDeTerminais
					nameTerminal='Terminal Aeroporto'
					status='Offline'
					idTerminal='ID: TRM003'
					nameEmpresa='TechPower Solutions'
					endereco='Aeroporto Internacional - Rio de Janeiro, RJ'
					ultimaConexao='Última conexão: 2024-01-12 09:15'
					tiposDePagamento='PIX'
					firmware='Firmware: v2.1.2'
					icon={Play}
					titleButton='Ativar'
				/>
			</div>
		</div>
	);
}
