import { Building2, Users } from 'lucide-react';
import { Contatos } from '../../../components/clientes/contatos';

export default function NovoPage() {
	return (
		<div className='flex flex-col gap-5 border border-gray-300 rounded-lg p-6'>
			<h1 className='text-2xl font-bold'>Cadastrar Nova Empresa/Cliente</h1>

			<div className='flex items-center gap-3'>
				<Building2 className='w-5 h-5 text-blue-900' />
				<h2 className='text-lg'>Dados da Empresa</h2>
			</div>

			<form className="flex flex-col gap-5">
				<div className='grid grid-cols-2 gap-4'>
					<label className='flex flex-col gap-2'>
						<span className='text-[14px] font-bold'>Nome da Empresa *</span>
						<input
							type='text'
							name='empresa'
							placeholder='EX: Exevolt'
							className='text-[14px] border border-gray-300 py-2 pl-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
							required
						/>
					</label>
					<label className='flex flex-col gap-2'>
						<span className='text-[14px] font-bold'>CNPJ *</span>
						<input
							type='text'
							name='cnpj'
							placeholder='00.000.000/0000-00'
							className='text-[14px] border border-gray-300 py-2 pl-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
							required
						/>
					</label>
				</div>

				<label className='flex flex-col gap-2'>
					<span className='text-[14px] font-bold'>Endereço Completo *</span>
					<textarea
						name='address'
						placeholder='Rua, Número, Complemento, bairro, cidade, estado, CEP'
						rows={3}
						required
						className='text-[14px] p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'></textarea>
				</label>

				<hr className='border-gray-300' />

				<div className='flex items-center gap-3'>
					<Users className='w-5 h-5 text-blue-900' />
					<h2 className='text-lg'>Informações de Contato</h2>
				</div>

				<Contatos
					typeContato='Contato Principal'
					required
				/>
				<Contatos typeContato='Contato Secundário' />

				<div className='flex items-center justify-end gap-4'>
					<button className='text-[14px] font-bold border border-gray-300 px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-900 hover:shadow-lg cursor-pointer'>
						Cancelar
					</button>
					<button className='text-[14px] font-bold bg-blue-900 text-white px-3 py-2 rounded-lg'>
						Cadastrar Cliente
					</button>
				</div>
			</form>
		</div>
	);
}
