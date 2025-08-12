import { Shield, Wifi } from 'lucide-react';

export default function Pareamento() {
	return (
		<div className='flex flex-col gap-4 border border-gray-300 p-6 rounded-xl'>
			<div className='flex items-center gap-3'>
				<Shield
					className='xss:w-10 xss:h-10 text-blue-700'
				/>
				<h1 className='text-2xl font-[600]'>Pareamento de Novo Terminal</h1>
			</div>

			<div className='flex flex-col gap-3 border border-[#bcc8e1] p-4 rounded-xl bg-[#e7ebf4]'>
				<h1 className='text-[16px] font-bold'>Como funciona o pareamento:</h1>

				<ol className='list-decimal text-[14px] text-gray-500 pl-5'>
					<li>Digite o número único do terminal fornecido</li>
					<li>O sistema se comunicará com o terminal</li>
					<li>Será gerado um código de liberação no terminal</li>
					<li>Digite o código para confirmar o pareamento</li>
				</ol>
			</div>

			<form className='flex flex-col gap-3'>
				<label className='flex flex-col gap-3'>
					<span className='text-[14px] font-bold'>Número do Terminal *</span>
					<input
						type='text'
						placeholder='Digite o número único do terminal'
						className='xss:text-[12px] xs:text-[14px] border border-gray-300 py-2 pl-4 rounded-lg'
					/>
				</label>

				<small className='text-gray-500'>
					Número fornecido pelo fabricante/Francisco
				</small>

				<button className='flex items-center justify-center gap-2 bg-[#889dc9] text-white text-[14px] font-bold px-6 py-2 rounded-lg'>
					<Wifi className="xss:w-10 xs:w-7 sm:w-5 xss:h-10 xs:h-7 sm:w-5 text-white font-bold" />
					Iniciar Comunicação com Terminal
				</button>
			</form>
		</div>
	);
}
